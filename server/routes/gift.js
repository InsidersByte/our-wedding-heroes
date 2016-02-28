'use strict'; // eslint-disable-line strict

const Giver = require('../models/giver');
const Gift = require('../models/gift');
const HoneymoonGiftListItem = require('../models/honeymoonGiftListItem');
const co = require('co');

module.exports = (app, express) => {
    const router = new express.Router();

    router.route('/')
        .post(co.wrap(function* createGift(req, res, next) {
            try {
                req.checkBody('giver').notEmpty();
                req.checkBody('giver.forename').notEmpty();
                req.checkBody('giver.surname').notEmpty();
                req.checkBody('giver.email').isEmail();
                req.checkBody('giver.phoneNumber').notEmpty();
                req.checkBody('items').notEmpty();

                const errors = req.validationErrors();

                if (errors) {
                    return res
                        .status(400)
                        .send(errors);
                }

                const giverData = req.body.giver;
                const itemsData = req.body.items;

                let giver = yield Giver.findOne({ email: giverData.email });

                if (!giver) {
                    giver = new Giver(giverData);

                    yield giver.save();
                }

                for (const key in itemsData) {
                    if (!itemsData.hasOwnProperty(key)) {
                        continue;
                    }

                    const item = itemsData[key];
                    const honeymoonGiftListItem = yield HoneymoonGiftListItem.findById(key);

                    const gift = new Gift({
                        quantity: item.quantity,
                        giver: giver._id,
                        honeymoonGiftListItem: honeymoonGiftListItem._id,
                    });

                    gift.save();

                    honeymoonGiftListItem.gifts.push(gift._id);
                    honeymoonGiftListItem.save();

                    giver.gifts.push(gift._id);
                }

                giver.save();

                return res.json(giver);
            } catch (error) {
                next(error);
            }
        }));

    return router;
};

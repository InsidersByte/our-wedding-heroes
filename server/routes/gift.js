'use strict'; // eslint-disable-line strict

const Giver = require('../models/giver');
const GiftSet = require('../models/giftSet');
const Gift = require('../models/gift');
const User = require('../models/user');
const HoneymoonGiftListItem = require('../models/honeymoonGiftListItem');
const co = require('co');
const Mailer = require('../mail');
const mailer = new Mailer();

module.exports = (app, express, jwt) => {
    const router = new express.Router();

    router
        .route('/')

        .get(jwt, co.wrap(function* getGifts(req, res, next) {
            try {
                const gifts = yield Gift
                    .find({})
                    .populate({
                        path: 'giftSet',
                        populate: { path: 'giver', model: 'Giver' },
                    })
                    .populate('honeymoonGiftListItem')
                    .exec();

                // TODO: kind of a hack should just sort
                gifts.reverse();

                return res.json(gifts);
            } catch (error) {
                return next(error);
            }
        }))

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

                const giftSet = yield GiftSet.create({
                    giver: giver._id,
                });

                giver.giftSets.push(giftSet._id);
                yield giver.save();

                for (const key in itemsData) {
                    if (!itemsData.hasOwnProperty(key)) {
                        continue;
                    }

                    const item = itemsData[key];
                    const honeymoonGiftListItem = yield HoneymoonGiftListItem.findById(key);

                    const gift = new Gift({
                        quantity: item.quantity,
                        price: honeymoonGiftListItem.price,
                        honeymoonGiftListItem: honeymoonGiftListItem._id,
                        giftSet: giftSet._id,
                    });

                    gift.save();

                    honeymoonGiftListItem.gifts.push(gift._id);
                    honeymoonGiftListItem.save();

                    giftSet.gifts.push(gift);
                }

                giftSet.save();

                yield giftSet
                    .populate({
                        path: 'gifts',
                        populate: { path: 'honeymoonGiftListItem', model: 'HoneymoonGiftListItem' },
                    })
                    .execPopulate();

                yield mailer
                    .send({
                        to: giver.email,
                        subject: 'Gift Confirmation',
                        text: 'Thank you very much for your gift!',
                    });

                const users = yield User.find({}, 'username');
                const userEmails = users.map(user =>
                    user.username
                );

                yield mailer
                    .send({
                        to: userEmails,
                        subject: 'Woop we just got a gift!',
                        text: `${giver.forename} ${giver.surname} has just confirmed a gift set worth £${giftSet.total}!`,
                    });

                giftSet.emailSent = true;

                giftSet.save();

                return res.json(giftSet);
            } catch (error) {
                return next(error);
            }
        }));

    router
        .route('/:giftId')

        .delete(jwt, co.wrap(function* getGifts(req, res, next) {
            try {
                const gift = yield Gift.findById(req.params.giftId);

                if (!gift) {
                    return res.status(404).send(`Cannot find gift with id '${req.params.giftId}'`);
                }

                yield gift.remove();

                return res.json({ message: 'Successfully deleted' });
            } catch (error) {
                return next(error);
            }
        }));

    return router;
};

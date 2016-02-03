'use strict'; // eslint-disable-line

const HoneymoonGiftListItem = require('../models/honeymoonGiftListItem');
const co = require('co');

module.exports = (app, express) => {
    const router = new express.Router();

    router.route('/')
        .get(co.wrap(function* getHoneymoonGiftItems(req, res, next) {
            try {
                const honeymoonGiftList = yield HoneymoonGiftListItem
                    .find({})
                    .populate('gifts', 'quantity')
                    .lean()
                    .exec();

                for (const honeymoonGiftListItem of honeymoonGiftList) {
                    honeymoonGiftListItem.remaining = honeymoonGiftListItem.requested;

                    if (!honeymoonGiftListItem.gifts) {
                        continue;
                    }

                    let bought = 0;

                    for (const gift of honeymoonGiftListItem.gifts) {
                        bought += gift.quantity;
                    }

                    honeymoonGiftListItem.remaining -= bought;
                }

                return res.json(honeymoonGiftList);
            } catch (error) {
                next(error);
            }
        }))

        .post(co.wrap(function* createHoneymoonGiftItem(req, res, next) {
            try {
                req.checkBody('imageUrl').isURL();
                req.checkBody('name').notEmpty();
                req.checkBody('description').notEmpty();
                req.checkBody('requested').isInt();
                req.checkBody('price').isInt();

                const errors = req.validationErrors();

                if (errors) {
                    return res
                        .status(400)
                        .send(errors);
                }

                const honeymoonGiftItem = new HoneymoonGiftListItem({
                    imageUrl: req.body.imageUrl,
                    name: req.body.name,
                    description: req.body.description,
                    requested: req.body.requested,
                    price: req.body.price,
                });

                yield honeymoonGiftItem.save();

                res
                    .status(201)
                    .json({ message: 'Honeymoon Gift Item Created!' });
            } catch (error) {
                return next(error);
            }
        }));

    router.route('/:id')
        .put(co.wrap(function* updateHoneymoonGiftItem(req, res, next) {
            try {
                req.checkParams('id').equals(req.body._id);
                req.checkBody('imageUrl').isURL();
                req.checkBody('name').notEmpty();
                req.checkBody('description').notEmpty();
                req.checkBody('requested').isInt();
                req.checkBody('price').isInt();

                const errors = req.validationErrors();

                if (errors) {
                    return res
                        .status(400)
                        .send(errors);
                }

                const honeymoonGiftItem = yield HoneymoonGiftListItem.findById(req.params.id);

                honeymoonGiftItem.imageUrl = req.body.imageUrl;
                honeymoonGiftItem.name = req.body.name;
                honeymoonGiftItem.description = req.body.description;
                honeymoonGiftItem.requested = req.body.requested;
                honeymoonGiftItem.price = req.body.price;

                yield honeymoonGiftItem.save();

                return res.json({ message: 'Honeymoon Gift Item Updated!' });
            } catch (error) {
                next(error);
            }
        }))

        .delete(co.wrap(function* deleteHoneymoonGiftItem(req, res, next) {
            try {
                req.checkParams('id').notEmpty();

                const errors = req.validationErrors();

                if (errors) {
                    return res
                        .status(400)
                        .send(errors);
                }

                const honeymoonGiftList = yield HoneymoonGiftListItem.findOne({ _id: req.params.id });

                honeymoonGiftList.remove();

                yield honeymoonGiftList.save();

                return res.json({ message: 'Successfully deleted' });
            } catch (error) {
                return next(error);
            }
        }));

    return router;
};

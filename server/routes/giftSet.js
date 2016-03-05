'use strict'; // eslint-disable-line strict

const GiftSet = require('../models/giftSet');
const co = require('co');

module.exports = (app, express) => {
    const router = new express.Router();

    router
        .route('/')

        .get(co.wrap(function* getGiftSets(req, res, next) {
            try {
                const giftSets = yield GiftSet
                    .find({})
                    .populate('gifts')
                    .populate('giver')
                    .sort('-createdAt');

                return res.json(giftSets);
            } catch (error) {
                return next(error);
            }
        }));

    router
        .route('/:giftSetId')

        .get(co.wrap(function* getGiftSet(req, res, next) {
            try {
                const giftSet = yield GiftSet
                    .findById(req.params.giftSetId)
                    .populate('gifts')
                    .populate('giver');

                if (!giftSet) {
                    return res
                        .status(404)
                        .send();
                }

                return res.json(giftSet);
            } catch (error) {
                return next(error);
            }
        }))

        .delete(co.wrap(function* deleteGiftSet(req, res, next) {
            try {
                const giftSet = yield GiftSet
                    .findById(req.params.giftSetId)
                    .populate('gifts');

                if (!giftSet) {
                    return res
                        .status(404)
                        .send();
                }

                for (let gift of giftSet.gifts) { // eslint-disable-line prefer-const
                    yield gift.remove();
                }

                yield giftSet.remove();

                return res
                    .status(204)
                    .send();
            } catch (error) {
                return next(error);
            }
        }));

    router
        .route('/:giftSetId/paid')

        .put(co.wrap(function* markGiftSetAsPaid(req, res, next) {
            try {
                req.checkParams('id').equals(req.params.id);

                const errors = req.validationErrors();

                if (errors) {
                    return res
                        .status(400)
                        .send(errors);
                }

                const giftSet = yield GiftSet
                    .findById(req.params.giftSetId);

                if (!giftSet) {
                    return res
                        .status(404)
                        .send();
                }

                giftSet.paid = true;

                yield giftSet.save();

                return res.json(giftSet);
            } catch (error) {
                return next(error);
            }
        }));

    return router;
};

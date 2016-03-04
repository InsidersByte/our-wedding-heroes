const GiftSet = require('../models/giftSet');
const co = require('co');

module.exports = (app, express) => {
    const router = new express.Router();

    router
        .route('/')

        .get(co.wrap(function* getGifts(req, res, next) {
            try {
                const giftSets = yield GiftSet
                    .find({})
                    .populate('gifts')
                    .sort('-createdAt');

                return res.json(giftSets);
            } catch (error) {
                return next(error);
            }
        }));

    return router;
};

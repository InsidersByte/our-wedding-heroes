'use strict';

const WeddingProfile = require('../models/weddingProfile');
const HoneymoonGiftListItem = require('../models/honeymoonGiftListItem');
const co = require('co');

module.exports = (app, express) => {
    const router = new express.Router();

    router.route('/')
        .get(co.wrap(function* getWeddingProfile(req, res, next) {
            try {
                const weddingProfile = yield WeddingProfile.findOne({}).lean();
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

                weddingProfile.honeymoonGiftListItems = honeymoonGiftList;

                return res.json(weddingProfile);
            } catch (error) {
                next(error);
            }
        }));

    return router;
};

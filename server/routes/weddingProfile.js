const WeddingProfile = require('../models/weddingProfile');
const HoneymoonGiftListItem = require('../models/honeymoonGiftListItem');
const co = require('co');

module.exports = (app, express) => {
    const router = new express.Router();

    router.route('/')
        .get(co.wrap(function* getWeddingProfile(req, res, next) {
            try {
                const weddingProfile = yield WeddingProfile.findOne({}).lean().exec();
                const honeymoonGiftList = yield HoneymoonGiftListItem.find({}).lean().exec();

                weddingProfile.honeymoonGiftListItems = honeymoonGiftList;

                return res.json(weddingProfile);
            } catch (error) {
                next(error);
            }
        }));

    return router;
};

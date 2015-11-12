const WeddingProfile = require('../models/weddingProfile');
const co = require('co');

module.exports = (app, express) => {
    const router = new express.Router();

    router.route('/')
        .get(co.wrap(function* getWeddingProfile(req, res, next) {
            try {
                const weddingProfile = yield WeddingProfile.findOne({});

                return res.json(weddingProfile.requestsForTheDay);
            } catch (error) {
                next(error);
            }
        }));

    return router;
};

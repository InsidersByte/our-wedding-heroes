const WeddingProfile = require('../models/weddingProfile');
const co = require('co');

module.exports = (app, express) => {
    const router = new express.Router();

    router
        .route('/')

        .get(co.wrap(function* getWeddingPlaylist(req, res, next) {
            try {
                const weddingProfile = yield WeddingProfile.findOne({});

                return res.json(weddingProfile.weddingPlaylist || '');
            } catch (error) {
                return next(error);
            }
        }))

        .put(co.wrap(function* updateWeddingPlaylist(req, res, next) {
            try {
                req.checkBody('weddingPlaylist').notEmpty();

                const errors = req.validationErrors();

                if (errors) {
                    return res
                        .status(400)
                        .send(errors);
                }

                const weddingProfile = yield WeddingProfile.findOne({});

                weddingProfile.weddingPlaylist = req.body.weddingPlaylist;

                yield weddingProfile.save();

                return res.json(weddingProfile.weddingPlaylist);
            } catch (error) {
                return next(error);
            }
        }));

    return router;
};

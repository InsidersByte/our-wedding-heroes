const WeddingProfile = require('../models/weddingProfile');
const co = require('co');

module.exports = (app, express) => {
    const router = new express.Router();

    router
        .route('/')

        .get(co.wrap(function* getSongSuggestions(req, res, next) {
            try {
                const weddingProfile = yield WeddingProfile.findOne({});

                return res.json(weddingProfile.songSuggestions || '');
            } catch (error) {
                return next(error);
            }
        }))

        .put(co.wrap(function* updateSongSuggestions(req, res, next) {
            try {
                req.checkBody('songSuggestions').notEmpty();

                const errors = req.validationErrors();

                if (errors) {
                    return res
                        .status(400)
                        .send(errors);
                }

                const weddingProfile = yield WeddingProfile.findOne({});

                weddingProfile.songSuggestions = req.body.songSuggestions;

                yield weddingProfile.save();

                return res.json(weddingProfile.songSuggestions);
            } catch (error) {
                return next(error);
            }
        }));

    return router;
};

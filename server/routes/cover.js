const WeddingProfile = require('../models/weddingProfile');
const co = require('co');

module.exports = (app, express) => {
    const router = new express.Router();

    router.route('/')
        .get(co.wrap(function* getCover(req, res, next) {
            try {
                const weddingProfile = yield WeddingProfile.findOne({});

                return res.json(weddingProfile.cover);
            } catch (error) {
                next(error);
            }
        }))

        .put(co.wrap(function* updateCover(req, res, next) {
            try {
                req.checkBody('title').notEmpty();
                req.checkBody('imageUrl').isURL();
                req.checkBody('weddingDate').notEmpty();

                const errors = req.validationErrors();

                if (errors) {
                    return res
                        .status(400)
                        .send(errors);
                }

                const weddingProfile = yield WeddingProfile.findOne({});

                weddingProfile.cover.title = req.body.title;
                weddingProfile.cover.imageUrl = req.body.imageUrl;
                weddingProfile.cover.weddingDate = req.body.weddingDate;

                yield weddingProfile.save();

                return res.json(weddingProfile.cover);
            } catch (error) {
                next(error);
            }
        }));

    return router;
};

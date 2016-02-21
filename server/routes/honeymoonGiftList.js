const WeddingProfile = require('../models/weddingProfile');
const co = require('co');

module.exports = (app, express) => {
    const router = new express.Router();

    router
        .route('/')

        .get(co.wrap(function* getHoneymoonGiftList(req, res, next) {
            try {
                const weddingProfile = yield WeddingProfile.findOne({});

                return res.json(weddingProfile.honeymoonGiftList);
            } catch (error) {
                return next(error);
            }
        }))

        .put(co.wrap(function* updateHoneymoonGiftList(req, res, next) {
            try {
                req.checkBody('content').notEmpty();
                req.sanitizeBody('showOfflinePaymentMessage').toBoolean();
                req.sanitizeBody('showDisclaimerMessage').toBoolean();

                const errors = req.validationErrors();

                if (errors) {
                    return res
                        .status(400)
                        .send(errors);
                }

                const weddingProfile = yield WeddingProfile.findOne({});

                weddingProfile.honeymoonGiftList.content = req.body.content;
                weddingProfile.honeymoonGiftList.showOfflinePaymentMessage = req.body.showOfflinePaymentMessage;
                weddingProfile.honeymoonGiftList.offlinePaymentMessage = req.body.offlinePaymentMessage;
                weddingProfile.honeymoonGiftList.showDisclaimerMessage = req.body.showDisclaimerMessage;
                weddingProfile.honeymoonGiftList.disclaimerMessage = req.body.disclaimerMessage;

                yield weddingProfile.save();

                return res.json(weddingProfile.cover);
            } catch (error) {
                return next(error);
            }
        }));

    return router;
};

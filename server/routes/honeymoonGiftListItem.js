const WeddingProfile = require('../models/weddingProfile');
const co = require('co');

module.exports = (app, express) => {
    const router = new express.Router();

    router.route('/')
        .get(co.wrap(function* getHoneymoonGiftItems(req, res, next) {
            try {
                const weddingProfile = yield WeddingProfile.findOne({});

                return res.json(weddingProfile.honeymoonGiftListItems || []);
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

                const honeymoonGiftItem = {
                    imageUrl: req.body.imageUrl,
                    name: req.body.name,
                    description: req.body.description,
                    requested: req.body.requested,
                    price: req.body.price,
                };

                const weddingProfile = yield WeddingProfile.findOne({});

                weddingProfile.honeymoonGiftListItems.push(honeymoonGiftItem);

                yield weddingProfile.save();

                res
                    .status(201)
                    .json({message: 'Honeymoon Gift Item Created!'});
            } catch (error) {
                return next(error);
            }
        }));

    router.route('/:honeymoonGiftListItemId')
        .delete(co.wrap(function* deleteUser(req, res) {
            const weddingProfile = yield WeddingProfile.findOne({});

            weddingProfile.honeymoonGiftListItems.id(req.params.honeymoonGiftListItemId).remove();

            yield weddingProfile.save();

            return res.json({message: 'Successfully deleted'});
        }));

    return router;
};

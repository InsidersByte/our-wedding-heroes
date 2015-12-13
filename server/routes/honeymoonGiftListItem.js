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

    router.route('/:id')
        .put(co.wrap(function* updateHoneymoonGiftItem(req, res, next) {
            try {
                req.checkParams('id').equals(req.body._id);
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

                const weddingProfile = yield WeddingProfile.findOne({});

                const honeymoonGiftItem = weddingProfile.honeymoonGiftListItems.id(req.params.id);

                if (!honeymoonGiftItem) {
                    return res
                        .status(400)
                        .send({message: 'Cannot find honeymoon gift item'});
                }

                honeymoonGiftItem.imageUrl = req.body.imageUrl;
                honeymoonGiftItem.name = req.body.name;
                honeymoonGiftItem.description = req.body.description;
                honeymoonGiftItem.requested = req.body.requested;
                honeymoonGiftItem.price = req.body.price;

                yield weddingProfile.save();

                return res.json({message: 'Honeymoon Gift Item Updated!'});
            } catch (error) {
                next(error);
            }
        }))

        .delete(co.wrap(function* deleteUser(req, res, next) {
            try {
                req.checkParams('id').notEmpty();

                const errors = req.validationErrors();

                if (errors) {
                    return res
                        .status(400)
                        .send(errors);
                }

                const weddingProfile = yield WeddingProfile.findOne({});

                weddingProfile.honeymoonGiftListItems.id(req.params.id).remove();

                yield weddingProfile.save();

                return res.json({message: 'Successfully deleted'});
            } catch (error) {
                return next(error);
            }
        }));

    return router;
};

const HoneymoonGiftListItem = require('../models/honeymoonGiftListItem');
const co = require('co');

module.exports = (app, express) => {
    const router = new express.Router();

    router.route('/')
        .post(co.wrap(function* createHoneymoonGiftItem(req, res, next) {
            try {
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

                const honeymoonGiftItem = new HoneymoonGiftListItem();

                honeymoonGiftItem.name = req.body.name;
                honeymoonGiftItem.description = req.body.description;
                honeymoonGiftItem.requested = req.body.requested;
                honeymoonGiftItem.price = req.body.price;

                yield honeymoonGiftItem.save();

                res
                    .status(201)
                    .json({message: 'Honeymoon Gift Item Created!'});
            } catch (error) {
                return next(error);
            }
        }))

        .get(co.wrap(function* getHoneymoonGiftItems(req, res) {
            const honeymoonGiftItems = yield HoneymoonGiftListItem.find({});

            return res.json(honeymoonGiftItems);
        }));

    router.route('/:honeymoonGiftListItemId')
        .get(co.wrap(function* findHoneymoonGiftItem(req, res) {
            const honeymoonGiftItem = yield HoneymoonGiftListItem.findById(req.params.honeymoonGiftListItemId);

            return res.json(honeymoonGiftItem);
        }))

        .delete(co.wrap(function* deleteUser(req, res) {
            yield HoneymoonGiftListItem.remove({id: req.params.honeymoonGiftListItemId});

            return res.json({message: 'Successfully deleted'});
        }));

    return router;
};

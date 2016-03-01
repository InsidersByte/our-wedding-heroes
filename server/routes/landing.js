'use strict'; // eslint-disable-line strict

const GiftSet = require('../models/giftSet');
const User = require('../models/user');
const co = require('co');

module.exports = (app, express) => {
    const router = new express.Router();

    router
        .route('/')

        .get(co.wrap(function* getLanding(req, res, next) {
            try {
                const user = yield User.findOne({ username: req.user.username });

                const giftSetCount = yield GiftSet.count({ createdAt: { $gt: user.lastLogin } });

                return res.json({ giftSetCount });
            } catch (error) {
                return next(error);
            }
        }));

    return router;
};

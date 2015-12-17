const jwt = require('jsonwebtoken');
const User = require('../models/user');
const co = require('co');

module.exports = (app, express, config) => {
    const router = new express.Router();

    router.post('/', co.wrap(function* authenticate(req, res, next) {
        try {
            const user = yield User
                .findOne({
                    email: req.body.email,
                })
                .select('name username password salt')
                .exec();

            if (!user) {
                return res
                    .status(400)
                    .json({
                        success: false,
                        message: 'Authentication failed.',
                    });
            }

            const validPassword = user.comparePassword(req.body.password);

            if (!validPassword) {
                return res
                    .status(400)
                    .json({
                        success: false,
                        message: 'Authentication failed.',
                    });
            }

            const token = jwt.sign({
                name: user.name,
                username: user.username,
            }, config.secret, {
                expiresIn: 86400, // expires in 24 hours
            });

            return res.json({
                success: true,
                message: 'Enjoy your token!',
                token,
            });
        } catch (error) {
            next(error);
        }
    }));

    return router;
};

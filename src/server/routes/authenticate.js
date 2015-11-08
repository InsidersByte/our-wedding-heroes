'use strict'; //eslint-disable-line

const jwt = require('jsonwebtoken');
const User = require('../models/user');
const co = require('co');

module.exports = (app, express, config) => {
    const router = new express.Router();

    router.post('/', co.wrap(function* authenticate(req, res) {
        const user = yield User
            .findOne({
                email: req.body.email,
            })
            .select('name username password salt')
            .exec();

        if (!user) {
            return res.json({
                success: false,
                message: 'Authentication failed. User not found.',
            });
        }

        const validPassword = user.comparePassword(req.body.password);

        if (!validPassword) {
            return res.json({
                success: false,
                message: 'Authentication failed. Wrong password.',
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
            token: token,
        });
    }));

    return router;
};
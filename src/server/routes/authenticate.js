'use strict'; //eslint-disable-line

const jwt = require('jsonwebtoken');
const User = require('../models/user');
const co = require('co');

module.exports = (app, express, config) => {
    const router = express.Router();

    router.post('/', co.wrap(function*(req, res) {
        // find the user
        const user = yield User
            .findOne({
                username: req.body.username,
            })
            .select('name username password salt')
            .exec();

        // no user with that username was found
        if (!user) {
            return res.json({
                success: false,
                message: 'Authentication failed. User not found.',
            });
        }

        // check if password matches
        const validPassword = user.comparePassword(req.body.password);

        if (!validPassword) {
            return res.json({
                success: false,
                message: 'Authentication failed. Wrong password.',
            });
        }

        // if user is found and password is right
        // create a token
        const token = jwt.sign({
            name: user.name,
            username: user.username,
        }, config.secret, {
            expiresIn: 86400, // expires in 24 hours
        });

        // return the information including token as JSON
        return res.json({
            success: true,
            message: 'Enjoy your token!',
            token: token,
        });
    }));

    return router;
};

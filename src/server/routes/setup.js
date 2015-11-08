'use strict'; //eslint-disable-line

const User = require('../models/user');
const co = require('co');
const util = require('util');

module.exports = (app, express) => {
    const router = new express.Router();

    router.route('/')
        .post(co.wrap(function* createUser(req, res, next) {
            try {
                req.checkBody('name').notEmpty();
                req.checkBody('email').notEmpty().isEmail();
                req.checkBody('password').notEmpty();

                const errors = req.validationErrors();

                if (errors) {
                    return res
                        .status(400)
                        .send('There have been validation errors: ' + util.inspect(errors));
                }

                const user = new User();

                user.name = req.body.name;
                user.email = req.body.email;
                user.password = req.body.password;

                try {
                    yield user.save();
                } catch (err) {
                    if (err.code === 11000) {
                        return res.json({success: false, message: 'A user with that username already exists. '});
                    }

                    return res.send(err);
                }

                return res.json({message: 'User created!'});
            } catch (error) {
                next(error);
            }
        }));

    return router;
};

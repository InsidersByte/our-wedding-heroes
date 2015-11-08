'use strict'; //eslint-disable-line

const User = require('../models/user');
const co = require('co');

module.exports = (app, express) => {
    const router = new express.Router();

    router.route('/')
        .post(co.wrap(function* createUser(req, res) {
            const user = new User();

            user.name = req.body.name;
            user.username = req.body.username;
            user.password = req.body.password;

            try {
                yield user.save();
            } catch (err) {
                if (err.code === 11000) {
                    return res.json({success: false, message: 'A user with that username already exists. '});
                }

                return res.send(err);
            }

            res.json({message: 'User created!'});
        }))

        .get(co.wrap(function* getUsers(req, res) {
            const users = yield User.find({});

            return res.json(users);
        }));

    router.route('/:userId')
        .get(co.wrap(function* findUser(req, res) {
            const user = yield User.findById(req.params.userId);

            return res.json(user);
        }))

        .put(co.wrap(function* updateUser(req, res) {
            const user = yield User.findById(req.params.userId);

            if (req.body.name) {
                user.name = req.body.name;
            }

            if (req.body.username) {
                user.username = req.body.username;
            }

            if (req.body.password) {
                user.password = req.body.password;
            }

            yield user.save();

            return res.json({message: 'User updated!'});
        }))

        .delete(co.wrap(function* deleteUser(req, res) {
            yield User.remove({_id: req.params.userId});

            return res.json({message: 'Successfully deleted'});
        }));

    return router;
};

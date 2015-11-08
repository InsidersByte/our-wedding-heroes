'use strict'; //eslint-disable-line

const User = require('../models/user');
const co = require('co');

module.exports = function(app, express) {
    let router = express.Router();

    // on routes that end in /users
    // ----------------------------------------------------
    router.route('/')

        // create a user (accessed at POST http://localhost:8080/users)
        .post(co.wrap(function*(req, res) {
            let user = new User();		// create a new instance of the User model

            user.name = req.body.name;  // set the users name (comes from the request)
            user.username = req.body.username;  // set the users username (comes from the request)
            user.password = req.body.password;  // set the users password (comes from the request)

            try {
                yield user.save();
            }
            catch (err) {
                // duplicate entry
                if (err.code === 11000) {
                    return res.json({success: false, message: 'A user with that username already exists. '});
                }

                return res.send(err);
            }

            // return a message
            res.json({message: 'User created!'});
        }))

        // get all the users (accessed at GET http://localhost:8080/api/users)
        .get(co.wrap(function*(req, res) {
            let users = yield User.find({});

            // return the users
            return res.json(users);
        }));

    // on routes that end in /users/:user_id
    // ----------------------------------------------------
    router.route('/:userId')

        // get the user with that id
        .get(co.wrap(function*(req, res) {
            let user = yield User.findById(req.params.userId);

            // return that user
            return res.json(user);
        }))

        // update the user with this id
        .put(co.wrap(function*(req, res) {
            let user = yield User.findById(req.params.userId);

            // set the new user information if it exists in the request
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

            // return a message
            return res.json({message: 'User updated!'});
        }))

        // delete the user with this id
        .delete(co.wrap(function*(req, res) {
            yield User.remove({_id: req.params.userId});

            return res.json({message: 'Successfully deleted'});
        }));

    return router;
};

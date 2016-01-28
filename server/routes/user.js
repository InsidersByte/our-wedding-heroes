const User = require('../models/user');
const co = require('co');

module.exports = (app, express) => {
    const router = new express.Router();

    router.route('/')
        .get(co.wrap(function* getUsers(req, res) {
            const users = yield User.find({});

            return res.json(users);
        }))

        .post(co.wrap(function* createUser(req, res, next) {
            try {
                req.checkBody('name').notEmpty();
                req.checkBody('username').isEmail();
                req.checkBody('password').notEmpty();

                const errors = req.validationErrors();

                if (errors) {
                    return res
                        .status(400)
                        .send(errors);
                }

                const user = new User();

                user.name = req.body.name;
                user.username = req.body.username;
                user.password = req.body.password;

                yield user.save();

                res.json({ message: 'User created!' });
            } catch (error) {
                if (error.code === 11000) {
                    return res
                        .status(400)
                        .json({ success: false, message: 'A user with that username already exists.' });
                }

                return next(error);
            }
        }));


    router.route('/:userId')
        .put((co.wrap(function* updateUser(req, res, next) {
            try {
                req.checkParams('id').equals(req.params.id);
                req.checkBody('name').notEmpty();
                req.checkBody('username').isEmail();
                req.checkBody('password').notEmpty();

                const errors = req.validationErrors();

                if (errors) {
                    return res
                        .status(400)
                        .send(errors);
                }

                const user = yield User.findById(req.body._id);

                user.name = req.body.name;
                user.username = req.body.username;
                user.password = req.body.password;

                yield user.save();

                res.json({ message: 'User updated!' });
            } catch (error) {
                if (error.code === 11000) {
                    return res
                        .status(400)
                        .json({ success: false, message: 'A user with that username already exists.' });
                }

                return next(error);
            }
        })))

        .delete(co.wrap(function* deleteUser(req, res) {
            yield User.remove({ _id: req.params.userId });

            return res.json({ message: 'Successfully deleted' });
        }));

    return router;
};

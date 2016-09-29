const User = require('../../models/user');
const wrap = require('../../utilities/wrap');
const { STATUS, MINIMUM_PASSWORD_LENGTH, MINIMUM_PASSWORD_MESSAGE } = require('../../constants/user');

function* isSetup() {
    const count = yield User.count({ status: { $in: [STATUS.ACTIVE] } });

    return {
        status: !!count,
    };
}

module.exports = (app, express) => {
    const router = new express.Router();

    router.route('/')
        .get(wrap(function* getSetup(req, res) {
            const setup = yield isSetup();

            return res.json(setup);
        }))

        .post(wrap(function* createUser(req, res) {
            const setup = yield isSetup();

            if (setup.status) {
                return res
                    .status(400)
                    .send({ message: 'Setup has already been completed.' });
            }

            req.checkBody('name').notEmpty();
            req.checkBody('email').isEmail();
            req.checkBody('password', MINIMUM_PASSWORD_MESSAGE).isLength({ min: MINIMUM_PASSWORD_LENGTH });
            req.checkBody('confirmPassword').equals(req.body.confirmPassword);

            const errors = req.validationErrors();

            if (errors) {
                return res
                    .status(400)
                    .send(errors);
            }

            const user = new User();

            // mongoose UserSchema calls .toLowerCase() on user.email
            user.name = req.body.name;
            user.email = req.body.email;
            user.password = req.body.password;
            user.status = STATUS.ACTIVE;

            try {
                yield user.save();
            } catch (err) {
                if (err.code === 11000) {
                    return res
                        .status(400)
                        .json({ success: false, message: 'A user with that email already exists.' });
                }

                return res
                    .status(400)
                    .send(err);
            }

            return res.json({ message: 'User created!' });
        }));

    return router;
};

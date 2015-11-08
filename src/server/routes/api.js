'use strict'; //eslint-disable-line

const expressJwt = require('express-jwt');

module.exports = (app, express, config) => {
    const router = new express.Router();

    router.use('/setup', require('./setup')(app, express, config));

    router.use('/authenticate', require('./authenticate')(app, express, config));

    router.use(expressJwt({
        secret: config.secret,
    }));

    // test route to make sure everything is working
    // accessed at GET http://localhost:8080/api
    router.get('/', (req, res) => {
        res.json({ message: 'hooray! welcome to our api!' });
    });

    router.use('/users', require('./user')(app, express));

    // api endpoint to get user information
    router.get('/me', (req, res) => {
        res.send(req.user);
    });

    return router;
};

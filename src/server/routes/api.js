'use strict'; //eslint-disable-line

const expressJwt = require('express-jwt');

module.exports = (app, express, config) => {
    const router = new express.Router();

    router.use('/setup', require('./setup')(app, express, config));

    router.use('/authenticate', require('./authenticate')(app, express, config));

    router.use(expressJwt({
        secret: config.secret,
    }));

    router.use('/users', require('./user')(app, express));

    return router;
};

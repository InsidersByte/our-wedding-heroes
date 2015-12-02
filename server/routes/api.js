const jwt = require('express-jwt');

module.exports = (app, express, config) => {
    const router = new express.Router();

    router.use('/setup', require('./setup')(app, express, config));
    router.use('/authenticate', require('./authenticate')(app, express, config));
    router.use('/weddingProfile', require('./weddingProfile')(app, express));

    router.use(jwt({
        secret: config.secret,
    }));

    router.use('/user', require('./user')(app, express));
    router.use('/cover', require('./cover')(app, express));
    router.use('/aboutUs', require('./aboutUs')(app, express));
    router.use('/aboutOurDay', require('./aboutOurDay')(app, express));
    router.use('/aboutOurHoneymoon', require('./aboutOurHoneymoon')(app, express));
    router.use('/requestForTheDay', require('./requestForTheDay')(app, express));

    router.all('/*', (req, res) => {
        return res
            .sendStatus(404);
    });

    return router;
};

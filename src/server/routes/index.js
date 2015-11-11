const environmentConstants = require('../constants/environment');

module.exports = (app, express, config, environment) => {
    const apiRoutes = require('./api')(app, express, config);

    app.use('/api', apiRoutes);

    if (environment === environmentConstants.production) {
        app.get('*', (req, res) => {
            res.sendFile('dist/index.html', { root: './'});
        });
    } else {
        app.get('*', (req, res) => {
            res.sendFile('src/public/index.html', { root: './'});
        });
    }
};

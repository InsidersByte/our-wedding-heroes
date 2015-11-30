const environmentConstants = require('../constants/environment');
const path = require('path');

module.exports = (app, express, config, environment) => {
    const apiRoutes = require('./api')(app, express, config);

    app.use('/api', apiRoutes);

    if (environment === environmentConstants.production) {
        app.get('*', (req, res) => {
            res.sendFile(path.join(__dirname, '../../', 'dist/index.html'));
        });
    } else {
        const middleware = app.get('middleware');

        app.get('*', function response(req, res) {
            res.write(middleware.fileSystem.readFileSync(path.join(__dirname, '../../', 'build/index.html')));
            res.end();
        });
    }
};

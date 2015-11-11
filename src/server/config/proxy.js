const httpProxy = require('http-proxy');
const environmentConstants = require('../constants/environment');

module.exports = (app, environment) => {
    if (environment === environmentConstants.production) {
        return;
    }

    const proxy = httpProxy.createProxyServer();

    const bundle = require('./../bundle.js');

    bundle();

    app.all('/build/*', (req, res) => {
        proxy.web(req, res, {
            target: 'http://localhost:8080',
        });
    });

    proxy.on('error', () => {
        console.log('Could not connect to proxy, please try again...'); // eslint-disable-line no-console
    });
};

const httpProxy = require('http-proxy');

module.exports = (app, environment) => {
    if (environment === 'production') {
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

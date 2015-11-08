'use strict'; // eslint-disable-line

const httpProxy = require('http-proxy');

module.exports = (app, environment) => {
    if (environment === 'production') {
        return;
    }

    const proxy = httpProxy.createProxyServer();

    // We require the bundler inside the if block because
    // it is only needed in a development environment. Later
    // you will see why this is a good idea
    const bundle = require('./../bundle.js');

    bundle();

    // Any requests to localhost:3000/build is proxied
    // to webpack-dev-server
    app.all('/build/*', (req, res) => {
        proxy.web(req, res, {
            target: 'http://localhost:8080',
        });
    });

    // It is important to catch any errors from the proxy or the
    // server will crash. An example of this is connecting to the
    // server when webpack is bundling
    proxy.on('error', () => {
        console.log('Could not connect to proxy, please try again...'); // eslint-disable-line no-console
    });
};

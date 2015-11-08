const express = require('express');
const httpProxy = require('http-proxy');

const proxy = httpProxy.createProxyServer();
const app = express();

const isProduction = process.env.NODE_ENV === 'production';
const port = isProduction ? process.env.PORT : 5000;

// We only want to run the workflow when not in production
if (!isProduction) {
    // We require the bundler inside the if block because
    // it is only needed in a development environment. Later
    // you will see why this is a good idea
    const bundle = require('./bundle.js');

    bundle();

    // Any requests to localhost:3000/build is proxied
    // to webpack-dev-server
    app.all('/build/*', function proxyBuild(req, res) {
        proxy.web(req, res, {
            target: 'http://localhost:8080',
        });
    });
}

// It is important to catch any errors from the proxy or the
// server will crash. An example of this is connecting to the
// server when webpack is bundling
proxy.on('error', function logProxyError() {
    console.log('Could not connect to proxy, please try again...'); // eslint-disable-line no-console
});

app.listen(port, function logStart() {
    console.log('Server running on port ' + port); // eslint-disable-line no-console
});

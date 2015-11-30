const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const errorhandler = require('errorhandler');
const expressValidator = require('express-validator');
const environmentConstants = require('../constants/environment');

module.exports = (app, environment) => {
    if (environment !== environmentConstants.production) {
        app.use(logger('dev'));
        app.use(errorhandler());
    }

    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());
    app.use(expressValidator());

    if (environment === environmentConstants.production) {
        app.use(express.static('./dist'));
    } else {
        const webpack = require('webpack');
        const webpackMiddleware = require('webpack-dev-middleware');
        const webpackHotMiddleware = require('webpack-hot-middleware');

        const config = require('../../webpack.config.js');

        const compiler = webpack(config);
        const middleware = webpackMiddleware(compiler, {
            publicPath: config.output.publicPath,
            contentBase: 'src',
            stats: {
                colors: true,
                hash: false,
                timings: true,
                chunks: false,
                chunkModules: false,
                modules: false,
            },
        });

        app.set('middleware', middleware);
        app.use(middleware);
        app.use(webpackHotMiddleware(compiler));
    }
};

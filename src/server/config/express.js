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
        app.use(express.static('./src/public'));
    }
};

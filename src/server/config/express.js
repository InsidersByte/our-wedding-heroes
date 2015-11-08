'use strict'; // eslint-disable-line

const logger = require('morgan');
const bodyParser = require('body-parser');
const errorhandler = require('errorhandler');
const expressValidator = require('express-validator');

module.exports = (app, environment) => {
    if (environment === 'development') {
        app.use(logger('dev'));
        app.use(errorhandler());
    }

    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());
    app.use(expressValidator());
};

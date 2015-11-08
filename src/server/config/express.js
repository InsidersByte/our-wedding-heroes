'use strict'; // eslint-disable-line

const logger = require('morgan');
const bodyParser = require('body-parser');
const errorhandler = require('errorhandler');

module.exports = (app, environment) => {
    if (environment === 'development') {
        app.use(logger('dev'));
        app.use(errorhandler());
    }

    app.use(bodyParser.json());
};

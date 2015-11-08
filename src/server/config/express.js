'use strict'; // eslint-disable-line

const logger = require('morgan');
const bodyParser = require('body-parser');

module.exports = (app) => {
    app.use(logger('dev'));
    app.use(bodyParser.json());
};

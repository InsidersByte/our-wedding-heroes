const express = require('express');

const environment = process.env.NODE_ENV || 'development';

const app = express();

const config = require('./config/config');

require('./config/express')(app);

require('./config/proxy')(app, environment);

app.listen(config.port, function logStart() {
    console.log('Server running on port ' + config.port); // eslint-disable-line no-console
});

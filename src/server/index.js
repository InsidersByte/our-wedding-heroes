const express = require('express');

const environment = process.env.NODE_ENV || 'development';

const app = express();

const config = require('./config/config');

require('./config/express')(app, environment);

require('./config/proxy')(app, environment);

require('./config/mongoose')(config);

require('./routes')(app, express, config);

app.listen(config.port, () => {
    console.log('Server running on port ' + config.port); // eslint-disable-line no-console
});

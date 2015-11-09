const express = require('express');
const mongoose = require('mongoose');

const environment = process.env.NODE_ENV || 'development';

const app = express();

const config = require('./config/config');

mongoose.connect(config.database);

require('./config/express')(app, environment);

require('./config/proxy')(app, environment);

const apiRoutes = require('./routes/api')(app, express, config);
app.use('/api', apiRoutes);

app.get('/*', express.static('./src/public/index.html'));

app.listen(config.port, () => {
    console.log('Server running on port ' + config.port); // eslint-disable-line no-console
});

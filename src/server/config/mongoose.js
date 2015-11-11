const mongoose = require('mongoose');
const databaseInitialiser = require('../utilities/databaseInitialiser');

module.exports = (config) => {
    mongoose.connect(config.database);

    const db = mongoose.connection;

    db.on('error', console.error.bind(console, 'connection error...')); // eslint-disable-line no-console

    db.once('open', () => {
        console.log('db opened'); // eslint-disable-line no-console
    });

    databaseInitialiser()
        .catch((err) => {
            console.log(err); // eslint-disable-line no-console
        });
};

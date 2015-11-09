const mongoose = require('mongoose');

module.exports = (config) => {
    mongoose.connect(config.database);

    const db = mongoose.connection;

    db.on('error', console.error.bind(console, 'connection error...')); // eslint-disable-line

    db.once('open', () => {
        console.log('db opened'); // eslint-disable-line
    });
};

'use strict'; // eslint-disable-line

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const WeddingProfileSchema = new Schema({
    cover: {
        title: { type: String, required: true },
    },
});

module.exports = mongoose.model('WeddingProfile', WeddingProfileSchema);

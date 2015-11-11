const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const WeddingProfileSchema = new Schema({
    cover: {
        title: { type: String, required: true },
    },
    aboutUs: { type: String, required: true },
    aboutOurDay: { type: String, required: true },
});

module.exports = mongoose.model('WeddingProfile', WeddingProfileSchema);

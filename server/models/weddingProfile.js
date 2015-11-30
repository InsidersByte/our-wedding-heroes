const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const requestForDay = new Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
});

const WeddingProfileSchema = new Schema({
    cover: {
        title: { type: String, required: true },
    },
    aboutUs: { type: String, required: true },
    aboutOurDay: { type: String, required: true },
    aboutOurHoneymoon: { type: String, required: true },
    requestsForTheDay: requestForDay,
});

module.exports = mongoose.model('WeddingProfile', WeddingProfileSchema);

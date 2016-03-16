const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const WeddingProfileSchema = new Schema({
    cover: {
        title: { type: String, required: true },
        imageUrl: { type: String, required: true },
        weddingDate: { type: Date, required: true },
    },
    aboutUs: { type: String, required: true },
    aboutOurDay: { type: String, required: true },
    localFlavour: { type: String, required: true },
    weddingPlaylist: { type: String, required: true },
    aboutOurHoneymoon: { type: String, required: true },
    honeymoonGiftList: {
        content: { type: String, required: true },
        showOfflinePaymentMessage: { type: Boolean, required: true },
        offlinePaymentMessage: { type: String },
        showDisclaimerMessage: { type: Boolean, required: true },
        disclaimerMessage: { type: String },
    },
    rsvp: { type: String, required: true },
});

module.exports = mongoose.model('WeddingProfile', WeddingProfileSchema);

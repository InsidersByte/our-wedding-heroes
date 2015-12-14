const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const requestForDaySchema = new Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
});

const honeymoonGiftListItemSchema = new Schema(
    {
        imageUrl: { type: String, required: true },
        name: { type: String, required: true },
        description: { type: String, required: true },
        requested: { type: Number, min: 1, required: true },
        price: { type: Number, required: true, min: 0 },
    },
    {
        toObject: {
            virtuals: true,
        },
        toJSON: {
            virtuals: true,
        },
    });

honeymoonGiftListItemSchema
    .virtual('remaining')
    .get(function getRemaining() {
        return this.requested;
    });

const WeddingProfileSchema = new Schema({
    cover: {
        title: { type: String, required: true },
        imageUrl: { type: String, required: true },
    },
    aboutUs: { type: String, required: true },
    aboutOurDay: { type: String, required: true },
    aboutOurHoneymoon: { type: String, required: true },
    requestsForTheDay: [requestForDaySchema],
    honeymoonGiftListItems: [honeymoonGiftListItemSchema],
});

module.exports = mongoose.model('WeddingProfile', WeddingProfileSchema);

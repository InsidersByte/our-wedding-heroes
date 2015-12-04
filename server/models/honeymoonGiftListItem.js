const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const HoneymoonGiftListItemSchema = new Schema(
    {
        name: { type: String, required: true },
        description: String,
        requested: {type: Number, min: 1},
        price: Number,
    },
    {
        toObject: {
            virtuals: true,
        },
        toJSON: {
            virtuals: true,
        },
    });

HoneymoonGiftListItemSchema
    .virtual('remaining')
    .get(function getRemaining() {
        return this.requested;
    });

module.exports = mongoose.model('HoneymoonGiftListItem', HoneymoonGiftListItemSchema);

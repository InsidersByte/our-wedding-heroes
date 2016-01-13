const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const HoneymoonGiftListItemSchema = new Schema(
    {
        imageUrl: { type: String, required: true },
        name: { type: String, required: true },
        description: { type: String, required: true },
        requested: { type: Number, min: 1, required: true },
        price: { type: Number, required: true, min: 0 },
        gifts: [{ type: Schema.Types.ObjectId, ref: 'Gift' }],
    },
    {
        toObject: { virtuals: true },
        toJSON: { virtuals: true },
    });

HoneymoonGiftListItemSchema
    .virtual('remaining')
    .get(function getRemaining() {
        return this.requested;
    });

module.exports = mongoose.model('HoneymoonGiftListItem', HoneymoonGiftListItemSchema);

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GiftSchema = new Schema(
    {
        quantity: { type: Number, required: true },
        honeymoonGiftListItem: { type: Schema.Types.ObjectId, ref: 'HoneymoonGiftListItem' },
        gifts: { type: Schema.Types.ObjectId, ref: 'GiftSet' },
    });

module.exports = mongoose.model('Gift', GiftSchema);

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GiftSchema = new Schema(
    {
        paid: { type: Boolean, default: false },
        quantity: { type: Number, required: true },
        honeymoonGiftListItem: { type: Schema.Types.ObjectId, ref: 'HoneymoonGiftListItem' },
        giver: { type: Schema.Types.ObjectId, ref: 'Giver' },
    },
    {
        timestamps: true,
    });

module.exports = mongoose.model('Gift', GiftSchema);

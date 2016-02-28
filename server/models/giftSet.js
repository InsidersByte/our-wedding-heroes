const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GiftSetSchema = new Schema(
    {
        paid: { type: Boolean, default: false },
        emailSent: { type: Boolean, default: false },
        gifts: [{ type: Schema.Types.ObjectId, ref: 'Gift' }],
        giver: { type: Schema.Types.ObjectId, ref: 'Giver' },
    },
    {
        timestamps: true,
    });

module.exports = mongoose.model('GiftSet', GiftSetSchema);

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GiftSchema = new Schema(
    {
        quantity: { type: Number, required: true },
        honeymoonGiftListItem: { type: Schema.Types.ObjectId, ref: 'HoneymoonGiftListItem' },
        giftSet: { type: Schema.Types.ObjectId, ref: 'GiftSet' },
    });

GiftSchema.pre('remove', function preRemove(next) {
    const giftSetPromise = this.model('GiftSet').update(
        { gifts: this._id },
        { $pull: { gifts: this._id } },
        { multi: true }
    );

    const honeymoonGiftListItemPromise = this.model('HoneymoonGiftListItem').update(
        { gifts: this._id },
        { $pull: { gifts: this._id } },
        { multi: true }
    );

    Promise
        .all([giftSetPromise, honeymoonGiftListItemPromise])
        .then(next);
});

module.exports = mongoose.model('Gift', GiftSchema);

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GiftSchema = new Schema(
    {
        quantity: { type: Number, required: true },
        honeymoonGiftListItem: { type: Schema.Types.ObjectId, ref: 'HoneymoonGiftListItem' },
        gifts: { type: Schema.Types.ObjectId, ref: 'GiftSet' },
    });

GiftSchema.pre('remove', function preRemove(next) {
    this.model('Giver').update(
        { gifts: this._id },
        { $pull: { gifts: this._id } },
        { multi: true },
        next
    );
});

module.exports = mongoose.model('Gift', GiftSchema);

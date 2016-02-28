const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GiverSchema = new Schema({
    forename: { type: String, required: true },
    surname: { type: String, required: true },
    email: { type: String, required: true, index: { unique: true } },
    phoneNumber: { type: String, required: true },
    gifts: [{ type: Schema.Types.ObjectId, ref: 'Gift' }],
});

module.exports = mongoose.model('Giver', GiverSchema);

'use strict'; // eslint-disable-line

// grab the packages that we need for the user model
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const encryption = require('../utilities/encryption');

// user schema
const UserSchema = new Schema({
    name: String,
    email: { type: String, required: true, index: { unique: true }},
    password: { type: String, required: true, select: false },
    salt: {type: String, select: false},
});

// hash the password before the user is saved
UserSchema.pre('save', function preSave(next) {
    const self = this;

    // hash the password only if the password has been changed or user is new
    if (!self.isModified('password')) {
        return next();
    }

    self.salt = encryption.createSalt();
    self.password = encryption.hashPassword(self.salt, self.password);

    next();
});

// method to compare a given password with the database hash
UserSchema.methods.comparePassword = function comparePassword(password) {
    return encryption.hashPassword(this.salt, password) === self.password;
};

// return the model
module.exports = mongoose.model('User', UserSchema);

const WeddingProfile = require('../models/weddingProfile');
const co = require('co');

module.exports = co.wrap(function* initialise() {
    const profileCount = yield WeddingProfile.count({});

    if (profileCount >= 1) {
        return;
    }

    const weddingProfile = new WeddingProfile();

    // set mandatory fields
    weddingProfile.cover.title = 'Our Wedding';

    yield weddingProfile.save();
});

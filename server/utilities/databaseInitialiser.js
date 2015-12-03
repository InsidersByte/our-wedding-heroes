const WeddingProfile = require('../models/weddingProfile');
const co = require('co');

module.exports = co.wrap(function* initialise() {
    const profileCount = yield WeddingProfile.count({});

    if (profileCount >= 1) {
        return;
    }

    const weddingProfile = new WeddingProfile();

    // set mandatory fields
    weddingProfile.cover = {
        title: 'Our Wedding',
        imageUrl: 'http://www.thejollysailorsouthsea.co.uk/js/plugins/imagemanager/files/Wedding_-_Image_1.jpg',
    };

    weddingProfile.aboutUs = 'CHANGE ME';
    weddingProfile.aboutOurDay = 'CHANGE ME';
    weddingProfile.aboutOurHoneymoon = 'CHANGE ME';

    yield weddingProfile.save();
});

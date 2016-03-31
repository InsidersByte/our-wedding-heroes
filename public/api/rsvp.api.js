import BaseApi from '../lib/api';

const apiUrl = 'rsvp';

class RsvpApi extends BaseApi {
    constructor() {
        super(apiUrl);
    }
}

export default new RsvpApi;

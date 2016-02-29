import BaseApi from './base.api';

const apiUrl = 'landing';

class LandingApi extends BaseApi {
    constructor() {
        super(apiUrl);
    }
}

export default new LandingApi;

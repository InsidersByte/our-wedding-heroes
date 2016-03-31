import BaseApi from '../lib/api';

const apiUrl = 'weddingProfile';

class WeddingProfileApi extends BaseApi {
    constructor() {
        super(apiUrl);
    }
}

export default new WeddingProfileApi;

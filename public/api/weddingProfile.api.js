import BaseApi from './base.api';

const apiUrl = 'weddingProfile';

class WeddingProfileApi extends BaseApi {
    constructor() {
        super(apiUrl);
    }
}

export default new WeddingProfileApi;

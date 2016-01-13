import BaseApi from './base.api';

const apiUrl = 'gift';

class GiftApi extends BaseApi {
    constructor() {
        super(apiUrl);
    }
}

export default new GiftApi;

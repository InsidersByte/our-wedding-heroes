import BaseApi from './base.api';

const apiUrl = 'giftSet';

class GiftSetApi extends BaseApi {
    constructor() {
        super(apiUrl);
    }
}

export default new GiftSetApi;

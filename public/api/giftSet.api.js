import BaseApi from './base.api';

const apiUrl = 'giftSet';

class GiftSetApi extends BaseApi {
    constructor() {
        super(apiUrl);
    }

    paid(giftSet, giftSetId) {
        return this.put(giftSet, giftSetId, 'paid');
    }
}

export default new GiftSetApi;

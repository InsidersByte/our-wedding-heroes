import BaseApi from './base.api';

const apiUrl = 'honeymoonGiftList';

class HoneymoonGiftListItem extends BaseApi {
    constructor() {
        super(apiUrl);
    }
}

export default new HoneymoonGiftListItem;

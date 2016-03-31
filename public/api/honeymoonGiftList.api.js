import BaseApi from '../lib/api';

const apiUrl = 'honeymoonGiftList';

class HoneymoonGiftListItem extends BaseApi {
    constructor() {
        super(apiUrl);
    }
}

export default new HoneymoonGiftListItem;

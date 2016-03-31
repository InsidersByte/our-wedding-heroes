import BaseApi from '../lib/api';

const apiUrl = 'onTheDay';

class OnTheDayApi extends BaseApi {
    constructor() {
        super(apiUrl);
    }
}

export default new OnTheDayApi;

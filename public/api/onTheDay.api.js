import BaseApi from './base.api';

const apiUrl = 'onTheDay';

class OnTheDayApi extends BaseApi {
    constructor() {
        super(apiUrl);
    }
}

export default new OnTheDayApi;

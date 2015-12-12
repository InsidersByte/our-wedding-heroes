import BaseApi from './base.api';

const apiUrl = 'aboutOurDay';

class AboutOurDayApi extends BaseApi {
    constructor() {
        super(apiUrl);
    }
}

export default new AboutOurDayApi;

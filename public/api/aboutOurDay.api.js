import BaseApi from '../lib/api';

const apiUrl = 'aboutOurDay';

class AboutOurDayApi extends BaseApi {
    constructor() {
        super(apiUrl);
    }
}

export default new AboutOurDayApi;

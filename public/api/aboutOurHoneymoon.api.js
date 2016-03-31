import BaseApi from '../lib/api';

const apiUrl = 'aboutOurHoneymoon';

class AboutOurHoneymoonApi extends BaseApi {
    constructor() {
        super(apiUrl);
    }
}

export default new AboutOurHoneymoonApi;

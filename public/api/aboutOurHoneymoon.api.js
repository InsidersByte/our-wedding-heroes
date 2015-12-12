import BaseApi from './base.api';

const apiUrl = 'aboutOurHoneymoon';

class AboutOurHoneymoonApi extends BaseApi {
    constructor() {
        super(apiUrl);
    }
}

export default new AboutOurHoneymoonApi;

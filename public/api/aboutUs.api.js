import BaseApi from '../lib/api';

const apiUrl = 'aboutUs';

class AboutUsApi extends BaseApi {
    constructor() {
        super(apiUrl);
    }
}

export default new AboutUsApi;

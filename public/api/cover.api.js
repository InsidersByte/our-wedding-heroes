import BaseApi from '../lib/api';

const apiUrl = 'cover';

class CoverApi extends BaseApi {
    constructor() {
        super(apiUrl);
    }
}

export default new CoverApi;

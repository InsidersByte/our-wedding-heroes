import BaseApi from './base.api';

const apiUrl = 'cover';

class CoverApi extends BaseApi {
    constructor() {
        super(apiUrl);
    }
}

export default new CoverApi;

import BaseApi from './base.api';

const apiUrl = 'setup';

class SetupApi extends BaseApi {
    constructor() {
        super(apiUrl);
    }
}

export default new SetupApi;

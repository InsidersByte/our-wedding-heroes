import BaseApi from '../lib/api';

const apiUrl = 'user';

class UserApi extends BaseApi {
    constructor() {
        super(apiUrl);
    }
}

export default new UserApi;

import BaseApi from '../helpers/api';

const apiUrl = 'authenticate';

class AuthenticateApi extends BaseApi {
    constructor() {
        super(apiUrl);
    }
}

export default new AuthenticateApi;

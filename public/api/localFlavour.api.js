import BaseApi from '../lib/api';

const apiUrl = 'localFlavour';

class LocalFlavourApi extends BaseApi {
    constructor() {
        super(apiUrl);
    }
}

export default new LocalFlavourApi;

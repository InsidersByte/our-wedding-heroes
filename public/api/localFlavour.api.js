import BaseApi from './base.api';

const apiUrl = 'localFlavour';

class LocalFlavourApi extends BaseApi {
    constructor() {
        super(apiUrl);
    }
}

export default new LocalFlavourApi;

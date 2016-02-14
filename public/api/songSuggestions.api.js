import BaseApi from './base.api';

const apiUrl = 'songSuggestions';

class SetupApi extends BaseApi {
    constructor() {
        super(apiUrl);
    }
}

export default new SetupApi;

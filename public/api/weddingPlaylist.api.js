import BaseApi from './base.api';

const apiUrl = 'weddingPlaylist';

class SetupApi extends BaseApi {
    constructor() {
        super(apiUrl);
    }
}

export default new SetupApi;

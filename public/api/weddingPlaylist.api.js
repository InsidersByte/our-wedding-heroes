import BaseApi from '../lib/api';

const apiUrl = 'weddingPlaylist';

class SetupApi extends BaseApi {
    constructor() {
        super(apiUrl);
    }
}

export default new SetupApi;

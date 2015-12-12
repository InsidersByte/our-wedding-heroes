import baseApi from './base.api';

const apiUrl = 'aboutOurDay';

export default {
    get() {
        return baseApi.get(apiUrl);
    },

    put(data) {
        return baseApi.put(apiUrl, data);
    },
};

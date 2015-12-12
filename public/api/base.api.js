import request from 'superagent';
import loginStore from '../stores/login.store';
import {BASE_URL} from '../constants/api.constants';

export default {
    get(url) {
        return new Promise((resolve, reject) => {
            request
                .get(`${BASE_URL}${url}`)
                .set('Authorization', `Bearer ${loginStore.jwt}`)
                .end((err, res) => {
                    if (err) {
                        reject();
                        return;
                    }

                    resolve(JSON.parse(res.text));
                });
        });
    },

    put(url, data) {
        return new Promise((resolve, reject) => {
            request
                .put(`${BASE_URL}${url}`)
                .set('Authorization', `Bearer ${loginStore.jwt}`)
                .send(data)
                .end((err, res) => {
                    if (err) {
                        reject();
                        return;
                    }

                    resolve(JSON.parse(res.text));
                });
        });
    }
};

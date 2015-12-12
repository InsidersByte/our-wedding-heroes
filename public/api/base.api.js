import request from 'superagent';
import loginStore from '../stores/login.store';
import {BASE_URL} from '../constants/api.constants';

export default class {
    constructor(baseUrl) {
        this._baseUrl = `${BASE_URL}${baseUrl}`;
    }

    get() {
        return new Promise((resolve, reject) => {
            request
                .get(this._baseUrl)
                .set('Authorization', `Bearer ${loginStore.jwt}`)
                .end((err, res) => {
                    if (err) {
                        reject();
                        return;
                    }

                    resolve(JSON.parse(res.text));
                });
        });
    }

    put(data) {
        return new Promise((resolve, reject) => {
            request
                .put(this._baseUrl)
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

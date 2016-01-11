import request from 'superagent';
import loginStore from '../stores/login.store';
import { BASE_URL } from '../constants/api.constants';
import loginActions from '../actions/login.action.js';

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
                        this._logoutIfUnauthorised(res);
                        reject();
                        return;
                    }

                    resolve(JSON.parse(res.text));
                });
        });
    }

    post(data) {
        return new Promise((resolve, reject) => {
            request
                .post(this._baseUrl)
                .set('Authorization', `Bearer ${loginStore.jwt}`)
                .send(data)
                .end((err, res) => {
                    if (err) {
                        this._logoutIfUnauthorised(res);
                        reject();
                        return;
                    }

                    resolve(JSON.parse(res.text));
                });
        });
    }

    put(data, id) {
        let url = this._baseUrl;

        if (id) {
            url += `/${id}`;
        }

        return new Promise((resolve, reject) => {
            request
                .put(url)
                .set('Authorization', `Bearer ${loginStore.jwt}`)
                .send(data)
                .end((err, res) => {
                    if (err) {
                        this._logoutIfUnauthorised(res);
                        reject();
                        return;
                    }

                    resolve(JSON.parse(res.text));
                });
        });
    }

    delete(id) {
        return new Promise((resolve, reject) => {
            request
                .delete(`${this._baseUrl}/${id}`)
                .set('Authorization', `Bearer ${loginStore.jwt}`)
                .end((err, res) => {
                    if (err) {
                        this._logoutIfUnauthorised(res);
                        reject();
                        return;
                    }

                    resolve(JSON.parse(res.text));
                });
        });
    }

    _logoutIfUnauthorised(res) {
        if (res.status === 401) {
            loginActions.logoutUser();
        }
    }
}

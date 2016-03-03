import request from 'superagent';
import loginStore from '../stores/login.store';
import { BASE_URL } from '../constants/api.constants';
import loginActions from '../actions/login.action.js';

export default class {
    constructor(baseUrl) {
        this._baseUrl = `${BASE_URL}${baseUrl}`;
    }

    get() {
        return this._request('GET', this._baseUrl);
    }

    post(data) {
        return this._request('POST', this._baseUrl, data);
    }

    put(data, id) {
        let url = this._baseUrl;

        if (id) {
            url += `/${id}`;
        }

        return this._request('PUT', url, data);
    }

    delete(id) {
        return this._request('DELETE', `${this._baseUrl}/${id}`);
    }

    _request(method, url, data) {
        const req = request(method, url);

        if (loginStore.isLoggedIn) {
            req.set('Authorization', `Bearer ${loginStore.jwt}`);
        }

        if (data) {
            req.send(data);
        }

        return new Promise((resolve, reject) => {
            req.end((err, response) => {
                if (err) {
                    if (response.status === 401) {
                        loginActions.logoutUser();
                    }

                    return reject(response.statusText);
                }

                return resolve(JSON.parse(response.text));
            });
        });
    }
}

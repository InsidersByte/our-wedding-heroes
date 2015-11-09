import when from 'when';
import request from 'reqwest';
import {URL} from '../constants/cover.constants';
import loginStore from '../stores/login.store';

class Auth {
    get() {
        return when(request({
            url: URL,
            method: 'GET',
            crossOrigin: true,
            type: 'json',
            headers: {
                'Authorization': 'Bearer ' + loginStore.jwt,
            },
        }))
        .then((response) => {
            return response;
        });
    }

    post() {
        // TODO: do this
        alert('Coming Soon!'); //eslint-disable-line
    }
}

export default new Auth();

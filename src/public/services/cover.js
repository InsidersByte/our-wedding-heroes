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

    put(cover) {
        return when(request({
            url: URL,
            method: 'PUT',
            crossOrigin: true,
            type: 'json',
            headers: {
                'Authorization': 'Bearer ' + loginStore.jwt,
            },
            data: {
                ...cover,
            },
        }))
        .then((response) => {
            return response;
        });
    }
}

export default new Auth();

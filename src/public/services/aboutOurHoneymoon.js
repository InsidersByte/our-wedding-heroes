import when from 'when';
import request from 'reqwest';
import {URL} from '../constants/aboutOurHoneymoon.constants';
import loginStore from '../stores/login.store';

class AboutOurHoneymoon {
    get() {
        return when(request({
            url: URL,
            method: 'GET',
            type: 'json',
            headers: {
                'Authorization': 'Bearer ' + loginStore.jwt,
            },
        }))
        .then((response) => {
            return response;
        });
    }

    put(state) {
        return when(request({
            url: URL,
            method: 'PUT',
            type: 'json',
            headers: {
                'Authorization': 'Bearer ' + loginStore.jwt,
            },
            data: {
                ...state,
            },
        }))
        .then((response) => {
            return response;
        });
    }
}

export default new AboutOurHoneymoon();

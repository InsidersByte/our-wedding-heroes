import when from 'when';
import request from 'reqwest';
import {URL} from '../constants/requestForTheDay.constants';
import loginStore from '../stores/login.store';

class AboutOurDay {
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

    getById(id) {
        if (!id) {
            const error = {message: 'id is a required parameter'};

            throw error;
        }

        return when(request({
            url: URL,
            method: 'GET',
            type: 'json',
            headers: {
                'Authorization': 'Bearer ' + loginStore.jwt,
            },
            data: {
                id,
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

export default new AboutOurDay();

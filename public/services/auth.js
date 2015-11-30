import when from 'when';
import request from 'reqwest';
import {LOGIN_URL, SETUP_URL} from '../constants/login.constants.js';
import loginActions from '../actions/login.action.js';

class Auth {
    login(email, password) {
        // We call the server to log the user in.
        return when(request({
            url: LOGIN_URL,
            method: 'POST',
            type: 'json',
            data: {
                email, password,
            },
        }))
        .then((response) => {
            const jwt = response.token;

            loginActions.loginUser(jwt);

            return true;
        });
    }

    setup(email, password, name) {
        // We call the server to log the user in.
        return when(request({
            url: SETUP_URL,
            method: 'POST',
            type: 'json',
            data: {
                email, password, name,
            },
        }))
        .then((response) => {
            const jwt = response.token;

            loginActions.loginUser(jwt);

            return true;
        });
    }

    logout() {
        loginActions.logoutUser();
    }
}

export default new Auth();

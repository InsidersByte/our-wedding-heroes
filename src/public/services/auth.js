import when from 'when';
import request from 'reqwest';
import constants from '../constants/login.constants';
import loginActions from '../actions/login.action';

class Auth {
    login(email, password) {
        // We call the server to log the user in.
        return when(request({
            url: constants.LOGIN_URL,
            method: 'POST',
            crossOrigin: true,
            type: 'json',
            data: {
                email, password,
            },
        }))
        .then((response) => {
            let jwt = response.token;

            loginActions.loginUser(jwt);

            return true;
        });
    }

    setup(email, password, name) {
        // We call the server to log the user in.
        return when(request({
            url: constants.SETUP_URL,
            method: 'POST',
            crossOrigin: true,
            type: 'json',
            data: {
                email, password, name,
            },
        }))
            .then((/* response */) => {
                // We get a JWT back.
                // let jwt = response.token;

                // We trigger the LoginAction with that JWT.
                // loginActions.loginUser(jwt);

                return true;
            });
    }
}

export default new Auth();

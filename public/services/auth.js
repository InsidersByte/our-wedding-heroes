import authenticateApi from '../api/authenticate.api';
import loginActions from '../actions/login.action.js';

class Auth {
    login(user) {
        // We call the server to log the user in.
        return authenticateApi
            .post(user)
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

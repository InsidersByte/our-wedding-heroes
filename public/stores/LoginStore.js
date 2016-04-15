import alt from '../helpers/alt';
import jwtDecode from 'jwt-decode';
import loginActions from '../actions/LoginActions';
import history from '../helpers/history';

class LoginStore {
    constructor() {
        this.bindActions(loginActions);

        this.user = null;
        this.jwt = null;
    }

    loginUser({ jwt, redirect }) {
        this.jwt = jwt;
        this.user = jwtDecode(jwt);
        this.isLoggedIn = true;

        if (redirect) {
            history.replace('/admin');
        }
    }

    logoutUser() {
        this.jwt = null;
        this.user = null;
        this.isLoggedIn = false;
        history.replace('/admin/login');
    }
}

export default alt.createStore(LoginStore, 'LoginStore');

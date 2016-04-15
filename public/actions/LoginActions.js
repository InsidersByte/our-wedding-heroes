import alt from '../helpers/alt';

class LoginActions {
    loginUser(jwt) {
        const savedJwt = localStorage.getItem('jwt');
        let redirect = false;

        if (savedJwt !== jwt) {
            localStorage.setItem('jwt', jwt);
            redirect = true;
        }

        return { jwt, redirect };
    }

    logoutUser() {
        return (dispatch) => {
            localStorage.removeItem('jwt');
            dispatch();
        };
    }
}

export default alt.createActions(LoginActions);

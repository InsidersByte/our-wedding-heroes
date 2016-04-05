import AppDispatcher from '../dispatchers/app.dispatcher';
import { LOGIN_USER, LOGOUT_USER } from '../constants/actionTypes.constants';
import history from '../helpers/history';

export default {
    loginUser: (jwt) => {
        const savedJwt = localStorage.getItem('jwt');

        AppDispatcher.dispatch({
            actionType: LOGIN_USER,
            jwt,
        });

        if (savedJwt !== jwt) {
            localStorage.setItem('jwt', jwt);

            history.replace('/admin');
        }
    },

    logoutUser: () => {
        localStorage.removeItem('jwt');

        AppDispatcher.dispatch({
            actionType: LOGOUT_USER,
        });

        history.replace('/admin/login');
    },
};

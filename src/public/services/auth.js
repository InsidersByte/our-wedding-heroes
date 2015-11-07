import when from 'when';
import request from 'reqwest';

class Auth {
    login(email, password) {
        // We call the server to log the user in.
        return when(request({
            url: 'http://localhost:3000/api/authenticate',
            method: 'POST',
            crossOrigin: true,
            type: 'json',
            data: {
                email, password,
            },
        }))
        .then((/* response */) => {
            // We get a JWT back.
            // let jwt = response.token;

            // We trigger the LoginAction with that JWT.
            // LoginActions.loginUser(jwt);

            return true;
        });
    }
}

export default new Auth();

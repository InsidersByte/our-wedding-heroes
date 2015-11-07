import React from 'react/addons';
import reactMixin from 'react-mixin';
import { Input, Button, Jumbotron } from 'react-bootstrap';
import auth from '../utils/auth';

class Login extends React.Component {
    constructor() {
        super();

        this.state = {
            email: '',
            password: '',
        };
    }

    login(event) {
        event.preventDefault();

        auth
            .login(this.state.email, this.state.password)
            .then(() => {
            })
            .catch(() => {
            });
    }

    render() {
        return (
            <div className="col-md-6 col-md-offset-3">
                <Jumbotron>
                    <h1>Login</h1>

                    <form>
                        <Input type="email" label="Email Address" placeholder="Enter email" valueLink={this.linkState('email')} />

                        <Input type="password" label="Password" placeholder="Enter password" valueLink={this.linkState('password')} />

                        <Button type="submit" bsStyle="primary" block onClick={this.login.bind(this)}>Login</Button>
                    </form>
                </Jumbotron>
            </div>
        );
    }
}

// We’re using the mixin `LinkStateMixin` to have two-way databinding between our component and the HTML.
reactMixin(Login.prototype, React.addons.LinkedStateMixin);

export default Login;

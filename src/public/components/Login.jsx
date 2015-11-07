import React from 'react/addons';
import reactMixin from 'react-mixin';
import { Input, Button, Jumbotron } from 'react-bootstrap';
import auth from '../services/auth';

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

        auth.login(this.state.email, this.state.password);
    }

    render() {
        return (
            <div className="col-md-6 col-md-offset-3">
                <Jumbotron>
                    <h1>Login</h1>

                    <form onSubmit={this.login.bind(this)}>
                        <Input type="email" label="Email Address" placeholder="Enter email" valueLink={this.linkState('email')} required />

                        <Input type="password" label="Password" placeholder="Enter password" valueLink={this.linkState('password')} required />

                        <Button type="submit" bsStyle="primary" block>Login</Button>
                    </form>
                </Jumbotron>
            </div>
        );
    }
}

// We’re using the mixin `LinkStateMixin` to have two-way databinding between our component and the HTML.
reactMixin(Login.prototype, React.addons.LinkedStateMixin);

export default Login;

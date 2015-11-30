import React from 'react';
import LinkedStateMixin from 'react-addons-linked-state-mixin';
import reactMixin from 'react-mixin';
import { Input, Button, Jumbotron, Col } from 'react-bootstrap';
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

        auth
            .login(this.state.email, this.state.password)
            .catch((err) => {
                // TODO: use some sort of toastr

                alert('There\'s an error logging in'); //eslint-disable-line
                console.log('Error logging in', err); //eslint-disable-line
            });
    }

    render() {
        return (
            <Col md={6} mdOffset={3}>
                <Jumbotron>
                    <h1>Login</h1>

                    <form onSubmit={this.login.bind(this)}>
                        <Input type="email" label="Email Address" placeholder="Enter email" valueLink={this.linkState('email')} required />

                        <Input type="password" label="Password" placeholder="Enter password" valueLink={this.linkState('password')} required />

                        <Button type="submit" bsStyle="primary" block>Login</Button>
                    </form>
                </Jumbotron>
            </Col>
        );
    }
}

reactMixin(Login.prototype, LinkedStateMixin);

export default Login;

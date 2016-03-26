import React from 'react';
import { Jumbotron, Col } from 'react-bootstrap';
import auth from '../../services/auth';
import LoginForm from './LoginForm';

class Login extends React.Component {
    constructor() {
        super();

        this.state = {
            user: {},
        };

        this.setUserState = this.setUserState.bind(this);
        this.submit = this.submit.bind(this);
    }

    setUserState(event) {
        const field = event.target.name;
        const value = event.target.value;
        this.state.user[field] = value;
        return this.setState({ user: this.state.user });
    }

    submit(event) {
        event.preventDefault();

        auth
            .login(this.state.user)
            .then(() => {
                this.props.toastSuccess('Logged in');
            })
            .catch((error) => {
                this.props.toastError('There was an error logging in', error);
            });
    }

    render() {
        return (
            <Col md={6} mdOffset={3}>
                <Jumbotron>
                    <h1>Login</h1>

                    <LoginForm user={this.state.user} onChange={this.setUserState} onSubmit={this.submit} />
                </Jumbotron>
            </Col>
        );
    }
}

Login.propTypes = {
    toastSuccess: React.PropTypes.func,
    toastError: React.PropTypes.func,
};

export default Login;

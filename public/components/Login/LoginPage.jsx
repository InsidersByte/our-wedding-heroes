import React from 'react';
import { Jumbotron, Col } from 'react-bootstrap';
import auth from '../../services/auth';
import LoginForm from './LoginForm.jsx';

class Login extends React.Component {
    constructor() {
        super();

        this.state = {
            user: {},
        };
    }

    setUserState(event) {
        const field = event.target.name;
        const value = event.target.value;
        this.state.user[field] = value;
        return this.setState({user: this.state.user});
    }

    submit(event) {
        event.preventDefault();

        auth
            .login(this.state.user)
            .then(() => {
                this.props.toastSuccess('Logged in');
            })
            .catch(() => {
                this.props.toastError('There was an error logging in');
            });
    }

    render() {
        return (
            <Col md={6} mdOffset={3}>
                <Jumbotron>
                    <h1>Login</h1>

                    <LoginForm user={this.state.user} onChange={this.setUserState.bind(this)} onSubmit={this.submit.bind(this)} />
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

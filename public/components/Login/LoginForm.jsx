import React from 'react';
import { Input, Button } from 'react-bootstrap';

class LoginForm extends React.Component {
    render() {
        return (
            <form onSubmit={this.props.onSubmit}>
                <Input name="username"
                       type="email"
                       label="Username"
                       placeholder="Enter username"
                       value={this.props.user.username}
                       onChange={this.props.onChange}
                       required />

                <Input name="password"
                       type="password"
                       label="Password"
                       placeholder="Enter password"
                       value={this.props.user.password}
                       onChange={this.props.onChange}
                       required />

                <Button type="submit" bsStyle="primary" block>Login</Button>
            </form>
        );
    }
}

LoginForm.propTypes = {
    user: React.PropTypes.object.isRequired,
    onChange: React.PropTypes.func.isRequired,
    onSubmit: React.PropTypes.func.isRequired,
};

export default LoginForm;

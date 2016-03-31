import React from 'react';
import { Input, Button } from 'react-bootstrap';

function LoginForm(props) {
    return (
        <form onSubmit={props.onSubmit}>
            <Input
                name="username"
                type="email"
                label="Username"
                placeholder="Enter username"
                value={props.user.username}
                onChange={props.onChange}
                required
            />

            <Input
                name="password"
                type="password"
                label="Password"
                placeholder="Enter password"
                value={props.user.password}
                onChange={props.onChange}
                required
            />

            <Button type="submit" bsStyle="primary" block>Login</Button>
        </form>
    );
}

LoginForm.propTypes = {
    user: React.PropTypes.object.isRequired,
    onChange: React.PropTypes.func.isRequired,
    onSubmit: React.PropTypes.func.isRequired,
};

export default LoginForm;

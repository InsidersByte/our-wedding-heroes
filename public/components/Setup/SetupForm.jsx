import React from 'react';
import { Input, Button } from 'react-bootstrap';

function SetupForm(props) {
    return (
        <form onSubmit={props.onSubmit}>
            <Input
                name="name"
                type="text"
                label="Name"
                placeholder="Enter name"
                value={props.user.name}
                onChange={props.onChange}
                required
            />

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

            <Button type="submit" bsStyle="primary" block>Setup</Button>
        </form>
    );
}

SetupForm.propTypes = {
    user: React.PropTypes.object.isRequired,
    onChange: React.PropTypes.func.isRequired,
    onSubmit: React.PropTypes.func.isRequired,
};

export default SetupForm;

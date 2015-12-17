import React from 'react';
import { Input, Button } from 'react-bootstrap';

class SetupForm extends React.Component {
    render() {
        return (
            <form onSubmit={this.props.onSubmit}>
                <Input
                    name="name"
                    type="text"
                    label="Name"
                    placeholder="Enter name"
                    value={this.props.user.name}
                    onChange={this.props.onChange}
                    required
                />

                <Input
                    name="username"
                    type="email"
                    label="Username"
                    placeholder="Enter username"
                    value={this.props.user.username}
                    onChange={this.props.onChange}
                    required
                />

                <Input
                    name="password"
                    type="password"
                    label="Password"
                    placeholder="Enter password"
                    value={this.props.user.password}
                    onChange={this.props.onChange}
                    required
                />

                <Button type="submit" bsStyle="primary" block>Setup</Button>
            </form>
        );
    }
}

SetupForm.propTypes = {
    user: React.PropTypes.object.isRequired,
    onChange: React.PropTypes.func.isRequired,
    onSubmit: React.PropTypes.func.isRequired,
};

export default SetupForm;

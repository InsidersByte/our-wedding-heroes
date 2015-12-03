import React from 'react';
import LinkedStateMixin from 'react-addons-linked-state-mixin';
import reactMixin from 'react-mixin';
import { Button, Modal, Input } from 'react-bootstrap';

class User extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.onSave(this.state);
    }

    render() {
        return (
            <Modal show={this.props.show} onHide={this.props.onHide}>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <Modal.Header closeButton>
                        <Modal.Title>Create User</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <Input type="text" label="Name" placeholder="Enter Name" valueLink={this.linkState('name')} required/>

                        <Input type="email" label="Username" placeholder="Enter Username" valueLink={this.linkState('email')} required/>

                        <Input type="password" label="Password" placeholder="Enter Password" valueLink={this.linkState('password')} required/>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button bsStyle="primary" type="submit">Create</Button>
                        <Button onClick={this.props.onHide}>Close</Button>
                    </Modal.Footer>
                </form>
            </Modal>
        );
    }
}

User.propTypes = {
    show: React.PropTypes.bool.isRequired,
    onHide: React.PropTypes.func.isRequired,
    onSave: React.PropTypes.func.isRequired,
};

reactMixin(User.prototype, LinkedStateMixin);

export default User;

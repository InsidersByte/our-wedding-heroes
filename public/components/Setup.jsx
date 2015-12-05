import React from 'react';
import LinkedStateMixin from 'react-addons-linked-state-mixin';
import reactMixin from 'react-mixin';
import { Input, Button, Jumbotron, Col } from 'react-bootstrap';
import auth from '../services/auth';

import {ToastContainer, ToastMessage} from 'react-toastr';
const ToastMessageFactory = React.createFactory(ToastMessage.animation);

class Setup extends React.Component {
    constructor() {
        super();

        this.state = {
            username: '',
            password: '',
            name: '',
        };
    }

    setup(event) {
        event.preventDefault();

        auth
            .setup(this.state.username, this.state.password, this.state.name)
            .then(() => {
                this.refs.container.success(
                    'Setup successful',
                    'Success',
                    {
                        closeButton: true,
                    });
            })
            .catch(() => {
                this.refs.container.error(
                    'Setup failed',
                    'Error',
                    {
                        closeButton: true,
                    });
            });
    }

    render() {
        return (
            <Col md={6} mdOffset={3}>
                <ToastContainer ref="container" toastMessageFactory={ToastMessageFactory} className="toast-bottom-left" />

                <Jumbotron>
                    <h1>Setup</h1>

                    <form onSubmit={this.setup.bind(this)}>
                        <Input type="text" label="Name" placeholder="Enter name" valueLink={this.linkState('name')} required />

                        <Input type="email" label="Username" placeholder="Enter username" valueLink={this.linkState('username')} required />

                        <Input type="password" label="Password" placeholder="Enter password" valueLink={this.linkState('password')} required />

                        <Button type="submit" bsStyle="primary" block>Setup</Button>
                    </form>
                </Jumbotron>
            </Col>
        );
    }
}

// We’re using the mixin `LinkStateMixin` to have two-way databinding between our component and the HTML.
reactMixin(Setup.prototype, LinkedStateMixin);

export default Setup;

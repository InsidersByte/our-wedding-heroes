import React from 'react';
import { Panel, Input, Button, ButtonToolbar } from 'react-bootstrap';
import auth from '../utils/auth';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        };
    }

    handleEmailChange(that) {
        // This could also be done using ReactLink:
        // http://facebook.github.io/react/docs/two-way-binding-helpers.html
        return function handleEmailChange() {
            that.setState({
                email: that.refs.email.getValue(),
            });
        };
    }

    handlePasswordChange(that) {
        // This could also be done using ReactLink:
        // http://facebook.github.io/react/docs/two-way-binding-helpers.html
        return function handleEmailChange() {
            that.setState({
                password: that.refs.password.getValue(),
            });
        };
    }

    handleSubmit(that) {
        return function handleSubmit() {
            event.preventDefault();

            auth
                .login(that.state.email, that.state.password)
                .then(() => {
                    alert('You have logged in successfully!');
                })
                .catch((error) => {
                    alert(`error: ${error}`);
                });
        };
    }

    render() {
        const panelHeader = (
            <h3>
                Login
            </h3>
        );

        return (
            <div className="col-md-6 col-md-offset-3">
                <Panel header={panelHeader} bsStyle="primary">
                    <form onSubmit={this.handleSubmit(this)}>
                        <Input type="email" label="Email Address" placeholder="Enter email" ref="email" onChange={this.handleEmailChange(this)}/>

                        <Input type="password" label="Password" placeholder="Enter password" ref="password" onChange={this.handlePasswordChange(this)}/>

                        <ButtonToolbar>
                            <Button type="submit" bsStyle="primary">Login</Button>
                            <Button type="reset">Reset</Button>
                        </ButtonToolbar>
                    </form>
                </Panel>
            </div>
        );
    }
}

export default App;

import React from 'react';
import { Input, Button, ButtonToolbar, Jumbotron } from 'react-bootstrap';
import auth from '../utils/auth';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            email: '',
            password: '',
        };
    }

    handleEmailChange() {
        // This could also be done using ReactLink:
        // http://facebook.github.io/react/docs/two-way-binding-helpers.html
        this.setState({
            email: this.refs.email.getValue(),
        });
    }

    handlePasswordChange() {
        // This could also be done using ReactLink:
        // http://facebook.github.io/react/docs/two-way-binding-helpers.html
        this.setState({
            password: this.refs.password.getValue(),
        });
    }

    handleSubmit() {
        event.preventDefault();

        auth
            .login(this.state.email, this.state.password)
            .then(() => {
            })
            .catch(() => {
            });
    }

    render() {
        return (
            <div className="col-md-6 col-md-offset-3">
                <Jumbotron>
                    <h1>Login</h1>

                    <form onSubmit={this.handleSubmit}>
                        <Input type="email" label="Email Address" placeholder="Enter email" ref="email"
                               onChange={this.handleEmailChange}/>

                        <Input type="password" label="Password" placeholder="Enter password" ref="password"
                               onChange={this.handlePasswordChange}/>

                        <ButtonToolbar>
                            <Button type="submit" bsStyle="primary">Login</Button>
                            <Button type="reset">Reset</Button>
                        </ButtonToolbar>
                    </form>
                </Jumbotron>
            </div>
        );
    }
}

export default App;

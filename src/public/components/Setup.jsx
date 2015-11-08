import React from 'react/addons';
import reactMixin from 'react-mixin';
import { Input, Button, Jumbotron } from 'react-bootstrap';
import auth from '../services/auth';

class Setup extends React.Component {
    constructor() {
        super();

        this.state = {
            email: '',
            password: '',
            name: '',
        };
    }

    setup(event) {
        event.preventDefault();

        auth
            .setup(this.state.email, this.state.password, this.state.name)
            .catch(function(err) {
                alert('There\'s an error logging in');
                console.log('Error logging in', err);
            });
    }

    render() {
        return (
            <div className="col-md-6 col-md-offset-3">
                <Jumbotron>
                    <h1>Setup</h1>

                    <form onSubmit={this.setup.bind(this)}>
                        <Input type="text" label="Name" placeholder="Enter name" valueLink={this.linkState('name')} required />

                        <Input type="email" label="Email Address" placeholder="Enter email" valueLink={this.linkState('email')} required />

                        <Input type="password" label="Password" placeholder="Enter password" valueLink={this.linkState('password')} required />

                        <Button type="submit" bsStyle="primary" block>Setup</Button>
                    </form>
                </Jumbotron>
            </div>
        );
    }
}

// We’re using the mixin `LinkStateMixin` to have two-way databinding between our component and the HTML.
reactMixin(Setup.prototype, React.addons.LinkedStateMixin);

export default Setup;

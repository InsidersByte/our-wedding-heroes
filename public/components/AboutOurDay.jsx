import React from 'react';
import aboutOurDay from '../services/aboutOurDay';
import LinkedStateMixin from 'react-addons-linked-state-mixin';
import reactMixin from 'react-mixin';
import { Input, Button, Jumbotron } from 'react-bootstrap';

class AboutOurDay extends React.Component {
    constructor() {
        super();

        this.state = {
            aboutOurDay: '',
        };
    }

    componentDidMount() {
        aboutOurDay
            .get()
            .then((response) => {
                this.setState({
                    aboutOurDay: response,
                });
            })
            .catch((error) => {
                // TODO: use some sort of toastr

                alert('There\'s an getting the about our day data'); //eslint-disable-line
                console.log('Error getting about our day data', error); //eslint-disable-line
            });
    }

    update(event) {
        event.preventDefault();

        aboutOurDay
            .put(this.state)
            .catch((error) => {
                // TODO: use some sort of toastr

                alert('There\'s an getting the about our day data'); //eslint-disable-line
                console.log('Error getting about our day data', error); //eslint-disable-line
            });
    }

    render() {
        return (
            <div className="col-md-6 col-md-offset-3">
                <Jumbotron>
                    <h1>About Our Day</h1>

                    <form onSubmit={this.update.bind(this)}>
                        <Input type="textarea" rows="10" label="Content" placeholder="Enter information about your day" valueLink={this.linkState('aboutOurDay')} required />

                        <Button type="submit" bsStyle="primary" block>Update</Button>
                    </form>
                </Jumbotron>
            </div>
        );
    }
}

reactMixin(AboutOurDay.prototype, LinkedStateMixin);

export default AboutOurDay;

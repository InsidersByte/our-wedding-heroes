import React from 'react';
import aboutOurDay from '../services/aboutOurHoneymoon';
import LinkedStateMixin from 'react-addons-linked-state-mixin';
import reactMixin from 'react-mixin';
import { Input, Button, Jumbotron, Col } from 'react-bootstrap';

class AboutOurHoneymoon extends React.Component {
    constructor() {
        super();

        this.state = {
            aboutOurHoneymoon: '',
        };
    }

    componentDidMount() {
        aboutOurDay
            .get()
            .then((response) => {
                this.setState({
                    aboutOurHoneymoon: response,
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
            <Col md={6} mdOffset={3}>
                <Jumbotron>
                    <h1>About Our Honeymoon</h1>

                    <form onSubmit={this.update.bind(this)}>
                        <Input type="textarea" rows="10" label="Content" placeholder="Enter information about your honeymoon" valueLink={this.linkState('aboutOurHoneymoon')} required />

                        <Button type="submit" bsStyle="primary" block>Update</Button>
                    </form>
                </Jumbotron>
            </Col>
        );
    }
}

reactMixin(AboutOurHoneymoon.prototype, LinkedStateMixin);

export default AboutOurHoneymoon;

import React from 'react';
import aboutOurDayApi from '../api/aboutOurDay.api';
import LinkedStateMixin from 'react-addons-linked-state-mixin';
import reactMixin from 'react-mixin';
import { Input, Button, Jumbotron, Col } from 'react-bootstrap';

class AboutOurDay extends React.Component {
    constructor() {
        super();

        this.state = {
            aboutOurDay: '',
        };
    }

    componentDidMount() {
        aboutOurDayApi
            .get()
            .then((response) => {
                this.setState({
                    aboutOurDay: response,
                });
            })
            .catch(() => {
                this.props.toastError('There was an error loading the about our day data');
            });
    }

    update(event) {
        event.preventDefault();

        aboutOurDayApi
            .put(this.state)
            .then(() => {
                this.props.toastSuccess('About our day updated');
            })
            .catch(() => {
                this.props.toastError('There was an error saving about our day');
            });
    }

    render() {
        return (
            <Col md={6} mdOffset={3}>
                <Jumbotron>
                    <h1>About Our Day</h1>

                    <form onSubmit={this.update.bind(this)}>
                        <Input type="textarea" rows="10" label="Content" placeholder="Enter information about your day" valueLink={this.linkState('aboutOurDay')} />

                        <Button type="submit" bsStyle="primary" block>Update</Button>
                    </form>
                </Jumbotron>
            </Col>
        );
    }
}

AboutOurDay.propTypes = {
    toastSuccess: React.PropTypes.func.isRequired,
    toastError: React.PropTypes.func.isRequired,
};

reactMixin(AboutOurDay.prototype, LinkedStateMixin);

export default AboutOurDay;

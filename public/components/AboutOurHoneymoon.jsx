import React from 'react';
import aboutOurHoneymoonApi from '../api/aboutOurHoneymoon.api';
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
        aboutOurHoneymoonApi
            .get()
            .then((response) => {
                this.setState({
                    aboutOurHoneymoon: response,
                });
            })
            .catch(() => {
                this.props.toastError('There was an error getting about our honeymoon');
            });
    }

    update(event) {
        event.preventDefault();

        aboutOurHoneymoonApi
            .put(this.state)
            .then(() => {
                this.props.toastSuccess('About our honeymoon updated');
            })
            .catch(() => {
                this.props.toastError('There was an error saving about our honeymoon');
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

AboutOurHoneymoon.propTypes = {
    toastSuccess: React.PropTypes.func,
    toastError: React.PropTypes.func,
};

reactMixin(AboutOurHoneymoon.prototype, LinkedStateMixin);

export default AboutOurHoneymoon;

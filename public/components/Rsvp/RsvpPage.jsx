import React from 'react';
import rsvpApi from '../../api/rsvp.api';
import { Jumbotron } from 'react-bootstrap';
import RsvpForm from './RsvpForm.jsx';

class RsvpPage extends React.Component {
    constructor() {
        super();

        this.state = {
            rsvp: '',
        };

        this.setRsvpState = this.setRsvpState.bind(this);
        this.submit = this.submit.bind(this);
    }

    componentDidMount() {
        rsvpApi
            .get()
            .then((response) => {
                this.setState({
                    rsvp: response,
                });
            })
            .catch(() => {
                this.props.toastError('There was an error getting rsvp');
            });
    }

    setRsvpState(event) {
        this.setState({ rsvp: event.target.value });
    }

    submit(event) {
        event.preventDefault();

        rsvpApi
            .put(this.state)
            .then(() => {
                this.props.toastSuccess('Rsvp updated');
            })
            .catch(() => {
                this.props.toastError('There was an error saving Rsvp');
            });
    }

    render() {
        return (
            <Jumbotron>
                <h1>RSVP</h1>

                <RsvpForm
                    rsvp={this.state.rsvp}
                    onChange={this.setRsvpState}
                    onSubmit={this.submit}
                />
            </Jumbotron>
        );
    }
}

RsvpPage.propTypes = {
    toastSuccess: React.PropTypes.func,
    toastError: React.PropTypes.func,
};

export default RsvpPage;

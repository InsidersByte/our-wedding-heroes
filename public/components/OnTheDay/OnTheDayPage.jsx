import React from 'react';
import onTheDayApi from '../../api/onTheDay.api';
import { Jumbotron } from 'react-bootstrap';
import OnTheDayForm from './OnTheDayForm.jsx';

class OnTheDayPage extends React.Component {
    constructor() {
        super();

        this.state = {
            onTheDay: '',
        };

        this.updateState = this.updateState.bind(this);
        this.submit = this.submit.bind(this);
    }

    componentDidMount() {
        onTheDayApi
            .get()
            .then((response) => {
                this.setState({
                    onTheDay: response,
                });
            })
            .catch((error) => {
                this.props.toastError('There was an error loading the on the day data', error);
            });
    }

    updateState(event) {
        this.setState({ onTheDay: event.target.value });
    }

    submit(event) {
        event.preventDefault();

        onTheDayApi
            .put(this.state)
            .then(() => {
                this.props.toastSuccess('On the day updated');
            })
            .catch((error) => {
                this.props.toastError('There was an error saving on the day', error);
            });
    }

    render() {
        return (
            <Jumbotron>
                <h1>On the Day</h1>

                <OnTheDayForm
                    onTheDay={this.state.onTheDay}
                    onChange={this.updateState}
                    onSubmit={this.submit}
                />
            </Jumbotron>
        );
    }
}

OnTheDayPage.propTypes = {
    toastSuccess: React.PropTypes.func,
    toastError: React.PropTypes.func,
};

export default OnTheDayPage;

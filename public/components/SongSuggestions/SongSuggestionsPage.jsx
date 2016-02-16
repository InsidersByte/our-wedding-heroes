import React from 'react';
import songSuggestions from '../../api/songSuggestions.api';
import { Jumbotron, Col } from 'react-bootstrap';
import SongSuggestionsForm from './SongSuggestionsForm.jsx';

class SongSuggestionsPage extends React.Component {
    constructor() {
        super();

        this.state = {
            songSuggestions: '',
        };

        this.setRsvpState = this.setRsvpState.bind(this);
        this.submit = this.submit.bind(this);
    }

    componentDidMount() {
        songSuggestions
            .get()
            .then((response) => {
                this.setState({
                    songSuggestions: response,
                });
            })
            .catch(() => {
                this.props.toastError('There was an error loading song suggestions');
            });
    }

    setRsvpState(event) {
        this.setState({ songSuggestions: event.target.value });
    }

    submit(event) {
        event.preventDefault();

        songSuggestions
            .put(this.state)
            .then(() => {
                this.props.toastSuccess('Song suggestions updated');
            })
            .catch(() => {
                this.props.toastError('There was an error saving song suggestions');
            });
    }

    render() {
        return (
            <Jumbotron>
                <h1>Song Suggestions</h1>

                <SongSuggestionsForm
                    songSuggestions={this.state.songSuggestions}
                    onChange={this.setRsvpState}
                    onSubmit={this.submit}
                />
            </Jumbotron>
        );
    }
}

SongSuggestionsPage.propTypes = {
    toastSuccess: React.PropTypes.func,
    toastError: React.PropTypes.func,
};

export default SongSuggestionsPage;

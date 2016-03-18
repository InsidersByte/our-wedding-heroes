import React from 'react';
import weddingPlaylistApi from '../../api/weddingPlaylist.api';
import { Jumbotron } from 'react-bootstrap';
import WeddingPlaylistForm from './WeddingPlaylistForm';

class WeddingPlaylistPage extends React.Component {
    constructor() {
        super();

        this.state = {
            weddingPlaylist: '',
        };

        this.setWeddingPlaylistState = this.setWeddingPlaylistState.bind(this);
        this.submit = this.submit.bind(this);
    }

    componentDidMount() {
        weddingPlaylistApi
            .get()
            .then((response) => {
                this.setState({
                    weddingPlaylist: response,
                });
            })
            .catch((error) => {
                this.props.toastError('There was an error loading wedding playlist', error);
            });
    }

    setWeddingPlaylistState(event) {
        this.setState({ weddingPlaylist: event.target.value });
    }

    submit(event) {
        event.preventDefault();

        weddingPlaylistApi
            .put(this.state)
            .then(() => {
                this.props.toastSuccess('Wedding Playlist updated');
            })
            .catch((error) => {
                this.props.toastError('There was an error saving wedding playlist', error);
            });
    }

    render() {
        return (
            <Jumbotron>
                <h1>Wedding Playlist</h1>

                <WeddingPlaylistForm
                    weddingPlaylist={this.state.weddingPlaylist}
                    onChange={this.setWeddingPlaylistState}
                    onSubmit={this.submit}
                />
            </Jumbotron>
        );
    }
}

WeddingPlaylistPage.propTypes = {
    toastSuccess: React.PropTypes.func,
    toastError: React.PropTypes.func,
};

export default WeddingPlaylistPage;

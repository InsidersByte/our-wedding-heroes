import React from 'react';
import { Button } from 'react-bootstrap';
import MarkdownEditor from '../common/MarkdownEditor';

class WeddingPlaylistForm extends React.Component {
    render() {
        return (
            <form onSubmit={this.props.onSubmit}>
                <MarkdownEditor content={this.props.weddingPlaylist} onChange={this.props.onChange} />

                <Button type="submit" bsStyle="primary" block>Update</Button>
            </form>
        );
    }
}

WeddingPlaylistForm.propTypes = {
    weddingPlaylist: React.PropTypes.string.isRequired,
    onChange: React.PropTypes.func.isRequired,
    onSubmit: React.PropTypes.func.isRequired,
};

export default WeddingPlaylistForm;

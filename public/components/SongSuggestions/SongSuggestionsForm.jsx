import React from 'react';
import { Button } from 'react-bootstrap';
import MarkdownEditor from '../common/MarkdownEditor.jsx';

class SongSuggestionsForm extends React.Component {
    render() {
        return (
            <form onSubmit={this.props.onSubmit}>
                <MarkdownEditor content={this.props.songSuggestions} onChange={this.props.onChange} />

                <Button type="submit" bsStyle="primary" block>Update</Button>
            </form>
        );
    }
}

SongSuggestionsForm.propTypes = {
    songSuggestions: React.PropTypes.string.isRequired,
    onChange: React.PropTypes.func.isRequired,
    onSubmit: React.PropTypes.func.isRequired,
};

export default SongSuggestionsForm;

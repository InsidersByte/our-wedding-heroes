import React from 'react';
import { Button } from 'react-bootstrap';
import MarkdownEditor from '@insidersbyte/react-markdown-editor';

function RsvpForm(props) {
    return (
        <form onSubmit={props.onSubmit}>
            <MarkdownEditor value={props.rsvp} onChange={props.onChange} />

            <Button type="submit" bsStyle="primary" block>Update</Button>
        </form>
    );
}

RsvpForm.propTypes = {
    rsvp: React.PropTypes.string.isRequired,
    onChange: React.PropTypes.func.isRequired,
    onSubmit: React.PropTypes.func.isRequired,
};

export default RsvpForm;

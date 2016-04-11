import React from 'react';
import { Button } from 'react-bootstrap';
import MarkdownEditor from '@insidersbyte/react-markdown-editor';

function AboutOurDayForm(props) {
    return (
        <form onSubmit={props.onSubmit}>
            <MarkdownEditor value={props.aboutOurDay} onChange={props.onChange} />

            <Button type="submit" bsStyle="primary" block disabled={props.saving}>Update</Button>
        </form>
    );
}

AboutOurDayForm.propTypes = {
    aboutOurDay: React.PropTypes.string.isRequired,
    saving: React.PropTypes.bool.isRequired,
    onChange: React.PropTypes.func.isRequired,
    onSubmit: React.PropTypes.func.isRequired,
};

export default AboutOurDayForm;

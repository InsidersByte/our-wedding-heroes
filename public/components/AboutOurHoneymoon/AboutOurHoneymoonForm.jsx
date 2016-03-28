import React from 'react';
import { Button } from 'react-bootstrap';
import MarkdownEditor from '../common/MarkdownEditor';

function AboutOurHoneymoonForm(props) {
    return (
        <form onSubmit={props.onSubmit}>
            <MarkdownEditor content={props.aboutOurHoneymoon} onChange={props.onChange} />

            <Button type="submit" bsStyle="primary" block>Update</Button>
        </form>
    );
}

AboutOurHoneymoonForm.propTypes = {
    aboutOurHoneymoon: React.PropTypes.string.isRequired,
    onChange: React.PropTypes.func.isRequired,
    onSubmit: React.PropTypes.func.isRequired,
};

export default AboutOurHoneymoonForm;

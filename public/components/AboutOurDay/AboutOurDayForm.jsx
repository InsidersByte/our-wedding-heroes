import React from 'react';
import { Button } from 'react-bootstrap';
import MarkdownEditor from '../common/MarkdownEditor';

function AboutOurDayForm(props) {
    return (
        <form onSubmit={props.onSubmit}>
            <MarkdownEditor content={props.aboutOurDay} onChange={props.onChange} />

            <Button type="submit" bsStyle="primary" block>Update</Button>
        </form>
    );
}

AboutOurDayForm.propTypes = {
    aboutOurDay: React.PropTypes.string.isRequired,
    onChange: React.PropTypes.func.isRequired,
    onSubmit: React.PropTypes.func.isRequired,
};

export default AboutOurDayForm;

import React from 'react';
import { Button } from 'react-bootstrap';
import MarkdownEditor from '../common/MarkdownEditor';

function OnTheDayForm(props) {
    return (
        <form onSubmit={props.onSubmit}>
            <MarkdownEditor content={props.onTheDay} onChange={props.onChange} />

            <Button type="submit" bsStyle="primary" block>Update</Button>
        </form>
    );
}

OnTheDayForm.propTypes = {
    onTheDay: React.PropTypes.string.isRequired,
    onChange: React.PropTypes.func.isRequired,
    onSubmit: React.PropTypes.func.isRequired,
};

export default OnTheDayForm;

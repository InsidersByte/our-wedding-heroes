import React from 'react';
import { Button } from 'react-bootstrap';
import MarkdownEditor from '../common/MarkdownEditor';

function LocalFlavourForm(props) {
    return (
        <form onSubmit={props.onSubmit}>
            <MarkdownEditor content={props.localFlavour} onChange={props.onChange} />

            <Button type="submit" bsStyle="primary" block>Update</Button>
        </form>
    );
}

LocalFlavourForm.propTypes = {
    localFlavour: React.PropTypes.string.isRequired,
    onChange: React.PropTypes.func.isRequired,
    onSubmit: React.PropTypes.func.isRequired,
};

export default LocalFlavourForm;

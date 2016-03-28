import React from 'react';
import { Input, Button } from 'react-bootstrap';

function CoverForm(props) {
    return (
        <form onSubmit={props.onSubmit}>
            <Input
                name="title"
                type="text"
                label="Title"
                placeholder="Enter title"
                value={props.cover.title}
                onChange={props.onChange}
                required
            />

            <Input
                name="imageUrl"
                type="url"
                label="Cover Image Url"
                placeholder="Enter url"
                value={props.cover.imageUrl}
                onChange={props.onChange}
                required
            />

            <Input
                name="weddingDate"
                type="date"
                label="Wedding Date"
                placeholder="Enter wedding date"
                value={props.cover.weddingDate}
                onChange={props.onChange}
                required
            />

            <Button type="submit" bsStyle="primary" block>Update</Button>
        </form>
    );
}

CoverForm.propTypes = {
    cover: React.PropTypes.object.isRequired,
    onChange: React.PropTypes.func.isRequired,
    onSubmit: React.PropTypes.func.isRequired,
};

export default CoverForm;

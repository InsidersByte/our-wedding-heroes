import React from 'react';
import { Input, Button } from 'react-bootstrap';

class CoverForm extends React.Component {
    render() {
        return (
            <form onSubmit={this.props.onSubmit}>
                <Input
                    name="title"
                    type="text"
                    label="Title"
                    placeholder="Enter title"
                    value={this.props.cover.title}
                    onChange={this.props.onChange}
                    required
                />

                <Input
                    name="imageUrl"
                    type="url"
                    label="Cover Image Url"
                    placeholder="Enter url"
                    value={this.props.cover.imageUrl}
                    onChange={this.props.onChange}
                    required
                />

                <Button type="submit" bsStyle="primary" block>Update</Button>
            </form>
        );
    }
}

CoverForm.propTypes = {
    cover: React.PropTypes.object.isRequired,
    onChange: React.PropTypes.func.isRequired,
    onSubmit: React.PropTypes.func.isRequired,
};

export default CoverForm;

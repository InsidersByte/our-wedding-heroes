import React from 'react';
import { Input, Button } from 'react-bootstrap';

class AboutUsForm extends React.Component {
    render() {
        return (
            <form onSubmit={this.props.onSubmit}>
                <Input
                    type="textarea"
                    rows="10"
                    label="Content"
                    placeholder="Enter information about you"
                    value={this.props.aboutUs}
                    onChange={this.props.onChange}
                    required />

                <Button type="submit" bsStyle="primary" block>Update</Button>
            </form>
        );
    }
}

AboutUsForm.propTypes = {
    aboutUs: React.PropTypes.string.isRequired,
    onChange: React.PropTypes.func.isRequired,
    onSubmit: React.PropTypes.func.isRequired,
};

export default AboutUsForm;

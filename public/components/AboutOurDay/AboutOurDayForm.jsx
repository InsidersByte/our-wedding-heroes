import React from 'react';
import { Input, Button } from 'react-bootstrap';

class AboutOurDayForm extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <form onSubmit={this.props.onSubmit}>
                <Input
                    type="textarea"
                    rows="10"
                    label="Content"
                    placeholder="Enter information about your day"
                    value={this.props.aboutOurDay}
                    onChange={this.props.onChange} />

                <Button type="submit" bsStyle="primary" block>Update</Button>
            </form>
        );
    }
}

AboutOurDayForm.propTypes = {
    aboutOurDay: React.PropTypes.string.isRequired,
    onChange: React.PropTypes.func.isRequired,
    onSubmit: React.PropTypes.func.isRequired,
};

export default AboutOurDayForm;

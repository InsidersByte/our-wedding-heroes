import React from 'react';
import { Input, Button } from 'react-bootstrap';
import { Link } from 'react-router';

class GiverDetailsForm extends React.Component {
    render() {
        return (
            <form onSubmit={this.props.onSubmit}>
                <Input
                    name="forename"
                    type="text"
                    label="Forename"
                    placeholder="Enter your forename"
                    value={this.props.giver.forename}
                    onChange={this.props.onChange}
                    required
                />

                <Input
                    name="surname"
                    type="text"
                    label="Surname"
                    placeholder="Enter your surname"
                    value={this.props.giver.surname}
                    onChange={this.props.onChange}
                    required
                />

                <Input
                    name="email"
                    type="email"
                    label="Email"
                    placeholder="Enter your email address"
                    value={this.props.giver.email}
                    onChange={this.props.onChange}
                    required
                />

                <Input
                    name="phoneNumber"
                    type="text"
                    label="Telephone Number"
                    placeholder="Enter your telephone number"
                    value={this.props.giver.telephoneNumber}
                    onChange={this.props.onChange}
                    required
                />

                <div className="giver-details__actions">
                    <Button type="submit" bsStyle="success">Complete Gift</Button>

                    <Link
                        to="/basket"
                        className="btn btn-default"
                        role="button"
                    >
                        Back
                    </Link>
                </div>
            </form>
        );
    }
}

GiverDetailsForm.propTypes = {
    giver: React.PropTypes.object.isRequired,
    onChange: React.PropTypes.func.isRequired,
    onSubmit: React.PropTypes.func.isRequired,
};

export default GiverDetailsForm;

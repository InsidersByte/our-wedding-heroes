import React from 'react';
import { Input, Button } from 'react-bootstrap';
import { Link } from 'react-router';

class GiverDetailsForm extends React.Component {
    render() {
        return (
            <form onSubmit={this.props.onSubmit}>
                <Input
                    name="name"
                    type="text"
                    label="Name"
                    placeholder="Enter your name"
                    value={this.props.giver.name}
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

                <div style={{ textAlign: 'center' }}>
                    <Button type="submit" bsStyle="success">Gift</Button>

                    <Link
                        to="/basket"
                        className="btn btn-default"
                        role="button"
                        style={{ marginLeft: '5px' }}
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

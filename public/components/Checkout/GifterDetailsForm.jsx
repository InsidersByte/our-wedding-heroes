import React from 'react';
import { Input, Button } from 'react-bootstrap';
import { Link } from 'react-router';

class GifterDetailsForm extends React.Component {
    render() {
        return (
            <form onSubmit={this.props.onSubmit}>
                <Input
                    name="name"
                    type="text"
                    label="Name"
                    placeholder="Enter your name"
                    value={this.props.gifter.name}
                    onChange={this.props.onChange}
                    required
                />

                <Input
                    name="email"
                    type="email"
                    label="Email"
                    placeholder="Enter your email address"
                    value={this.props.gifter.email}
                    onChange={this.props.onChange}
                    required
                />

                <Input
                    name="phoneNumber"
                    type="text"
                    label="Telephone Number"
                    placeholder="Enter your telephone number"
                    value={this.props.gifter.telephoneNumber}
                    onChange={this.props.onChange}
                    required
                />

                <div style={{ textAlign: 'center' }}>
                    <Button type="submit" bsStyle="primary">Gift</Button>

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

GifterDetailsForm.propTypes = {
    gifter: React.PropTypes.object.isRequired,
    onChange: React.PropTypes.func.isRequired,
    onSubmit: React.PropTypes.func.isRequired,
};

export default GifterDetailsForm;

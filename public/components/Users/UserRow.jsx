import React from 'react';
import { Button, Glyphicon } from 'react-bootstrap';

class UserRow extends React.Component {
    constructor() {
        super();

        this.onDelete = this.onDelete.bind(this);
        this.onEdit = this.onEdit.bind(this);
    }

    onDelete() {
        this.props.onDelete(this.props.user);
    }

    onEdit() {
        this.props.onEdit(this.props.user);
    }

    render() {
        return (
            <tr>
                <th>{this.props.user.name}</th>
                <th>{this.props.user.username}</th>
                <th>
                    <Button
                        bsSize="xsmall"
                        bsStyle="primary"
                        onClick={this.onEdit}
                    >
                        <Glyphicon glyph="pencil" />
                    </Button>

                    <Button
                        bsSize="xsmall"
                        bsStyle="danger"
                        onClick={this.onDelete}
                    >
                        <Glyphicon glyph="trash" />
                    </Button>
                </th>
            </tr>
        );
    }
}

UserRow.propTypes = {
    user: React.PropTypes.object.isRequired,
    onEdit: React.PropTypes.func.isRequired,
    onDelete: React.PropTypes.func.isRequired,
};

export default UserRow;

import React from 'react';
import classNames from 'classnames';

class GiftItem extends React.Component {
    render() {
        const className = classNames({
            'fa': true,
            [`fa-${this.props.icon}`]: true,
        });

        return (
            <i className={className}>
                {this.props.children}
            </i>
        );
    }
}

GiftItem.propTypes = {
    children: React.PropTypes.element,
    icon: React.PropTypes.string.isRequired,
};

export default GiftItem;

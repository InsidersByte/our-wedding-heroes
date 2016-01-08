import React from 'react';
import classNames from 'classnames';

class FontAwesome extends React.Component {
    render() {
        const className = classNames({
            fa: true,
            [`fa-${this.props.icon}`]: true,
            [`fa-${this.props.size}`]: this.props.size,
        });

        return (
            <i className={className}>
                {this.props.children}
            </i>
        );
    }
}

FontAwesome.propTypes = {
    children: React.PropTypes.element,
    icon: React.PropTypes.string.isRequired,
    size: React.PropTypes.oneOf(['lg', '2x', '3x', '4x', '5x']),
};

export default FontAwesome;

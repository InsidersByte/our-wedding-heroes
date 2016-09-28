/* @flow */

import React from 'react';

type PropsType = {
    children?: React$Element<any>,
    className?: string,
    icon: string,
    size?: 'lg' | '2x' | '3x' | '4x' | '5x',
};

export default function FontAwesome(props: PropsType) {
    const { className, icon, size, children } = props;

    const classNames = [];

    classNames.push('fa');
    classNames.push(`fa-${icon}`);

    if (size) {
        classNames.push(`fa-${size}`);
    }

    if (className) {
        classNames.push(className);
    }

    return (
        <i {...props} className={classNames.join(' ')}>
            {children}
        </i>
    );
}

FontAwesome.propTypes = {
    children: React.PropTypes.element,
    className: React.PropTypes.string,
    icon: React.PropTypes.string.isRequired,
    size: React.PropTypes.oneOf(['lg', '2x', '3x', '4x', '5x']),
};

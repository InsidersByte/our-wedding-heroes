/* @flow */

import React from 'react';
import Loader from './Loader';

type PropsType = {
    loading: boolean,
    saving: boolean,
    children?: React$Element<any> | Array<React$Element<any>>,
    onSubmit: Function,
};

export default function Form(props: PropsType) {
    const { loading, saving, children, onSubmit } = props;

    if (loading) {
        return (
            <Loader loading />
        );
    }

    return (
        <form {...props} onSubmit={onSubmit}>
            <fieldset disabled={saving} style={{ margin: 0, padding: 0, border: 'none' }}>
                {children}
            </fieldset>
        </form>
    );
}

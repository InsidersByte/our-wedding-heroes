/* @flow */

import React from 'react';
import connect from 'alt-utils/lib/connectToStores';
import { isEmail } from 'validator';
import LoginForm from '../components/LoginForm';
import NotificationActions from '../actions/NotificationActions';
import LoginActions from '../actions/LoginActions';
import LoginStore from '../stores/LoginStore';
import PasswordResetActions from '../actions/PasswordResetActions';
import PasswordResetStore from '../stores/PasswordResetStore';

type PropsType = {
    saving: boolean,
};

@connect
export default class Login extends React.Component {
    static getStores = () => [PasswordResetStore, LoginStore];
    static getPropsFromStores = () => {
        const passwordResetStoreState = PasswordResetStore.getState();
        const loginStoreState = LoginStore.getState();

        return {
            saving: passwordResetStoreState.saving || loginStoreState.saving,
        };
    };

    props: PropsType;

    state = {
        user: {
            email: '',
            password: '',
        },
    };

    setUserState = ({ target: { name, value } }: { target: { name: string, value: string } }) => {
        const user = Object.assign({}, this.state.user, { [name]: value });
        return this.setState({ user });
    };

    submit = (event: SyntheticEvent) => {
        event.preventDefault();
        LoginActions.login(this.state);
    };

    forgot = (event: SyntheticEvent) => {
        event.preventDefault();

        const email = this.state.user.email;

        if (!email || !isEmail(email)) {
            NotificationActions.error({ message: 'We need your email address to reset your password!' });
            return;
        }

        PasswordResetActions.create({ email });
    };

    render() {
        const { saving } = this.props;
        const { user } = this.state;

        return (
            <LoginForm
                user={user}
                onChange={this.setUserState}
                onForgot={this.forgot}
                onSubmit={this.submit}
                saving={saving}
            />
        );
    }
}

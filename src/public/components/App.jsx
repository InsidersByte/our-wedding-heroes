import React from 'react';
import loginStore from '../stores/login.store';
import { Navbar, NavBrand, Nav } from 'react-bootstrap';
import { Link } from 'react-router';
import auth from '../services/auth';

class App extends React.Component {
    constructor() {
        super();
        this.state = this._getLoginState();
    }

    componentDidMount() {
        this.changeListener = this._onChange.bind(this);
        loginStore.addChangeListener(this.changeListener);
    }

    componentWillUnmount() {
        loginStore.removeChangeListener(this.changeListener);
    }

    _getLoginState() {
        return {
            userLoggedIn: loginStore.isLoggedIn(),
        };
    }

    _onChange() {
        this.setState(this._getLoginState());
    }

    logout(event) {
        event.preventDefault();

        auth.logout();
    }

    render() {
        let headerItems;

        if (!this.state.userLoggedIn) {
            headerItems = (
                <Nav right eventKey={0}>
                    <li>
                        <Link to="login">Login</Link>
                    </li>
                </Nav>
            );
        } else {
            headerItems = (
                <Nav right eventKey={0}>
                    <li>
                        <Link to="admin">Admin</Link>
                    </li>
                    <li>
                        <a href="" onClick={this.logout}>Logout</a>
                    </li>
                </Nav>
            );
        }

        return (
            <div>
                <Navbar inverse toggleNavKey={0}>
                    <NavBrand><Link to="/">Honeymoon Gift List</Link></NavBrand>
                    {headerItems}
                </Navbar>
                <div className="container">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

App.propTypes = {children: React.PropTypes.element.isRequired};

export default App;

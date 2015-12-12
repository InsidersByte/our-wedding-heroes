import React from 'react';
import loginStore from '../stores/login.store.js';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router';
import auth from '../services/auth';
import {ToastContainer, ToastMessage} from 'react-toastr';

const ToastMessageFactory = React.createFactory(ToastMessage.animation);

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

    toastSuccess(message) {
        this.refs.container.success(
            message,
            'Success',
            {
                closeButton: true,
            });
    }

    toastError(message) {
        this.refs.container.error(
            message,
            'Error',
            {
                closeButton: true,
            });
    }

    logout(event) {
        event.preventDefault();

        auth.logout();
    }

    _getLoginState() {
        return {
            userLoggedIn: loginStore.isLoggedIn(),
        };
    }

    _onChange() {
        this.setState(this._getLoginState());
    }

    render() {
        let headerItems;

        if (!this.state.userLoggedIn) {
            headerItems = (
                <Nav pullRight>
                    <li>
                        <Link to="/admin/login">Login</Link>
                    </li>
                </Nav>
            );
        } else {
            headerItems = (
                <Nav pullRight>
                    <NavDropdown title="Wedding Profile" id="weddingProfileDropdown">
                        <li>
                            <Link to="/admin/cover">Cover</Link>
                        </li>
                        <li>
                            <Link to="/admin/aboutUs">About Us</Link>
                        </li>
                        <li>
                            <Link to="/admin/aboutOurDay">About Our Day</Link>
                        </li>
                        <li>
                            <Link to="/admin/whereIsIt">Where Is It</Link>
                        </li>
                        <li>
                            <Link to="/admin/aboutOurHoneymoon">About Our Honeymoon</Link>
                        </li>
                        <li>
                            <Link to="/admin/requestsForTheDay">Requests For The Day</Link>
                        </li>
                        <li>
                            <Link to="/admin/honeymoonGiftList">Honeymoon Gift List</Link>
                        </li>
                    </NavDropdown>

                    <li>
                        <Link to="/admin/users">Users</Link>
                    </li>

                    <li>
                        <a href="#" onClick={this.logout}>Logout</a>
                    </li>
                </Nav>
            );
        }

        return (
            <div>
                <Navbar>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <Link to="/">Honeymoon Gift List</Link>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>

                    <Navbar.Collapse>
                        {headerItems}
                    </Navbar.Collapse>
                </Navbar>

                <div className="container">
                    {this.props.children && React.cloneElement(this.props.children, {
                        toastSuccess: this.toastSuccess.bind(this),
                        toastError: this.toastError.bin,
                    })}
                </div>

                <ToastContainer ref="container" toastMessageFactory={ToastMessageFactory} className="toast-bottom-left" />
            </div>
        );
    }
}

App.propTypes = {children: React.PropTypes.element.isRequired};

export default App;

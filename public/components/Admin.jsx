import React from 'react';
import loginStore from '../stores/login.store.js';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
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
                            <Link to="/admin/rsvp">RSVP</Link>
                        </li>
                        <li>
                            <Link to="/admin/aboutOurDay">About Our Day</Link>
                        </li>
                        <li>
                            <Link to="/admin/songSuggestions">Song Suggestions</Link>
                        </li>
                        <li>
                            <Link to="/admin/aboutOurHoneymoon">About Our Honeymoon</Link>
                        </li>
                        <li>
                            <Link to="/admin/honeymoonGiftList">Honeymoon Gift List</Link>
                        </li>
                        <li>
                            <Link to="/admin/honeymoonGiftListItem">Honeymoon Gift List Items</Link>
                        </li>
                    </NavDropdown>

                    <li>
                        <Link to="/admin/gifts">Gifts</Link>
                    </li>

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
                        toastSuccess: this.props.toastSuccess,
                        toastError: this.props.toastError,
                    })}
                </div>
            </div>
        );
    }
}

App.propTypes = {
    children: React.PropTypes.element.isRequired,
    toastSuccess: React.PropTypes.func.isRequired,
    toastError: React.PropTypes.func.isRequired,
};

export default App;

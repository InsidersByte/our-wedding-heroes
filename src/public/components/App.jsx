import React from 'react';
import { Navbar, NavBrand, Nav } from 'react-bootstrap';
import { Link } from 'react-router';

class App extends React.Component {
    render() {
        return (
            <div>
                <Navbar inverse toggleNavKey={0}>
                    <NavBrand><Link to="/">Honeymoon Gift List</Link></NavBrand>
                    <Nav right eventKey={0}> {/* This is the eventKey referenced */}
                        <li>
                            <Link to="login">Login</Link>
                        </li>
                    </Nav>
                </Navbar>
                <div className="container">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

App.propTypes = { children: React.PropTypes.element.isRequired };

export default App;

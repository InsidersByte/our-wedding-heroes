import React from 'react';
import { AppBar, FlatButton } from 'material-ui';
import { Link } from 'react-router';
import './app.styl';

class App extends React.Component {
    render() {
        const LoginButton = (
            <FlatButton label="Login" linkButton containerElement={<Link to="/login" />} />
        );

        return (
            <div>
                <AppBar title="Honeymoon Gift List" showMenuIconButton={false} iconElementRight={LoginButton} />
                {this.props.children}
            </div>
        );
    }
}

App.propTypes = { children: React.PropTypes.element.isRequired };

export default App;

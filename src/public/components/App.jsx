import React from 'react';
import { AppBar } from 'material-ui';
import './app.styl';

class App extends React.Component {
    render() {
        return (
            <AppBar title="Honeymoon Gift List" showMenuIconButton={false} />
        );
    }
}

export default App;

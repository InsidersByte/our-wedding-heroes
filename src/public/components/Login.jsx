import React from 'react';
import { Card, CardTitle, CardText, CardActions, TextField, RaisedButton } from 'material-ui';

class App extends React.Component {
    render() {
        const mainStyle = {
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
        };

        return (
            <main style={mainStyle}>
                <Card>
                    <CardTitle
                        title="Login"
                        subtitle="enter your details"/>
                    <CardText>
                        <TextField hintText="Username" /><br/>

                        <TextField hintText="Password" type="password" />
                    </CardText>
                    <CardActions>
                        <RaisedButton label="Login" primary />
                    </CardActions>
                </Card>
            </main>
        );
    }
}

export default App;

import React from 'react';
import auth from '../utils/auth';

class App extends React.Component {
    handleSubmit() {
        event.preventDefault();

        console.log(this);

        auth
            .login(this.refs.username, this.refs.password)
            .then((response) => {
                alert(response);
            })
            .catch((error) => {
                alert(`error: ${error}`);
            });
    }

    render() {
        const mainStyle = {
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
        };

        return (
            <h1>
                Coming Soon!
            </h1>
        );
    }
}

export default App;

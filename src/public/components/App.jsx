import React from 'react';

class App extends React.Component {
    render() {
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
}

App.propTypes = {children: React.PropTypes.element.isRequired};

export default App;

import React from 'react';

class App extends React.Component {
    render() {
        return (
            <div className="maximum-size">
                {this.props.children}
            </div>
        );
    }
}

App.propTypes = {
    children: React.PropTypes.element.isRequired,
};

export default App;

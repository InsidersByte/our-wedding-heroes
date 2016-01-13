import React from 'react';
import { ToastContainer, ToastMessage } from 'react-toastr';

const ToastMessageFactory = React.createFactory(ToastMessage.animation);

class App extends React.Component {
    constructor() {
        super();

        this.toastSuccess = this.toastSuccess.bind(this);
        this.toastError = this.toastError.bind(this);
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

    render() {
        return (
            <div className="maximum-size">
                <div className="maximum-size">
                    {this.props.children && React.cloneElement(this.props.children, {
                        toastSuccess: this.toastSuccess,
                        toastError: this.toastError,
                    })}
                </div>

                <ToastContainer
                    ref="container"
                    toastMessageFactory={ToastMessageFactory}
                    className="toast-bottom-left"
                />
            </div>
        );
    }
}

App.propTypes = {
    children: React.PropTypes.element.isRequired,
};

export default App;

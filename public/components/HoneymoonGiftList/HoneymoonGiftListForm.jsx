import React from 'react';
import { Input, Button } from 'react-bootstrap';

class HoneymoonGiftListForm extends React.Component {
    render() {
        let offlinePaymentMessageInput = null;
        let disclaimerMessageInput = null;

        if (this.props.honeymoonGiftList.showOfflinePaymentMessage === true) {
            offlinePaymentMessageInput = (
                <Input
                    type="textarea"
                    name="offlinePaymentMessage"
                    rows="3"
                    label="Offline Payment Message"
                    placeholder="Enter your offline payment message"
                    value={this.props.honeymoonGiftList.offlinePaymentMessage}
                    onChange={this.props.onChange}
                    required
                />
            );
        }

        if (this.props.honeymoonGiftList.showDisclaimerMessage === true) {
            disclaimerMessageInput = (
                <Input
                    type="textarea"
                    name="disclaimerMessage"
                    rows="3"
                    label="Disclaimer Message"
                    placeholder="Enter your disclaimer message"
                    value={this.props.honeymoonGiftList.disclaimerMessage}
                    onChange={this.props.onChange}
                    required
                />
            );
        }

        return (
            <form onSubmit={this.props.onSubmit}>
                <Input
                    type="textarea"
                    name="content"
                    rows="10"
                    label="Content"
                    placeholder="Enter information about your day"
                    value={this.props.honeymoonGiftList.content}
                    onChange={this.props.onChange}
                    required
                />

                <Input
                    type="checkbox"
                    name="showOfflinePaymentMessage"
                    label="Show Offline Payment Message"
                    value={this.props.honeymoonGiftList.showOfflinePaymentMessage}
                    onChange={this.props.onChange}
                    required
                />

                {offlinePaymentMessageInput}

                <Input
                    type="checkbox"
                    name="showDisclaimerMessage"
                    label="Show Disclaimer"
                    value={this.props.honeymoonGiftList.showDisclaimerMessage}
                    onChange={this.props.onChange}
                    required
                />

                {disclaimerMessageInput}

                <Button type="submit" bsStyle="primary" block>Update</Button>
            </form>
        );
    }
}

HoneymoonGiftListForm.propTypes = {
    honeymoonGiftList: React.PropTypes.object.isRequired,
    onChange: React.PropTypes.func.isRequired,
    onSubmit: React.PropTypes.func.isRequired,
};

export default HoneymoonGiftListForm;

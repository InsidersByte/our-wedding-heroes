import React from 'react';
import { Input, Button } from 'react-bootstrap';

function HoneymoonGiftListForm(props) {
    let offlinePaymentMessageInput = null;
    let disclaimerMessageInput = null;

    if (props.honeymoonGiftList.showOfflinePaymentMessage === true) {
        offlinePaymentMessageInput = (
            <Input
                type="textarea"
                name="offlinePaymentMessage"
                rows="3"
                label="Offline Payment Message"
                placeholder="Enter your offline payment message"
                value={props.honeymoonGiftList.offlinePaymentMessage}
                onChange={props.onChange}
                required
            />
        );
    }

    if (props.honeymoonGiftList.showDisclaimerMessage === true) {
        disclaimerMessageInput = (
            <Input
                type="textarea"
                name="disclaimerMessage"
                rows="3"
                label="Disclaimer Message"
                placeholder="Enter your disclaimer message"
                value={props.honeymoonGiftList.disclaimerMessage}
                onChange={props.onChange}
                required
            />
        );
    }

    return (
        <form onSubmit={props.onSubmit}>
            <Input
                type="textarea"
                name="content"
                rows="10"
                label="Content"
                placeholder="Enter information about your day"
                value={props.honeymoonGiftList.content}
                onChange={props.onChange}
                required
            />

            <Input
                type="checkbox"
                name="showOfflinePaymentMessage"
                label="Show Offline Payment Message"
                value={props.honeymoonGiftList.showOfflinePaymentMessage}
                checked={props.honeymoonGiftList.showOfflinePaymentMessage}
                onChange={props.onChange}
            />

            {offlinePaymentMessageInput}

            <Input
                type="checkbox"
                name="showDisclaimerMessage"
                label="Show Disclaimer"
                value={props.honeymoonGiftList.showDisclaimerMessage}
                checked={props.honeymoonGiftList.showDisclaimerMessage}
                onChange={props.onChange}
            />

            {disclaimerMessageInput}

            <Button type="submit" bsStyle="primary" block>Update</Button>
        </form>
    );
}

HoneymoonGiftListForm.propTypes = {
    honeymoonGiftList: React.PropTypes.object.isRequired,
    onChange: React.PropTypes.func.isRequired,
    onSubmit: React.PropTypes.func.isRequired,
};

export default HoneymoonGiftListForm;

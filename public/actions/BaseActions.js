class BaseActions {
    constructor({ api, key }) {
        this._api = api;
        this._key = key;
    }

    fetch() {
        return (dispatch) => {
            dispatch();

            this._api
                .get()
                .then((data) => {
                    this.fetchSuccess(data);
                })
                .catch((error) => {
                    this.fetchError(error);
                });
        };
    }

    fetchSuccess(data) {
        return data;
    }

    fetchError(error) {
        return error;
    }

    update({ [this._key]: data }) {
        return (dispatch) => {
            dispatch();

            this._api
                .put({ [this._key]: data })
                .then((updatedData) => {
                    this.updateSuccess(updatedData);
                })
                .catch((errorMessage) => {
                    this.updateError(errorMessage);
                });
        };
    }

    updateSuccess(data) {
        return data;
    }

    updateError(errorMessage) {
        return errorMessage;
    }
}

export default BaseActions;

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
                .then(this.fetchSuccess)
                .catch(this.fetchError);
        };
    }

    fetchSuccess = o => o;

    fetchError = o => o;

    update({ [this._key]: data }) {
        return (dispatch) => {
            dispatch();

            this._api
                .put({ [this._key]: data })
                .then(this.updateSuccess)
                .catch(this.updateError);
        };
    }

    updateSuccess = o => o;

    updateError = o => o;
}

export default BaseActions;

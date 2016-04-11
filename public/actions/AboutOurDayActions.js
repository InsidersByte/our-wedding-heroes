import alt from '../helpers/alt';
import aboutOurDayApi from '../api/aboutOurDay.api';

class AboutOurDayActions {
    fetch() {
        return (dispatch) => {
            dispatch();

            aboutOurDayApi
                .get()
                .then((aboutOurDay) => {
                    this.fetchSuccess(aboutOurDay);
                })
                .catch((errorMessage) => {
                    this.fetchError(errorMessage);
                });
        };
    }

    fetchSuccess(aboutOurDay) {
        return aboutOurDay;
    }

    fetchError(errorMessage) {
        return errorMessage;
    }

    update({ aboutOurDay }) {
        return (dispatch) => {
            dispatch();

            aboutOurDayApi
                .put({ aboutOurDay })
                .then((updatedAboutOurDay) => {
                    this.updateSuccess(updatedAboutOurDay);
                })
                .catch((errorMessage) => {
                    this.updateError(errorMessage);
                });
        };
    }

    updateSuccess(aboutOurDay) {
        return aboutOurDay;
    }

    updateError(errorMessage) {
        return errorMessage;
    }
}

export default alt.createActions(AboutOurDayActions);

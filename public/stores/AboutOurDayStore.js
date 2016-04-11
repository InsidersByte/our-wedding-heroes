import alt from '../helpers/alt';
import AboutOurDayActions from '../actions/AboutOurDayActions';

class AboutOurDayStore {
    constructor() {
        this.bindActions(AboutOurDayActions);

        this.aboutOurDay = '';
        this.errorMessage = null;
        this.loading = false;
        this.saving = false;
    }

    fetch() {
        this.aboutOurDay = '';
        this.loading = true;
    }

    fetchSuccess(aboutOurDay) {
        this.aboutOurDay = aboutOurDay;
        this.errorMessage = null;
        this.loading = false;
    }

    fetchError(errorMessage) {
        this.errorMessage = errorMessage;
        this.loading = false;
    }

    update() {
        this.saving = true;
    }

    updateSuccess(aboutOurDay) {
        this.aboutOurDay = aboutOurDay;
        this.errorMessage = null;
        this.saving = false;
    }

    updateError(errorMessage) {
        this.errorMessage = errorMessage;
        this.saving = false;
    }
}

export default alt.createStore(AboutOurDayStore, 'AboutOurDayStore');

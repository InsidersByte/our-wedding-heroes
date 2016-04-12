import alt from '../helpers/alt';
import BaseActions from './BaseActions';
import api from '../api/aboutOurDay.api';

const key = 'aboutOurDay';

class AboutOurDayActions extends BaseActions {
    constructor() {
        super({ api, key });
    }
}

export default alt.createActions(AboutOurDayActions);

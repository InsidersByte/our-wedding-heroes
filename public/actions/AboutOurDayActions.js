import alt from '../helpers/alt';
import BaseActions from './BaseActions';
import api from '../api/aboutOurDay.api';
import { ABOUT_OUR_DAY as key } from '../constants/keys.constants';

class AboutOurDayActions extends BaseActions {
    constructor() {
        super({ api, key });
    }
}

export default alt.createActions(AboutOurDayActions);

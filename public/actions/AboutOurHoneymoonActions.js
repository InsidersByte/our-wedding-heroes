import alt from '../helpers/alt';
import BaseActions from './BaseActions';
import api from '../api/aboutOurHoneymoon.api';
import { ABOUT_OUR_HONEYMOON as key } from '../constants/keys.constants';

class AboutOurHoneymoonActions extends BaseActions {
    constructor() {
        super({ api, key });
    }
}

export default alt.createActions(AboutOurHoneymoonActions);

import alt from '../helpers/alt';
import BaseActions from './BaseActions';
import api from '../api/aboutUs.api';
import { ABOUT_US as key } from '../constants/keys.constants';

class AboutUsActions extends BaseActions {
    constructor() {
        super({ api, key });
    }
}

export default alt.createActions(AboutUsActions);

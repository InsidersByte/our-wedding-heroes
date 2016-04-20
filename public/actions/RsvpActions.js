import alt from '../helpers/alt';
import BaseActions from './BaseActions';
import api from '../api/rsvp.api';
import { RSVP as key } from '../constants/keys.constants';

class RsvpActions extends BaseActions {
    constructor() {
        super({ api, key });
    }
}

export default alt.createActions(RsvpActions);

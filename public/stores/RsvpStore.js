import alt from '../helpers/alt';
import actions from '../actions/RsvpActions';
import BaseStore from './BaseStore';
import { RSVP as key } from '../constants/keys.constants';

class RsvpStore extends BaseStore {
    constructor() {
        super({ actions, key });
    }
}

export default alt.createStore(RsvpStore, 'RsvpStore');

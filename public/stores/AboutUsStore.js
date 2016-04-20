import alt from '../helpers/alt';
import actions from '../actions/AboutUsActions';
import BaseStore from './BaseStore';
import { ABOUT_US as key } from '../constants/keys.constants';

class AboutUsStore extends BaseStore {
    constructor() {
        super({ actions, key });
    }
}

export default alt.createStore(AboutUsStore, 'AboutUsStore');

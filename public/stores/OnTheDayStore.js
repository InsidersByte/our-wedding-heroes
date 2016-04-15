import alt from '../helpers/alt';
import actions from '../actions/OnTheDayActions';
import BaseStore from './BaseStore';
import { ON_THE_DAY as key } from '../constants/keys.constants';

class OnTheDayStore extends BaseStore {
    constructor() {
        super({ actions, key });
    }
}

export default alt.createStore(OnTheDayStore, 'OnTheDayStore');

import alt from '../helpers/alt';
import BaseActions from './BaseActions';
import api from '../api/localFlavour.api';
import { LOCAL_FLAVOUR as key } from '../constants/keys.constants';

class LocalFlavourActions extends BaseActions {
    constructor() {
        super({ api, key });
    }
}

export default alt.createActions(LocalFlavourActions);

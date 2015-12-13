import {ADD_TO_BASKET} from '../constants/actionTypes.constants';
import BaseStore from './base.store.js';

class BasketStore extends BaseStore {
    constructor() {
        super();
        this.subscribe(() => this._registerToActions.bind(this));
        this._items = [];
    }

    get items() {
        return this._items;
    }

    _registerToActions(action) {
        switch (action.actionType) {
            case ADD_TO_BASKET:
                const existingItemIndex = this._items.findIndex(item => item._id === action.item._id);

                if (existingItemIndex === -1) {
                    this._items.push(Object.assign({}, action.item, {quantity: action.quantity}));
                } else if (action.quantity === 0) {
                    this._items.splice(existingItemIndex, 1);
                } else {
                    const existingItem = this._items[existingItemIndex];
                    existingItem.quantity = action.quantity;
                }

                this.emitChange();
                break;

            default:
                break;
        }
    }
}

export default new BasketStore();

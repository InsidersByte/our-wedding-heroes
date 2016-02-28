import AppDispatcher from '../dispatchers/app.dispatcher.js';
import { ADD_TO_BASKET, REMOVE_FROM_BASKET, EMPTY_BASKET } from '../constants/actionTypes.constants';

export default {
    addToBasket: (item) => {
        AppDispatcher.dispatch({
            actionType: ADD_TO_BASKET,
            item,
        });
    },

    removeFromBasket: (item) => {
        AppDispatcher.dispatch({
            actionType: REMOVE_FROM_BASKET,
            item,
        });
    },

    emptyBasket: () => {
        AppDispatcher.dispatch({
            actionType: EMPTY_BASKET,
        });
    },
};

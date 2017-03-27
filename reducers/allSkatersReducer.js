import {LOAD_ALL_SKATER_CARDS} from '../actions/actionTypes';
import {REHYDRATE} from 'redux-persist/constants'

export default (state = [], action = {}) => {
    switch (action.type) {
        case LOAD_ALL_SKATER_CARDS:
            return action.payload || [];
        case REHYDRATE:
            return state;
        default:
            return state;
    }
};
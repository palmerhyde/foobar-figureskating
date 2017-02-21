import {LOAD_SKATER_CARDS} from '../actions/actionTypes';

export default (state = [], action = {}) => {
    switch (action.type) {
        case LOAD_SKATER_CARDS:
            return action.payload || [];
        default:
            return state;
    }
};
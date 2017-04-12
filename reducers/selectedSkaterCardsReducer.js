import {SELECT_SKATER_CARD, RESET_SELECTED_SKATER_CARD} from '../actions/actionTypes';

// Arrays
export default (state = [], action = {}) => {
    switch (action.type) {
        case SELECT_SKATER_CARD:
            return action.payload || [];
        case RESET_SELECTED_SKATER_CARD:
            return [];
        default:
            return state;
    }
};
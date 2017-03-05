import {LOAD_SKATER_DECK, SELECT_SKATER_CARD} from '../actions/actionTypes';

export default (state = [], action = {}) => {
    switch (action.type) {
        case LOAD_SKATER_DECK:
            return action.payload || [];
        case SELECT_SKATER_CARD:
            return state.filter(element => element !== action.payload);
        default:
            return state;
    }
};
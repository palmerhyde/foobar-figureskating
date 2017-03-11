import {
    LOAD_OPPONENT_SKATER_DECK,
    REMOVE_OPPONENT_SKATER_FROM_DECK
} from '../actions/actionTypes';

export default (state = [], action = {}) => {
    switch (action.type) {
        case LOAD_OPPONENT_SKATER_DECK:
            return action.payload || [];
        case REMOVE_OPPONENT_SKATER_FROM_DECK:
            return state.filter(element => element !== action.payload);
        default:
            return state;
    }
};
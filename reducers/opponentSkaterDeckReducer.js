import {
    LOAD_OPPONENT_SKATER_DECK,
    REMOVE_OPPONENT_SKATER_FROM_DECK
} from '../actions/actionTypes';

export default (state = [], action = {}) => {
    switch (action.type) {
        case LOAD_OPPONENT_SKATER_DECK:
            return action.payload || [];
        case REMOVE_OPPONENT_SKATER_FROM_DECK:
            // This is a stupid place to do this.
            // What if we ned to remove a pair.
            // TODO: move to game helper
            return state.filter(element => element !== action.payload[0]);
        default:
            return state;
    }
};
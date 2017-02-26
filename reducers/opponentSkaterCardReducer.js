import {LOAD_OPPONENT_SKATER_CARD} from '../actions/actionTypes';

export default (state = [], action = {}) => {
    switch (action.type) {
        case LOAD_OPPONENT_SKATER_CARD:
            return action.payload || {};
        default:
            return state;
    }
};

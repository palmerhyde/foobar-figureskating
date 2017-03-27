import {SET_PICKS} from '../actions/actionTypes';

export default (state = 0, action = {}) => {
    switch (action.type) {
        case SET_PICKS:
            return action.payload || 0;
        default:
            return state;
    }
};
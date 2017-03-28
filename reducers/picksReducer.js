import {SET_PICKS} from '../actions/actionTypes';

export default (state = [], action = {}) => {
    switch (action.type) {
        case SET_PICKS:
            return action.payload || [];
        default:
            return state;
    }
};
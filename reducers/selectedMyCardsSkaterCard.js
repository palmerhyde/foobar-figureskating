import {SELECT_MYCARDS_SKATER} from '../actions/actionTypes';

export default (state = {}, action = {}) => {
    switch (action.type) {
        case SELECT_MYCARDS_SKATER:
            return action.payload || {};
        default:
            return state;
    }
};
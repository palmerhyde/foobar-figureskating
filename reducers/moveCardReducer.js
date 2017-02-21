import {LOAD_MOVE_CARDS} from '../actions/actionTypes';

export default (state = [], action = {}) => {
    switch (action.type) {
        case LOAD_MOVE_CARDS:
            return action.payload || [];
        default:
            return state;
    }
};
import {
    SET_TRAINING_SKATER_LIST
} from '../actions/actionTypes';

export default (state = [], action = {}) => {
    switch (action.type) {
        case SET_TRAINING_SKATER_LIST:
            return action.payload || [];
        default:
            return state;
    }
};
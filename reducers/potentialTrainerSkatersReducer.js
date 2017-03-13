import {
    SET_POTENTIAL_TRAINING_SKATERS
} from '../actions/actionTypes';

export default (state = [], action = {}) => {
    switch (action.type) {
        case SET_POTENTIAL_TRAINING_SKATERS:
            return action.payload || [];
        default:
            return state;
    }
};
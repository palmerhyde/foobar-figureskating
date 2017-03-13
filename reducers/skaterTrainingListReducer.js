import {
    ADD_SKATER_TO_TRAINING_LIST,
    REMOVE_SKATER_FROM_TRAINING_LIST
} from '../actions/actionTypes';

export default (state = [], action = {}) => {
    switch (action.type) {
        case ADD_SKATER_TO_TRAINING_LIST:
            return [
                ...state, action.payload
            ];
        case REMOVE_SKATER_FROM_TRAINING_LIST:
            return state.filter(element => element !== action.payload);
        default:
            return state;
    }
};
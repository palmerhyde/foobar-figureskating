import {LOAD_SKATER_DECK, SELECT_SKATER_CARD} from '../actions/actionTypes';

export default (state = [], action = {}) => {
    switch (action.type) {
        case LOAD_SKATER_DECK:
            return action.payload || [];
        //case SELECT_SKATER_CARD:
            // TODO: don't remove the card, set a hasPlayed attribute to false
            // and don't do here, do it in the action and game helper - just send me the deck for fuck sake!
          //  return state.filter(element => element !== action.payload);
        default:
            return state;
    }
};
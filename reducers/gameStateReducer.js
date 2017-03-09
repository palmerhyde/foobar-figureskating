import {
    SET_TURN_IN_PROGRESS,
    SET_GAME_OVER,
    INCREMENT_YOUR_SCORE,
    INCREMENT_OPPONENT_SCORE,
    RESET_GAME_SCORE,
    INCREMENT_TURN
} from '../actions/actionTypes';

export default (state = {
    'turnInProgress':false,
    'gameOver': false,
    'y' : 0,
    'o' : 0

}, action = {}) => {
    switch (action.type) {
        case SET_TURN_IN_PROGRESS:
            return Object.assign({}, state, { 'turnInProgress': action.payload });
        case SET_GAME_OVER:
            return Object.assign({}, state, { 'gameOver': action.payload });
        case INCREMENT_YOUR_SCORE:
            return Object.assign(state, { y: state.y +1 });
        case INCREMENT_OPPONENT_SCORE:
            return Object.assign(state, { o: state.o +1 });
        case INCREMENT_TURN:
            return Object.assign(state, { turn: state.turn +1 });
        case RESET_GAME_SCORE:
            // TODO: rename reset game
            return Object.assign(state, { y:0, o: 0, 'gameOver':false, turn: 0, turnInProgress: false });
        default:
            return state;
    }
};
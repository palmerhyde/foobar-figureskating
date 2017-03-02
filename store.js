import { createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk'
import createLogger from 'redux-logger';
import moveCardReducer from './reducers/moveCardReducer';
import skaterCardReducer from './reducers/skaterCardReducer';
import opponentSkaterCardReducer from './reducers/opponentSkaterCardReducer';
import selectedSkaterCardReducer from './reducers/selectedSkaterCardReducer';
import scoreReducer from './reducers/scoreReducer';
import gameStateReducer from './reducers/gameStateReducer';

const logger = createLogger();

let initalState = {
    skaters: [],
    move: {},
    opponentSkaterCard: {},
    selectedSkaterCard: {},
    score: {'y' : 0, 'o' : 0},
    gameState: {
        'turnInProgress': false,
        'gameOver': false
    }
};

export default (initialState = initalState) => (
    createStore(
        combineReducers({
            skaters: skaterCardReducer,
            move: moveCardReducer,
            opponentSkaterCard: opponentSkaterCardReducer,
            selectedSkaterCard: selectedSkaterCardReducer,
            score: scoreReducer,
            gameState: gameStateReducer
        }),
        initialState,
        applyMiddleware(thunk, logger)
    )
);
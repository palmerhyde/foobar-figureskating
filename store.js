import { createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk'
import createLogger from 'redux-logger';
import moveCardReducer from './reducers/moveCardReducer';
import skaterCardReducer from './reducers/skaterCardReducer';
import opponentSkaterCardReducer from './reducers/opponentSkaterCardReducer';
import selectedSkaterCardReducer from './reducers/selectedSkaterCardReducer';
import gameStateReducer from './reducers/gameStateReducer';
import skaterDeckReducer from './reducers/skaterDeckReducer';
import opponentSkaterDeckReducer from './reducers/opponentSkaterDeckReducer';

const logger = createLogger();

let initalState = {
    skaters: [],
    skaterDeck: [],
    selectedSkaterCard: {},
    opponentDeck: [],
    opponentSkaterCard: {},
    moves: [],
    gameState: {
        'turnInProgress': false,
        'gameOver': false,
        'y' : 0,
        'o' : 0,
        'turn' : 0
    }
};

export default (initialState = initalState) => (
    createStore(
        combineReducers({
            skaters: skaterCardReducer,
            moves: moveCardReducer,
            opponentSkaterCard: opponentSkaterCardReducer,
            selectedSkaterCard: selectedSkaterCardReducer,
            gameState: gameStateReducer,
            opponentDeck: opponentSkaterDeckReducer,
            skaterDeck: skaterDeckReducer
        }),
        initialState,
        applyMiddleware(thunk, logger)
    )
);
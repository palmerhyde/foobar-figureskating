import { createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk'
import createLogger from 'redux-logger';
import moveCardReducer from './reducers/moveCardReducer';
import skaterCardReducer from './reducers/skaterCardReducer';
import opponentSkaterCardReducer from './reducers/opponentSkaterCardReducer';

const logger = createLogger();

export default (initialState = {skaters: [], move: {}, opponentSkaterCard: {}}) => (
    createStore(
        combineReducers({
            skaters: skaterCardReducer,
            move: moveCardReducer,
            opponentSkaterCard: opponentSkaterCardReducer
        }),
        initialState,
        applyMiddleware(thunk, logger)
    )
);
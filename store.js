import { createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk'
import createLogger from 'redux-logger';
import moveCardReducer from './reducers/moveCardReducer';
import skaterCardReducer from './reducers/skaterCardReducer';
import opponentSkaterCardReducer from './reducers/opponentSkaterCardReducer';
import selectedSkaterCardReducer from './reducers/selectedSkaterCardReducer';

const logger = createLogger();

export default (initialState = {skaters: [], move: {}, opponentSkaterCard: {}, selectedSkaterCard: {}}) => (
    createStore(
        combineReducers({
            skaters: skaterCardReducer,
            move: moveCardReducer,
            opponentSkaterCard: opponentSkaterCardReducer,
            selectedSkaterCard: selectedSkaterCardReducer
        }),
        initialState,
        applyMiddleware(thunk, logger)
    )
);
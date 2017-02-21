import { createStore, applyMiddleware, combineReducers} from 'redux';
import createLogger from 'redux-logger';
import moveCardReducer from './reducers/moveCardReducer';
import skaterCardReducer from './reducers/skaterCardReducer';

const logger = createLogger();
console.log('logger');
console.log(logger);

export default (initialState = {skaters: [], moves: []}) => (
    createStore(
        combineReducers({
            skaters: skaterCardReducer,
            moves: moveCardReducer
        }),
        initialState,
        applyMiddleware(logger)
    )
);
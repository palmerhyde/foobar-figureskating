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
import selectedMyCardsSkaterCard from './reducers/selectedMyCardsSkaterCard';
import potentialTrainerSkatersReducer from './reducers/potentialTrainerSkatersReducer';
import skaterTrainingListReducer from './reducers/skaterTrainingListReducer';

const logger = createLogger();

export default () => (
    createStore(
        combineReducers({
            skaters: skaterCardReducer,
            moves: moveCardReducer,
            opponentSkaterCard: opponentSkaterCardReducer,
            selectedSkaterCard: selectedSkaterCardReducer,
            gameState: gameStateReducer,
            opponentDeck: opponentSkaterDeckReducer,
            skaterDeck: skaterDeckReducer,
            selectedMyCardsSkaterCard: selectedMyCardsSkaterCard,
            potentialTrainerSkaters: potentialTrainerSkatersReducer,
            skaterTrainingList: skaterTrainingListReducer
        }),
        applyMiddleware(thunk, logger)
    )
);
import {createStore, applyMiddleware, combineReducers} from 'redux';
import {autoRehydrate} from 'redux-persist'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger';
import moveCardReducer from './reducers/moveCardReducer';
import skaterCardReducer from './reducers/skaterCardReducer';
import opponentSkaterCardsReducer from './reducers/opponentSkaterCardsReducer';
import selectedSkaterCardsReducer from './reducers/selectedSkaterCardsReducer';
import gameStateReducer from './reducers/gameStateReducer';
import skaterDeckReducer from './reducers/skaterDeckReducer';
import opponentSkaterDeckReducer from './reducers/opponentSkaterDeckReducer';
import selectedMyCardsSkaterCard from './reducers/selectedMyCardsSkaterCard';
import potentialTrainerSkatersReducer from './reducers/potentialTrainerSkatersReducer';
import skaterTrainingListReducer from './reducers/skaterTrainingListReducer';
import allSkatersReducer from './reducers/allSkatersReducer';
import picksReducer from './reducers/picksReducer';

const logger = createLogger();

export default () => (
    createStore(
        combineReducers({
            allSkaters: allSkatersReducer,
            skaters: skaterCardReducer,
            moves: moveCardReducer,
            opponentSkaterCards: opponentSkaterCardsReducer,
            selectedSkaterCards: selectedSkaterCardsReducer,
            gameState: gameStateReducer,
            opponentDeck: opponentSkaterDeckReducer,
            skaterDeck: skaterDeckReducer,
            selectedMyCardsSkaterCard: selectedMyCardsSkaterCard,
            potentialTrainerSkaters: potentialTrainerSkatersReducer,
            skaterTrainingList: skaterTrainingListReducer,
            picks: picksReducer
        }),
        applyMiddleware(thunk, logger),
        autoRehydrate()
    )
);
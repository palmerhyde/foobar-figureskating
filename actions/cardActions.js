import {
    LOAD_SKATER_CARDS,
    LOAD_MOVE_CARDS,
    LOAD_OPPONENT_SKATER_CARD,
    SELECT_SKATER_CARD,
    INCREMENT_YOUR_SCORE,
    INCREMENT_OPPONENT_SCORE,
    SET_TURN_IN_PROGRESS,
    RESET_SELECTED_SKATER_CARD,
    RESET_OPPONENT_SKATER_CARD,
    SET_GAME_OVER,
    RESET_GAME_SCORE,
    LOAD_SKATER_DECK,
    LOAD_OPPONENT_SKATER_DECK,
    INCREMENT_TURN,
    REMOVE_OPPONENT_SKATER_FROM_DECK,
    SELECT_MYCARDS_SKATER,
    SET_POTENTIAL_TRAINING_SKATERS,
    SET_TRAINING_SKATER_LIST
} from './actionTypes';

import _ from 'lodash';

import skaters from '../assets/data/skaters';
import {
    calculateWinner,
    generateMoves,
    oppenentMoveAi,
    potentialTrainingSkaters,
    trainingSkaterList,
    applyXP,
    level,
    levelPercent,
    updateSkaterInList
} from '../util/gamehelper';

export function setSkaterCards(skaters) {
    return (dispatch) => {
        dispatch(loadSkaterCardsStore(skaters));
    };
}

export function loadSkaterCards() {
    return (dispatch, getState) => {
        let state = getState();
        if (state.skaters.length === 0) {
            dispatch(loadSkaterCardsStore(skaters));
        }
    };
}

export const loadSkaterCardsStore = (skaters2) => ({
    type: LOAD_SKATER_CARDS,
    payload: skaters2
});

export const loadMoveCards = (move) => ({
    type: LOAD_MOVE_CARDS,
    payload: move
});

export const setTurnInProgress = (inProgress) => ({
    type: SET_TURN_IN_PROGRESS,
    payload: inProgress
});

export const resetSelectedSkaterCard = () => ({
    type: RESET_SELECTED_SKATER_CARD
});

export const resetOpponentSkaterCard = () => ({
    type: RESET_OPPONENT_SKATER_CARD
});

export const removeOpponentSkaterCardFromDeck = (skater) => ({
    type: REMOVE_OPPONENT_SKATER_FROM_DECK,
    payload: skater
});

export function loadOpponentSkaterCard(skater) {
    return dispatch => {
        dispatch({type: 'LOAD_OPPONENT_SKATER_CARD',  payload: skater});
        dispatch(calculateScores());
    };
}

export function calculateScores() {
    return (dispatch, getState) => {
        dispatch({type: 'CALCULATE_SCORES'});
        let local = getState();
        let winner = calculateWinner(local.selectedSkaterCard, local.opponentSkaterCard, local.moves[local.gameState.turn]);

        switch (winner) {
            case 1:
                dispatch(incrementYourScore());
                break;
            case 2:
                dispatch(incrementOpponentScore());
        }
    };
}

export const selectSkaterCard2 = (skater) => ({
    type: SELECT_SKATER_CARD,
    payload: skater
});

export const incrementTurn = () => ({
    type: INCREMENT_TURN,
});

export const incrementYourScore = () => ({
    type: INCREMENT_YOUR_SCORE,
});

export const incrementOpponentScore = () => ({
    type: INCREMENT_OPPONENT_SCORE,
});

export const setGameOver = (isGameOver) => ({
    type: SET_GAME_OVER,
    payload: isGameOver
});

export function selectSkaterCard(skater) {
    return (dispatch, getState) => {
        // set skater card in deck, do not remove from deck.
        let state = getState();
        let deck = Object.assign([], state.skaterDeck);
        let index = _.findIndex(deck, function(element) { return element.id === skater.id; });
        skater.hasPlayed = true;
        deck[index] = skater;
        dispatch(selectSkaterCard2(skater));
        dispatch(waitForOpponentSkater());

        if (state.gameState.turn === 5) {
            // reset skaters
            // TODO: move to game helper
            for (let i=0; i< deck.length; i++) {
                deck[i].hasPlayed = false;
            }

            dispatch(setSkaterDeck(deck));
            dispatch(setGameOver(true));
        }
    };
}

export const resetGameScoreStore = () => ({
    type: RESET_GAME_SCORE
});

export function resetGameScore() {
    return (dispatch, getState) => {
        // set skater card in deck, do not remove from deck.
        let state = getState();
        let deck = Object.assign([], state.skaterDeck);

        // reset skaters
        // TODO: move to game helper
        for (let i=0; i< deck.length; i++) {
            deck[i].hasPlayed = false;
        }

        dispatch(setSkaterDeck(deck));
        dispatch(resetGameScoreStore());
    };
}


// TODO: rename me / refactor me
export function waitForOpponentSkater() {
    return (dispatch, getState) => {
        let state = getState();

        let skater = skaters[Math.floor((Math.random() * skaters.length) + 1)];
        let move = state.moves[state.gameState.turn];
        let deck = state.opponentDeck;
        skater = oppenentMoveAi(move, deck);
        dispatch(loadOpponentSkaterCard(skater));
    };
}

export function waitForMoves() {
    return dispatch => {
        let moves = generateMoves();
        dispatch(loadMoveCards(moves));
    };
}

export const setOpponentDeck = (deck) => ({
    type: LOAD_OPPONENT_SKATER_DECK,
    payload: deck
});

export const setSkaterDeck = (deck) => ({
    type: LOAD_SKATER_DECK,
    payload: deck
});

// This will be replaced with set skater deck
// Deck should already be loaded. If it isn't then return error
export function loadSkaterDeck() {
    return (dispatch, getState) => {
        if (!skaters || skaters.length == 0) {
            dispatch(loadSkaterDeck());
        }
        else {
            // move logic to helper so it can be tested
            // skater deck
            let state = getState();
            if (!state.skaterDeck || state.skaterDeck.length !== 6) {

                let deck = [];

                // 3 male skaters
                deck.push(skaters[0]);
                deck.push(skaters[2]);
                deck.push(skaters[3]);

                // 3 female skaters
                deck.push(skaters[1]);
                deck.push(skaters[4]);
                deck.push(skaters[5]);

                dispatch(setSkaterDeck(deck));
            }

            // TODO: move me to game
            // opponent skater deck
            let opponentDeck = [];
            let femaleSkaters = skaters.filter(element => element.gender == 'F');
            let maleSkaters = skaters.filter(element => element.gender == 'M');

            // Improve oppenent deck logic - more skaters.
            opponentDeck.push(femaleSkaters[0]);
            opponentDeck.push(femaleSkaters[1]);
            opponentDeck.push(femaleSkaters[2]);
            opponentDeck.push(maleSkaters[0]);
            opponentDeck.push(maleSkaters[1]);
            opponentDeck.push(maleSkaters[2]);

            dispatch(setOpponentDeck(opponentDeck));
        }
    };
}

// Mycards screen
export const selectMyCardsSkater = (skater) => ({
    type: SELECT_MYCARDS_SKATER,
    payload: skater
});

// Training screen

export const setPotentialTrainingSkatersStore = (skaters) => ({
    type: SET_POTENTIAL_TRAINING_SKATERS,
    payload: skaters
});

export function setPotentialTrainingSkaters() {
    return (dispatch, getState) => {
        let state = getState();

        // DO NOT MUTATE STATE!
        let selectedSkater = Object.assign({}, state.selectedMyCardsSkaterCard);
        let deck = Object.assign([], state.skaterDeck);
        let skaters = Object.assign([], state.skaters);
        let trainingSkaters = potentialTrainingSkaters(selectedSkater, deck, skaters);
        dispatch(setPotentialTrainingSkatersStore(trainingSkaters));
    };
}

export function setSkaterTrainingList(skater) {
    return (dispatch, getState) => {
        let state = getState();
        let trainingSkaters = Object.assign([], state.skaterTrainingList);
        let updatedTrainingSkaters = trainingSkaterList(trainingSkaters, skater);

        dispatch(setSkaterTrainingListStore(updatedTrainingSkaters));
    };
}

export const setSkaterTrainingListStore = (skaters) => ({
    type: SET_TRAINING_SKATER_LIST,
    payload: skaters
});

// TODO: move ths logic to gamehelper
export function trainSkater(skater) {
    return (dispatch, getState) => {
        let state = getState();
        let trainingSkaters = Object.assign([], state.skaterTrainingList);

        let levelBefore = level(skater);
        let skaterBefore = Object.assign({}, skater);

        // Apply XP
        let trainedSkater = applyXP(trainingSkaters, skater);
        let levelAfter = level(trainedSkater);
        trainedSkater.level = levelAfter;

        // did the skater level?
        console.log('before: ' + levelBefore + ' after: ' + levelAfter);

        if (levelAfter > levelBefore) {
            let levelPercent = 2.5 * ((levelAfter - levelBefore) / 100) + 1;
            trainedSkater.edges = Math.ceil(trainedSkater.edges * levelPercent);
            trainedSkater.jumps = Math.ceil(trainedSkater.jumps * levelPercent);
            trainedSkater.form = Math.ceil(trainedSkater.form * levelPercent);
            trainedSkater.presentation = Math.ceil(trainedSkater.presentation * levelPercent);
        }

        if (levelAfter < levelBefore) {
            // to do - reduce stats!
            console.log('reduce stats')
        }

        // Calculate the difference
        let difference = {};
        difference.xp = trainedSkater.xp - skaterBefore.xp;
        difference.edges = trainedSkater.edges - skaterBefore.edges;
        difference.jumps = trainedSkater.jumps - skaterBefore.jumps;
        difference.form = trainedSkater.form - skaterBefore.form;
        difference.presentation = trainedSkater.presentation - skaterBefore.presentation;
        difference.level = levelAfter - levelBefore;
        difference.edgesBefore = skaterBefore.edges;
        difference.jumpsBefore = skaterBefore.jumps;
        difference.formBefore = skaterBefore.form;
        difference.presentationBefore = skaterBefore.presentation;
        difference.xpBefore = skaterBefore.xp;
        difference.xpAfter = trainedSkater.xp;
        difference.levelPercentAfter = levelPercent(trainedSkater);
        difference.levelPercentBefore = levelPercent(skaterBefore);

        trainedSkater.difference = difference;
        let updatedSkaters = updateSkaterInList(state.skaters, trainedSkater);

        dispatch(setSkaterCards(updatedSkaters));
        dispatch(setSkaterDeck(updatedSkaters));
        dispatch(selectMyCardsSkater(trainedSkater));
    };
}

export function swapSkater(skater, selectedSkater) {
    return (dispatch, getState) => {
        let state = getState();
        let deck = Object.assign([], state.skaterDeck);
        let index = _.findIndex(deck, function(element) { return element.id === skater.id; });
        deck[index] = selectedSkater;
        dispatch(setSkaterDeck(deck));
        dispatch(setPotentialTrainingSkaters());
    };
}
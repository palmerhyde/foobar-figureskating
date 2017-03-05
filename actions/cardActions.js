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
    REMOVE_OPPONENT_SKATER_FROM_DECK
} from './actionTypes';

import skaters from '../assets/data/skaters';
import {calculateWinner, generateMoves} from '../util/gamehelper';

import {MENS_SINGLES, LADIES_SINGLES} from '../util/disciplines';

export const loadSkaterCards = () => ({
    type: LOAD_SKATER_CARDS,
    payload: skaters
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
        dispatch(selectSkaterCard2(skater));
        dispatch(waitForOpponentSkater());

        var local = getState();
        if (local.gameState.turn == 5) {
            dispatch(setGameOver(true));
        }
    };
}

export const resetGameScore = () => ({
    type: RESET_GAME_SCORE
});

// TODO: rename me / refactor me
export function waitForOpponentSkater() {
    return (dispatch, getState) => {
        let state = getState();

        let skater = skaters[Math.floor((Math.random() * skaters.length) + 1)];
        let move = state.moves[state.gameState.turn];
        let gender = 'M';
        switch (move.discipline) {
            case MENS_SINGLES:
                gender = 'M';
                break;
            case LADIES_SINGLES:
                gender = 'F';
                break;
        }

        // TODO: improve opponent AI and move to helpers so we can test!
        skater = state.opponentDeck.filter(element => element.gender == gender)[0];
        dispatch(loadOpponentSkaterCard(skater));
    };
}

export function waitForMoves() {
    return dispatch => {
        var moves = generateMoves();
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

export function loadSkaterDeck() {
    return (dispatch) => {
        if (!skaters || skaters.length == 0) {
            dispatch(loadSkaterDeck());
        }
        else {
            // skater deck
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
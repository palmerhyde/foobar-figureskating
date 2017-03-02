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
    SET_GAME_OVER
} from './actionTypes';

import skaters from '../assets/data/skaters';
import moves from '../assets/data/moves';
import {calculateWinner} from '../util/gamehelper';

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
        let winner = calculateWinner(local.selectedSkaterCard, local.opponentSkaterCard, local.move);

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
        if (local.skaters.length == 0) {
            dispatch(setGameOver(true));
        }
    };
}

export function waitForOpponentSkater() {
    return dispatch => {
        let skater = skaters[Math.floor((Math.random() * skaters.length) + 1)];
        if (!skater) {
            dispatch(waitForOpponentSkater());
        }
        else {
            dispatch(loadOpponentSkaterCard(skater));
        }
    };
}

export function waitForMoves() {
    return dispatch => {
        dispatch({type: 'LOAD_MOVE_CARDS_START'});
        let index = Math.floor((Math.random() * moves.length) + 1);
        if (!moves[index]) {
            dispatch(waitForMoves());
        }
        else {
            dispatch(loadMoveCards(moves[index]));
        }
    };
}
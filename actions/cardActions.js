import {LOAD_SKATER_CARDS, LOAD_MOVE_CARDS, LOAD_OPPONENT_SKATER_CARD, SELECT_SKATER_CARD} from './actionTypes';
import skaters from '../assets/data/skaters';
import moves from '../assets/data/moves';

export const loadSkaterCards = () => ({
    type: LOAD_SKATER_CARDS,
    payload: skaters
});

export const loadMoveCards = (move) => ({
    type: LOAD_MOVE_CARDS,
    payload: move
});

export const loadOpponentSkaterCard = (skater) => ({
    type: LOAD_OPPONENT_SKATER_CARD,
    payload: skater
});

export const selectSkaterCard2 = (skater) => ({
    type: SELECT_SKATER_CARD,
    payload: skater
});

export function selectSkaterCard(skater) {
    return dispatch => {
        dispatch(waitForOpponentSkater());
        dispatch(selectSkaterCard2(skater));
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
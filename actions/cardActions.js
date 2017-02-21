import {LOAD_SKATER_CARDS, LOAD_MOVE_CARDS} from './actionTypes';
import skaters from '../assets/data/skaters';
import moves from '../assets/data/moves';

export const loadSkaterCards = () => ({
    type: LOAD_SKATER_CARDS,
    payload: skaters
});

export const loadMoveCards = () => ({
    type: LOAD_MOVE_CARDS,
    payload: moves
});
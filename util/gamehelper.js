import {
    EDGES,
    JUMPS,
    FORM,
    PRESENTATION
} from './attributes';

import  {
    MENS_SINGLES,
    LADIES_SINGLES
} from './disciplines'

import _ from 'lodash';

export function calculateWinner(yourCard, opponentCard, moveCard) {
    console.log(yourCard);
    console.log(opponentCard);
    console.log(moveCard);
    if (yourCard[moveCard.attribute] > opponentCard[moveCard.attribute]) {
        return 1;
    }
    else if (yourCard[moveCard.attribute] < opponentCard[moveCard.attribute]) {
        return 2;
    }
    else {
        return 3; // draw
    }
}

export function generateMoves() {
    let moves = [];
    let attributes = [EDGES, JUMPS, FORM, PRESENTATION];

    // 3 female moves
    moves.push({
        'id' : Math.floor((Math.random() * 100000) + 1),
        'attribute' : attributes[Math.floor((Math.random() * 4) + 0)],
        'discipline' : LADIES_SINGLES
    });

    moves.push({
        'id' : Math.floor((Math.random() * 100000) + 1),
        'attribute' : attributes[Math.floor((Math.random() * 4) + 0)],
        'discipline' : LADIES_SINGLES
    });

    moves.push({
        'id' : Math.floor((Math.random() * 100000) + 1),
        'attribute' : attributes[Math.floor((Math.random() * 4) + 0)],
        'discipline' : LADIES_SINGLES
    });


    // 3 male moves

    moves.push({
        'id' : Math.floor((Math.random() * 100000) + 1),
        'attribute' : attributes[Math.floor((Math.random() * 4) + 0)],
        'discipline' : MENS_SINGLES
    });

    moves.push({
        'id' : Math.floor((Math.random() * 100000) + 1),
        'attribute' : attributes[Math.floor((Math.random() * 4) + 0)],
        'discipline' : MENS_SINGLES
    });

    moves.push({
        'id' : Math.floor((Math.random() * 100000) + 1),
        'attribute' : attributes[Math.floor((Math.random() * 4) + 0)],
        'discipline' : MENS_SINGLES
    });

    return _.shuffle(moves);
}
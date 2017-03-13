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

export function oppenentMoveAi(move, deck) {
    let gender = 'M';
    switch (move.discipline) {
        case MENS_SINGLES:
            gender = 'M';
            break;
        case LADIES_SINGLES:
            gender = 'F';
            break;
    }

    return skater = deck.filter(element => element.gender == gender)[0];
}

export function potentialTrainingSkaters(selectedSkater, deckSkaters, skaters) {
    let trainingSkaters = skaters;

    console.log('deckskaters:' + JSON.stringify(deckSkaters));



    deckSkaters.push(selectedSkater);

    for (let i=0; i<deckSkaters.length; i++) {
        _.remove(trainingSkaters, function(element) {
            console.log(deckSkaters[i]);
            console.log('ids:' + element.id + ' ' + deckSkaters[i].id);
            return element.id === deckSkaters[i].id;
        });
    }

    return trainingSkaters;
}
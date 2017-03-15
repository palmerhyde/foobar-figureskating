import {Attributes, Disciplines} from './enums';

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
    let attributes = [Attributes.EDGES, Attributes.JUMPS, Attributes.FORM, Attributes.PRESENTATION];

    // 3 female moves
    moves.push({
        'id' : Math.floor((Math.random() * 100000) + 1),
        'attribute' : attributes[Math.floor((Math.random() * 4) + 0)],
        'discipline' : Disciplines.LADIES_SINGLES
    });

    moves.push({
        'id' : Math.floor((Math.random() * 100000) + 1),
        'attribute' : attributes[Math.floor((Math.random() * 4) + 0)],
        'discipline' : Disciplines.LADIES_SINGLES
    });

    moves.push({
        'id' : Math.floor((Math.random() * 100000) + 1),
        'attribute' : attributes[Math.floor((Math.random() * 4) + 0)],
        'discipline' : Disciplines.LADIES_SINGLES
    });


    // 3 male moves

    moves.push({
        'id' : Math.floor((Math.random() * 100000) + 1),
        'attribute' : attributes[Math.floor((Math.random() * 4) + 0)],
        'discipline' : Disciplines.MENS_SINGLES
    });

    moves.push({
        'id' : Math.floor((Math.random() * 100000) + 1),
        'attribute' : attributes[Math.floor((Math.random() * 4) + 0)],
        'discipline' : Disciplines.MENS_SINGLES
    });

    moves.push({
        'id' : Math.floor((Math.random() * 100000) + 1),
        'attribute' : attributes[Math.floor((Math.random() * 4) + 0)],
        'discipline' : Disciplines.MENS_SINGLES
    });

    return _.shuffle(moves);
}

export function oppenentMoveAi(move, deck) {
    let gender = 'M';
    switch (move.discipline) {
        case Disciplines.MENS_SINGLES:
            gender = 'M';
            break;
        case Disciplines.LADIES_SINGLES:
            gender = 'F';
            break;
    }

    return skater = deck.filter(element => element.gender == gender)[0];
}

export function potentialTrainingSkaters(selectedSkater, deckSkaters, skaters) {
    let trainingSkaters = skaters;
    deckSkaters.push(selectedSkater);

    for (let i=0; i<deckSkaters.length; i++) {
        _.remove(trainingSkaters, function(element) {
            return element.id === deckSkaters[i].id;
        });
    }

    return trainingSkaters;
}

export function trainingSkaterList(trainingSkaters, skater) {
    let index = _.findIndex(trainingSkaters, function (element) {
        return element.id == skater.id;
    });

    if (index != -1) {
        _.remove(trainingSkaters, function (element) {
            return element.id === skater.id;
        });
    }
    else {
        trainingSkaters.push(skater);
    }

    return trainingSkaters;
}
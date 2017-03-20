import {Attributes, Disciplines, Rarity} from './enums';
import {BASE, LEVEL_MULTIPLER} from './levelchart'

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

export function applyXP (trainingSkaters, skater) {
    let newSkater = Object.assign({}, skater);

    for (let i=0; i<trainingSkaters.length; i++) {
        switch (trainingSkaters[i].rarity) {
            case Rarity.LOCAL:
                newSkater.xp += BASE;
                break;
            case Rarity.REGIONAL:
                newSkater.xp += BASE * 2;
                break;
            case Rarity.SECTIONAL:
                newSkater.xp += BASE * 4;
                break;
            case Rarity.NATIONAL:
                newSkater.xp += BASE * 8;
                break;
            case Rarity.WORLD:
                newSkater.xp += BASE * 16;
                break;
            case Rarity.OLYMPIC:
                newSkater.xp += BASE * 32;
                break;
        }
    }

    return newSkater;
}

export function level (skater) {
    let level = 0;
    while (1==1) {
        let x = triangular(level);
        //console.log(x*LEVEL_MULTIPLER);
        if (x*LEVEL_MULTIPLER >= skater.xp) {
            return level;
        }

        level++;
    }
}

export function levelPercent(skater) {
    let skaterLevel = level(skater);
    let high = triangular(skaterLevel) * LEVEL_MULTIPLER;
    let low = (triangular(skaterLevel -1)) * LEVEL_MULTIPLER;
    let range = high - low;
    let diff = high - skater.xp;
    let xp = range - diff;
    let percent = Math.ceil((xp/range) * 100);
    return percent;
}

export function updateSkaterInList(skaters, skater) {
    let updatedSkaters = Object.assign([], skaters);
    let index = _.indexOf(updatedSkaters, _.find(updatedSkaters, {id: skater.id}));
    updatedSkaters.splice(index, 1, skater);
    return updatedSkaters;
}

export function triangular(n) {
    return n > 0 ? n * (n + 1) / 2 : 0;
}
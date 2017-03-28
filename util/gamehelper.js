import {Attributes, Disciplines, Rarity} from './enums';
import {BASE, LEVEL_MULTIPLER, WINNER_PICKS, DRAW_PICKS, LOSER_PICKS, MAXIMUM_CARDS} from './levelchart'
import guid from 'uuid/v4';

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

    // Ensure max cap has not been reached.
    let cap = xpCap(skater);

    if (cap <= newSkater.xp) {
        console.log('skater maxed XP: ' + newSkater.xp + ' => ' + cap  );
        newSkater.xp = cap;
        newSkater.maxLevel = true;
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

export function xpCap (skater) {
    let xpCap = triangular(levelCap(skater)) * LEVEL_MULTIPLER;
    return xpCap
}

export function levelCap(skater) {
    let cap = 0;

    switch (skater.rarity) {
        case Rarity.LOCAL:
            cap = 10;
            break;
        case Rarity.REGIONAL:
            cap = 15;
            break;
        case Rarity.SECTIONAL:
            cap = 20;
            break;
        case Rarity.NATIONAL:
            cap = 25;
            break;
        case Rarity.WORLD:
            cap = 30;
            break;
        case Rarity.OLYMPIC:
            cap = 35;
            break;
    }

    return cap
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

export function numberOfPicks(yourScore, opponentScore) {
    let picks = 0;
    if (yourScore > opponentScore) {
        picks = picks + WINNER_PICKS;
    }
    else if (yourScore < opponentScore) {
        picks = picks + LOSER_PICKS;
    }
    else {
        picks = picks + DRAW_PICKS
    }

    return picks;
}

export function generatePicks(allSkaters, picks) {
    let scopedAllSkaters = Object.assign([], allSkaters);
    let shuffledPicks = _.shuffle(scopedAllSkaters);
    let skaterPicks = [];

    for (let i=0; i<picks; i++) {
        shuffledPicks[i].id = guid();
        skaterPicks.push(shuffledPicks[i]);
    }

    return skaterPicks;
}

export function removeSkaterFromPicks(picks, skater) {
    let scopedPicks = Object.assign([], picks);
    _.remove(scopedPicks, function(element) {
        return element.id === skater.id;
    });

    return scopedPicks;
}

export function addSkaterFromPicks(skaters, skater) {
    let scopedSkaters = Object.assign([], skaters);
    let scopedSkater = Object.assign({}, skater);
    scopedSkaters.push(scopedSkater);
    return scopedSkaters;
}

export function triangular(n) {
    return n > 0 ? n * (n + 1) / 2 : 0;
}
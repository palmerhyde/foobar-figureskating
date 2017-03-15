import {
    calculateWinner,
    generateMoves,
    oppenentMoveAi,
    potentialTrainingSkaters
}
    from '../util/gamehelper';

import {Attributes, Disciplines} from '../util/enums';


describe('Game Helper', () => {

    describe('Calculate Winner', () => {

        describe('default behavior', () => {
            let yourCard = {};
            let opponentCard = {};
            let moveCard = {};

            it('should return draw', () => {
                expect(calculateWinner(yourCard, opponentCard, moveCard)).toBe(3);
            });
        });

        describe('greater you card attribute', () => {
            let yourCard = {
                'edges': 99
            };
            let opponentCard = {
                'edges': 1
            };
            let moveCard = {
                'attribute': Attributes.EDGES
            };

            it('should result in you winning', () => {
                expect(calculateWinner(yourCard, opponentCard, moveCard)).toBe(1);
            });
        });

        describe('greater opponent card attribute', () => {
            let yourCard = {
                'edges': 1
            };
            let opponentCard = {
                'edges': 99
            };
            let moveCard = {
                'attribute': Attributes.EDGES
            };

            it('should result in you losing', () => {
                expect(calculateWinner(yourCard, opponentCard, moveCard)).toBe(2);
            });
        });

        describe('equal you and opponent card attribute', () => {
            let yourCard = {
                'edges': 1
            };
            let opponentCard = {
                'edges': 99
            };
            let moveCard = {
                'attribute': Attributes.EDGES
            };

            it('should result in a draw', () => {
                expect(calculateWinner(yourCard, opponentCard, moveCard)).toBe(2);
            });
        });
    });

    describe('Generate moves', () => {

        describe('default behavior', () => {

            it('should  return a valid move deck', () => {
                let moves = generateMoves();

                // 6 moves
                expect(moves.length).toBe(6);

                // 3 male
                let maleMoves = moves.filter(element => element.discipline === Disciplines.MENS_SINGLES);
                expect(maleMoves.length).toBe(3);

                //3 female
                let femaleMoves = moves.filter(element => element.discipline === Disciplines.LADIES_SINGLES);
                expect(femaleMoves.length).toBe(3);
            });
        });
    });

    describe('Opponent move AI', () => {

        describe('male discipline', () => {

            it('should return a male skater', () => {
                let move = {
                    'discipline' : Disciplines.MENS_SINGLES
                };

                let deck = [
                    {
                        'gender' : 'F'
                    },
                    {
                        'gender' : 'M'
                    },

                ];

                let skater = oppenentMoveAi(move, deck);
                expect(skater.gender).toBe('M');
            });
        });

        describe('female discipline', () => {

            it('should return a female skater', () => {
                let move = {
                    'discipline' : Disciplines.LADIES_SINGLES
                };

                let deck = [
                    {
                        'gender' : 'M'
                    },
                    {
                        'gender' : 'F'
                    },

                ];

                let skater = oppenentMoveAi(move, deck);
                expect(skater.gender).toBe('F');
            });
        });
    });

    describe('Potential Training Skaters', () => {

        describe('default behavior', () => {
            let skaters = [];
            let deckSkaters = [];
            let selectedSkater = {
                'id' : 1
            };

            skaters.push({'id': 1});
            skaters.push({'id': 2});
            skaters.push({'id': 3});
            skaters.push({'id': 4});
            skaters.push({'id': 5});
            skaters.push({'id': 6});
            skaters.push({'id': 7});
            skaters.push({'id': 8});
            skaters.push({'id': 9});
            skaters.push({'id': 10});

            deckSkaters.push({'id': 1});
            deckSkaters.push({'id': 2});
            deckSkaters.push({'id': 3});
            deckSkaters.push({'id': 4});
            deckSkaters.push({'id': 5});
            deckSkaters.push({'id': 6});

            let trainingSkaters = potentialTrainingSkaters(selectedSkater, deckSkaters, skaters);
            expect(trainingSkaters).not.toContainEqual(selectedSkater);
            expect(trainingSkaters).not.toContainEqual(deckSkaters[0]);
            expect(trainingSkaters).not.toContainEqual(deckSkaters[1]);
            expect(trainingSkaters).not.toContainEqual(deckSkaters[2]);
            expect(trainingSkaters).not.toContainEqual(deckSkaters[3]);
            expect(trainingSkaters).not.toContainEqual(deckSkaters[4]);
            expect(trainingSkaters).not.toContainEqual(deckSkaters[5]);
        })
    })
});
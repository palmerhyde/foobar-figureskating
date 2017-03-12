import {
    calculateWinner,
    generateMoves,
    oppenentMoveAi
}
    from '../util/gamehelper';

import {
    EDGES,
    JUMPS,
    FORM,
    PRESENTATION
} from '../util/attributes';

import  {
    MENS_SINGLES,
    LADIES_SINGLES
} from '../util/disciplines'


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
                'attribute': EDGES
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
                'attribute': EDGES
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
                'attribute': EDGES
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
                let maleMoves = moves.filter(element => element.discipline === MENS_SINGLES);
                expect(maleMoves.length).toBe(3);

                //3 female
                let femaleMoves = moves.filter(element => element.discipline === LADIES_SINGLES);
                expect(femaleMoves.length).toBe(3);
            });
        });
    });

    describe('Opponent move AI', () => {

        describe('male discipline', () => {

            it('should return a male skater', () => {
                let move = {
                    'discipline' : MENS_SINGLES
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
                    'discipline' : LADIES_SINGLES
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
});
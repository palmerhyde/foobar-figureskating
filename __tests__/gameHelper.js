import {
    calculateWinner,
    generateMoves,
    oppenentMoveAi,
    potentialTrainingSkaters,
    trainingSkaterList,
    applyXP,
    level,
    levelPercent,
    triangular,
    singleOrPairs
}
    from '../util/gamehelper';

import {Attributes, Disciplines, Rarity} from '../util/enums';


describe('Game Helper', () => {

    describe('Calculate Winner', () => {

        describe('default behavior', () => {
            let yourCard = [];
            let opponentCard = [];
            let moveCard = {};

            it('should return draw', () => {
                expect(calculateWinner(yourCard, opponentCard, moveCard)).toBe(3);
            });
        });

        describe('greater you card attribute', () => {
            let yourCard = [{
                'edges': 99,
                'discipline': Disciplines.MENS_SINGLES
            }];

            console.warn(yourCard);

            let opponentCard = [{
                'edges': 1,
                'discipline': Disciplines.MENS_SINGLES
            }];

            let moveCard = {
                'attribute': Attributes.EDGES,
                'discipline': Disciplines.MENS_SINGLES
            };

            it('should result in you winning', () => {
                expect(calculateWinner(yourCard, opponentCard, moveCard)).toBe(1);
            });
        });

        describe('greater opponent card attribute', () => {
            let yourCard = [{
                'edges': 1,
                'discipline': Disciplines.MENS_SINGLES
            }];
            let opponentCard = [{
                'edges': 99,
                'discipline': Disciplines.MENS_SINGLES
            }];
            let moveCard = {
                'attribute': Attributes.EDGES,
                'discipline': Disciplines.MENS_SINGLES
            };

            it('should result in you losing', () => {
                expect(calculateWinner(yourCard, opponentCard, moveCard)).toBe(2);
            });
        });

        describe('equal you and opponent card attribute', () => {
            let yourCard = [{
                'edges': 1,
                'discipline': Disciplines.MENS_SINGLES
            }];
            let opponentCard = [{
                'edges': 99,
                'discipline': Disciplines.MENS_SINGLES
            }];
            let moveCard = {
                'attribute': Attributes.EDGES,
                'discipline': Disciplines.MENS_SINGLES
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
                expect(skater[0].gender).toBe('M');
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
                expect(skater[0].gender).toBe('F');
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
    });

    describe('Apply XP', () => {

        describe('train 0 xp skater with 3 local skaters', () => {
            let skater = {'xp': 0, rarity: Rarity.LOCAL};
            let trainingSkaters = [];

            trainingSkaters.push({'rarity': Rarity.LOCAL});
            trainingSkaters.push({'rarity': Rarity.LOCAL});
            trainingSkaters.push({'rarity': Rarity.LOCAL});

            let trainedSkater = applyXP(trainingSkaters, skater);

            it('xp should be 60', () => {
                expect(trainedSkater.xp).toBe(60)
            })
        });

        describe('train 0 xp skater with 2 local skaters and 1 regional skater', () => {
            let skater = {'xp': 0, rarity:Rarity.REGIONAL };
            let trainingSkaters = [];

            trainingSkaters.push({'rarity': Rarity.LOCAL});
            trainingSkaters.push({'rarity': Rarity.LOCAL});
            trainingSkaters.push({'rarity': Rarity.REGIONAL});

            let trainedSkater = applyXP(trainingSkaters, skater);

            it('xp should be 80', () => {
                expect(trainedSkater.xp).toBe(80)
            });
        });

        describe('train 0 xp skater with 1 regional skater and 1 sectional skater', () => {
            let skater = {'xp': 0, rarity: Rarity.SECTIONAL};
            let trainingSkaters = [];

            trainingSkaters.push({'rarity': Rarity.REGIONAL});
            trainingSkaters.push({'rarity': Rarity.SECTIONAL});

            let trainedSkater = applyXP(trainingSkaters, skater);

            it('xp should be 80', () => {
                expect(trainedSkater.xp).toBe(120)
            })
        });

        describe('train 0 xp skater with 2 national skaters and 1 world skater', () => {
            let skater = {'xp': 0, rarity: Rarity.WORLD};
            let trainingSkaters = [];

            trainingSkaters.push({'rarity': Rarity.NATIONAL});
            trainingSkaters.push({'rarity': Rarity.WORLD});
            trainingSkaters.push({'rarity': Rarity.NATIONAL});

            let trainedSkater = applyXP(trainingSkaters, skater);

            it('xp should be 80', () => {
                expect(trainedSkater.xp).toBe(640)
            })
        });

        describe('train 0 xp skater with 1 olympic skater and 1 world skater', () => {
            let skater = {'xp': 0, rarity: Rarity.OLYMPIC};
            let trainingSkaters = [];

            trainingSkaters.push({'rarity': Rarity.OLYMPIC});
            trainingSkaters.push({'rarity': Rarity.WORLD});

            let trainedSkater = applyXP(trainingSkaters, skater);

            it('xp should be 960', () => {
                expect(trainedSkater.xp).toBe(960)
            })
        })
    });

    describe('Level', () => {
        // 1   15
        // 2   45
        // 3   90
        // 4   150
        // 5   225
        // 6   315
        // 7   420
        // 8   540
        // 9   675
        // 10  825
        // 11  990
        // 12  1170
        // 13  1365
        // 14  1575
        // 15  1800
        // 16  2040
        // 17  2295
        // 18  2565
        // 19  2850
        // 20  3150
        // 21  3465
        // 22  3795
        // 23  4140
        // 24  4500
        // 25  4875

        describe('A skater with 0 XP', () => {
            let skater = {'xp': 0};

            it('should be level 0', () => {
                expect(level(skater)).toBe(0)
            })
        });

        describe('A skater with 14 XP', () => {
            let skater = {'xp': 14};

            it('should be level 1', () => {
                expect(level(skater)).toBe(1)
            })
        });

        describe('A skater with 20 XP', () => {
            let skater = {'xp': 20};

            it('should be level 2', () => {
                expect(level(skater)).toBe(2)
            })
        });

        describe('A skater with 40 XP', () => {
            let skater = {'xp': 40};

            it('should be level 2', () => {
                expect(level(skater)).toBe(2)
            })
        });

        describe('A skater with 50 XP', () => {
            let skater = {'xp': 50};

            it('should be level 3', () => {
                expect(level(skater)).toBe(3)
            })
        });

        describe('A skater with 825 XP', () => {
            let skater = {'xp': 825};

            it('should be level 10', () => {
                expect(level(skater)).toBe(10)
            })
        });

        describe('A skater with 2100 XP', () => {
            let skater = {'xp': 2100};

            it('should be level 17', () => {
                expect(level(skater)).toBe(17)
            })
        });

        describe('A skater with 3465 XP', () => {
            let skater = {'xp': 3465};

            it('should be level 21', () => {
                expect(level(skater)).toBe(21)
            })
        });

        describe('A skater with 4499 XP', () => {
            let skater = {'xp': 4499};

            it('should be level 24', () => {
                expect(level(skater)).toBe(24)
            })
        });

        describe('A skater with 4501 XP', () => {
            let skater = {'xp': 4501};

            it('should be level 25', () => {
                expect(level(skater)).toBe(25)
            })
        });
    });

    describe('levelPercent', () => {
        // 1   15
        // 2   45
        // 3   90
        // 4   150
        // 5   225
        // 6   315
        // 7   420
        // 8   540
        // 9   675
        // 10  825
        // 11  990
        // 12  1170
        // 13  1365
        // 14  1575
        // 15  1800
        // 16  2040
        // 17  2295
        // 18  2565
        // 19  2850
        // 20  3150
        // 21  3465
        // 22  3795
        // 23  4140
        // 24  4500
        // 25  4875

        describe('A skater with 175 XP', () => {
            let skater = {'xp': 175};

            it('should be level 34%', () => {
                expect(levelPercent(skater)).toBe(34)
            })
        });
    });

    describe('Singles or pairs', () => {

        describe('MENS_SINGLES', () => {

            it('should return SINGLES', () => {
                let move = {
                    'discipline' : Disciplines.MENS_SINGLES
                };

                let style = singleOrPairs(move);
                expect(style).toBe('SINGLES');
            });
        });

        describe('LADIES_SINGLES', () => {

            it('should return SINGLES', () => {
                let move = {
                    'discipline' : Disciplines.LADIES_SINGLES
                };

                let style = singleOrPairs(move);
                expect(style).toBe('SINGLES');
            });
        });

        describe('PAIRS', () => {

            it('should return PAIRS', () => {
                let move = {
                    'discipline' : Disciplines.PAIRS
                };

                let style = singleOrPairs(move);
                expect(style).toBe('PAIRS');
            });
        });

        describe('ICE_DANCING', () => {

            it('should return ICE_DANCING', () => {
                let move = {
                    'discipline' : Disciplines.ICE_DANCING
                };

                let style = singleOrPairs(move);
                expect(style).toBe('PAIRS');
            });
        });
    });
});
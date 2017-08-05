# foobar-figureskating

faras test

Actions.LIST_POTENTIAL_OPPONENTS (randomly generate 3 opponents of varying difficulty)

## Game state

Actions.CREATE_GAME (select opponents hand, set gameview to state 1)

gameView


state 1

{
    turn : 1,
    state : 'state1'
    currentMoveCard : {
    },
    'you' : {
        'id' : 666,
        'name' : 'Liam Molloy',
        'score' : 0,
        'hand' : [...],
        'discard' : [
        ],
        selectedSkaterCards : [],
        selectedBuffCard : {},
        cardBack : 'default',
        champion : ''
    }
    'opponent' : {
        'id' : 999,
        'name' : 'Palmer Molloy',
        'score' : 0,
        'hand' : [...],
        'discard' : [],
        'selectedSkaterCards' : [],
        'selectedBuffCard' : {},
        'cardBack' : 'zuka_uk',
        'champion' : ''
    }
}



Leveling formula

* How many common cards should it take to level a  common card up to 10?
* How many x      cards should it take to level an y      card up to z?

What is the spread between level 0 and level 10?
27%

Is this increase the same for all card levels?


level * 15

1 = 15
2 = 30
3 = 45
4 = 60
5 = 75
6 = 90
7 = 105
8 = 120
9 = 135
10= 150

Total xp required 825.
825 / 21 = 40 cards (39.28)

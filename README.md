# Blades of steel (foobar-figureskating)

## Development setup instructions

`react-native run-ios`

`react-native run-andriod`

## Random stuff

Actions.LIST_POTENTIAL_OPPONENTS (randomly generate 3 opponents of varying difficulty)

// TODO: We need an update asset action as assets are out of date.

// TODO: sagas and ducks? Need to clean up business logic as it is a mess.

## Rules

### Disciplines

#### Men's Singles and Ladies singles

Single skating is a discipline of figure skating in which male and female skaters compete individually. Men's singles and ladies' singles[1] are both Olympic disciplines and are both governed by the International Skating Union, along with the other Olympic figure skating events, pair skating and ice dancing. Single skaters perform jumps, spins, step sequences, spirals, and other moves in the field as part of their competitive programs.

https://en.wikipedia.org/wiki/Single_skating

#### Pairs

Pair skating is a figure skating discipline. International Skating Union (ISU) regulations describe pair teams as consisting of "one lady and one man." The sport is distinguished from ice dancing and single skating by elements unique to pair skating, including overhead lifts, twist lifts, death spirals, and throw jumps. Pair teams also perform the elements of single skating in unison. The discipline requires similar technique and timing on all elements of the performance in order to create an impression of "two skating as one". Serious skating accidents are most common in pairs.

https://en.wikipedia.org/wiki/Pair_skating

#### Ice Dance

ce dancing is a discipline of figure skating that draws from ballroom dancing. It joined the World Figure Skating Championships in 1952, and became a Winter Olympic Games medal sport in 1976.

As in pair skating, dancers compete as a couple consisting of a man and a woman. Ice dance differs from pair skating by having different requirements for lifts. Couples must perform spins as a team in a dance hold, and throws and jumps are disallowed. Typically, partners are not supposed to separate by more than two arm lengths. Originally, partners were supposed to be in a dance hold the entire program, though modern ice dancing has lifted this restriction somewhat.

Another distinction between ice dance and other skating disciplines is the use of music in the performances. In ice dancing, dancers must always skate to music with a definite beat or rhythm. Singles and pair skaters more often skate to the melody and phrasing of their music, rather than its beat. This is severely penalized in ice dance.

https://en.wikipedia.org/wiki/Ice_dancing

### Elements

#### Jumps

* Axel Jump (https://en.wikipedia.org/wiki/Axel_jump) 
* Flip Jump (https://en.wikipedia.org/wiki/Flip_jump) 
* Loop Jump (https://en.wikipedia.org/wiki/Loop_jump) 
* Lutz Jump (https://en.wikipedia.org/wiki/Lutz_jump)
* Salchow Jump (https://en.wikipedia.org/wiki/Salchow_jump) 
* Toe Loop Jump (https://en.wikipedia.org/wiki/Toe_loop_jump) 

#### Spins

#### Moves in the field


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

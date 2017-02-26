# foobar-figureskating

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

State 1 Actions
Actions.SELECT_BUFF_CARD (set buff card, disable other buff cards)
Actions.SELECT_SKATER_CARD (set/push skater card)

Can actions be fired by other actions?

game

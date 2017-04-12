import React, {Component} from 'react';

import {
    Button,
    Image,
    Modal,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    AppRegistry
} from 'react-native';

import { Actions } from 'react-native-router-flux';

import {Disciplines} from './util/enums'

import {SkaterCard} from './components/skatercard';
import {SkaterCard2} from './components/skatercard2';
import {MoveCard} from './components/movecard';
import {FlipSkaterCard} from './components/flipskatercard';
import {PlayerScoreBoard} from './components/playerscoreboard';

class GameScreen extends Component {

    constructor(props) {
        super(props);
        this.refresh = this.refresh.bind(this);
        this.state = {
            isFlipped: false,
            isFlipped2: false,
            animateYou: false,
            animateOpponent: false
        };
    }

    componentWillMount() {
        this.refresh();
    }

    refresh() {
        if (this.props.loadSkaterDeck) {
            this.props.loadSkaterDeck();
        }

        if (this.props.waitForMoves) {
            // Is there a race condition here?
            // skaters -> back -> game
            this.props.waitForMoves();
        }

        if (this.props.resetGameScore) {
            this.props.resetGameScore();
        }

        // TODO: refresh selected skaters!
        this.props.resetSelectedSkaterCard();
    }

    selectSkaterCard(skater) {
        switch (this.props.moves[this.props.gameState.turn].discipline) {
            case Disciplines.MENS_SINGLES:
            case Disciplines.LADIES_SINGLES:
                console.log('singles');
                break;
            case Disciplines.ICE_DANCING:
            case Disciplines.PAIRS:
                console.log('pairs');
                break;
        }

        // If singles
        //this.props.setTurnInProgress(true);
        this.props.selectSkaterCard(skater);

        // If pairs or ice-dance

        this.flip(false);

        //Push up your card - translateY -100
        //Push down opponent skater - translateY 100
    }

    nextTurn() {
        this.flip(true);
    }

    // Style
    flip(endFilp)  {
        // Chain 2 animations
        this.setState({isFlipped: !this.state.isFlipped});
        let foo = this;

        setTimeout(function() {
            foo.setState({isFlipped2: !foo.state.isFlipped2});
            setTimeout(function() {
                if (endFilp) {
                    foo.props.setTurnInProgress(false);
                    foo.props.resetSelectedSkaterCard();
                    foo.props.removeOpponentSkaterCardFromDeck(foo.props.opponentSkaterCards);
                    foo.props.resetOpponentSkaterCard();
                    foo.props.incrementTurn();
                }
            }, 800, foo);
        }, 800, foo);
    }

    // Style
    pointer() {
        if (this.props.gameState.turnInProgress) {
            return 'none';
        }

        return 'auto';
    }

    // Style
    opacity() {
        if (this.props.gameState.turnInProgress) {
            return 1;
        }

        return 1;
    }

    // TODO: Move to util. (Selector?)
    isPlayable(skater, move) {
        if (skater.hasPlayed) {
            return false;
        }

        if (move.discipline == Disciplines.MENS_SINGLES && skater.gender == 'F') {
            return false;
        }

        if (move.discipline == Disciplines.LADIES_SINGLES && skater.gender == 'M') {
            return false;
        }

        return true;
    }

    render() {
        console.log('turn:'+ this.props.gameState.turn);
        // TODO: add null checks to ensure moves and skater decks are valid before rendering
        if (!this.props.moves || this.props.moves.length == 0) {
            // TODO - render spinner?
            return null;
        }

        return <Image resizeMode='cover' source={require('./assets/images/icerink2.jpg')} style={{width: null, height: null, 'flex': 1}}>
            <Modal
                animationType={"slide"}
                transparent={false}
                visible={this.props.gameState.turnInProgress}
            >
                <View style={{flex:1, opacity:1, alignItems:'center', justifyContent:'center'}}>
                    <View style={{flex: 1, flexDirection: 'row', backgroundColor: 'transparent', justifyContent: 'center', alignItems:'center'}}>
                        <View style={{flex: 0.5, transform: [{scale: 0.7}, {translateX:0}, {translateY:0}]}}>
                            { this.props.opponentSkaterCards[1] ?
                                <SkaterCard2 skater={this.props.opponentSkaterCards[1]} animate={this.props.gameState.lastWinner === 'O'}/> :
                                null
                            }
                        </View>
                        <View style={{flex: 0.5, transform: [{scale: 0.7}, {translateX:0}, {translateY:0}], justifyContent: 'center', alignItems:'center'}}>
                            <SkaterCard2 skater={this.props.opponentSkaterCards[0]} animate={this.props.gameState.lastWinner === 'O'}/>
                        </View>
                    </View>
                    <View style={{flex: 1, flexDirection: 'row', backgroundColor: 'transparent', justifyContent: 'center', alignItems:'center'}}>
                        <View style={{flex: 0.5, transform: [{scale: 0.7}, {translateX:0}, {translateY:0}]}}>
                            <SkaterCard2 skater={this.props.selectedSkaterCards[0]} animate={this.props.gameState.lastWinner === 'Y'}/>
                        </View>
                        <View style={{flex: 0.5, transform: [{scale: 0.7}, {translateX:0}, {translateY:0}]}}>
                            { this.props.selectedSkaterCards[1] ?
                                <SkaterCard2 skater={this.props.selectedSkaterCards[1]} animate={this.props.gameState.lastWinner === 'Y'}/> :
                                null
                            }
                        </View>
                    </View>
                    <TouchableOpacity onPress={ () => {
                        this.nextTurn();
                    }}>
                        <Text>Next turn</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
            <View style={{flex: 0.12, opacity:this.opacity(), backgroundColor: '#9198a5',  transform: [{rotate: '0deg'}]}}>
                <View style={styles.container2}>
                        {
                            this.props.opponentDeck.map(function (skater) {
                                return <View key={'o_' + skater.id} style={{width: 55, height: 70, opacity:1, margin:2, borderWidth:1, borderRadius:3}}>
                                <View style={{flex:1, backgroundColor:'silver'}}>
                                    <Image source={{uri: 'https://vignette4.wikia.nocookie.net/logopedia/images/d/da/BradMiclette-Logo.png/revision/latest?cb=20140713045541'}}
                                           style={{flex: 0.5, width: null, height: null}}
                                           resizeMode='contain'/>
                                    </View>
                                </View>
                            }, this)
                        }
                    </View>
            </View>

            <View style={{flex: 0.05, backgroundColor: 'black', opacity:this.opacity()}}>
                <PlayerScoreBoard name="Colliwog44" score={this.props.gameState.o}/>
            </View>
                <View style={{flex: 0.59, backgroundColor: 'transparent', justifyContent: 'center', alignItems: 'center'}}>
                    <View style={{transform: [{scale: 1}, {translateX:0}, {translateY:0}]}}>
                        <MoveCard move={this.props.moves[this.props.gameState.turn]}/>
                    </View>
                </View>
            <View style={{flex: 0.05, alignItems:'center', justifyContent:'center'}}>
            {
                !this.props.gameState.gameOver && this.props.gameState.turnInProgress && <Text style={styles.buttonStyle} onPress={ () => this.nextTurn() }>TOUCH TO CONTINUE</Text>
            }

            {
                this.props.gameState.gameOver && <Text style={styles.buttonStyle} onPress={ () => {
                    Actions.skaterpicks();
                } }>GAME OVER - TOUCH TO CONTINUE</Text>
            }
            </View>
                <View style={{flex: 0.05, backgroundColor: 'black', opacity:this.opacity()}}>
                    <PlayerScoreBoard name="Palmer Molloy" score={this.props.gameState.y}/>
                </View>
                <View style={{flex: 0.12, backgroundColor: '#9198a5', opacity: this.opacity()}} pointerEvents={this.pointer()}>
                    <View style={styles.container2}>
                        {
                            this.props.skaterDeck.map(function (skater) {
                                return <View key={'y:' + skater.id} pointerEvents={this.isPlayable(skater, this.props.moves[this.props.gameState.turn]) ? 'auto' : 'none' }>
                                    <TouchableOpacity onPress={ () => this.selectSkaterCard(skater) }>
                                        <SkaterCard skater={skater} move={this.props.moves[this.props.gameState.turn]} isPlayable={this.isPlayable(skater, this.props.moves[this.props.gameState.turn])}/>
                                    </TouchableOpacity>
                                </View>
                            }, this)
                        }
                    </View>
                </View>
        </Image>;
    }
}

const styles = StyleSheet.create({
    container2: {
        flex: 1,
        backgroundColor: 'transparent',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonStyle : {
        backgroundColor: 'transparent',
        fontSize: 20,
        paddingTop: 20,
        fontWeight: 'bold',
        fontFamily: 'SkaterGirlsRock',
        textShadowColor: 'black',
        color: 'white',
        textShadowRadius: 2,
        textShadowOffset: {width: 2, height: 2}
    }
    }
);

export {GameScreen}
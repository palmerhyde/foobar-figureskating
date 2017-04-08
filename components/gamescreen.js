import React, {Component} from 'react';

import {
    Button,
    Image,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    AppRegistry
} from 'react-native';

import { Actions } from 'react-native-router-flux';

import {Disciplines} from '../util/enums'

import {SkaterCard} from './skatercard';
import {SkaterCard2} from './skatercard2';
import {MoveCard} from './movecard';
import {FlipSkaterCard} from './flipskatercard';

class GameScreen extends Component {

    constructor(props) {
        super(props);
        this.refresh = this.refresh.bind(this);
        this.state = { isFlipped: false, isFlipped2: false };
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
    }

    selectSkaterCard(skater) {
        this.props.setTurnInProgress(true);
        this.props.selectSkaterCard(skater);
        this.flip()
    }

    nextTurn() {
        this.flip();
        // TODO: hook into animation so we see the card when flipping back
        this.props.setTurnInProgress(false);
        this.props.resetSelectedSkaterCard();
        this.props.removeOpponentSkaterCardFromDeck(this.props.opponentSkaterCard);
        this.props.resetOpponentSkaterCard();
        this.props.incrementTurn();
    }

    // Style
    flip()  {
        // Chain 2 animations
        this.setState({isFlipped: !this.state.isFlipped});
        let foo = this;

        setTimeout(function() {
            foo.setState({isFlipped2: !foo.state.isFlipped2});
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
            return 0.1;
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
        // TODO: add null checks to ensure moves and skater decks are valid before rendering
        if (!this.props.moves || this.props.moves.length == 0) {
            // TODO - render spinner?
            return null;
        }

        return <Image resizeMode='cover' source={require('../assets/images/icerink2.jpg')} style={{width: null, height: null, 'flex': 1}}>
            <View style={{flex: 0.1}}>
                <View style={{flex: 1, flexDirection: 'row', backgroundColor: 'pink', justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{fontSize: 16, fontWeight: 'bold'}}>{this.props.gameState.y}</Text>
                    <MoveCard move={this.props.moves[this.props.gameState.turn]}/>
                    <Text style={{fontSize: 16, fontWeight: 'bold'}}>{this.props.gameState.o}</Text>
                </View>
            </View>
            <View style={{flex: 0., flexDirection: 'row', backgroundColor: 'transparent', justifyContent: 'flex-end', alignItems:'center'}}>
                <View style={{flex:1, backgroundColor: 'transparent', alignItems:'center', alignItems:'center', justifyContent: 'flex-end',  transform: [{scale: 0.55}, {translateX:0}, {translateY:225}]}}>
                    <View style={{transform: [{scale: 0.85}, {translateX:0}, {translateY:0}]}}>
                        <SkaterCard2 skater={this.props.skaterDeck[0]}/>
                    </View>
                    <SkaterCard2 skater={this.props.skaterDeck[1]}/>
                </View>
                <View style={{flex: 1, backgroundColor: 'transparent', alignItems:'center', justifyContent: 'center',  transform: [{scale: 0.55}, {translateX:0}, {translateY:225}]}}>
                    <View style={{transform: [{scale: 0.85}, {translateX:0}, {translateY:0}]}}>
                        <SkaterCard2 skater={this.props.skaterDeck[2]}/>
                    </View>
                    <SkaterCard2 skater={this.props.skaterDeck[3]}/>
                </View>
                <View style={{flex: 1, backgroundColor: 'transparent', alignItems:'center', justifyContent: 'center',  transform: [{scale: 0.55}, {translateX:0}, {translateY:225}]}}>
                    <View style={{transform: [{scale: 0.85}, {translateX:0}, {translateY:0}]}}>
                        <SkaterCard2 skater={this.props.skaterDeck[4]}/>
                    </View>
                    <SkaterCard2 skater={this.props.skaterDeck[5]}/>
                </View>
            </View>
            {
                !this.props.gameState.gameOver && this.props.gameState.turnInProgress && <Button title='Next turn' onPress={ () => this.nextTurn() }/>
            }

            {
                this.props.gameState.gameOver && <Button title='Game Over - Continue' onPress={ () => {
                    Actions.skaterpicks();
                } }/>
            }
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
        }
    }
);

export {GameScreen}

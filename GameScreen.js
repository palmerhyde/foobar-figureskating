// TODO: rename HomeScreen -> GameScreen

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

import {
    MENS_SINGLES,
    LADIES_SINGLES,
    PAIRS,
    ICE_DANCING
} from './util/disciplines';

import {SkaterCard} from './components/skatercard';
import {MoveCard} from './components/movecard';
import {FlipSkaterCard} from './components/flipskatercard';

class GameScreen extends Component {

    constructor(props) {
        super(props);
        this.refresh = this.refresh.bind(this);
        this.state = { isFlipped: false, isFlipped2: false };
    }

    componentWillMount() {
        console.log('componentWillMount');
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
        this.props.setTurnInProgress(false);
        this.props.resetSelectedSkaterCard();
        // TODO: refactor opponent card to always come from the deck.
        this.props.removeOpponentSkaterCardFromDeck(this.props.opponentSkaterCard);
        this.props.resetOpponentSkaterCard();
        this.props.incrementTurn();
        this.flip()
    }

    flip()  {
        // Chain 2 animations
        this.setState({isFlipped: !this.state.isFlipped});
        let foo = this;

        setTimeout(function() {
            foo.setState({isFlipped2: !foo.state.isFlipped2});
        }, 800, foo);
    }

    pointer() {
        if (this.props.gameState.turnInProgress) {
            return 'none';
        }

        return 'auto';
    }

    opacity() {
        if (this.props.gameState.turnInProgress) {
            return 0.1;
        }

        return 1;
    }

    // TODO: Move to util.
    isPlayable(skater, move) {
        if (move.discipline == MENS_SINGLES && skater.gender == 'F') {
            return false;
        }

        if (move.discipline == LADIES_SINGLES && skater.gender == 'M') {
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

        return <Image resizeMode='cover' source={require('./assets/images/ice.jpg')}  style={{width: null, height: null, 'flex': 1, justifyContent: 'center', alignItems: 'center'}}>
                <View style={{flex: 0.1}}>
                    <View style={{flex: 1, flexDirection: 'row', backgroundColor: 'transparent', justifyContent: 'center', alignItems: 'center'}}>
                        <Text style={{fontSize: 16, fontWeight: 'bold'}}>{this.props.gameState.y}</Text>
                        <MoveCard move={this.props.moves[this.props.gameState.turn]}/>
                        <Text style={{fontSize: 16, fontWeight: 'bold'}}>{this.props.gameState.o}</Text>
                    </View>
                </View>
                <View style={{flex: 0.25, flexDirection: 'row', backgroundColor: 'transparent', justifyContent: 'center'}}>
                    <FlipSkaterCard isFlipped={this.state.isFlipped} skater={this.props.selectedSkaterCard} back={'data:image/jpeg;base64,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'}/>
                    <Text>VS</Text>
                    <FlipSkaterCard isFlipped={this.state.isFlipped2} skater={this.props.opponentSkaterCard} back={'data:image/jpeg;base64,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'}/>
                </View>
                <View style={{flex: 0.33, backgroundColor: 'transparent', opacity: this.opacity()}} pointerEvents={this.pointer()}>
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
            {
                !this.props.gameState.gameOver && this.props.gameState.turnInProgress && <Button title='Next turn' onPress={ () => this.nextTurn() }/>
            }

            {
                this.props.gameState.gameOver && <Button title='Game Over - Continue' onPress={ () => {
                    Actions.splash();
                } }/>
            }
        </Image>;
    }
}

const styles = StyleSheet.create({
    container2: {
        marginTop: 5,
        marginBottom: 5,
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        backgroundColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'flex-start'
    }
    }
);

export {GameScreen}
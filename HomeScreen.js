import React, {Component} from 'react';

import {
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    AppRegistry
} from 'react-native';

import {SkaterCard} from './components/skatercard';
import {MoveCard} from './components/movecard';
import {JukeBox} from './components/jukebox';

class HomeScreen extends Component {

    constructor(props) {
        super(props);
        this.refresh = this.refresh.bind(this);
    }

    componentWillMount() {
        this.refresh();
    }

    componentWillReceiveProps(nextProps) {
        //this.setState({
        //    skaters: nextProps.skaters,
        //    move: nextProps.move,
        //    opponentSkaterCard: nextProps.opponentSkaterCard
        //});
    }

    refresh() {
        if (this.props.loadSkaterCards) {
            this.props.loadSkaterCards();
        }

        if (this.props.waitForMoves) {
            this.props.waitForMoves();
        }

        if (this.props.waitForOpponentSkater) {
            this.props.waitForOpponentSkater();
        }
    }

    selectSkaterCard(skater) {
        this.props.selectSkaterCard(skater);
    }

    render() {
        return <ScrollView keyboardShouldPersistTaps={'always'}>
                <JukeBox/>
                <MoveCard key={this.props.move.id} move={this.props.move}/>

                <Text>Opponent</Text>

                {this.props.opponentSkaterCard.name ?
                        <SkaterCard key={'o:' + this.props.opponentSkaterCard.id} skater={this.props.opponentSkaterCard} />
                 : <Text>Waiting for opponent.</Text>
                }

                <Text>Your Skaters</Text>
                <View style={styles.container2}>

                {
                    this.props.skaters.map(function(skater) {
                        return <TouchableOpacity key={'y:' + skater.id} onPress={ () => this.selectSkaterCard(skater) }>
                            <SkaterCard skater={skater} />
                        </TouchableOpacity>
                    }, this)
                }
                </View>

            </ScrollView>;
    }
}

const styles = StyleSheet.create({
        container: {
            flex: 1,
            marginTop: 60,
            marginBottom: 60,
            flexDirection: 'row',
            backgroundColor: 'blue'
        },
    container2: {
        flex: 1,
        marginTop: 60,
        marginBottom: 60,
        flexDirection: 'column'
    }
    }
);

export {HomeScreen}
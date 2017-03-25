import React, {Component} from 'react';

import {
    Alert,
    Animated,
    Button,
    Easing,
    Image,
    Modal,
    ScrollView,
    StyleSheet,
    Text,
    TouchableHighlight,
    TouchableOpacity,
    View,
    AppRegistry
} from 'react-native';

import {Header} from './header';
import {SkaterCard2} from './skatercard2';
import {SwapSkater} from './swapskater'

import { Actions, ActionConst } from 'react-native-router-flux';

class Deck extends Component {

    constructor(props) {
        super(props);
        this.state = {
            modalVisible: false,
            selectedSkater: {}
        }
    }

    static propTypes = {
        // this.props.setPotentialTrainingSkaters
        // this.props.skaterDeck
        // this.props.potentialTrainerSkaters
        // this.props.swapSkater
    };

    componentDidMount () {
        this.props.setPotentialTrainingSkaters();

        // BUG BUG - deck is overridden on first load with original deck.
    }

    setModalVisible(visible, skater) {
        this.setState(
            {
                modalVisible: visible,
                selectedSkater: skater

            });
    }

    // TODO - helper function, does not belong here
    deckRank () {
        return this.skaterOverall(this.props.skaterDeck[0])
            + this.skaterOverall(this.props.skaterDeck[1])
            + this.skaterOverall(this.props.skaterDeck[2])
            + this.skaterOverall(this.props.skaterDeck[3])
            + this.skaterOverall(this.props.skaterDeck[4])
            + this.skaterOverall(this.props.skaterDeck[5])
    }

    // TODO - helper function, does not belong here
    skaterOverall(skater) {
        return skater.edges + skater.jumps + skater.form + skater.presentation;
    }

    render() {
        return <Image resizeMode='cover' source={require('../assets/images/black.jpg')} style={{width: null, height: null, 'flex': 1}}>
            <Modal
                animationType={"fade"}
                transparent={false}
                visible={this.state.modalVisible}
                onRequestClose={() => {console.log('modal closed')}}
            >
                <SwapSkater close={this.setModalVisible.bind(this)} skaters={this.props.potentialTrainerSkaters} selectedSkater={this.state.selectedSkater} swapSkater={this.props.swapSkater} />
            </Modal>
            <View style={{flex:0.1, backgroundColor: 'transparent'}}>
                <Header title="Your Deck" onBack={ () => {
                    Actions.splash({type:ActionConst.RESET});
                } } showBack={true}/>
            </View>
            <View style={{flex:0.8, backgroundColor:'transparent'}}>
                <View style={{flexDirection:'row', transform: [{scale: 0.60}, {translateX:-125}, {translateY:-90}]}}>
                        <TouchableOpacity onPress= { () => { this.setModalVisible(!this.state.modalVisible, this.props.skaterDeck[0]) }}>
                            <SkaterCard2 skater={this.props.skaterDeck[0]}/>
                        </TouchableOpacity>
                    <TouchableOpacity onPress= { () => { this.setModalVisible(!this.state.modalVisible, this.props.skaterDeck[1]) }}>
                        <SkaterCard2 skater={this.props.skaterDeck[1]}/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress= { () => { this.setModalVisible(!this.state.modalVisible, this.props.skaterDeck[2]) }}>
                        <SkaterCard2 skater={this.props.skaterDeck[2]}/>
                    </TouchableOpacity>

                </View>
                <View style={{flexDirection:'row', transform: [{scale: 0.60}, {translateX:-125}, {translateY:-280}]}}>
                    <TouchableOpacity onPress= { () => { this.setModalVisible(!this.state.modalVisible, this.props.skaterDeck[3]) }}>
                        <SkaterCard2 skater={this.props.skaterDeck[3]}/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress= { () => { this.setModalVisible(!this.state.modalVisible, this.props.skaterDeck[4]) }}>
                        <SkaterCard2 skater={this.props.skaterDeck[4]}/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress= { () => { this.setModalVisible(!this.state.modalVisible, this.props.skaterDeck[5]) }}>
                        <SkaterCard2 skater={this.props.skaterDeck[5]}/>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{flex:0.1, backgroundColor:'gray'}}>
                <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
                    <Text style={textStyle}>DECK RANK</Text>
                    <Text style={textAttributeStyle}>{this.deckRank()}</Text>
                </View>
            </View>
        </Image>

    }
}

const textStyle = {
    fontFamily: 'SkaterGirlsRock',
    fontSize:18,
    fontWeight: 'bold',
    textShadowColor: 'white',
    color: 'black',
    textShadowRadius: 2,
    textShadowOffset: {width: 2, height: 2},
    textAlign:'center'
};

const textAttributeStyle = {
    fontSize:16,
    fontWeight: 'bold',
    textShadowColor: 'white',
    color: 'black',
    textAlign:'center'
};

export {
    Deck
}


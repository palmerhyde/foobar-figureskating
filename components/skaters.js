import React, {Component} from 'react';

import {
    Alert,
    Animated,
    Button,
    Easing,
    Image,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    AppRegistry
} from 'react-native';

import {SkaterCard2} from './skatercard2';
import {Header} from './header';

import {levelPercent} from '../util/gamehelper';
import {Rarity} from '../util/enums';

import { Actions, ActionConst } from 'react-native-router-flux';

class Skaters extends Component {

    constructor(props) {
        super(props);
        console.log('constructor');
    }

    componentDidMount () {
        console.log('componentDidMount');
        // Load Skaters
        if (this.props.loadSkaterCards) {
            this.props.loadSkaterCards();
        }

        // TODO: why are we loading the skater deck here?
        if (this.props.loadSkaterDeck) {
            this.props.loadSkaterDeck();
        }
    }

    levelPercent () {
        let percent = (levelPercent(this.props.selectedSkater)) / 100;
        if (isNaN(percent)) {
            percent = 0.0;
        }

        return percent
    }

    getRarityCardStyle (rarity) {
        switch (rarity) {
            case Rarity.REGIONAL:
                return {backgroundColor:'gold'};
            case Rarity.SECTIONAL:
                return {backgroundColor:'hotpink'};
        }

        return {};
    }

    render() {
        console.log('render');
        return <Image resizeMode='cover' source={require('../assets/images/black.jpg')} style={{width: null, height: null, 'flex': 1}}>
            <View style={{flex:0.1, backgroundColor: 'transparent'}}>
                <Header title="Your Skaters" onBack={ () => {
                    this.props.selectMyCardsSkater({});
                    Actions.splash({type:ActionConst.RESET});
                } } showBack={true}/>
            </View>
            <View style={{flex:0.70, backgroundColor:'transparent'}}>
                <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
                    <TouchableOpacity onPress={ () => {
                            if (!this.props.selectedSkater.maxLevel) {
                                Actions.train({duration: 800, direction: 'horizontal'});
                            }
                            else {
                                Alert.alert(
                                    'Max Level ' + this.props.selectedSkater.level,
                                    'Level cap for ' + this.props.selectedSkater.name + ' has been reached',
                                );
                            }
                        }
                    }>
                        { this.props.selectedSkater.name ?
                            <SkaterCard2 skater={this.props.selectedSkater} animate={true}
                                         progress={this.levelPercent()}/>
                            :
                            <Text>Select a skater</Text>
                        }
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{flex:0.20, backgroundColor:'gray'}}>
                <ScrollView horizontal={true} style={{flex:1, flexDirection: 'row'}}>
                    {
                        this.props.skaters.map(function (skater) {
                            return <TouchableOpacity key={skater.id} onPress={
                                () => {
                                    this.props.selectMyCardsSkater(skater);
                                }
                            }>
                                <View  style={StyleSheet.flatten([styles.container2, this.getRarityCardStyle(skater.rarity)])}>
                                    <Text style={styles.title} numberOfLines={1}>{skater.name.toUpperCase()}</Text>
                                    <Image
                                        source={{uri: skater.photo}}
                                        style={{width: 95, height: null, flex:1, opacity:0.4}}
                                    />
                                </View>
                            </TouchableOpacity>
                        }, this)
                    }
                </ScrollView>
            </View>
        </Image>
    }
}

const styles = StyleSheet.create({
    title: {
        fontSize: 16,
        paddingBottom: 5,
        fontWeight: 'bold',
        fontFamily: 'SkaterGirlsRock',
        textShadowColor: 'black',
        color: 'white',
        textShadowRadius: 2,
        textShadowOffset: {width: 2, height: 2}
    },
    title2: {
        fontSize: 17,
        backgroundColor: 'transparent',
        fontWeight: 'bold',
        fontFamily: 'SkaterGirlsRock',
        textShadowColor: 'black',
        color: 'white',
        textShadowRadius: 2,
        textShadowOffset: {width: 2, height: 2},
    },
    cardtext: {
        fontSize: 12,
        fontWeight: 'bold',
        backgroundColor: 'transparent',
        fontFamily: 'SkaterGirlsRock',
        textShadowColor: 'black',
        color: 'white',
        textShadowRadius: 1,
        textShadowOffset: {width: 1, height: 1},
        padding: 2
    },
    container2: {
        backgroundColor: 'silver',
        justifyContent: 'center',
        alignItems: 'center',
        width:100,
        flex: 1,
        borderWidth: 3,
        marginLeft: 3,
        marginRight: 3,
        marginTop: 3,
        marginBottom: 3,
        borderRadius: 6
    },
    card: {
        width:200,
        height: 300,
        backgroundColor: 'transparent',
        //justifyContent: 'flex-end',
        //alignItems: 'flex-end',
        borderWidth: 0,
        marginLeft: 3,
        marginRight: 3,
        marginTop: 3,
        marginBottom: 3,
        borderRadius: 0,
    }
});

export {
    Skaters
}


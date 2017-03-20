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

import {levelPercent} from '../util/gamehelper'

import { Actions, ActionConst } from 'react-native-router-flux';

class Skaters extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount () {
        // Load Skaters
        if (this.props.loadSkaterCards) {
            this.props.loadSkaterCards();
        }

        if (this.props.loadSkaterDeck) {
            this.props.loadSkaterDeck();
        }
    }

    onBack () {
        //console.log('test onback');
        //Actions.skaters({direction:'leftToRight'})
    }

    levelPercent () {
    let percent = (levelPercent(this.props.selectedSkater)) / 100;
    console.log(percent);
    if (isNaN(percent)) {
        percent = 0.0;
    }

    return percent
}

    render() {
        return <Image resizeMode='cover' source={require('../assets/images/black.jpg')} style={{width: null, height: null, 'flex': 1}}>
            <View style={{flex:0.1, backgroundColor: 'transparent'}}>
                <Header title="Your Skaters" onBack={ () => {
                    Actions.splash({type:ActionConst.RESET});
                } } showBack={true}/>
            </View>
            <View style={{flex:0.70, backgroundColor:'transparent'}}>
                <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
                    <TouchableOpacity onPress={ () => {
                            //Actions.train({type:ActionConst.POP_AND_REPLACE, duration:800, direction:'horizontal', onBack:this.onBack, hideBackImage:false});
                            Actions.train({duration:800, direction:'horizontal'});
                        }
                    }>
                        <SkaterCard2 skater={this.props.selectedSkater} animate={true} progress={this.levelPercent()} />
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
                                <View  style={styles.container2}>
                                    <Text style={styles.title} numberOfLines={1}>{skater.name.toUpperCase()}</Text>
                                    <Image
                                        source={{uri: skater.photo}}
                                        style={{width: 95, height: null, flex:1}}
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


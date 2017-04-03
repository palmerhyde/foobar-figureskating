import React, {Component} from 'react';

import {
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

import FlipView from 'react-native-flip-view'
import {SkaterCard2} from './skatercard2';

class IceRink extends Component {

    constructor(props) {
        super(props);
        this.animatedValue = new Animated.Value(0);
    }

    componentDidMount () {
        //this.state = {
        //    trainingCard: this.props.skaterTrainingList[0],
        //    animationComplete: false,
        //    progress: 0
        //};
        this.transform();
    }

    transform () {
        this.animatedValue.setValue(0);
        Animated.timing(
            this.animatedValue,
            {
                toValue: 1,
                duration: 20000,
                easing: Easing.linear
            }
        ).start(() => {
            this.transform ()
        });
    }

    render() {
        const transform = this.animatedValue.interpolate({
            inputRange:  [0, 0.25, 0.5, 0.75, 1],
            outputRange: [0, -400, 600,   -800, 0]
        });

        const scale = this.animatedValue.interpolate({
            inputRange:  [0,  0.25, 0.5, 0.75, 1],
            outputRange: [1.0, 2.5, 2.5, 1.0,  1.0]
        });

        return <View>
            <Animated.Image source={require('../assets/images/icerink2.jpg')} style={{
                overflow: 'hidden',
                backgroundColor:'blue',
                transform: [
                    {translateX: transform},
                    {scale: scale}
                ]
            }}>
                <View style={{
                    backgroundColor:'white',
                    opacity:0.65,
                    flex:1
                }}></View>
            </Animated.Image>
            <View style={{alignItems:'center', justifyContent:'center', transform: [{translateY:-350}, {scale:0.6}]}}>
                <SkaterCard2 skater={skater}/>
            </View>
        </View>
    }
}

const skater = {
        'id' : 1,
        'name' : 'Tara Lipinski',
        'edges' : 100,
        'jumps' : 66,
        'form' : 34,
        'presentation' : 78,
        'photo' : 'http://www.arabiaweddings.com/sites/default/files/news/2015/12/tara_lipinski.png',
        'skill' : {
            'name' : 'Edge',
            'value' : 50
        },
        'level' : 1,
        'discipline' : 'LADIES_SINGLES',
        'gender' : 'F',
        'xp' : 0,
        'rarity': 'LOCAL'
};



export {
    IceRink
};

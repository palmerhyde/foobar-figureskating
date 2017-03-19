import React, {Component} from 'react';
import { Actions, ActionConst } from 'react-native-router-flux';

import {
    Animated,
    Easing,
    Image,
    Text,
    View
} from 'react-native';

import JukeBox from '../components/jukebox';

class SplashScreen extends Component {

    constructor(props) {
        super(props);
        this.rotateValue = new Animated.Value(0);
    }

    componentDidMount () {
        //this.rotate();
    }

    rotate () {
        this.rotateValue.setValue(0);
        Animated.timing(
            this.rotateValue,
            {
                toValue: 1,
                duration: 1000,
                easing: Easing.linear
            }
        ).start(() => this.rotate())
    }

    render() {
        console.log(this.props);
        const rotate = this.rotateValue.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '360deg']
        });

        return <Animated.Image resizeMode='cover' source={require('../assets/images/ice.jpg')}  style={{width: null, height: null, flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Animated.Image style={{
                top: -200,
                width: 216,
                transform: [{rotate: rotate}],
                height: 90,
            }} source={{uri: 'https://vignette4.wikia.nocookie.net/logopedia/images/d/da/BradMiclette-Logo.png/revision/latest?cb=20140713045541'}}/>


            <Text onPress={Actions.game} style={{fontSize: 20, color: 'black', fontWeight: 'bold'}}>Play</Text>
            <Text onPress={Actions.skaters} style={{fontSize: 20, color: 'black', fontWeight: 'bold'}}>Skaters</Text>
        </Animated.Image>

    }
}

export {SplashScreen}
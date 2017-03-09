import React, {Component} from 'react';
import { Actions } from 'react-native-router-flux';

import {
    Image,
    Text,
    View
} from 'react-native';

import {JukeBox} from '../components/jukebox';

class SplashScreen extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        return <Image resizeMode='cover' source={require('../assets/images/ice.jpg')}  style={{width: null, height: null, flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text onPress={Actions.game} style={{fontSize: 20, color: 'black', fontWeight: 'bold'}}>Blades of Steel</Text>
            <JukeBox/>
            <Text onPress={Actions.skaters} style={{fontSize: 20, color: 'black', fontWeight: 'bold'}}>Skaters</Text>
        </Image>

    }
}

export {SplashScreen}

// TODO: completly reset games in-progress.
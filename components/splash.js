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
import {Login} from '../components/login';

class SplashScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loggedIn: false
        };
    }

    componentDidMount () {
        this.props.loadAllSkaters();
    }

    login () {
        this.setState(
                {loggedIn: true}
            );
    }

    render() {
        return <Image resizeMode='cover' source={require('../assets/images/ice.jpg')}  style={{width: null, height: null, flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Image style={{
                top: -200,
                width: 216,
                height: 90,
            }} source={{uri: 'https://vignette4.wikia.nocookie.net/logopedia/images/d/da/BradMiclette-Logo.png/revision/latest?cb=20140713045541'}}/>
                <View>
                    <Login />
                    <Text onPress={Actions.game} style={{fontSize: 20, color: 'black', fontWeight: 'bold'}}>Play</Text>
                    <Text onPress={Actions.deck} style={{fontSize: 20, color: 'black', fontWeight: 'bold'}}>Deck</Text>
                    <Text onPress={Actions.skaters} style={{fontSize: 20, color: 'black', fontWeight: 'bold'}}>Skaters</Text>
                    <Text onPress={Actions.skaterpicks} style={{fontSize: 20, color: 'black', fontWeight: 'bold'}}>Picks</Text>
                </View>

        </Image>

    }
}

export {SplashScreen}
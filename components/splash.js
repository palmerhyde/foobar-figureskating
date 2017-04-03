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
                    <Text onPress={Actions.game} style={textButtonStyle}>PLAY</Text>
                    <Text onPress={Actions.deck} style={textButtonStyle}>DECK</Text>
                    <Text onPress={Actions.skaters} style={textButtonStyle}>SKATERS</Text>
                    <Text onPress={Actions.skaterpicks} style={textButtonStyle}>PICKS</Text>
                    <Text onPress={Actions.icerink} style={textButtonStyle}>ICE RINK</Text>
                </View>

        </Image>

    }
}

const textButtonStyle = {
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
    fontFamily: 'SkaterGirlsRock',
    textShadowColor: 'white',
    textShadowRadius: 1,
    textShadowOffset: {width: 1, height: 1},
    padding: 2,
    margin:2,
    backgroundColor:'silver'
};

export {SplashScreen}
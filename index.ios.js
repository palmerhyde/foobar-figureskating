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

import {
    SkaterCard
} from './components/skatercard';

import Skaters from './assets/data/skaters';

const Sound = require('react-native-sound');
var s;

class foobarfigureskating extends Component {

    constructor(props) {
        super(props);

        var i = Math.floor((Math.random() * 2) + 1);

        var music = (i ==1) ? "Warriors.mp3":"Bolero.mp3";

        s = new Sound(music, Sound.MAIN_BUNDLE, (e) => {
            if (e) {
                console.log('error', e);
            } else {
                //s.setSpeed(1);
                console.log('duration', s.getDuration());
            }
        });
    }

    render() {
        return <ScrollView>
            {
                Skaters.map(function(skater) {
                    console.log('skater:' + JSON.stringify(skater));
                    return <SkaterCard key={skater.id} skater={skater} />
                })
            }
            <Button
                title="play"
                onPress={this.playSound}
            />
            <Button
                title="stop"
                onPress={this.stopSound}
            />
        </ScrollView>;
    }

    playSound() {
        s.play();
    }

    stopSound() {
        s.pause();
    }
}

export default foobarfigureskating;

AppRegistry.registerComponent('foobarfigureskating', () => foobarfigureskating);
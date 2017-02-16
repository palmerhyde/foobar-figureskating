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

        let i = Math.floor((Math.random() * 3) + 1);
        let music;

        switch (i) {
            case 1:
                music = 'Glorious.mp3';
                break;
            case 2:
                music = 'Warriors.mp3';
                break;
            case 3:
                music = 'Bolero.mp3';
                break;
            default:
                music = 'Glorious.mp3';
        }

        s = new Sound(music, Sound.MAIN_BUNDLE, (e) => {
            if (e) {
                console.log('error', e);
            } else {
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
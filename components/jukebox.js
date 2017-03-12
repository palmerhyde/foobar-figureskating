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

const Sound = require('react-native-sound');
var s;

class JukeBox extends Component {

    constructor(props) {
        super(props);

        let i = Math.floor((Math.random() * 4) + 1);
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
            case 4:
                music = 'Flash.mp3';
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
        console.log(this.props);
        return <View style={{flexDirection: 'row'}}>
            <Button
                title="p"
                onPress={this.playSound}
            />
            <Button
                title="s"
                onPress={this.stopSound}
            />
        </View>

    }

    playSound() {
        s.play();
    }

    stopSound() {
        s.pause();
    }
}

const styles = StyleSheet.create({
    button: {
        marginRight: 5
    }
});

export default JukeBox
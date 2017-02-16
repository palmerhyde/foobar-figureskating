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

import {JukeBox} from './components/jukebox';

import Skaters from './assets/data/skaters';

class foobarfigureskating extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return <ScrollView>
            <JukeBox/>
            {
                Skaters.map(function(skater) {
                    return <SkaterCard key={skater.id} skater={skater} />
                })
            }
        </ScrollView>;
    }
}

export default foobarfigureskating;

AppRegistry.registerComponent('foobarfigureskating', () => foobarfigureskating);
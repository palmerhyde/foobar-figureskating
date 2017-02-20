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

import {SkaterCard} from './components/skatercard';
import {MoveCard} from './components/movecard';
import {JukeBox} from './components/jukebox';
import Skaters from './assets/data/skaters';
import Moves from './assets/data/moves';

class App extends Component {

    constructor(props) {
        super(props);
    }

    playCard(skater) {
        console.log(skater);
    }

    render() {
        return <ScrollView>
            <JukeBox/>
            <MoveCard key={Moves[0].id} move={Moves[0]}/>

            {
                Skaters.map(function(skater) {
                    return <TouchableOpacity>
                        <SkaterCard key={skater.id} skater={skater} />
                    </TouchableOpacity>
                })
            }

        </ScrollView>;
    }
}

export {
    App
}
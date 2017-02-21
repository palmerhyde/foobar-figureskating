import React, {Component} from 'react';

import {
    ScrollView,
    Text,
    TouchableOpacity,
    AppRegistry
} from 'react-native';

import {SkaterCard} from './components/skatercard';
import {MoveCard} from './components/movecard';
import {JukeBox} from './components/jukebox';
import Moves from './assets/data/moves';

class HomeScreen extends Component {

    constructor(props) {
        super(props);
        this.refresh = this.refresh.bind(this);
    }

    componentWillMount() {
        this.refresh();
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            skaters: nextProps.skaters
        });
    }

    refresh() {
        if (this.props.loadSkaterCards) {
            this.props.loadSkaterCards();
        }
    }

    playCard(skater) {
        // TODO - something with stores and actions
        console.log(skater);
    }

    render() {
        return <ScrollView keyboardShouldPersistTaps={'always'}>
                <JukeBox/>
                <MoveCard key={Moves[0].id} move={Moves[0]}/>

                {
                    this.props.skaters.map(function(skater) {
                        return <TouchableOpacity onPress={ () => this.playCard(skater) }>
                            <SkaterCard key={skater.id} skater={skater} />
                        </TouchableOpacity>
                    }, this)
                }

            </ScrollView>;
    }
}

export {
    HomeScreen
}
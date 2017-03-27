import React, {Component ,PropTypes} from 'react';
import { Actions, ActionConst } from 'react-native-router-flux';

import {
    Animated,
    Button,
    Easing,
    Image,
    Text,
    ScrollView,
    StyleSheet,
    TouchableOpacity,
    View,
} from 'react-native';

import {Header} from './header';
import {Pick} from './pick';
import _ from 'lodash';


class SkaterPicks extends Component {

    constructor(props) {
        super(props);
    }

    static propTypes = {
        //selectedSkater: PropTypes.object.isRequired,
        //skaterTrainingList: React.PropTypes.arrayOf(React.PropTypes.object)
    };

    componentDidMount () {
    }

    onBack () {
        Actions.splash();
    }

    shuffleSkaters () {
        console.log('$$$$$$$$$$');
        let x =  _.shuffle(this.props.allSkaters)[0];
        console.log(x);
        return x;
    }

    render() {
        return <Image resizeMode='cover' source={require('../assets/images/black.jpg')}  style={{width: null, height: null, flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <View style={{flex:1, alignSelf: 'stretch'}}>
                    <View style={{flex:0.1, backgroundColor: 'transparent'}}>
                        <Header title={'PICK SKATERS'} onBack={this.onBack} showBack={true}/>
                    </View>
                    <View style={{flex:0.75, backgroundColor: 'transparent', justifyContent: 'center', alignItems: 'center'}}>
                        <View style={{flex:1, flexDirection:'row'}}>
                            <Pick skater={this.shuffleSkaters()} />
                            <Pick skater={this.shuffleSkaters()} />
                            <Pick skater={this.shuffleSkaters()} />
                            <Pick skater={this.shuffleSkaters()} />
                            <Pick skater={this.shuffleSkaters()} />
                        </View>
                        <View style={{flex:1, flexDirection:'row'}}>
                            <Pick skater={this.shuffleSkaters()} />
                            <Pick skater={this.shuffleSkaters()} />
                            <Pick skater={this.shuffleSkaters()} />
                            <Pick skater={this.shuffleSkaters()} />
                            <Pick skater={this.shuffleSkaters()} />
                        </View>
                        <View style={{flex:1, flexDirection:'row'}}>
                            <Pick skater={this.shuffleSkaters()} />
                            <Pick skater={this.shuffleSkaters()} />
                            <Pick skater={this.shuffleSkaters()} />
                            <Pick skater={this.shuffleSkaters()} />
                            <Pick skater={this.shuffleSkaters()} />
                        </View>
                        <View style={{flex:1, flexDirection:'row'}}>
                            <Pick skater={this.shuffleSkaters()} />
                            <Pick skater={this.shuffleSkaters()} />
                            <Pick skater={this.shuffleSkaters()} />
                            <Pick skater={this.shuffleSkaters()} />
                            <Pick skater={this.shuffleSkaters()} />
                        </View>
                        <View style={{flex:1, flexDirection:'row'}}>
                            <Pick skater={this.shuffleSkaters()} />
                            <Pick skater={this.shuffleSkaters()} />
                            <Pick skater={this.shuffleSkaters()} />
                            <Pick skater={this.shuffleSkaters()} />
                            <Pick skater={this.shuffleSkaters()} />
                        </View>
                    </View>
                    <View style={{flex:0.15, backgroundColor: 'silver', justifyContent:'center', alignItems:'center'}}>
                        <Text>{this.props.picks} picks</Text>
                    </View>
                </View>
        </Image>
    }
}

const cardBackStyle = {
    backgroundColor:'pink',
    width:30,
    height:45,
    margin:15
};

export {SkaterPicks}
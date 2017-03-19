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

import {SkaterCard2} from './skatercard2';
import {Header} from './header';


class ApplyTraining extends Component {

    constructor(props) {
        super(props);
        this.scaleValue = new Animated.Value(0);
        this.trainingIndex = 0;
        this.state = {
            trainingCard: this.props.skaterTrainingList[0]
        };
    }

    static propTypes = {
        selectedSkater: PropTypes.object.isRequired,
        skaterTrainingList: React.PropTypes.arrayOf(React.PropTypes.object)
    };

    componentDidMount () {
        this.state = {
            trainingCard: this.props.skaterTrainingList[0],
            animationComplete: false,
            progress: 0
        };
        this.scale();
    }

    // TODO: investigate sequence array.
    scale () {
        this.scaleValue.setValue(0);
        Animated.timing(
            this.scaleValue,
            {
                toValue: 1,
                duration: 1500,
                easing: Easing.linear
            }
        ).start(() => {
            if (this.trainingIndex < this.props.skaterTrainingList.length-1) {
                this.trainingIndex++;
                this.setState(
                    {
                        trainingCard: this.props.skaterTrainingList[this.trainingIndex],
                    });

                this.scale();
            }
            else {
                // animation complete, render button and XP increase
                this.setState(
                    {
                        animationComplete: true,
                        progress: 0.8
                    });

                this.props.setSkaterTrainingListStore([]);
            }
        });
    }

    even() {
        if (this.trainingIndex % 2 === 0) {
            return ['-45deg', '0deg'];
        }
        else {
            return ['45deg', '0deg'];
        }
    }

    onBack() {
        Actions.skaters();
    }

    render() {
        const scale = this.scaleValue.interpolate({
            inputRange: [0, 1],
            outputRange: [3, 0]
        });
        const rotate = this.scaleValue.interpolate({
            inputRange: [0, 1],
            outputRange: this.even()
        });
        return <Image resizeMode='cover' source={require('../assets/images/black.jpg')}  style={{width: null, height: null, flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            { this.props.selectedSkater.name ?
                <View style={{flex:1, alignSelf: 'stretch'}}>
                    <View style={{flex:0.1, backgroundColor: 'transparent'}}>
                        <Header title={'Train ' + this.props.selectedSkater.name} onBack={this.onBack} showBack={this.state.animationComplete}/>
                    </View>
                    <View style={{flex:0.8, backgroundColor: 'transparent', justifyContent: 'center', alignItems: 'center'}}>
                        <View style={{position: 'absolute', backgroundColor:'transparent', left:10, right: 10, justifyContent: 'center', alignItems: 'center'}}>
                            <SkaterCard2 skater={this.props.selectedSkater} animate={true} progress={this.state.progress}/>
                        </View>
                            <Animated.View pointerEvents="none" style={{transform: [
                                {scale: scale},
                                {rotate: rotate}
                                ]}}>
                                <SkaterCard2 skater={this.state.trainingCard} />
                            </Animated.View>

                    </View>
                    <View style={{flex:0.1, backgroundColor: 'transparent', justifyContent:'center', alignItems:'center'}}>
                    </View>
                </View>
                : <Text>Error: no selected skater!</Text>
            }

        </Image>
    }
}

export {ApplyTraining}
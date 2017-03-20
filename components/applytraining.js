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
        this.opacityValue = new Animated.Value(0);
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

    opacity () {
        this.opacityValue.setValue(0);
        Animated.timing(
            this.opacityValue,
            {
                toValue: 1,
                duration: 1000,
                easing: Easing.linear
            }
        ).start(() => {
            // console.log();
        });
    }

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
                this.opacity();

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

        const opacity = this.opacityValue.interpolate({
            inputRange: [0, 1],
            outputRange: [0.0, 1.0]
        });
        return <Image resizeMode='cover' source={require('../assets/images/black.jpg')}  style={{width: null, height: null, flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            { this.props.selectedSkater.name ?
                <View style={{flex:1, alignSelf: 'stretch'}}>
                    <View style={{flex:0.1, backgroundColor: 'transparent'}}>
                        <Header title={'Train ' + this.props.selectedSkater.name} onBack={this.onBack} showBack={this.state.animationComplete}/>
                    </View>
                    <View style={{flex:0.75, backgroundColor: 'transparent', justifyContent: 'center', alignItems: 'center'}}>
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
                    <Animated.View style={{flex:0.15, opacity, backgroundColor: 'silver', justifyContent:'center', alignItems:'center'}}>
                        <View style={{flex:0.4, backgroundColor:'transparent', justifyContent:'center', alignItems:'center'}}>
                            { this.props.selectedSkater.difference.level > 0 ?
                                <Text style={textStyle}>SKATER LEVEL INCREASED BY {this.props.selectedSkater.difference.level}!</Text>
                                :
                                <Text style={textStyle}>SKATER XP INCREASED BY {this.props.selectedSkater.difference.xp}!</Text>
                            }
                        </View>
                        <View style={{flex:0.6, backgroundColor:'transparent', justifyContent:'center', alignItems:'center'}}>
                            <View style={{flex:1, flexDirection:'row', padding:10}}>
                                <View style={{flex:0.20}}>
                                    <Text style={textStyle}>EDGES</Text>
                                    <View style={{flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
                                        <Text style={textAttributeStyle}>{this.props.selectedSkater.difference.edgesBefore}</Text>
                                        { this.props.selectedSkater.difference.edges > 0 ?
                                            <Text style={textPlusStyle}> + {this.props.selectedSkater.difference.edges}</Text> :
                                            null
                                        }
                                    </View>
                                </View>
                                <View style={{flex:0.20}}>
                                    <Text style={textStyle}>JUMPS</Text>
                                    <View style={{flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
                                        <Text style={textAttributeStyle}>{this.props.selectedSkater.difference.jumpsBefore}</Text>
                                        { this.props.selectedSkater.difference.edges > 0 ?
                                            <Text style={textPlusStyle}> + {this.props.selectedSkater.difference.jumps}</Text> :
                                            null
                                        }
                                    </View>
                                </View>
                                <View style={{flex:0.20}}>
                                    <Text style={textStyle}>FORM</Text>
                                    <View style={{flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
                                        <Text style={textAttributeStyle}>{this.props.selectedSkater.difference.formBefore}</Text>
                                        { this.props.selectedSkater.difference.edges > 0 ?
                                            <Text style={textPlusStyle}> + {this.props.selectedSkater.difference.form}</Text> :
                                            null
                                        }
                                    </View>
                                </View>
                                <View style={{flex:0.3}}>
                                    <Text style={textStyle}>PRESENTATION</Text>
                                    <View style={{flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
                                        <Text style={textAttributeStyle}>{this.props.selectedSkater.difference.presentationBefore}</Text>
                                        { this.props.selectedSkater.difference.edges > 0 ?
                                            <Text style={textPlusStyle}> + {this.props.selectedSkater.difference.presentation}</Text> :
                                            null
                                        }
                                    </View>
                                </View>
                            </View>
                        </View>
                    </Animated.View>
                </View>
                : <Text>Error: no selected skater!</Text>
            }

        </Image>
    }
}

const textStyle = {
    fontFamily: 'SkaterGirlsRock',
    fontSize:18,
    fontWeight: 'bold',
    textShadowColor: 'white',
    color: 'black',
    textShadowRadius: 2,
    textShadowOffset: {width: 2, height: 2},
    textAlign:'center'
};

const textAttributeStyle = {
    fontSize:16,
    fontWeight: 'bold',
    textShadowColor: 'white',
    color: 'black',
    textAlign:'center'
};

const textPlusStyle = {
    fontSize:16,
    fontWeight: 'bold',
    color: 'green',
    textAlign:'center'
};


export {ApplyTraining}
import React, {Component ,PropTypes} from 'react';
import { Actions } from 'react-native-router-flux';

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
                Actions.refresh({hideBackImage:false, onBack:this.back});
            }
        });
    }

    back() {
        Actions.skaters({direction:'leftToRight'})
    }

    even() {
        if (this.trainingIndex % 2 === 0) {
            return ['-45deg', '0deg'];
        }
        else {
            return ['45deg', '0deg'];
        }
    }

    render() {
        console.log(this.props);
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
                    <View style={{flex:0.1, backgroundColor: '#9198a5', justifyContent:'center',
                        alignItems:'center',
                        shadowOffset: {width:0, height:6},
                        shadowRadius: 20,
                        shadowColor: 'black',
                        shadowOpacity: 0.6
                    }
                    }>
                        <Text
                            style={{fontFamily: 'SkaterGirlsRock',
                                fontSize:24,
                                fontWeight: 'bold',
                                textShadowColor: 'white',
                                color: 'black',
                                textShadowRadius: 2,
                                textShadowOffset: {width: 2, height: 2},
                                textAlign:'center',
                                padding:5}}>TRAIN {this.props.selectedSkater.name.toUpperCase()}</Text>
                    </View>
                    <View style={{flex:0.8, backgroundColor: 'transparent', justifyContent: 'center', alignItems: 'center'}}>
                        <View style={{position: 'absolute', backgroundColor:'transparent', left:10, right: 10, justifyContent: 'center', alignItems: 'center'}}>
                            <SkaterCard2 skater={this.props.selectedSkater} animate={true} progress={this.state.progress}/>
                        </View>
                            <Animated.View style={{transform: [
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

const styles = StyleSheet.create({
    title: {
        fontSize: 10,
        paddingBottom: 5,
        fontWeight: 'bold',
        fontFamily: 'SkaterGirlsRock',
        textShadowColor: 'black',
        color: 'white',
        textShadowRadius: 2,
        textShadowOffset: {width: 2, height: 2}
    },
    title2: {
        fontSize: 17,
        backgroundColor: 'transparent',
        fontWeight: 'bold',
        fontFamily: 'SkaterGirlsRock',
        textShadowColor: 'black',
        color: 'white',
        textShadowRadius: 2,
        textShadowOffset: {width: 2, height: 2},
    },
    cardtext: {
        fontSize: 12,
        fontWeight: 'bold',
        backgroundColor: 'transparent',
        fontFamily: 'SkaterGirlsRock',
        textShadowColor: 'black',
        color: 'white',
        textShadowRadius: 1,
        textShadowOffset: {width: 1, height: 1},
        padding: 2
    },
    container2: {
        backgroundColor: 'silver',
        justifyContent: 'center',
        alignItems: 'flex-start',
        borderWidth: 3,
        marginLeft: 3,
        marginRight: 3,
        marginTop: 3,
        marginBottom: 3,
        borderRadius: 6
    },
    card: {
        width:200,
        height: 300,
        backgroundColor: 'transparent',
        borderWidth: 0,
        marginLeft: 3,
        marginRight: 3,
        marginTop: 3,
        marginBottom: 3,
        borderRadius: 0,
    }
});

export {ApplyTraining}
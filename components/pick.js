import React, {Component ,PropTypes} from 'react';
import { Actions, ActionConst } from 'react-native-router-flux';

import {
    Alert,
    Animated,
    Button,
    Easing,
    Image,
    Modal,
    Text,
    ScrollView,
    StyleSheet,
    TouchableOpacity,
    View,
} from 'react-native';

import {SkaterCard2} from './skatercard2';

class Pick extends Component {

    constructor(props) {
        super(props);
        this.scaleValue = new Animated.Value(0);
        this.state = {
          'disabled' : false,
          'modalVisible' : false,
        };
    }

    static propTypes = {
        skater: PropTypes.object.isRequired,
        pickSelected: PropTypes.func.isRequired
    };

    componentDidMount () {
    }

    scale () {
        this.setState(
            {
                'disabled' : true,
                'modalVisible' : true,
            }
        );
        this.scaleValue.setValue(0);
        Animated.timing(
            this.scaleValue,
            {
                toValue: 1,
                duration: 1000,
                easing: Easing.linear
            }
        ).start(() => {

        })
    }

    setModalVisible(visible) {
        this.setState(
            {
                modalVisible: visible,
            });
    }

    render() {
        const scale = this.scaleValue.interpolate({
            inputRange: [0, 0.5, 1],
            outputRange: [1.0, 0.5, 0]
        });

        const rotate = this.scaleValue.interpolate({
            inputRange: [0, 0.5, 1],
            outputRange: ['0deg', '90deg', '180deg']
        });
        return <View>
            <Modal
                animationType={"slide"}
                transparent={true}
                visible={this.state.modalVisible}
            >
                <View style={{flex:1, opacity:1, alignItems:'center', justifyContent:'center'}}>
                    <TouchableOpacity onPress={ () => {
                        this.setModalVisible(false);
                        this.props.pickSelected(this.props.skater);
                    }}>
                        <SkaterCard2 skater={this.props.skater} animate={false}/>
                    </TouchableOpacity>
                    <Text style={textStyle}>TOUCH CARD TO CONTINUE</Text>
                </View>
            </Modal>
        <TouchableOpacity disabled={this.state.disabled} onPress={ () => { this.scale();}}>
                <Animated.View style={StyleSheet.flatten([cardBackStyle, {
                    transform: [
                        {scale: scale},
                        {rotate: rotate}
                        ]}])}></Animated.View>
            </TouchableOpacity>
        </View>
    }
}

const cardBackStyle = {
    backgroundColor:'pink',
    width:30,
    height:45,
    margin:15
};

const textStyle = {
    fontSize: 20,
    paddingTop: 20,
    fontWeight: 'bold',
    fontFamily: 'SkaterGirlsRock',
    textShadowColor: 'black',
    color: 'white',
    textShadowRadius: 2,
    textShadowOffset: {width: 2, height: 2}
};

export {Pick}
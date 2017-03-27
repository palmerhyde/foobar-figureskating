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
        //selectedSkater: PropTypes.object.isRequired,
        //skaterTrainingList: React.PropTypes.arrayOf(React.PropTypes.object)
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
            //Alert.alert(
            //    'Pick will go here',
            //    'one awesome skater will render here when Liam is ready.',
            //);
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
                animationType={"fade"}
                transparent={true}
                visible={this.state.modalVisible}
                onRequestClose={() => {console.log('modal closed')}}
            >
                <Image resizeMode='cover' source={require('../assets/images/black.jpg')}  style={{width: null, height: null, flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <View style={{flex:1, opacity:0.8, alignItems:'center', justifyContent:'center'}}>
                    <TouchableOpacity onPress={ () => {
                        this.setModalVisible(false);
                    }}>
                        <SkaterCard2 skater={this.props.skater} animate={true}/>
                    </TouchableOpacity>
                </View>
                </Image>
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

const s1 = {
    'id' : '1234',
    'name' : 'Palmer Molloy',
    'edges' : 100,
    'jumps' : 34,
    'form' : 1,
    'presentation' : 99,
    'photo' : 'https://scontent.fsnc1-5.fna.fbcdn.net/v/t31.0-8/14481767_10207571721790755_6296817429078953337_o.jpg?oh=722ad2143b15fdbacc3cb53ed2c9c3a1&oe=595AF102',
    'level' : 1,
    'discipline' : 'MENS_SINGLES',
    'gender' : 'M',
    'xp' : 0,
    'rarity': 'REGIONAL'
};

const cardBackStyle = {
    backgroundColor:'pink',
    width:30,
    height:45,
    margin:15
};

export {Pick}
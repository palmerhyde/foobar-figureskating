import React, {Component, PropTypes} from 'react';

import {
    Alert,
    Animated,
    Button,
    Easing,
    Image,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    AppRegistry
} from 'react-native';

import { Actions, ActionConst } from 'react-native-router-flux';

class Header extends Component {

    constructor(props) {
        super(props);
    }

    static propTypes = {
        title: PropTypes.string.isRequired,
        onBack: React.PropTypes.func,
        showBack: React.PropTypes.bool
    };

    componentDidMount () {
    }

    render() {
        console.log(this.props.showBack);
        return <View style={navigationBarStyle}>
            <View style={{flex:0.1}}>
                { this.props.showBack ?
                    <TouchableOpacity onPress={this.props.onBack}>
                        <Text style={backStyle}>{'<'}</Text>
                    </TouchableOpacity>
                    : null
                }
            </View>
            <View style={{flex:0.9}}>
                <Text style={titleStyle}>{this.props.title.toUpperCase()}</Text>
            </View>
        </View>

    }
}

Header.defaultProps = {
    showBack: false
};

const backStyle = {
    fontFamily: 'SkaterGirlsRock',
    fontSize:30,
    fontWeight: '900',
    textShadowColor: 'white',
    color: 'black',
    textShadowRadius: 2,
    textShadowOffset: {width: 2, height: 2},
    textAlign:'center'
};

const titleStyle = {
    fontFamily: 'SkaterGirlsRock',
    fontSize:22,
    fontWeight: 'bold',
    textShadowColor: 'white',
    color: 'black',
    textShadowRadius: 2,
    textShadowOffset: {width: 2, height: 2},
    textAlign:'center'
};

const navigationBarStyle = {
    flex:1,
    flexDirection:'row',
    backgroundColor: '#9198a5',
    alignItems: 'center',
    justifyContent: 'center'

};

export {
    Header
}


import React, {Component, PropTypes} from 'react';

import {
    Animated,
    Easing,
    Image,
    Text,
    ScrollView,
    StyleSheet,
    TouchableOpacity,
    View,
} from 'react-native';


class PlayerScoreBoard extends Component {

    constructor(props) {
        super(props);
    }

    static propTypes = {
        name: PropTypes.string.isRequired,
        score: PropTypes.number.isRequired
    };

    componentDidMount () {
    }

    render() {


        return <View style={{flex:1, flexDirection:'row'}}>
            <View style={{justifyContent:'center', alignItems:'flex-start', flex:0.5, paddingLeft:15}}>
                <Text style={styles.text}>{this.props.name.toUpperCase()}</Text>
            </View>
            <View style={{justifyContent:'center', alignItems:'flex-end', flex:0.5, paddingRight:15}}>
                <Text style={styles.text}>{this.props.score}</Text>
            </View>
        </View>
    }
}

const styles = StyleSheet.create({
        text: {
            fontSize: 20,
            color: 'white',
            fontWeight: 'bold',
            fontFamily: 'SkaterGirlsRock',
        }
    }
);

export {PlayerScoreBoard}

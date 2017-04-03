import React, {Component} from 'react';

import {
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

import FlipView from 'react-native-flip-view'
import {SkaterCard2} from './skatercard2';

class FlipSkaterCard extends Component {

    constructor(props) {
        super(props);
    }

    _renderFront = (back) => {
        return <View style={styles.container2}>
            <Image
                source={{uri: back}}
                style={{width: 100, height: 130}}
            />
        </View>
    };

    _renderBack = () => {
        return <View style={styles.containerBack}>
            {this.props.skater.name ?
                <View style={{transform: [{scale: 0.75}, {translateX:0}, {translateY:0}]}}>
                    <SkaterCard2 skater={this.props.skater}/>
                </View>
                :
                <Text>Loading...</Text>
            }
        </View>
    };

    render() {
        return <FlipView style={{flex: 1}}
                         front={this._renderFront(this.props.back)}
                         back={this._renderBack()}
                         isFlipped={this.props.isFlipped}
                         flipAxis="y"
                         flipEasing={Easing.out(Easing.ease)}
                         flipDuration={800}
                         perspective={1000}/>

    }
}

const styles = StyleSheet.create({
    title: {
        fontSize: 12,
        backgroundColor: 'transparent',
        paddingBottom: 5,
        fontWeight: 'bold'
    },
    cardtext: {
        fontSize: 10,
        fontWeight: 'bold',
        backgroundColor: 'transparent',
    },
    container2: {
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        borderWidth: 3,
        marginLeft: 0,
        marginRight: 0,
        marginTop: 0,
        marginBottom: 0,
        borderRadius: 6
    },
    containerBack: {
        backgroundColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        borderWidth: 0,
        marginLeft: 0,
        marginRight: 0,
        marginTop: 0,
        marginBottom: 0,
        borderRadius: 6
    },
});

export {
    FlipSkaterCard
}

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

    // TODO: proptypes

    _renderFront = (back) => {
        return <View style={styles.containerBack}>
        <View style={{transform: [{scale: 0.6}, {translateX:0}, {translateY:-100}]}}>
                <Image style={StyleSheet.flatten([styles.card,
                    {
                        width: 202,
                        height: 300
                    }])}
                                source={require('../assets/images/large-silver.png')} >
                    <View style={{flex:0.05, justifyContent: 'center', alignItems: 'center', borderColor:'pink', borderWidth:0}}>
                    </View>
                    <Image
                        source={{uri: 'https://vignette4.wikia.nocookie.net/logopedia/images/d/da/BradMiclette-Logo.png/revision/latest?cb=20140713045541'}}
                        style={
                            {
                                marginTop: 0,
                                marginBottom: 0,
                                flex:0.37,
                                borderWidth: 0,
                                borderColor: 'green',
                            }
                        }
                        resizeMode='stretch'
                    />
                    <View style={{flex:0.1, justifyContent: 'center', alignItems: 'center', borderColor:'red', borderWidth:0}}>
                    </View>
                    <View style={{flex:0.23, flexDirection:'column', justifyContent: 'center', alignItems: 'center', borderColor:'yellow', borderWidth:0}}>
                    </View>
                    <View style={{flex:0.15, justifyContent: 'center', alignItems: 'center', borderColor:'blue', borderWidth:0}}>
                    </View>
                </Image>
        </View>
        </View>
    };

    _renderBack = () => {
        return <View style={styles.containerBack}>
            {this.props.skater.name ?
                <View style={{transform: [{scale: 0.6}, {translateX:0}, {translateY:-100}]}}>
                    <SkaterCard2 skater={this.props.skater} animate={this.props.scale}/>
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

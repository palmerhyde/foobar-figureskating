import React, {Component} from 'react';

import {
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

import {SkaterCard} from './skatercard';

import { Actions } from 'react-native-router-flux';

class Skaters extends Component {

    constructor(props) {
        super(props);
        this.scaleValue = new Animated.Value(0);
        this.cardTemplate = require('../assets/images/large-silver.png');

        // Load Skaters
        if (this.props.loadSkaterDeck) {
            this.props.loadSkaterDeck();
        }
    }

    componentDidMount () {
        this.scale()
    }

    scale () {
        this.scaleValue.setValue(0);
        Animated.timing(
            this.scaleValue,
            {
                toValue: 1,
                duration: 2200,
                easing: Easing.linear
            }
        ).start(() => this.scale())
    }

    render() {
        const scale = this.scaleValue.interpolate({
            inputRange: [0, 0.5, 1],
            outputRange: [1, 1.1, 1]
        });

        return <Image resizeMode='cover' source={require('../assets/images/black.jpg')} style={{width: null, height: null, 'flex': 1}}>
            <View style={{flex:0.75, backgroundColor:'transparent'}}>
                <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
                    <Animated.Image style={StyleSheet.flatten([styles.card,
                        {
                            width: 202,
                            height: 300,
                            transform: [{scale: scale}]}])}
                            source={this.cardTemplate}
                    >
                        <View style={{flex:0.05, justifyContent: 'center', alignItems: 'center', borderColor:'pink', borderWidth:0}}>
                        </View>
                            <Image
                                source={{uri: this.props.selectedSkater.photo}}
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
                                <Text style={styles.title2}>{this.props.selectedSkater.name}</Text>
                            </View>
                            <View style={{flex:0.23, justifyContent: 'center', alignItems: 'center', borderColor:'yellow', borderWidth:0}}>
                                <Text style={styles.cardtext}>EDGES - {this.props.selectedSkater.edges}</Text>
                                <Text style={styles.cardtext}>JUMPS - {this.props.selectedSkater.jumps}</Text>
                                <Text style={styles.cardtext}>FORM - {this.props.selectedSkater.form}</Text>
                                <Text style={styles.cardtext}>PRESENTATION - {this.props.selectedSkater.presentation} </Text>
                            </View>
                        <View style={{flex:0.15, justifyContent: 'center', alignItems: 'center', borderColor:'blue', borderWidth:0}}>
                        </View>
                    </Animated.Image>
                </View>
                <Text style={{flex:0.25}} onPress={ () => {
                    Actions.splash();
                } }>Back</Text>
            </View>
            <View style={{flex:0.25, backgroundColor:'gray'}}>
                <ScrollView horizontal={true} style={{flex:1, flexDirection: 'row'}}>
                    {
                        this.props.skaterDeck.map(function (skater) {
                            return <TouchableOpacity key={skater.id} onPress={
                                () => {
                                    this.props.selectMyCardsSkater(skater);
                                }
                            }>
                                <View  style={styles.container2}>
                                    <Text style={styles.title} numberOfLines={1}>{skater.name}</Text>
                                    <Image
                                        source={{uri: skater.photo}}
                                        style={{width: 114, height: null, flex:1}}
                                    />
                                </View>
                            </TouchableOpacity>
                        }, this)
                    }
                </ScrollView>
            </View>
        </Image>

    }
}

const styles = StyleSheet.create({
    title: {
        fontSize: 16,
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
        alignItems: 'center',
        width:120,
        flex: 1,
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
        //justifyContent: 'flex-end',
        //alignItems: 'flex-end',
        borderWidth: 0,
        marginLeft: 3,
        marginRight: 3,
        marginTop: 3,
        marginBottom: 3,
        borderRadius: 0,
    }
});

export {
    Skaters
}


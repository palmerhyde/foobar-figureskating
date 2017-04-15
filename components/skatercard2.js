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

import * as Progress from 'react-native-progress';
import {Rarity} from '../util/enums';


class SkaterCard2 extends Component {

    constructor(props) {
        super(props);
        this.scaleValue = new Animated.Value(0);
    }

    static propTypes = {
        skater: PropTypes.object,
        animate: PropTypes.bool,
        progress: PropTypes.number
    };

    componentDidMount () {
        if (this.props.animate) {
            this.scale();
        }
    }

    getCardTemplate (rarity) {
        switch (rarity) {
            case Rarity.REGIONAL:
                return require('../assets/images/large-gold.png');
            case Rarity.SECTIONAL:
                return require('../assets/images/large-pink.png');
        }

        return require('../assets/images/large-silver.png');
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

        return <View>
            { this.props.skater.name ?
                <Animated.Image style={StyleSheet.flatten([styles.card,
                    {
                        width: 202,
                        height: 300,
                        transform: [{scale: scale}]}])}
                                source={this.getCardTemplate(this.props.skater.rarity)} >
                    <View style={{flex:0.05, justifyContent: 'center', alignItems: 'center', borderColor:'pink', borderWidth:0}}>
                    </View>
                    <Image
                        source={{uri: this.props.skater.photo}}
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
                        <Text style={styles.title2}>{this.props.skater.name.toUpperCase()}</Text>
                    </View>
                    <View style={{flex:0.23, flexDirection:'row', justifyContent: 'center', alignItems: 'flex-start', borderColor:'yellow', borderWidth:0}}>
                        <View style={{flex:0.2, justifyContent: 'center', alignItems: 'center'}}>
                            <Text style={styles.cardtext}>EDGES</Text>
                            <Text style={styles.textAttribute}>{this.props.skater.edges}</Text>
                        </View>
                        <View style={{flex:0.2, justifyContent: 'center', alignItems: 'center'}}>
                            <Text style={styles.cardtext}>JUMPS</Text>
                            <Text style={styles.textAttribute}>{this.props.skater.jumps}</Text>
                        </View>
                        <View style={{flex:0.2, justifyContent: 'center', alignItems: 'center'}}>
                            <Text style={styles.cardtext}>FORM</Text>
                            <Text style={styles.textAttribute}>{this.props.skater.form}</Text>
                        </View>
                        <View style={{flex:0.2, justifyContent: 'center', alignItems: 'center'}}>
                            <Text style={styles.cardtext}>PRES</Text>
                            <Text style={styles.textAttribute}>{this.props.skater.presentation}</Text>
                        </View>
                    </View>
                    <View style={{flex:0.15, justifyContent: 'center', alignItems: 'center', borderColor:'blue', borderWidth:0}}>
                        <Progress.Circle progress={this.props.progress} thickness={3} size={25} color="white" showsText={true} textStyle={
                            {
                                fontSize:10,
                                fontWeight: 'bold',
                            }} formatText={ (progress) => {return this.props.skater.level}
                            }/>
                    </View>
                </Animated.Image>
                : null
            }
        </View>
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
    textAttribute: {
        fontSize:12,
        fontWeight: 'bold',
        textShadowColor: 'white',
        color: 'black',
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

export {SkaterCard2}
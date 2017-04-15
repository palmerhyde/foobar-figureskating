import React, {Component} from 'react';

import {
    Animated,
    Easing,
    Image,
    StyleSheet,
    Text,
    View
} from 'react-native';

import {Disciplines} from '../util/enums'

class MoveCard extends Component {

    constructor(props) {
        super(props);
        this.scaleValue = new Animated.Value(0);
    }

    componentDidMount () {
        //if (this.props.animate) {
            this.scale();
        //}
    }

    getCardTemplate () {
        return require('../assets/images/large-bronze.png');
    }

    getCardPicture () {
        switch (this.props.move.discipline) {
            case Disciplines.LADIES_SINGLES:
                return 'https://s-media-cache-ak0.pinimg.com/564x/b2/ba/56/b2ba560f346a0932b32f4db96495595a.jpg';
            case Disciplines.MENS_SINGLES:
                return 'https://img.clipartfest.com/7128e7aed8650d60bfed9f09e566a749_additional-family-member-male-figure-skating-clipart_421-480.jpeg';
            case Disciplines.ICE_DANCING:
                return 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTJRm6S7tGWUTQfTvtdhzws92QHrvAw5WUyx4EbbU4ed_B36QUM';
            case Disciplines.PAIRS:
                return 'http://fakty.ictv.ua/wp-content/uploads/2016/08/23/1471964036_20130124164653n.jpg';

        }

        return 'https://s-media-cache-ak0.pinimg.com/564x/b2/ba/56/b2ba560f346a0932b32f4db96495595a.jpg'
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
            { this.props.move ?
                <Animated.Image style={StyleSheet.flatten([styles.card,
                    {
                        width: 202,
                        height: 300,
                        transform: [{scale: scale}]}])}
                                source={this.getCardTemplate()} >
                    <View style={{flex:0.05, justifyContent: 'center', alignItems: 'center', borderColor:'pink', borderWidth:0}}>
                    </View>
                    <Image
                        source={{uri: this.getCardPicture()}}
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
                        <Text style={styles.title2}>{this.props.move.discipline.toUpperCase().replace('_', ' ')}</Text>
                    </View>
                    <View style={{flex:0.23, flexDirection:'column', justifyContent: 'center', alignItems: 'center', borderColor:'yellow', borderWidth:0}}>
                        <View style={{flex:0.2, justifyContent: 'center', alignItems: 'center'}}>
                            <Text style={styles.cardtext}>{this.props.move.attribute.toUpperCase()}</Text>
                        </View>
                    </View>
                    <View style={{flex:0.15, justifyContent: 'center', alignItems: 'center', borderColor:'blue', borderWidth:0}}>

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
        fontSize: 20,
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
        fontSize:16,
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

export {MoveCard}

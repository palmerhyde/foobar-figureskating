import React, {Component, PropTypes} from 'react';
import { Actions, ActionConst } from 'react-native-router-flux';

import {
    Image,
    Text,
    ScrollView,
    StyleSheet,
    TouchableOpacity,
    View,
} from 'react-native';

import {Header} from './header';

class SwapSkater extends Component {

    constructor(props) {
        super(props);
    }

    static propTypes = {
        //this.props.swapSkater(this.props.selectedSkater, skater);
        //this.props.close(false);
        //this.props.selectedSkater
    };

    componentDidMount () {
    }

    // TODO - helper function, does not belong here
    xpDiff (swapSkater) {
        let skaterOverall = this.props.selectedSkater.edges + this.props.selectedSkater.jumps + this.props.selectedSkater.form + this.props.selectedSkater.presentation;
        let swapSkaterOverall = swapSkater.edges + swapSkater.jumps + swapSkater.form + swapSkater.presentation;
        return swapSkaterOverall - skaterOverall;
    }

    xpdiffStyle (diff) {
        if (diff >=0) {
            return {
                fontSize: 12,
                fontWeight: 'bold',
                color: 'green',
            }
        }

        return {
            fontSize: 12,
            fontWeight: 'bold',
            color: 'red',
        }
    }

    render() {

        return <Image resizeMode='cover' source={require('../assets/images/ice.jpg')}  style={{width: null, height: null, flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            { this.props.selectedSkater.name ?
                <View style={{flex:1, alignSelf: 'stretch'}}>
                    <View style={{flex:0.1, backgroundColor: 'transparent'}}>
                        <Header title={'SWAP ' + this.props.selectedSkater.name} onBack={ () => {
                            this.props.close(false);
                        } } showBack={true}/>
                    </View>
                    <View style={{flex:0.8, backgroundColor: 'transparent'}}>
                        <ScrollView style={{flex:1}}>
                            {
                                this.props.skaters.map(function (skater) {
                                    // Filter out opposite genders
                                    // Make stat card a component
                                    return <TouchableOpacity key={skater.id} onPress={
                                        () => {
                                            this.props.swapSkater(this.props.selectedSkater, skater);
                                            this.props.close(false);
                                        }
                                    }>
                                        <View style={StyleSheet.flatten([styles.container2])}>
                                            <View style={{flexDirection:'row', flex:1}}>
                                                <Image
                                                    source={{uri: skater.photo}}
                                                    style={{width: 50, height: 50, marginRight:10}}/>
                                                <View style={{flex:0.35}}>
                                                    <Text style={styles.title2} numberOfLines={1}>{skater.name.toUpperCase()}</Text>
                                                    <Text style={styles.cardtext} numberOfLines={1}>{skater.discipline} | {skater.rarity}</Text>
                                                    <Text style={styles.cardtext} numberOfLines={1}>Level {skater.level}</Text>
                                                </View>
                                                <View style={{flex:0.10}}>
                                                    <Text style={styles.title} numberOfLines={1}>EDG</Text>
                                                    <Text style={styles.textAttribute} numberOfLines={1}>{skater.edges}</Text>
                                                </View>
                                                <View style={{flex:0.10}}>
                                                    <Text style={styles.title} numberOfLines={1}>JUM</Text>
                                                    <Text style={styles.textAttribute} numberOfLines={1}>{skater.jumps}</Text>
                                                </View>
                                                <View style={{flex:0.10}}>
                                                    <Text style={styles.title} numberOfLines={1}>FOR</Text>
                                                    <Text style={styles.textAttribute} numberOfLines={1}>{skater.form}</Text>
                                                </View>
                                                <View style={{flex:0.10}}>
                                                    <Text style={styles.title} numberOfLines={1}>PRE</Text>
                                                    <Text style={styles.textAttribute} numberOfLines={1}>{skater.presentation}</Text>
                                                </View>
                                                <View style={{flex:0.10}}>
                                                    <Text style={styles.title} numberOfLines={1}>DIFF</Text>
                                                    <Text style={this.xpdiffStyle(this.xpDiff(skater))} numberOfLines={1}>{this.xpDiff(skater)}</Text>
                                                </View>
                                            </View>
                                        </View>
                                    </TouchableOpacity>
                                }, this)
                            }
                        </ScrollView>
                    </View>
                    <View style={{flex:0.1, backgroundColor: 'transparent', justifyContent:'center', alignItems:'center'}}>
                    </View>
                </View>
                : <Text>Error: no selected skater!</Text>
            }

        </Image>
    }
}

// TODO: clean up and merge styles
const styles = StyleSheet.create({
    title: {
        fontSize: 14,
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
    textAttribute: {
        fontSize:12,
        fontWeight: 'bold',
        textShadowColor: 'white',
        color: 'black',
    },
    cardtext: {
        fontSize: 10,
        fontWeight: 'bold',
        backgroundColor: 'transparent',
        textShadowColor: 'black',
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

export {SwapSkater}
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

import _ from 'lodash';


class StatSkater extends Component {

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

    isSelected(skater) {
        let index = _.findIndex(this.props.skaterTrainingList, function (element) {
            return element.id == skater.id;
        });

        if (index == -1) {
            return {
            };
        }

        return {
            borderColor: 'red',
            borderWidth: 3
        };
    }

    render() {

        return <View style={StyleSheet.flatten([styles.container2, this.isSelected(this.props.skater)])}>
                    <View style={{flexDirection:'row', flex:1}}>
                        <Image
                            source={{uri: this.props.skater.photo}}
                            style={{width: 50, height: 50, marginRight:10}}/>
                        <View style={{flex:0.35}}>
                            <Text style={styles.title2} numberOfLines={1}>{this.props.skater.name.toUpperCase()}</Text>
                            <Text style={styles.cardtext} numberOfLines={1}>{this.props.skater.discipline} | {this.props.skater.rarity}</Text>
                            <Text style={styles.cardtext} numberOfLines={1}>Level {this.props.skater.level}</Text>
                        </View>
                        <View style={{flex:0.10}}>
                            <Text style={styles.title} numberOfLines={1}>EDG</Text>
                            <Text style={styles.textAttribute} numberOfLines={1}>{this.props.skater.edges}</Text>
                        </View>
                        <View style={{flex:0.10}}>
                            <Text style={styles.title} numberOfLines={1}>JUM</Text>
                            <Text style={styles.textAttribute} numberOfLines={1}>{this.props.skater.jumps}</Text>
                        </View>
                        <View style={{flex:0.10}}>
                            <Text style={styles.title} numberOfLines={1}>FOR</Text>
                            <Text style={styles.textAttribute} numberOfLines={1}>{this.props.skater.form}</Text>
                        </View>
                        <View style={{flex:0.10}}>
                            <Text style={styles.title} numberOfLines={1}>PRE</Text>
                            <Text style={styles.textAttribute} numberOfLines={1}>{this.props.skater.presentation}</Text>
                        </View>
                        <View style={{flex:0.10}}>
                            <Text style={styles.title} numberOfLines={1}>DIFF</Text>
                            <Text style={this.xpdiffStyle(this.xpDiff(this.props.skater))} numberOfLines={1}>{this.xpDiff(this.props.skater)}</Text>
                        </View>
                    </View>
                </View>
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

export {StatSkater}
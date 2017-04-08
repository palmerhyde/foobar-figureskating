import React, {Component} from 'react';

import {
    Button,
    Image,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    AppRegistry
} from 'react-native';

import {Attributes} from '../util/enums'
import {Rarity} from '../util/enums'

class SkaterCard extends Component {

    constructor(props) {
        super(props);
    }

    // TODO: move to some sort of reusable style helper. Keep components pure.
    attributeStyle(a) {
        let bgc = 'white';
        let opacity = 1;
        if (a == this.props.move.attribute && this.props.isPlayable) {
            bgc = 'orange';
        }

        if (!this.props.isPlayable) {
            opacity = 0.4
        }

        var style = {
            fontSize: 9,
            fontWeight: 'bold',
            backgroundColor: 'transparent',
            color: bgc,
            opacity: opacity
        };
        return style
    };

    nationStyle() {
        let opacity = 1;
        let bgc = 'white';
        if (!this.props.isPlayable) {
            opacity = 0.4
        }

        var style = {
            fontSize: 9,
            fontWeight: 'bold',
            backgroundColor: 'transparent',
            color: bgc,
            opacity: opacity
        };
        return style
    }

    rarityStyle() {
        switch (this.props.skater.rarity) {
            case Rarity.LOCAL:
                return 'silver';
            case Rarity.REGIONAL:
                return 'gold';
            case Rarity.SECTIONAL:
                return 'pink';
            default:
                return 'silver';
        }
    }

    render() {
        return <View style={{width: 55, height: 70, opacity:1, margin:2, borderWidth:1, borderRadius:3, backgroundColor: this.rarityStyle()}}
            >
            { !this.props.skater.hasPlayed ?
                <View style={{flexDirection: 'row', flex: 1, backgroundColor: 'rgba(0,0,0,0.5)'}}>
                    <View style={{
                        flex: 0.5,
                        alignItems: 'center',
                        justifyContent: 'center',
                        paddingLeft: 2,
                        paddingRight: 2
                    }}>
                        <Text style={this.attributeStyle(Attributes.EDGES)}>E{this.props.skater.edges}</Text>
                        <Text style={this.attributeStyle(Attributes.JUMPS)}>J{this.props.skater.jumps}</Text>
                        <Text style={this.attributeStyle(Attributes.FORM)}>F{this.props.skater.form}</Text>
                        <Text
                            style={this.attributeStyle(Attributes.PRESENTATION)}>P{this.props.skater.presentation}</Text>
                        <Text style={this.nationStyle()}>USA</Text>
                        <Text style={this.nationStyle()}>{this.props.skater.discipline[0].toUpperCase()}</Text>
                    </View>
                    <Image
                        source={{uri: this.props.skater.photo}}
                        style={{flex: 0.5, width: null, height: null}}
                    />
                </View> :
                <View style={{flex:1, backgroundColor:'silver'}}>
                    <Image source={{uri: 'https://vignette4.wikia.nocookie.net/logopedia/images/d/da/BradMiclette-Logo.png/revision/latest?cb=20140713045541'}}
                           style={{flex: 0.5, width: null, height: null}}
                           resizeMode='contain'
                    ></Image>
                </View>
            }
            </View>

    }
}

export {
    SkaterCard
}
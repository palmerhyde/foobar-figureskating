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
        return <View style={styles.container2}>
            {this.props.skater.name ?
                <View style={{justifyContent: 'center', alignItems: 'center', flex:1}}>
                    <Text style={styles.title}>{this.props.skater.name}</Text>
                    <Image
                        source={{uri: this.props.skater.photo}}
                        style={{width: 170, height: null, flex:1}}
                    />

                    <Text style={styles.cardtext}>Edges - {this.props.skater.edges}</Text>
                    <Text style={styles.cardtext}>Jumps - {this.props.skater.jumps}</Text>
                    <Text style={styles.cardtext}>Form - {this.props.skater.form}</Text>
                    <Text style={styles.cardtext}>Presentation - {this.props.skater.presentation}</Text>
                    <Text style={styles.cardtext}>{this.props.skater.skill.name}
                        - {this.props.skater.skill.value}</Text>
                    <Text style={styles.cardtext}>Level - {this.props.skater.level}</Text>
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
                         onFlipped={(val) => {console.log('Flipped: ' + val);}}
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
});

export {
    FlipSkaterCard
}

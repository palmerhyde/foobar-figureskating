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

class SkaterCard extends Component {

    constructor(props) {
        super(props);
    }

    // TODO: does this belong in here? Really we should pass in opacity as an extra style.
    isPlayable() {
        if (!this.props.isPlayable) {
            return {
                opacity: 0.2,
            };
        }

        return {
            opacity: 1,
        };
    };

    // TODO: move to some sort of reusable style helper. Keep components pure.
    attributeStyle(a) {
        let bgc = 'black';
        if (a == this.props.move.attribute) {
            bgc = 'green';
        }

        var style = {
            fontSize: 8,
            fontWeight: 'bold',
            color: bgc
        };
        return style
    };

    render() {
        return <View  style={StyleSheet.flatten([styles.container2, this.isPlayable()])}>
                <Text style={styles.title}>{this.props.skater.name}</Text>
                <Image
                    source={{uri: this.props.skater.photo}}
                    style={{width: 95, height: 75}}
                />
                <Text style={this.attributeStyle('edges')}>Edges - {this.props.skater.edges}</Text>
                <Text style={this.attributeStyle('jumps')}>Jumps - {this.props.skater.jumps}</Text>
                <Text style={this.attributeStyle('form')}>Form - {this.props.skater.form}</Text>
                <Text style={this.attributeStyle('presentation')}>Presentation - {this.props.skater.presentation}</Text>
            </View>

    }
}

const styles = StyleSheet.create({
    title: {
        fontSize: 9,
        fontWeight: 'bold',
        backgroundColor: 'transparent'
    },
    container2: {
        alignItems: 'center',
        width: 100,
        height: 150,
        borderWidth: 3,
        marginLeft: 5,
        marginTop: 5,
        marginBottom: 5,
        borderRadius: 6,
    },
});

export {
    SkaterCard
}
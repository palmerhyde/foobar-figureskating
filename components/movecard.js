import React, {Component} from 'react';

import {
    StyleSheet,
    Text,
    View
} from 'react-native';

class MoveCard extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return <View style={styles.card}>
            <Text style={styles.title}>{this.props.move.attribute}</Text>
        </View>

    }
}

const styles = StyleSheet.create({
    title: {
        marginTop: 10,
        fontSize: 16,
        backgroundColor: 'transparent'
    },
    card: {
        flex: 1,
        alignItems: 'center',
        width: 200,
        height: 50,
        borderWidth: 3,
        marginLeft: 60,
        marginTop: 10,
        marginBottom: 10,
        borderRadius: 6
    }
});

export {MoveCard}

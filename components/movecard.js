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
        console.log('race');
        return <View>
            {this.props.move ?
            <View  style={styles.card}>
                <Text style={styles.discipline}>{this.props.move.discipline}</Text>
                <Text style={styles.title}>{this.props.move.attribute}</Text>
            </View>
            :
                <Text style={styles.title}>Loading</Text>
            }
        </View>

    }
}

const styles = StyleSheet.create({
    discipline: {
        marginTop: 10,
        fontSize: 14,
        fontWeight: 'bold',
        backgroundColor: 'transparent'
    },
    title: {
        marginTop: 10,
        fontSize: 12,
        backgroundColor: 'transparent'
    },
    card: {
        alignItems: 'center',
        width: 200,
        height: 60,
        borderWidth: 3,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 5,
        marginBottom: 5,
        borderRadius: 6,
        backgroundColor: 'white'
    }
});

export {MoveCard}

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

class MoveCard extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props);
        return <View style={styles.container2}>
            <Text style={styles.title}>{this.props.move.name}</Text>
            <Text>{this.props.move.skater1Attribute}</Text>
            <Text>VS</Text>
            <Text>{this.props.move.skater2Attribute}</Text>
        </View>

    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 60,
        marginBottom: 60
    },
    title: {
        marginTop: 10,
        fontSize: 16,
        backgroundColor: 'transparent'
    },
    button: {
        marginRight: 10
    },
    card: {
        width: 300
    },
    imageContainer: {
        flex: 1,
        width: undefined,
        height: undefined,
        backgroundColor:'transparent',
        justifyContent: 'center',
        alignItems: 'center',
    },
    container2: {
        flex: 1,
        alignItems: 'center',
        width: 200,
        height: 100,
        borderWidth: 3,
        marginLeft: 60,
        marginTop: 10,
        marginBottom: 10,
        borderRadius: 6
    },
});

export {
    MoveCard
}

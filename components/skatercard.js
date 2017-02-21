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

    render() {
        return <View style={styles.container2}>
                <Text style={styles.title}>{this.props.skater.name}</Text>
                <Image
                    source={{uri: this.props.skater.photo}}
                    style={{width: 190, height: 150}}
                />
                <Text>Edges - {this.props.skater.edges}</Text>
                <Text>Jumps - {this.props.skater.jumps}</Text>
                <Text>Form - {this.props.skater.form}</Text>
                <Text>Presentation - {this.props.skater.presentation}</Text>
                <Text>{this.props.skater.skill.name} - {this.props.skater.skill.value}</Text>
                <Text>Level - {this.props.skater.level}</Text>
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
        height: 300,
        borderWidth: 3,
        marginLeft: 60,
        marginTop: 10,
        marginBottom: 10,
        borderRadius: 6
    },
});

export {
    SkaterCard
}
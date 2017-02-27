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
                    style={{width: 95, height: 75}}
                />
                <Text style={{fontSize: 8}}>Edges - {this.props.skater.edges}</Text>
                <Text style={{fontSize: 8}}>Jumps - {this.props.skater.jumps}</Text>
                <Text style={{fontSize: 8}}>Form - {this.props.skater.form}</Text>
                <Text style={{fontSize: 8}}>Presentation - {this.props.skater.presentation}</Text>
            </View>

    }
}

const styles = StyleSheet.create({
    title: {
        fontSize: 9,
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
        borderRadius: 6
    },
});

export {
    SkaterCard
}
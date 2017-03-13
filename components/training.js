import React, {Component, PropTypes} from 'react';
import { Actions } from 'react-native-router-flux';

import {
    Image,
    Text,
    ScrollView,
    StyleSheet,
    TouchableOpacity,
    View,
} from 'react-native';

class Training extends Component {

    constructor(props) {
        super(props);
    }

    static propTypes = {
        setPotentialTrainingSkaters: PropTypes.func.isRequired,
        selectedSkater: PropTypes.object.isRequired,
        potentialTrainerSkaters: React.PropTypes.arrayOf(React.PropTypes.object),
        addSkaterToTrainingList: PropTypes.func.isRequired,
        removeSkaterFromTrainingList: PropTypes.func.isRequired
    };

    componentDidMount () {
        this.props.setPotentialTrainingSkaters();
    }

    render() {

        return <Image resizeMode='cover' source={require('../assets/images/ice.jpg')}  style={{width: null, height: null, flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            { this.props.selectedSkater.name ?
                <View style={{flex:1, alignSelf: 'stretch'}}>
                    <View style={{flex:0.1, backgroundColor: 'green', justifyContent:'center', alignItems:'center'}}>
                        <Text style={{fontSize: 20, color: 'black', fontWeight: 'bold'}}>Train {this.props.selectedSkater.name}</Text>
                    </View>
                    <View style={{flex:0.8, backgroundColor: 'white'}}>
                        <ScrollView style={{flex:1}}>
                            {
                                this.props.potentialTrainerSkaters.map(function (skater) {
                                    return <TouchableOpacity key={skater.id} onPress={
                                        () => {
                                            this.props.addSkaterToTrainingList(skater);
                                        }
                                    }>
                                        <View  style={styles.container2}>
                                            <Text style={styles.title} numberOfLines={1}>{skater.name.toUpperCase()}</Text>
                                            <Image
                                                source={{uri: skater.photo}}
                                                style={{width: 75, height: 75, flex:1}}
                                            />
                                        </View>
                                    </TouchableOpacity>
                                }, this)
                            }
                        </ScrollView>
                    </View>
                    <View style={{flex:0.1, backgroundColor: 'orange', justifyContent:'center', alignItems:'center'}}>
                        <Text onPress={Actions.skaters} style={{fontSize: 20, color: 'black', fontWeight: 'bold'}}>Back</Text>
                    </View>
                </View>
                    : <Text>Error: no selected skater!</Text>
            }

            </Image>
    }
}

const styles = StyleSheet.create({
    title: {
        fontSize: 10,
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
    cardtext: {
        fontSize: 12,
        fontWeight: 'bold',
        backgroundColor: 'transparent',
        fontFamily: 'SkaterGirlsRock',
        textShadowColor: 'black',
        color: 'white',
        textShadowRadius: 1,
        textShadowOffset: {width: 1, height: 1},
        padding: 2
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

export {Training}
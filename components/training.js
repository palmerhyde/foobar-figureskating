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

import {Header} from './header';

import _ from 'lodash';

class Training extends Component {

    constructor(props) {
        super(props);
    }

    static propTypes = {
        setPotentialTrainingSkaters: PropTypes.func.isRequired,
        selectedSkater: PropTypes.object.isRequired,
        potentialTrainerSkaters: React.PropTypes.arrayOf(React.PropTypes.object),
        setSkaterTrainingList: PropTypes.func.isRequired,
        skaterTrainingList: React.PropTypes.arrayOf(React.PropTypes.object),
        trainSkater: PropTypes.func.isRequired
    };

    componentDidMount () {
        this.props.setPotentialTrainingSkaters();
        Actions.refresh({title: 'TRAIN ' + this.props.selectedSkater.name.toUpperCase()});
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

        return <Image resizeMode='cover' source={require('../assets/images/ice.jpg')}  style={{width: null, height: null, flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            { this.props.selectedSkater.name ?
                <View style={{flex:1, alignSelf: 'stretch'}}>
                    <View style={{flex:0.1, backgroundColor: 'transparent'}}>
                        <Header title={'Train ' + this.props.selectedSkater.name} onBack={ () => {
                            Actions.skaters({type:ActionConst.RESET});
                        } } showBack={true}/>
                    </View>
                    <View style={{flex:0.8, backgroundColor: 'transparent'}}>
                        <ScrollView style={{flex:1}}>
                            {
                                this.props.potentialTrainerSkaters.map(function (skater) {
                                    return <TouchableOpacity key={skater.id} onPress={
                                        () => {
                                            this.props.setSkaterTrainingList(skater);
                                        }
                                    }>
                                        <View style={StyleSheet.flatten([styles.container2, this.isSelected(skater)])}>
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
                    <View style={{flex:0.1, backgroundColor: 'transparent', justifyContent:'center', alignItems:'center'}}>
                        { this.props.skaterTrainingList.length > 0 ?
                            <Text onPress={ () =>  {
                                Actions.applyTraining();
                                this.props.trainSkater(this.props.selectedSkater)
                            }
                            } style={{fontSize: 20, color: 'black', fontWeight: 'bold'}}>Train</Text>
                            :
                            null
                        }

                    </View>
                </View>
                    : <Text>Error: no selected skater!</Text>
            }

            </Image>
    }
}

// TODO: clean up and merge styles
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
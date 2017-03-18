import React, {Component} from 'react';
import Dimensions from 'Dimensions';
import { Provider } from 'react-redux';
import {SplashScreen} from './components/splash';
import TrainingContainer from './containers/trainingContainer';
import ApplyTrainingContainer from './containers/applyTrainingContainer';
import SkatersContainer from './containers/skatersContainer';
import AppContainer from './containers/appContainer'
import createStore from './store';
import {Scene, Router, Animations, ActionConst} from 'react-native-router-flux';
import { Actions } from 'react-native-router-flux';

const store = createStore();

export default () => (
    <Provider store={store}>
        <Router hideNavBar={false}>
            <Scene key="root">
                <Scene key="splash" splashNavigationStyle={splashNavigationBarStyle} hideNavBar={true} duration={800} direction="horizontal" component={SplashScreen} title="" panHandlers={null} initial />
                <Scene key="game" hideNavBar={true} duration={800} direction="horizontal" component={AppContainer} title="Game" panHandlers={null} />
                <Scene key="skaters" onBack={ () => {
                    Actions.splash({direction:"leftToRight"});
                }} navigationBarStyle={navigationBarStyle} titleStyle={titleStyle} duration={800} component={SkatersContainer} title="YOUR SKATERS" panHandlers={null} />
                <Scene key="train" navigationBarStyle={navigationBarStyle} titleStyle={titleStyle} duration={800} direction="horizontal" component={TrainingContainer} title="TRAIN SKATER" panHandlers={null} />
                <Scene key="applyTraining" hideNavBar={false} hideBackImage={true} onBack={ () => {
                    null;
                }} duration={800} direction="horizontal" navigationBarStyle={navigationBarStyle} titleStyle={titleStyle} component={ApplyTrainingContainer} title="TRAINING RESULTS" panHandlers={null}/>
            </Scene>
        </Router>
  </Provider>
);

const titleStyle = {
    fontFamily: 'SkaterGirlsRock',
    fontSize:22,
    fontWeight: 'bold',
    textShadowColor: 'white',
    color: 'black',
    textShadowRadius: 2,
    textShadowOffset: {width: 2, height: 2},
    textAlign:'center',
    width: Dimensions.get('window').width - 50 // hack hack
};

const splashNavigationBarStyle = {
  opacity: 0
};

const navigationBarStyle = {
    backgroundColor: '#9198a5'
};
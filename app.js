import React, {Component} from 'react';
import { AsyncStorage } from 'react-native'
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
import {persistStore} from 'redux-persist'

const store = createStore();

persistStore(store, {storage: AsyncStorage}, () => {
    let state = store.getState();
    console.log(state);
});


export default () => (
    <Provider store={store}>
        <Router hideNavBar={true}>
            <Scene key="root">
                <Scene key="splash" type={ActionConst.RESET} component={SplashScreen} initial />
                <Scene key="game" type={ActionConst.RESET} component={AppContainer} />
                <Scene key="skaters" type={ActionConst.RESET} component={SkatersContainer} />
                <Scene key="train" type={ActionConst.RESET} component={TrainingContainer} />
                <Scene key="applyTraining" type={ActionConst.RESET} component={ApplyTrainingContainer} />
            </Scene>
        </Router>
  </Provider>
);
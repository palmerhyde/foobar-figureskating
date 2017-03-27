import React, {Component} from 'react';
import { AsyncStorage } from 'react-native'
import Dimensions from 'Dimensions';
import { Provider } from 'react-redux';
import SplashContainer from './containers/splashContainer';
import TrainingContainer from './containers/trainingContainer';
import ApplyTrainingContainer from './containers/applyTrainingContainer';
import SkatersContainer from './containers/skatersContainer';
import AppContainer from './containers/appContainer'
import DeckContainer from './containers/deckContainer'
import SkaterPicksContainer from './containers/skaterPicks'
import createStore from './store';
import {Scene, Router, Animations, ActionConst} from 'react-native-router-flux';
import { Actions } from 'react-native-router-flux';
import {persistStore} from 'redux-persist'

const store = createStore();

persistStore(store, {storage: AsyncStorage, blacklist: ['allSkaters']}, () => {
    let state = store.getState();
    console.log(state);
});


export default () => (
    <Provider store={store}>
        <Router hideNavBar={true}>
            <Scene key="root">
                <Scene key="splash" type={ActionConst.RESET} component={SplashContainer} initial />
                <Scene key="game" type={ActionConst.RESET} component={AppContainer} />
                <Scene key="skaters" type={ActionConst.RESET} component={SkatersContainer} />
                <Scene key="deck" type={ActionConst.RESET} component={DeckContainer} />
                <Scene key="train" type={ActionConst.RESET} component={TrainingContainer} />
                <Scene key="applyTraining" type={ActionConst.RESET} component={ApplyTrainingContainer} />
                <Scene key="skaterpicks" type={ActionConst.RESET} component={SkaterPicksContainer} />
            </Scene>
        </Router>
  </Provider>
);
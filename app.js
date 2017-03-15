import React, {Component} from 'react';
import { Provider } from 'react-redux';
import {SplashScreen} from './components/splash';
import TrainingContainer from './containers/trainingContainer';
import ApplyTrainingContainer from './containers/applyTrainingContainer';
import SkatersContainer from './containers/skatersContainer';
import AppContainer from './containers/appContainer'
import createStore from './store';
import {Scene, Router, Animations, ActionConst} from 'react-native-router-flux';

const store = createStore();

export default () => (
    <Provider store={store}>
        <Router hideNavBar={true}>
            <Scene key="root">
                <Scene key="splash" duration={800} direction="vertical" component={SplashScreen} title="FooBar Figure Skating" type={ActionConst.RESET} initial />
                <Scene key="game" duration={800} direction="vertical" component={AppContainer} title="Game" type={ActionConst.RESET} />
                <Scene key="skaters" duration={800} direction="vertical" component={SkatersContainer} title="Skaters" type={ActionConst.RESET} />
                <Scene key="train" duration={800} direction="vertical" component={TrainingContainer} title="Training" type={ActionConst.RESET} />
                <Scene key="applyTraining" duration={800} direction="vertical" component={ApplyTrainingContainer} title="Training" type={ActionConst.RESET} />
            </Scene>
        </Router>
  </Provider>
);
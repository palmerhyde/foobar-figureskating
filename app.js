import React, {Component} from 'react';
import { Provider } from 'react-redux';
import {SplashScreen} from './components/splash';
import AppContainer from './containers/appContainer'
import createStore from './store';
import {Scene, Router, Animations} from 'react-native-router-flux';

const store = createStore();

export default () => (
    <Provider store={store}>
        <Router hideNavBar={true}>
            <Scene key="root">
                <Scene key="splash" component={SplashScreen} title="FooBar Figure Skating" initial={true} />
                <Scene key="game" duration={800} direction="vertical" component={AppContainer} title="Game" />
            </Scene>
        </Router>
  </Provider>
);
import React, {Component} from 'react';
import { Provider } from 'react-redux';
import AppContainer from './components/appContainer'
import createStore from './store';

const store = createStore();

export default () => (
  <Provider store={store}>
      <AppContainer/>
  </Provider>
);
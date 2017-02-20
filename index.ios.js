import React, {Component} from 'react';

import {
    AppRegistry
} from 'react-native';

import {App} from './app'

class foobarfigureskating extends Component {

    render() {
        return <App/>
    }
}

export default foobarfigureskating;

AppRegistry.registerComponent('foobarfigureskating', () => foobarfigureskating);
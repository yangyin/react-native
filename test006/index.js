/** @format */
import React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import AppNavigator from './js/navigator/AppNavigator';

import { Provider } from 'react-redux';
import store from './js/store';

class Root extends React.Component {

    render() {
        return (
            <Provider store={store}><AppNavigator /></Provider>
        )
    }
}

AppRegistry.registerComponent(appName, () => Root);
// AppRegistry.registerComponent(appName, () => AppNavigator);

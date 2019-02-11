/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React from 'react'
import { createAppContainer } from 'react-navigation'
import { Provider } from 'react-redux'

import AppNavigator from './navigator/AppNavigator'
import store from './store'


export default class  App extends React.Component {
    render() {
    const Root = createAppContainer(AppNavigator);
        return (
            <Provider store={store}>
                <Root />
            </Provider>
        )
    }
}

// export default createAppContainer(AppNavigator)



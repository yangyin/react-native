/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import { createStackNavigator,createAppContainer } from 'react-navigation';

import App from './App';
import FlatList from './pages/FlatListDemo';
import SwipeableFlatListDemo from './pages/SwipeableFlatListDemo';
import SectionListDemo from './pages/SectionListDemo';

const AppNav = createStackNavigator({
    App: {
        screen: App
    },
    FlatList: {
        screen: FlatList,
        navigationOptions: {
            title: 'FlatList'
        }
    },
    SwipeList: {
        screen: SwipeableFlatListDemo,
        navigationOptions: {
            title: 'SwipeableFlatListDemo'
        }
    },
    Section: {
        screen: SectionListDemo,
        navigationOptions: {
            title: 'SectionListDemo'
        }
    }
})
const AppRoot = createAppContainer(AppNav);

AppRegistry.registerComponent(appName, () => AppRoot);

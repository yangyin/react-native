/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import { createStackNavigator,createAppContainer } from 'react-navigation';

import App from './App';
import FlatList from './pages/FlatListDemo';

const AppNav = createStackNavigator({
    App: {
        screen: App
    },
    FlatList: {
        screen: FlatList,
        navigationOptions: {
            title: 'FlatList'
        }
    }
})
const AppRoot = createAppContainer(AppNav);

AppRegistry.registerComponent(appName, () => AppRoot);

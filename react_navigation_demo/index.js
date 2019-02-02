/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import {AppRegistry} from 'react-native';
import { createAppContainer } from 'react-navigation';
import App from './App';
import { AppStackNavigator } from './navigators/AppNavigators';
import {name as appName} from './app.json';


const AppContainer = createAppContainer(AppStackNavigator);

AppRegistry.registerComponent(appName, () => AppContainer);

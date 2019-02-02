/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import {AppRegistry} from 'react-native';
import RootScene from './src/RootScene';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => RootScene);

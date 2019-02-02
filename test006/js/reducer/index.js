import { combineReducers } from 'redux';
import { rootCom, RootNavigator } from './../navigator/AppNavigator';
import { createNavigationReducer } from 'react-navigation-redux-helpers';

import theme from './theme';


/**
 * 1. 指定默认state
 */
// const navReducer = createNavigationReducer(RootNavigator);
const navState = RootNavigator.router.getStateForAction(RootNavigator.router.getActionForPathAndParams(rootCom));

/**
 * 2. 创建自己的 navigation reducer
 */
const navReducer = (state = navState, action) => {
    const nextState = RootNavigator.router.getStateForAction(action, state);
    //若 nextState 为null 或未定义，只需返回原始 state
    return nextState || state;
}
console.log('navReducer***',RootNavigator.router.getActionForPathAndParams(rootCom));

/**
 * 3. 合并 reducer
 */

const index = combineReducers({
    nav: navReducer,
    theme
})

export default index;
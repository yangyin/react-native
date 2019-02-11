import { createNavigationReducer} from 'react-navigation-redux-helpers'
import { combineReducers } from 'redux'

import { RootNavigator ,rootCom} from './../navigator/AppNavigator'

const navState = RootNavigator.router.getStateForAction(RootNavigator.router.getActionForPathAndParams(rootCom))

const navReducer = (state = navState, action) => {
    const nextState = RootNavigator.router.getStateForAction(action, state);
    //若 nextState 为null 或未定义，只需返回原始 state
    return nextState || state;
}

// const navReducer = createNavigationReducer(RootNavigator);

const index = combineReducers({
    nav:navReducer
})

export default index
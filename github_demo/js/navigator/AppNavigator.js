import {
    createStackNavigator,
    createSwitchNavigator
} from 'react-navigation';
import { connect } from 'react-redux'
import { createReactNavigationReduxMiddleware, createNavigationReducer, createReduxContainer } from 'react-navigation-redux-helpers'

import WelcomePage from './../page/WelcomePage'
import HomePage from './../page/HomePage'
import DetailPage from './../page/DetailsPage'

export const rootCom = 'Init'; //设置根路由

const Init = createStackNavigator({
    WelcomePage: {
        screen: WelcomePage,
        navigationOptions: {
            header: null
        }
    }
})

const Main = createStackNavigator({
    HomePage: {
        screen: HomePage,
        navigationOptions: {
            header: null
        }
    },
    DetailPage: {
        screen: DetailPage,
        navigationOptions: {
            // header:null
        }
    }
})

export const RootNavigator = createSwitchNavigator({
    Init: Init,
    Main: Main,
}, {
        navigationOptions: {
            header: null
        }
    })

/**
 * 1.初始化react-navigation 与 redux 的中间件
 * 作用：为reduxifyNavigator的key设置actionSubscribers（行为订阅者）,检查订阅者是否存在
 */
export const middleware = createReactNavigationReduxMiddleware(
    state => state.nav,
)

/**2.
 * 将根导航器传递给createReduxContainer函数
 * 返回一个将navigation state 和dispatch函数作为props的新组件
 */
const AppWithNavigationState = createReduxContainer(RootNavigator)

/**state 到 props的映射 */
const mapStateToProps = state => ({
    state: state.nav
})
/** 
 *3. 连接 react 组件 与 redux store
 */
export default connect(mapStateToProps)(AppWithNavigationState)

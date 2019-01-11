import { 
    createStackNavigator,
    createSwitchNavigator,
    createAppContainer
} from 'react-navigation';
import { connect } from 'react-redux';
import { createReactNavigationReduxMiddleware,reduxifyNavigator } from 'react-navigation-redux-helpers';


import WelcomPage from './../page/WelcomePage';
import HomePage from './../page/HomePage';
import DetailPage from './../page/DetailPage';

export const rootCom = 'Init'; //设置根路由


const InitNavigator = createStackNavigator(
    {
        WelcomPage:{
            screen:WelcomPage,
            navigationOptions:{
                header:null
            }
        }
    }
)

const MainNavigator = createStackNavigator(
    {
        HomePage:{
            screen:HomePage,
            navigationOptions:{
                header:null
            }
        },
        DetailPage:{
            screen:DetailPage,
            navigationOptions:{
                // header:null
            }
        },
    }
)

export const RootNavigator = createAppContainer(createSwitchNavigator(
    {
        Init:InitNavigator,
        Main:MainNavigator
    },{
        navigationOptions: {
            header:null
        }
    }
))

/**
 * 1.初始化react-navigation与redux的中间件
 * 为reduxifyNavigator的key设置actionSubscribers(订阅)
 */
export const middleware = createReactNavigationReduxMiddleware(
    'root',
    state=>state.nav
);

/**
 * 2.将导航器组件传递给 reduxifyNavigator 函数，
 * 并返回一个将 navigation state 和 dispatch 函数作为 props的新组件
 * 注意：要在 createReactNavigationReduxMiddleware 之后执行
 */
const AppWithNavigationState = reduxifyNavigator(RootNavigator,'root');

/**
 * 3. state --> props的映射
 */
const mapStateToProps = state =>({
    state:state.nav
})

/**
 * 4.连接react 组件与redux 
 */
export default connect(mapStateToProps)(AppWithNavigationState);

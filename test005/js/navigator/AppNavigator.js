import { 
    createStackNavigator,
    createSwitchNavigator,
    createMaterialTopTabNavigator,
    createBottomTabNavigator,
    createAppContainer
} from 'react-navigation';


import WelcomPage from './../page/WelcomePage';
import HomePage from './../page/HomePage';
import DetailPage from './../page/DetailPage';


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

export default createAppContainer(createSwitchNavigator(
    {
        Init:InitNavigator,
        Main:MainNavigator
    },{
        navigationOptions: {
            header:null
        }
    }
))
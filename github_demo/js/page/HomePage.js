import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import {
    createAppContainer,
    createBottomTabNavigator
} from 'react-navigation';

import PopularPage from './PopularPage'
import TrendingPage from './TrendingPage'
import FavoritePage from './FavoritePage'
import MyPage from './MyPage'

import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import NavigationUtil from '../navigator/NavigationUtil';
import DynamicTabNavigator from '../navigator/DynamicTabNavigator';


class HomePage extends React.Component {


   /*  _tabNavigator() {
        return createAppContainer(createBottomTabNavigator({
            PopularPage: {
                screen: PopularPage,
                navigationOptions: {
                    tabBarLabel: '最热',
                    tabBarIcon: ({ tintColor, focused }) => (
                        <MaterialIcons
                            name='whatshot'
                            size={26}
                            style={{ color: tintColor }}
                        />
                    )
                }
            },
            TrendingPage: {
                screen: TrendingPage,
                navigationOptions: {
                    tabBarLabel: '趋势',
                    tabBarIcon: ({ tintColor, focused }) => (
                        <Ionicons
                            name='md-trending-up'
                            size={26}
                            style={{ color: tintColor }}
                        />
                    )
                }
            },
            FavoritePage: {
                screen: FavoritePage,
                navigationOptions: {
                    tabBarLabel: '收藏',
                    tabBarIcon: ({ tintColor, focused }) => (
                        <MaterialIcons
                            name='favorite'
                            size={26}
                            style={{ color: tintColor }}
                        />
                    )
                }
            },
            MyPage: {
                screen: MyPage,
                navigationOptions: {
                    tabBarLabel: '我的',
                    tabBarIcon: ({ tintColor, focused }) => (
                        <AntDesign
                            name='user'
                            size={26}
                            style={{ color: tintColor }}
                        />
                    )
                }
            },
        }))
    } */

    render() {
        NavigationUtil.navigation = this.props.navigation
        // const Tab = this._tabNavigator();
        // return <Tab />;
        return <DynamicTabNavigator />
    }
}

const styles = StyleSheet.create({

})

export default HomePage
import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import {
    createAppContainer,
    createBottomTabNavigator,
} from 'react-navigation';
import { BottomTabBar } from 'react-navigation-tabs'

import PopularPage from './../page/PopularPage'
import TrendingPage from './../page/TrendingPage'
import FavoritePage from './../page/FavoritePage'
import MyPage from './../page/MyPage'

import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import NavigationUtil from './NavigationUtil';

const TABS = {
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
}


class DynamicTabNavigator extends React.Component {
    constructor(props) {
        super(props)
        console.disableYellowBox = true
    }


    _tabNavigator() {
        const {PopularPage,TrendingPage,FavoritePage, MyPage} = TABS
        const tabs = {PopularPage, TrendingPage,FavoritePage,MyPage}
        PopularPage.navigationOptions.tabBarLabel = '最新' //动态配置Tab属性
        return createAppContainer(createBottomTabNavigator(tabs,{
            tabBarComponent:tabBarComponent
        }))
    }

    render() {
        NavigationUtil.navigation = this.props.navigation
        const Tab = this._tabNavigator();
        return <Tab />;
    }
}

class tabBarComponent extends React.Component {
    constructor(props) {
        super(props)
        this.theme = {
            tintColor:props.activeTintColor,
            updateTime:new Date().getTime()
        }
    }

    render() {
        const { routes,index } = this.props.navigation.state
        if(routes[index].params) {
            const { theme } = routes[index].params
            if(theme && theme.updateTime > this.theme.updateTime) {
                this.theme = theme
            }
        }
        return <BottomTabBar 
            {...this.props}
            activeTintColor={this.theme.tintColor || this.props.activeTintColor}
        />
    }
}

const styles = StyleSheet.create({

})

export default DynamicTabNavigator
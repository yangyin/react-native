import React from 'react'
import { StyleSheet, BackHandler } from 'react-native'
import {
    NavigationActions
} from 'react-navigation';
import { connect } from 'react-redux';

import NavigationUtil from '../navigator/NavigationUtil';
import DynamicTabNavigator from '../navigator/DynamicTabNavigator';


class HomePage extends React.Component {

    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress',this.onBackPress)
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress',this.onBackPress)
    }

    onBackPress = () => {
        const { dispatch , nav } = this.props
        if(nav.routes[1].index === 0) {
            return false
        }

        dispatch(NavigationActions.back())
        return true
    }

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

const mapStateToProps = state => ({
    nav: state.nav
})

export default connect(mapStateToProps)(HomePage)
import React from 'react';
import { BackHandler } from 'react-native';

import { createBottomTabNavigator, createAppContainer,NavigationActions } from 'react-navigation';
import { BottomTabBar } from 'react-navigation-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { connect } from 'react-redux';

import Tab1 from './../page/Tab1'
import Tab2 from './../page/Tab2'
import Tab3 from './../page/Tab3'
import Tab4 from './../page/Tab4'

/**
 * 配置路由页面
 */
const TABS = {
    Tab1: {
        screen: Tab1,
        navigationOptions: {
            tabBarLabel: '最热',
            tabBarIcon: ({ tintColor, focused }) => {
                return <MaterialIcons
                    name="whatshot"
                    size={26}
                    style={{
                        color: tintColor
                    }}
                />
            }
        }
    },
    Tab2: {
        screen: Tab2,
        navigationOptions: {
            tabBarLabel: '趋势',
            tabBarIcon: ({ tintColor, focused }) => {
                return <MaterialIcons
                    name="whatshot"
                    size={26}
                    style={{
                        color: tintColor
                    }}
                />
            }
        }
    },
    Tab3: {
        screen: Tab3,
        navigationOptions: {
            tabBarLabel: '收藏',
            tabBarIcon: ({ tintColor, focused }) => {
                return <MaterialIcons
                    name="whatshot"
                    size={26}
                    style={{
                        color: tintColor
                    }}
                />
            }
        }

    },
    Tab4: {
        screen: Tab4,
        navigationOptions: {
            tabBarLabel: '我的',
            tabBarIcon: ({ tintColor, focused }) => {
                return <AntDesign
                    name="user"
                    size={26}
                    style={{
                        color: tintColor
                    }}
                />
            }
        }
    },
}


class TabBarComponent extends React.Component {

    constructor(props) {
        super(props);

        this.theme = {
            tintColor: props.activeTintColor,
            updateTime: new Date().getTime()
        }

    }
    render() {
        const { routes, index, isTransitioning } = this.props.navigation.state;
        // console.log('props:: ',this.props.navigation.state)
        // if (routes[index].params) {
        //     const { theme } = routes[index].params;

        //     if (theme && theme.updateTime > this.theme.updateTime) {
        //         this.theme = theme;
        //     }
        // }
        return (
            <BottomTabBar
                {...this.props}
                activeTintColor={this.props.theme}
                // activeTintColor={this.theme.tintColor || this.props.activeTintColor}
            />
        )
    }

}




class DynamicTabNavigator extends React.Component {

    constructor(props) {
        super(props);
        console.disableYellowBox = true;
    }

    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress',this.onBackPress);
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress',this.onBackPress);
    }
    onBackPress = () => {
        const { dispatch,nav } = this.props;
        if(nav.routes[1].index === 0) {
            return false;
        }

        dispatch(NavigationActions.back());
        return true;
    }

    _tabNavigator() {
        if(this.Tabs) {
            return this.Tabs;
        }
        const { Tab1, Tab2, Tab3, Tab4 } = TABS;
        const tabs = { Tab1, Tab3 }
        return this.Tabs = createAppContainer(createBottomTabNavigator(tabs,
            {
                // tabBarComponent:TabBarComponent
                tabBarComponent: props => {
                    return <TabBarComponent {...props} theme={this.props.theme} />
                }
            }
        ))
    }

    render() {
        const Tab = this._tabNavigator();
        return <Tab />
    }




}




const mapStateToProps = state => ({
    theme: state.theme.theme,
    nav:state.nav

})
export default connect(mapStateToProps)(DynamicTabNavigator);
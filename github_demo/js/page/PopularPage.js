import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import {
    createMaterialTopTabNavigator,
    createAppContainer
} from 'react-navigation'
import NavigationUtil from './../navigator/NavigationUtil'
import { white } from 'ansi-colors';

class PopularPage extends React.Component {
    constructor(props) {
        super(props)
        this.tabNames = ['Java','JS','ios','android','PHP']
    }

    _genTabs(){
        const tabs = {}
        this.tabNames.forEach((item,index) => {
            tabs[`tab${index}`] = {
                screen:props => <PopularTab {...props} tabLabel={item} />,
                navigationOptions: {
                    title:item
                }
                
            }
        })
        return tabs
    }

    render() {
        const TabNavigator = createAppContainer(createMaterialTopTabNavigator(this._genTabs(),{
            tabBarOptions: {
                tabStyle:styles.tabStyle,
                upperCaseLabel:false, //是否标签大写
                scrollEnabled:true,//是否支持选项卡滚动
                style:{
                    backgroundColor:'#678'
                },
                indicatorStyle:styles.indicatorStyle,
                labelStyle:styles.labelStyle,//文字样式
            }
        }))
        return (
            // <View>
                <TabNavigator />
            // </View>
        )
    }
}

const styles = StyleSheet.create({
    tabStyle: {
        minWidth:50
    },
    indicatorStyle: {
        height:2,
        backgroundColor:'white'
    },
    labelStyle:{
        fontSize:13,
        marginTop:6,
        marginBottom:6
    }
})


class PopularTab extends React.Component {

    render() {
        const { tabLabel } = this.props;

        return (
            <View>
                <Text>{tabLabel}</Text>
                <Text onPress={() => {
                    NavigationUtil.goPage({
                        navigation:this.props.navigation
                    },'DetailPage')
                }}>跳转到详情页</Text>
            </View>
        )
    }
}

export default PopularPage
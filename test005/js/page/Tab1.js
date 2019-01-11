import React from 'react';
import {
    Text,
    View,
    Button,
    TouchableOpacity
} from 'react-native';
import { createMaterialTopTabNavigator, createAppContainer } from 'react-navigation';
import NavigationUtil from './../navigator/NavigationUtil';

export default class Tab1Page extends React.Component {
    static navigationOptions = {
        title: 'tab1',
        
    };
    constructor(props) {
        super(props);
        this.tabs = ['Java','Ios','React','Vue','Python','Android'];

    }

    _genTab =() => {
        let tabs = {}
        this.tabs.forEach((item,index) => {
            tabs['Tab'+[index]] = {
                screen:props=><Tab1 {...props} tabLabel={item} />,
                navigationOptions: {
                    title:item
                }
            }
       })
       return tabs;
    }

    componentDidMount() {
        NavigationUtil.tab1Navigation = this.props.navigation;
    }
    render() {
        const TabNavigator = createAppContainer(createMaterialTopTabNavigator(this._genTab(),{
            tabBarOptions: {
                upperCaseLabel:false,
                scrollEnabled:true,
                tabStyle: {
                    height:20,
                    marginBottom:6,
                    marginTop:6
                },
                tabStyle:{
                    width:100
                },
                indicatorStyle:{
                    backgroundColor:'orange'
                }
            }
        }))
        return <View style={{flex:1,marginTop:30}}>
            <TabNavigator />
        </View>
    }




}

class Tab1 extends React.Component {

    handle = () => {
        NavigationUtil.goPage({navigation:this.props.navigation},'DetailPage')
    }

    render() {
        const { tabLabel } = this.props;
        return (
            <View>
                <Text>{tabLabel}</Text>
                <Text onPress={this.handle}>跳转到详情页</Text>
                <Button 
                    title="改变主题色"
                    onPress={() => {
                        NavigationUtil.tab1Navigation.setParams({
                            theme:{
                                tintColor:'blue',
                                updateTime:new Date().getTime()
                            }
                        })
                    }}
                />
            </View>
        );
    }
}
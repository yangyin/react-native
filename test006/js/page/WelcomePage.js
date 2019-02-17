import React from 'react';
import {
    Text,
    View,
    Dimensions,
    TouchableOpacity
} from 'react-native';
import NavigationUtil from './../navigator/NavigationUtil';

import StorageUtil from '../utils/StorageUtil';
import WebIM from '../Lib/WebIM';


const {width, height} = Dimensions.get('window');


export default class WelcomePage extends React.Component {
    static navigationOptions = {
        title: 'welcome',
    };

    componentDidMount() {
        console.log(1111)
        console.log('****',WebIM)
        // this.autoLogin()
        this.registerHXListener();
        this.timer = setTimeout(()=>{
            // NavigationUtil.resetToHomePage(this.props);
        },200)
    }

    autoLogin() {
        StorageUtil.get('username',(err,object) => {
            if(!err && object && object.username) {
                const username = object.username;
                let password = '';
                StorageUtil.get('password', (err,object) => {
                    if(!err && object && object.username) {
                        password = object.password;
                        this.registerHXListener();
                    } else {
                        console.log('password: 数据异常');
                    }
                })
            } else {
                console.log('username: 数据异常');
            }
        })
    }

    /**
     * 注册环信的消息监听器
     */
    registerHXListener() {  // 注册环信的消息监听器，只有在自动登录时才注册
        console.log(222)
        this.loginToHX('hello','hello');
        WebIM.conn.listen({
            // xmpp连接成功
            onOpened: (msg) => {
                console.log('msg**** : ',msg)
                NavigationUtil.resetToHomePage(this.props);
                // 登录环信服务器成功后回调这里，关闭当前页面并跳转到HomeScreen
                // const resetAction = StackActions.reset({
                //     index: 0,
                //     actions: [
                //         NavigationActions.navigate({ routeName: 'Home' })
                //     ]
                // });
                // this.props.navigation.dispatch(resetAction);
            },
            // 各种异常
            onError: (error) => {
                Toast.showShortCenter('登录聊天服务器出错');
                console.log('onError: ' + JSON.stringify(error))
            },
            // 连接断开
            onClosed: (msg) => {
                console.log('与聊天服务器连接断开')
                // Toast.showShortCenter('与聊天服务器连接断开');
            },
        });
    }

    loginToHX(username, password) {
        // 登录环信聊天服务器
        this.loginUsername = username;
        this.loginPassword = password;
        if (WebIM.conn.isOpened()) {
            WebIM.conn.close('logout');
        }
        // 下面调用成功后，会回调SplashScreen中注册的listener
        WebIM.conn.open({
            apiUrl: WebIM.config.apiURL,
            user: username,
            pwd: password,
            appKey: WebIM.config.appkey
        });
    }

    componentWillMount() {
        this.timer && clearTimeout(this.timer);
    }

    render() {
        return (
            <View>
                <Text>welcome page11   </Text>
            </View>
        );
    }

   


}
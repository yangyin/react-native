import React from 'react';
import {
    ActivityIndicator,
    AsyncStorage,
    Button,
    StatusBar,
    StyleSheet,
    View,
} from 'react-native';
import { createStackNavigator, createSwitchNavigator, createAppContainer, createBottomTabNavigator } from 'react-navigation';

import Tab1 from './js/pages/tab1'
import Tab2 from './js/pages/tab2'
import Tab3 from './js/pages/tab3'
import Tab4 from './js/pages/tab4'
import Tab5 from './js/pages/tab5'

class SignInScreen extends React.Component {
    static navigationOptions = {
        title: 'Please sign in',
    };

    render() {
        return (
            <View style={styles.container}>
                <Button title="Sign in!" onPress={this._signInAsync} />
            </View>
        );
    }

    _signInAsync = async () => {
        await AsyncStorage.setItem('userToken', 'abc');
        this.props.navigation.navigate('App');
    };
}

class HomeScreen extends React.Component {
    static navigationOptions = {
        title: 'Welcome to the app!',
    };

    render() {
        return (
            <View style={styles.container}>
                <Button title="Show me more of the app" onPress={this._showMoreApp} />

                <Button title="Actually, sign me out :)" onPress={this._signOutAsync} />
            </View>
        );
    }

    _showMoreApp = () => {
        this.props.navigation.navigate('Other');
    };

    _signOutAsync = async () => {
        await AsyncStorage.clear();
        this.props.navigation.navigate('Auth');
    };
}

class OtherScreen extends React.Component {
    static navigationOptions = {
        title: 'Lots of features here',
    };

    render() {
        return (
            <View style={styles.container}>
                <Button title="I'm done, sign me out" onPress={this._signOutAsync} />
                <StatusBar barStyle="default" />
            </View>
        );
    }

    _signOutAsync = async () => {
        await AsyncStorage.clear();
        this.props.navigation.navigate('Auth');
    };
}

class AuthLoadingScreen extends React.Component {
    constructor() {
        super();
        this._bootstrapAsync();
    }

    // Fetch the token from storage then navigate to our appropriate place
    _bootstrapAsync = async () => {
        const userToken = await AsyncStorage.getItem('userToken');

        // This will switch to the App screen or Auth screen and this loading
        // screen will be unmounted and thrown away.
        this.props.navigation.navigate(userToken ? 'App' : 'Auth');
    };

    // Render any loading content that you like here
    render() {
        return (
            <View style={styles.container}>
                <ActivityIndicator />
                <StatusBar barStyle="default" hidden={true} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});




const TabNavigation = createBottomTabNavigator({
    Tab1: {
        screen: Tab1
    },
    Tab2: {
        screen: Tab2
    },
    Tab3: {
        screen: Tab3
    },
    Tab4: {
        screen: Tab4
    },
    Tab5: {
        screen: Tab5
    },
},{
    // initialRouteName:'Tab2'
})










const AppStack = createStackNavigator(
    {
        Home: {
            screen:TabNavigation,
            navigationOptions:(props) => {

                console.log('home option: ',props)
                return props;
            }
        },
        // Home: HomeScreen,
        Other: {
            screen:OtherScreen,
            navigationOptions:(props) => {

                console.log('Other option: ',props)
                return props;
            }
        },

    }
);

const defaultGetStateForAction = AppStack.router.getStateForAction;
const defaultAction = AppStack.router.getComponentForState;
AppStack.router.getStateForAction = (action, state) => {
    // console.log('action***: ', action);
    // console.log('state***: ', state);
    /**
     *
     */
    if(action && state ) {
        const { type } = action;
        let { routes } = state;
        /**
         * 初始化时,配置routes
         */
        if(type === 'Navigation/INIT') {
            // console.log(111112)
            if( routes[0] && routes[0].routes ) {
                const route = [
                    {key:'Tab1',routeName:'Tab1'},
                    {key:'Tab2',routeName:'Tab2'},
                    {key:'Tab3',routeName:'Tab3'},
                ]
                let opt = [{...routes[0],routes:route},{key:'Other',routeName:'Other'}]
                

                routes.splice(0,1,{...routes[0],routes:route})
                console.log({...state,routes:opt})
                return {
                    ...state,
                    routes:opt
                }
            }
        }
    }
    return defaultGetStateForAction(action, state);
};

AppStack.router.getComponentForState=(state) => {

    console.log('routeName state***',state);
    return defaultAction(state);


}
















const AuthStack = createStackNavigator({ SignIn: SignInScreen });

export default createAppContainer(createSwitchNavigator(
    {
        AuthLoading: AuthLoadingScreen,
        App: AppStack,
        Auth: AuthStack,
    },
    {
        initialRouteName: 'AuthLoading',
    }
));

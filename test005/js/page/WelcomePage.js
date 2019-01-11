import React from 'react';
import {
    Text,
    View,
    Button,
    TouchableOpacity
} from 'react-native';
import NavigationUtil from './../navigator/NavigationUtil';

export default class WelcomePage extends React.Component {
    static navigationOptions = {
        title: 'welcome',
    };

    componentDidMount() {
        this.timer = setTimeout(()=>{
            NavigationUtil.resetToHomePage(this.props);
        },200)
    }

    componentWillMount() {
        this.timer && clearTimeout(this.timer);
    }

    render() {
        return (
            <View>
                <Text>welcome page</Text>
            </View>
        );
    }

   


}
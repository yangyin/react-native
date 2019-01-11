import React from 'react';

import NavigationUtil from './../navigator/NavigationUtil';



import DynamicTabNavigator from './../navigator/DynamicTabNavigator';

export default class HomePage extends React.Component {
    static navigationOptions = {
        title: 'HomePage',
    };

    render() {
        NavigationUtil.navigation = this.props.navigation;
        return <DynamicTabNavigator />
    }

   


}
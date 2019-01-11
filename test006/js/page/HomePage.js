import React from 'react';
import { connect } from 'react-redux';
import NavigationUtil from './../navigator/NavigationUtil';



import DynamicTabNavigator from './../navigator/DynamicTabNavigator';

class HomePage extends React.Component {
    static navigationOptions = {
        title: 'HomePage',
    };

    render() {
        NavigationUtil.navigation = this.props.navigation;
        return <DynamicTabNavigator />
    }
}

const mapStateToProps = state => ({
    // nav:state.nav
})
export default connect(mapStateToProps)(HomePage);
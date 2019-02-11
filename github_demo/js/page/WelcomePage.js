import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import NavigationUtil from './../navigator/NavigationUtil'

class WelcomePage extends React.Component {

    componentDidMount() {
        this.timer = setTimeout(() => {
            const { navigation } = this.props
            // navigation.navigate('Main')
            NavigationUtil.resetToHomePage(this.props)
        }, 200);
    }

    componentWillUnmount() {
        this.timer && clearTimeout(this.timer)
    }

    render() {
        return (
            <View>
                <Text>welcome page</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({

})

export default WelcomePage
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button } from 'react-native';




export default class App extends Component {
    render() {
        const { navigation } = this.props;
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>Welcome to React Native!</Text>
                <Button
                    title="FlatList"
                    onPress={() => {
                        navigation.navigate('FlatList')
                    }}
                />
                <Button
                    title="SwipeList"
                    onPress={() => {
                        navigation.navigate('SwipeList')
                    }}
                />
                <Button
                    title="Section"
                    onPress={() => {
                        navigation.navigate('Section')
                    }}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

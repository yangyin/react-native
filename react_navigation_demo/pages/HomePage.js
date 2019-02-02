
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Button } from 'react-native';




export default class HomePage extends Component {
  render() {
      const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>home page!</Text>
        <Button 
            title="跳转到Page1"
            onPress={() => {
                navigation.navigate('page1',{name:'动态的'})
            }}
        />
        <Button 
            title="跳转到Page2"
            onPress={() => {
                navigation.navigate('page2')
            }}
        />
        <Button 
            title="跳转到Page3"
            onPress={() => {
                navigation.navigate('page3',{name:'Devio'})
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

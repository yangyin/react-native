
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Button} from 'react-native';




export default class Page1 extends Component {
  render() {
      const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>page1!</Text>
        <Button 
            title="Go Back"
            onPress={() => {
                navigation.goBack();
            }}
        />
        <Button 
            title="跳转到Page4"
            onPress={() => {
                navigation.navigate('page4')
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

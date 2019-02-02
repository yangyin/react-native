/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View,FlatList,RefreshControl,ActivityIndicator } from 'react-native';

const DATA = ['北京','上海','成都','广州','深圳'];


export default class FlatLists extends Component {

    state = {
        isLoading:false,
        dataArr:DATA,
    }
    _renderItem(data) {
        return <View style={styles.item}>
            <Text style={styles.text}>{data.item}</Text>
        </View>
    }

    onRefresh = () =>{
        this.setState({
            isLoading:true
        })

        setTimeout(() => {
            let dataArr = [];
            for(let i=this.state.dataArr.length -1;i>=0;i--) {
                dataArr.push(this.state.dataArr[i]);
            }
            this.setState({
                dataArr,
                isLoading:false
            })
        }, 2000);
    }

    genIndicator = () => {
        return <View style={styles.indicatorcont}>
            <ActivityIndicator 
                style={styles.activity}
                color={'red'}
                size={'large'}
                animating={true}
            />
        </View>
    }
    render() {
        return (
            <View style={styles.container}>
                <FlatList 
                    data={this.state.dataArr}
                    renderItem={data=>this._renderItem(data)}
                    refreshControl={
                        <RefreshControl 
                            title={'loading'}
                            colors={['red']}
                            tintColor={'orange'}
                            refreshing={this.state.isLoading}
                            onRefresh={this.onRefresh}
                        />
                    }
                    // refreshing={this.state.isLoading}
                    // onRefresh={this.onRefresh}
                    ListFooterComponent={() =>this.genIndicator()}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    item :{
        backgroundColor:'#169',
        height:200,
        marginLeft:15,
        marginRight:15,
        marginBottom:15,
        alignItems:'center',
        justifyContent:'center'
    },
    text:{
        color:'#fff'
    },
    indicatorcont: {
        alignItems:'center'
    },
    activity: {
        color:'red',
        margin:10
    }
});

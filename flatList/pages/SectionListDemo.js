/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, SectionList, RefreshControl, ActivityIndicator } from 'react-native';

const DATA = [
    { data: ['北京', '上海', '成都', '广州', '深圳'], title: '一线' },
    { data: ['杭州', '武汉', '郑州', '天津', '石家庄'], title: '二线' },
    { data: ['洛阳', '厦门', '青岛', '拉萨', '南充'], title: '三线' },
];


export default class SectionListDemo extends Component {

    state = {
        isLoading: false,
        dataArr: DATA,
    }
    _renderItem(data) {
        return <View style={styles.item}>
            <Text style={styles.text}>{data.item}</Text>
        </View>
    }

    onRefresh = (refreshing) => {
        if (refreshing) {
            this.setState({
                isLoading: true
            })
        }

        setTimeout(() => {
            let dataArr = [];
            if (refreshing) {
                for (let i = this.state.dataArr.length - 1; i >= 0; i--) {
                    dataArr.push(this.state.dataArr[i]);
                }
            } else {
                dataArr = this.state.dataArr.concat(DATA);
            }
            this.setState({
                dataArr,
                isLoading: false
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
            <Text>加载更多...</Text>
        </View>
    }

    _renderSectionHeader({section}) {
        return <View style={styles.sectionHeader}>
            <Text style={styles.sectionText}>{section.title}</Text>
        </View>
    }


    render() {
        return (
            <View style={styles.container}>
                <SectionList
                    sections={this.state.dataArr}
                    renderItem={data => this._renderItem(data)}
                    refreshControl={
                        <RefreshControl
                            title={'loading'}
                            colors={['red']}
                            tintColor={'orange'}
                            refreshing={this.state.isLoading}
                            onRefresh={() => this.onRefresh(true)}
                        />
                    }
                    // refreshing={this.state.isLoading}
                    // onRefresh={this.onRefresh}
                    ListFooterComponent={() => this.genIndicator()}
                    onEndReached={
                        () => this.onRefresh()
                    }
                    renderSectionHeader={(data)=>this._renderSectionHeader(data)}
                    ItemSeparatorComponent={() => <View style={styles.separator} />}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    item: {
        backgroundColor: '#169',
        height: 80,
        marginLeft: 15,
        marginRight: 15,
        marginBottom: 15,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        color: '#fff'
    },
    indicatorcont: {
        display: 'flex',

        alignItems: 'center',
        justifyContent: 'center'
    },
    activity: {
        color: 'red',
        margin: 10
    },
    sectionHeader: {
        height:50,
        backgroundColor:'#93ebbe',
        alignItems:'center',
        justifyContent:'center'
    },
    separator :{
        height:1,
        backgroundColor:'#ddd',
        flex:1
    }
});

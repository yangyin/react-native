import React from 'react';
import {
    Text,
    View,
} from 'react-native';

export default class Tab1 extends React.Component {
    static navigationOptions = {
        title: 'Tab1',
    };

    render() {
        return (
            <View>
                <Text>Tab1 page</Text>
            </View>
        );
    }


}
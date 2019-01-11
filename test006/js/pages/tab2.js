import React from 'react';
import {
    Text,
    View,
    Button,
    TouchableOpacity
} from 'react-native';

export default class Tab2 extends React.Component {
    static navigationOptions = {
        title: 'Tab2',
    };

    render() {
        return (
            <View>
                <Text>Tab2 page</Text>
                <TouchableOpacity >

                    <Button title="Show me more of the app" onPress={this._showMoreApp} />
                </TouchableOpacity>
            </View>
        );
    }

    _showMoreApp = () => {
        this.props.navigation.navigate('SignIn');
    };


}
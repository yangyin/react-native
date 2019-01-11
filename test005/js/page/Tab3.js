import React from 'react';
import {
    Text,
    View,
    Button,
    TouchableOpacity
} from 'react-native';

export default class Tab3Page extends React.Component {
    static navigationOptions = {
        title: 'Tab3',
    };

    render() {
        return (
            <View>
                <Text>收藏 page</Text>
                <Button 
                    title="改变主题色"
                    onPress={() => {
                        this.props.navigation.setParams({
                            theme:{
                                tintColor:'red',
                                updateTime:new Date().getTime()
                            }
                        })
                    }}
                />
            </View>
        );
    }

   


}
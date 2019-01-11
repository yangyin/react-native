import React from 'react';
import {
    Text,
    View,
    Button,
    TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux';

import actions from './../action';

class Tab3Page extends React.Component {
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
                        this.props.onThemeChange('#096');
                        // this.props.navigation.setParams({
                        //     theme:{
                        //         tintColor:'red',
                        //         updateTime:new Date().getTime()
                        //     }
                        // })
                    }}
                />
            </View>
        );
    }
}

const mapStateToProps = state=>({});
const mapDispatchToProps = dispatch =>({
    onThemeChange:theme => dispatch(actions.onThemeChange(theme))
})
export default connect(mapStateToProps,mapDispatchToProps)(Tab3Page);
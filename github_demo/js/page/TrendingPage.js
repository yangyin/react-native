import React from 'react'
import { StyleSheet, View,Text,Button } from 'react-native'
import { connect } from 'react-redux'
import actions from './../action'
import RongyunUtil from './../utils/rongyun'

class TrendingPage extends React.Component {

   render() {
       const { navigation } = this.props
       return (
           <View>
               <Text>trending page</Text>
                <Button 
                    title="改变主题色"
                    onPress={() => {
                        this.props.onThemeChange('#096')
                        RongyunUtil.onPageStart('111')
                        // navigation.setParams({
                        //     theme:{
                        //         tintColor:'red',
                        //         updateTime:new Date().getTime()
                        //     }
                        // })
                    }}
                />
           </View>
       )
   }
}

const styles = StyleSheet.create({
   
})


const mapStateToProps = state => ({

})
const mapDispatchToProps = dispatch => ({
    onThemeChange:theme=>dispatch(actions.onThemeChange(theme))
})

export default connect(mapStateToProps,mapDispatchToProps)(TrendingPage)

// export default TrendingPage
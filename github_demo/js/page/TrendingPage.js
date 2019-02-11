import React from 'react'
import { StyleSheet, View,Text,Button } from 'react-native'

class TrendingPage extends React.Component {

   render() {
       const { navigation } = this.props
       return (
           <View>
               <Text>trending page</Text>
                <Button 
                    title="改变主题色"
                    onPress={() => {
                        navigation.setParams({
                            theme:{
                                tintColor:'red',
                                updateTime:new Date().getTime()
                            }
                        })
                    }}
                />
           </View>
       )
   }
}

const styles = StyleSheet.create({
   
})

export default TrendingPage
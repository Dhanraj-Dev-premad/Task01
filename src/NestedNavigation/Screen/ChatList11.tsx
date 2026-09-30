import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const ChatList11 = () => {

  
  return (
    <View style={styles.wrapper}>
      <Text>ChatList</Text>
    </View>
  )
}

export default ChatList11

const styles=StyleSheet.create(
    {
        wrapper:{
            flex:1,
            justifyContent:'center',
            alignItems:'center'
            
        }
    })
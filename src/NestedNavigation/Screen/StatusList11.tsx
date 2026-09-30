import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const StatusList11 = () => {
  return (
    <View style={styles.wrapper}>
      <Text>StatusList</Text>
    </View>
  )
}

export default StatusList11

const styles=StyleSheet.create(
    {
        wrapper:{
            flex:1,
            justifyContent:'center',
            alignItems:'center'
            
        }
    })
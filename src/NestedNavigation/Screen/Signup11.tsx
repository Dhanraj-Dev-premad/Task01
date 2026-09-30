import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const Signup11 = () => {
 const naviagtion =useNavigation()
  
  return (
    <View style={styles.wrapper}>
      <Text>Signup</Text>
        <TouchableOpacity onPress={()=>{naviagtion.navigate('Login11')}}>
        <Text>Login11</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Signup11

const styles=StyleSheet.create(
    {
        wrapper:{
            flex:1,
            justifyContent:'center',
            alignItems:'center'
            
        }
    })
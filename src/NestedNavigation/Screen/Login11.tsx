import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const Login11 = () => {
    const naviagtion =useNavigation()
  return (
    <View style={styles.wrapper}>
      <Text>Login11</Text>
      <TouchableOpacity onPress={()=>{naviagtion.navigate('Home11')}}>
        <Text>go to home</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>{naviagtion.navigate('Signup11')}}>
        <Text>signup</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Login11 

const styles=StyleSheet.create(
    {
        wrapper:{
            flex:1,
            justifyContent:'center',
            alignItems:'center'
            
        }
    })
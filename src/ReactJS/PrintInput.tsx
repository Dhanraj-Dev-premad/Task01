import { Alert, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'

const PrintInput = () => {
    const [Val, setVal]=useState("Raj singh")
  return (
    <View style={{flex:1,gap:20,justifyContent:'center',alignItems:'center'}}>
      <Text>PrintInput</Text>
      <TextInput placeholder='Enter User Name' onChangeText={(text)=>{
        console.log(text, "event");
        setVal(text)
        
      }} style={{height:55,width:300, backgroundColor:'#e8bfbf'}} ></TextInput>

      <Text style={{height:55,width:300,backgroundColor:'#d5def8',justifyContent:'center',alignItems:'center'}}>{Val}</Text>
    </View>
  )
}

export default PrintInput

const styles = StyleSheet.create({})
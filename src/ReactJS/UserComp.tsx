import { Button, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useState } from 'react'


function LoginR ()  {
  const [fruit,setFruit]=useState("apple"); 
  const handleFruit=()=>{
    setFruit('Banana')
    
  }


  
  return (
    <View>
      <Text>State in React Js</Text>   
      <Text>{fruit}</Text>
        <Pressable  style={{ height:45,width:300,borderRadius:3,backgroundColor:'#f1e3e3', justifyContent:'center',alignItems:'center'}}>
            <Text style={{fontSize:24}} onPress={handleFruit}>Change Fruit Name</Text>
        </Pressable>   
    </View>

   
    )

}

export default LoginR

const styles = StyleSheet.create({})
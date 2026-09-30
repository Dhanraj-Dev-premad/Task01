import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import UseEffectHooksWithProps from './UseEffectHooksWithProps';

const Counter = () => {
    const[counter, setCounter]=useState(0);
  return (
    <View >
        <UseEffectHooksWithProps Counter={counter}/>
         <Pressable onPress={()=>setCounter(counter+1)} style={{height:45,width:250,backgroundColor:'#c5d7f6',borderRadius:15,borderWidth:3,borderColor:'#70a1f6',justifyContent:'center',alignItems:'center'}}>
        <Text style={{fontSize:25}}>Counter {counter}</Text>
      </Pressable>
     
    </View>
  )
}

export default Counter

const styles = StyleSheet.create({})
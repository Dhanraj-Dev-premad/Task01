import { Button, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'

const UseEffectHooks = () => {
  const [counter,setcounter]=useState(0)
  const [data,setdata]=useState(0)


  useEffect(()=>{
      callOnce();

    },[])
    function callOnce(){
        console.log(" callonce functuion called");
    }
    // callOnce();
  return (
    <View style={{flex:1, justifyContent:"center",alignItems:'center'}}>
      <Text>UseEffectHooks</Text>
      <Pressable onPress={()=>setcounter(counter+1)} style={{height:45,width:250,backgroundColor:'#c5d7f6',borderRadius:15,borderWidth:3,borderColor:'#70a1f6',justifyContent:'center',alignItems:'center'}}>
        <Text style={{fontSize:25}}>Counter {counter}</Text>
      </Pressable>
      <Pressable onPress={()=>setdata(data+1)} style={{height:45,width:250,backgroundColor:'#c5d7f6',borderRadius:15,borderWidth:3,borderColor:'#70a1f6',justifyContent:'center',alignItems:'center'}}>
        <Text style={{fontSize:25}}>Data {data}</Text>
      </Pressable>
     
    </View>
  )
}  

export default UseEffectHooks

const styles = StyleSheet.create({})
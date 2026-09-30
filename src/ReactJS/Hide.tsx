import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useState } from 'react'

function Hide   ( {user})  {
    const [display ,setDisplay]=useState(true)
  return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        
      <Text>Hii Raj {user.name} </Text>


      <Pressable  style={{ height:45,width:300,borderRadius:3,backgroundColor:'#f1e3e3', justifyContent:'center',alignItems:'center'}}>
            <Text style={{fontSize:24}}onPress={()=>setDisplay(!display)} >Change Fruit Name</Text>
        </Pressable>
      {

        display ?<Text>Hallo Rishi </Text>:null
      }
    </View>
  )
}

export default Hide

const styles = StyleSheet.create({})
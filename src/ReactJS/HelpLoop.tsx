import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const HelpLoop = ({data}) => {
  return (
    <View>
      <Text style={{height:55,width:300,fontSize:22}}>Name : <Text style={{fontSize:25,color:'#f6e0e0'}}>{data.name}</Text></Text>
    </View>
  )
}

export default HelpLoop

const styles = StyleSheet.create({})
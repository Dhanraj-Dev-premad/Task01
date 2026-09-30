import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ClassComp from './ClassComp'

const College = () => {
  return (
    <View style={{backgroundColor:'red',padding:10}}>
      <Text>College</Text>
      <ClassComp/>
    </View>
  )
}

export default College

const styles = StyleSheet.create({})
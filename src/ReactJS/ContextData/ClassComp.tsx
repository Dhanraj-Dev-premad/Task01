import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import StudentCop from './StudentCop'

const ClassComp = () => {
  return (
    <View style={{backgroundColor:'blue',padding:10}}>
         <Text>Class comp</Text>
         <StudentCop/>
       </View>
  )
}

export default ClassComp

const styles = StyleSheet.create({})
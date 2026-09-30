import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Subjectcomp from './Subjectcomp'

const StudentCop = () => {
  return (
     <View style={{backgroundColor:'pink',padding:10}}>
          <Text>Student comp</Text>
          <Subjectcomp/>
        </View>
  )
}

export default StudentCop

const styles = StyleSheet.create({})
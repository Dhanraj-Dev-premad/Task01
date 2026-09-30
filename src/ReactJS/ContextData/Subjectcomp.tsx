import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { SubjectContext } from './ContextData'

const Subjectcomp = () => {
    const subject=useContext(SubjectContext)
  return (
    <View style={{backgroundColor:'pink',padding:10}}>
              <Text>Student comp</Text>
              <Text>subject is:{subject}</Text>
    </View>
  )
}

export default Subjectcomp

const styles = StyleSheet.create({})
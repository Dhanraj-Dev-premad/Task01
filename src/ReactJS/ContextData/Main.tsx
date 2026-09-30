import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import College from './College'
import { SubjectContext } from './ContextData'

const Main = () => {
  return (
    <View style={{backgroundColor:'yellow',padding:10}}>
      <SubjectContext.Provider value='English'>
         <Text>Main comp</Text>
        <College/>
      </SubjectContext.Provider>
       
      
    </View>
  )
}

export default Main

const styles = StyleSheet.create({})
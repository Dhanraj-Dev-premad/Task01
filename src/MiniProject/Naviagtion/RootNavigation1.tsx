import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import StackNavigation1 from './StackNaviagtion1'

const RootNavigation1 = () => {
  return (
     <NavigationContainer>
      <StackNavigation1/>
        
    </NavigationContainer>
  )
}

export default RootNavigation1

const styles = StyleSheet.create({})
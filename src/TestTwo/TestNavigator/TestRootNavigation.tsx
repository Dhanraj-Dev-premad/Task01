import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import TestStackNavigation from './TestStackNavigation'
import DrawerNavigation from './DrawerNavi/DrawerNavigation'

const TestRootNavigation = () => {
  return (
    <NavigationContainer>
        <TestStackNavigation/>
    </NavigationContainer>
  )
}

export default TestRootNavigation

const styles = StyleSheet.create({})

import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'

import StackNaviagtionT from './SNavigaton'
import TodoProvider from './TodoContext';



const RootNavigationT = () => {
  return (
    <TodoProvider>
     <NavigationContainer>
      <StackNaviagtionT/>
        
    </NavigationContainer>
    </TodoProvider>
  )
}

export default RootNavigationT


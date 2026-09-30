import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import TestScreenE from '../ScreenE/TestScreenE';
import BottomTabNavigationE from './BottomTabNavigationE';






const stack = createNativeStackNavigator();

const StackNaviagtionE = () => {
  return (
    <stack.Navigator
  
    
    > 
      

      <stack.Screen
      name='BottomTabNavigationE'
      component={BottomTabNavigationE}
      options={{title:'BottomTabNavigationE',headerShown:false}}
      

      />

      

      <stack.Screen
      name='TestScreenE'
      component={TestScreenE}
      options={{title:'TestScreenE',headerShown:false}}
      

      />
      
      
      
      
    </stack.Navigator>
  )
}

export default StackNaviagtionE;

const styles = StyleSheet.create({});

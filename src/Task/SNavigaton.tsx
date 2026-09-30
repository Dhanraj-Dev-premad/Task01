import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Todo2 from './Todo2';
import TodoDataScreen from './TodoDataScreen';
import { SubjectContext } from '../ReactJS/ContextData/ContextData';







const stack = createNativeStackNavigator();

const StackNaviagtionT = () => {
  return (
     
      <stack.Navigator> 
      <stack.Screen 
        name='Todo2' 
        component={Todo2} 
        options={{ title: 'Todo2', headerShown: false }}
        
      />
      <stack.Screen 
        name='TodoDataScreen' 
        component={TodoDataScreen} 
        options={{ title: 'TodoDataScreen', headerShown: false }}
       
      />
      
      
      
      
    </stack.Navigator>

     
    
  )
}

export default StackNaviagtionT;

const styles = StyleSheet.create({});

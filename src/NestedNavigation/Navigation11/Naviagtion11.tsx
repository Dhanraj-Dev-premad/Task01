import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login11 from '../Screen/Login11';
import Signup11 from '../Screen/Signup11';
import Home11 from '../Screen/Home11';
import Chat11 from '../Screen/Chat11';

const stack =createNativeStackNavigator();
const Naviagtion11 = () => {
  return (
      <NavigationContainer>
        <stack.Navigator
        screenOptions={
            {
                headerShown:false
            }}
        
        >
            <stack.Screen name='Login11' component={Login11}/>
            <stack.Screen name='Signup11' component={Signup11}/>
            <stack.Screen name='Home11' component={Home11}/>
            <stack.Screen name='Chat11' component={Chat11}/>
        </stack.Navigator>

      </NavigationContainer>
  
  )
}

export default Naviagtion11

const styles = StyleSheet.create({})
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import LoginPage1 from '../LoginScreens/LoginPage1';
import ForgotPass1 from '../LoginScreens/ForgotPass1';
import Verification1 from '../LoginScreens/Verification1';
import PassReset1 from '../LoginScreens/PassReset1';
import DrawerNavigation1 from './DrawerNavigation1';





const stack = createNativeStackNavigator();

const StackNavigation1 = () => {
  return (
    <stack.Navigator> 
      <stack.Screen 
        name='TestLoginPage' 
        component={LoginPage1} 
        options={{ title: 'LoginPage', headerShown: false }}
      />
      <stack.Screen 
        name='TestForgotPass' 
        component={ForgotPass1} 
        options={{ title: 'ForgotPass' }}
      />
      <stack.Screen 
        name='TestVerification' 
        component={Verification1} 
        options={{ title: 'Verification' }}
      />
      <stack.Screen 
        name='TestPassReset' 
        component={PassReset1} 
        options={({ navigation }) => ({
          title: 'PassReset',
          headerLeft: () => (
            <TouchableOpacity 
              onPress={() => {
               
                navigation.pop(2); 
              }}
              style={{ paddingLeft: 10, paddingRight: 25, paddingVertical: 5 }} // Gives it a good tap area
            >
              <Text style={{ color: '#000509', fontSize: 40 }}>‹</Text>
            </TouchableOpacity>
          ),
        })}
      />



      {/* for drawer page */}
     <stack.Screen
  name="DrawerNavigation1"
  component={DrawerNavigation1}
  options={{ headerShown: false }}
/>
      
    </stack.Navigator>
  )
}

export default StackNavigation1;

const styles = StyleSheet.create({});

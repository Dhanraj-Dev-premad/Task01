import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import TestLoginPage from '../TestScreen/TestLoginPage';
import TestPassReset from '../TestScreen/TestPassReset';
import TestVerification from '../TestScreen/TestVerification';
import TestForgotPass from '../TestScreen/TestForgotPass';
import DrawerNavigation from './DrawerNavi/DrawerNavigation';



const stack = createNativeStackNavigator();

const TestStackNavigation = () => {
  return (
    <stack.Navigator>
      <stack.Screen 
        name='TestLoginPage' 
        component={TestLoginPage} 
        options={{ title: 'LoginPage', headerShown: false }}
      />
      <stack.Screen 
        name='TestForgotPass' 
        component={TestForgotPass} 
        options={{ title: 'ForgotPass' }}
      />
      <stack.Screen 
        name='TestVerification' 
        component={TestVerification} 
        options={{ title: 'Verification' }}
      />
      <stack.Screen 
        name='TestPassReset' 
        component={TestPassReset} 
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
      <stack.Screen name="DrawerNavigation" component={DrawerNavigation} />
    </stack.Navigator>
  )
}

export default TestStackNavigation;

const styles = StyleSheet.create({});

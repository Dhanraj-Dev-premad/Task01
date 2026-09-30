import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginpageE from '../ScreenE/AuthE/LoginpageE';
import RegisterPageE from '../ScreenE/AuthE/RegisterPageE';
import ForgetPassPageE from '../ScreenE/AuthE/ForgetPassPageE';
import PassResetE from '../ScreenE/AuthE/PassResetE';
import VerifyEmailE from '../ScreenE/AuthE/VerifyEmailE';
import SuccAccountE from '../ScreenE/AuthE/SuccAccountE';
import OnB2E from '../ScreenE/OnBoardingE/OnB2E';
import OnB1E from '../ScreenE/OnBoardingE/OnB1E';
import OnB3E from '../ScreenE/OnBoardingE/OnB3E';
const Auth = createNativeStackNavigator();


const AuthNavigationE = () => {
  return (
    <Auth.Navigator>
        <Auth.Screen 
        name='OnB1E' 
        component={OnB1E} 
        options={{ title: 'OnB1E', headerShown: false }}
        
      />
      <Auth.Screen 
        name='OnB2E' 
        component={OnB2E} 
        options={{ title: 'OnB2E', headerShown: false }}
       
      />
      <Auth.Screen 
        name='OnB3E' 
        component={OnB3E} 
         options={{ title: 'OnB3E', headerShown: false }}
        
      />


      {/* the error{can't read property 'useContext' of null, stack is because of */}

   
    
      <Auth.Screen
      name='LoginpageE'
      component={LoginpageE}
      options={{title:'LoginpageE',headerShown:false}}

      

      />
      <Auth.Screen
      name='RegisterPageE'
      component={RegisterPageE}
      options={{title:'RegisterPageE',headerShown:false}}
      

      />
      <Auth.Screen
      name='ForgetPassPageE'
      component={ForgetPassPageE}
      options={{title:'ForgetPassPageE',headerShown:false}}
      

      />
       <Auth.Screen
      name='PassResetE'
      component={PassResetE}
      options={{title:'PassResetE',headerShown:false}}
      

      />
       <Auth.Screen
      name='VerifyEmailE'
      component={VerifyEmailE}
      options={{title:'VerifyEmailE',headerShown:false}}
      

      />
       <Auth.Screen
      name='SuccAccountE'
      component={SuccAccountE}
      options={{title:'SuccAccountE',headerShown:false}}
      

      />
       </Auth.Navigator>
  )
}

export default AuthNavigationE

const styles = StyleSheet.create({})
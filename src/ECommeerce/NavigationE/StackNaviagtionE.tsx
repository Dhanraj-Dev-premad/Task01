import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import TestScreenE from '../ScreenE/TestScreenE';
import BottomTabNavigationE from './BottomTabNavigationE';
import ProductDetailsComp from '../ScreenE/ProductDetailsScreen/ProductDetailsComp';
import ProductImageScreen from '../ScreenE/ProductDetailsScreen/ProductImageScreen';
import Cart from '../ScreenE/CartScreens/Cart';
import CheckOutScreen from '../ScreenE/CartScreens/CheckOutScreen';
import SelectPaymentMethodScreen from '../ScreenE/CartScreens/SelectPaymentMethodScreen';
import SelectAddress from '../ScreenE/CartScreens/SelectAddress';
import PaymentSuccess from '../ScreenE/CartScreens/PaymentSuccess';






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
      name='ProductDetailsComp'
      component={ProductDetailsComp}
      options={{title:'ProductDetailsComp',headerShown:false}}
      

      />
      <stack.Screen
      name='ProductImageScreen'
      component={ProductImageScreen}
      options={{title:'ProductImageScreen',headerShown:false}}
      

      />
      <stack.Screen
      name='Cart'
      component={Cart}
      options={{title:'Cart',headerShown:false}}
      

      />
      <stack.Screen
      name='CheckOutScreen'
      component={CheckOutScreen}
      options={{title:'CheckOutScreen',headerShown:false}}
      

      />

      <stack.Screen
      name='SelectPaymentMethodScreen'
      component={SelectPaymentMethodScreen}
      options={{title:'SelectPaymentMethodScreen',headerShown:false}}
      

      />
      
      <stack.Screen
      name='SelectAddress'
      component={SelectAddress}
      options={{title:'SelectAddress',headerShown:false}}
      

      />
      
      <stack.Screen
      name='PaymentSuccess'
      component={PaymentSuccess}
      options={{title:'PaymentSuccess',headerShown:false}}
      

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

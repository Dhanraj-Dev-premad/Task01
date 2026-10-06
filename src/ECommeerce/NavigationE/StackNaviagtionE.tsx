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
import BrandProductsE from '../ScreenE/BarandScreen/BrandProductsE';
import EditProfileScreenE from '../ScreenE/ProfileScreens/EditProfile';
import ChangeNameScreenE from '../ScreenE/ProfileScreens/ChangeName';
import AddNewAddressScreenE from '../ScreenE/ProfileScreens/AddNewAddress';
import MyOrdersScreenE from '../ScreenE/ProfileScreens/MyOrders';
import PaymentSuccessE from '../ScreenE/CartScreens/PaymentSuccessE';
import AddressE from '../ScreenE/ProfileScreens/Addresses';
import BrandScreenE from '../ScreenE/BarandScreen/BrandScreenE';






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
  name="SelectPaymentMethodScreen"
  component={SelectPaymentMethodScreen}
  options={{
    headerShown: false,
    presentation: 'transparentModal',
    animation: 'fade',
    contentStyle: {
      backgroundColor: 'transparent',
    },
    gestureEnabled: true,
  }}
/>

<stack.Screen
  name="SelectAddress"
  component={SelectAddress}
  options={{
    headerShown: false,
    presentation: 'transparentModal',
    animation: 'fade',
    contentStyle: {
      backgroundColor: 'transparent',
    },
    gestureEnabled: true,
  }}
  />

   <stack.Screen
      name='PaymentSuccessE'
      component={PaymentSuccessE}
      options={{title:'PaymentSuccessE',headerShown:false}}
      

      />
      <stack.Screen
      name='BrandScreenE'
      component={BrandScreenE}
      options={{title:'BrandScreenE',headerShown:false}}
      

      />
       <stack.Screen
      name='BrandProductsE'
      component={BrandProductsE}
      options={{title:'BrandProductsE',headerShown:false}}
      

      />

       <stack.Screen
      name='EditProfileScreenE'
      component={EditProfileScreenE}
      options={{title:'EditProfileScreenE',headerShown:false}}
      

      />
      
 <stack.Screen
      name='ChangeNameScreenE'
      component={ChangeNameScreenE}
      options={{title:'ChangeNameScreenE',headerShown:false}}
      

      />
      

       <stack.Screen
      name='AddNewAddressScreenE'
      component={AddNewAddressScreenE}
      options={{title:'AddNewAddressScreenE',headerShown:false}}
      

      />


      <stack.Screen
      name='AddressE'
      component={AddressE}
      options={{title:'AddressE',headerShown:false}}
      

      />
      

      <stack.Screen
      name='MyOrdersScreenE'
      component={MyOrdersScreenE}
      options={{title:'MyOrdersScreenE',headerShown:false}}
      

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

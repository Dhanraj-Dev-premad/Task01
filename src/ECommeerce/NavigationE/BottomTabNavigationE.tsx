import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeE from '../ScreenE/BottomTabScreen/HomeE';
import StoreE from '../ScreenE/BottomTabScreen/StoreE';
import WishlistE from '../ScreenE/BottomTabScreen/WishlistE';
import ProfileE from '../ScreenE/BottomTabScreen/ProfileE';
import CustomTabBarE from './CustomTabBarE';
const Bottom =createBottomTabNavigator();

const BottomTabNavigationE = () => {
    
  return (
    <Bottom.Navigator
      tabBar={props => <CustomTabBarE {...props} />}
      screenOptions={{
        headerShown: false,
      }}
    
    
    >
        <Bottom.Screen
        name='HomeE'
        component={HomeE}
        
        />
        <Bottom.Screen
        name='StoreE'
        component={StoreE}
        
        />
        <Bottom.Screen
        name='WishlistE'
        component={WishlistE}
        
        />
        <Bottom.Screen
        name='ProfileE'
        component={ProfileE}
        
        />

       
    </Bottom.Navigator>

    
  )
}

export default BottomTabNavigationE

const styles = StyleSheet.create({})













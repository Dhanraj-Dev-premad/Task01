import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import AddPost from './Bottom-Tabs/AddPost'
import Favorits from './Bottom-Tabs/Favorits'
import Profile from './Bottom-Tabs/Profile'
import Search from './Bottom-Tabs/Search'
import HomeTab from './Bottom-Tabs/HomeTab'

const Bottom=createBottomTabNavigator()

const BottomTabNavigation = () => {
  return (
     // <Bottom.Navigator tabBar={(props)=><customBottomTab/>}>
    <Bottom.Navigator>
       

        
        <Bottom.Screen 
        name='HoePage'
        component={HomeTab}
        // options={{headerShown:false,tabBarIcon:({size,color})=>
        //     {
        //         return<Image/>

        //     }}}
         />
         <Bottom.Screen 
        name='HoAddPost'
        component={AddPost}
        options={{headerShown:false}}
         />
         <Bottom.Screen 
        name='Favorits'
        component={Favorits}
        options={{headerShown:false}}
         />
         <Bottom.Screen 
        name='Profile'
        component={Profile}
        options={{headerShown:false}}
         />
         <Bottom.Screen 
        name='Search'
        component={Search}
        options={{headerShown:false}}
         />

       
    </Bottom.Navigator>
  )
}

export default BottomTabNavigation

const styles = StyleSheet.create({})
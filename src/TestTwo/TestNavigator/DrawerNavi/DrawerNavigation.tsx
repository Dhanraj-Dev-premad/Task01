import {  Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import Home from './Screen/Home'
import HelpSupport from './Screen/HelpSupport'
import Chats from './Screen/Chats'
import Settings from './Screen/Settings'
import BottomTabNavigation from '../BottomNavigation/BottomTabNavigation'


const Drawer =createDrawerNavigator()

const DrawerNavigation = () => {
  return (
    
    <Drawer.Navigator 
    screenOptions={{drawerActiveBackgroundColor:'#f2f2f2',
      drawerStyle:{
        backgroundColor:'#f69b63'
      },
      drawerActiveTintColor:"#b83333",
        drawerInactiveTintColor:"#a6d618"
    }} 
    // drawerContent={(props)=><CustomDrawer{...props}/>}
    >
      <Drawer.Screen name="Home" component={BottomTabNavigation} options={{drawerIcon:({size,focused})=>
      {
        return(
          <Image style={{width:size,height:size,tintColor:focused ?'blue':'white'}} source={require('../../../img/Home.png')}/>
        )

      },
      drawerLabel:({focused,color})=>
        {
          return(
            <Text style={{color:color, fontSize:18}}>{'Home'}</Text>
          )
        }
      
      }}>
         
      </Drawer.Screen>

      <Drawer.Screen name="Settings" component={Settings} options={{drawerIcon:({size,focused})=>
      {
        return(
          <Image style={{width:size,height:size,tintColor:focused ?'blue':'white'}} source={require('../../../img/Settings.png')}/>
        )

      },
       drawerLabel:({focused,color})=>
        {
          return(
            <Text style={{color:color, fontSize:18}}>{'Settings'}</Text>
          )
        }
      }}>
        
      </Drawer.Screen>

      <Drawer.Screen name="Chats" component={Chats} options={{drawerIcon:({size,focused})=>
      {
        return(
          <Image style={{width:size,height:size,tintColor:focused ?'blue':'white'}} source={require('../../../img/Chats.png')}/>
        )

      },
       drawerLabel:({focused,color})=>
        {
          return(
            <Text style={{color:color, fontSize:18}}>{'Chats'}</Text>
          )
        }
      }}>
        
      </Drawer.Screen>

      <Drawer.Screen name="HelpSupport" component={HelpSupport} options={{drawerIcon:({size,focused})=>
      {
        return(
          <Image style={{width:size,height:size,tintColor:focused ?'blue':'white'}} source={require('../../../img/Support.png')}/>
        )

      },
       drawerLabel:({focused,color})=>
        {
          return(
            <Text style={{color:color, fontSize:18}}>{'HelpSupport'}</Text>
          )
        }
      }}>
        
      </Drawer.Screen>
      
      

    </Drawer.Navigator>
  
  )
    
}

export default DrawerNavigation

const styles = StyleSheet.create({})
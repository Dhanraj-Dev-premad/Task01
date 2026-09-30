import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const CustomDrawer = () => {
  return (
    <SafeAreaView style={{flex:1,backgroundColor:'white'}}> 
    <Image 
    source={require('../../../img/user.png')} 
    style={{width:100,height:100,alignSelf:'center'}}
    
    />
    <Text style={{margin:20}}>{"View profile"}</Text>
    <TouchableOpacity
    style={{flexDirection:'row',width:'90',height:50}}>
    <Image 
    source={require('../../../img/Home.png')} 
    style={{width:20,height:20,alignSelf:'center'}}
    
    />
    <Text style={{marginLeft:20,alignSelf:'center'}}>Home</Text>
    </TouchableOpacity>
     <TouchableOpacity
    style={{flexDirection:'row',width:'90',height:50}}>
    <Image 
    source={require('../../../img/Support.png')} 
    style={{width:20,height:20,alignSelf:'center'}}
    
    />
    <Text style={{marginLeft:20,alignSelf:'center'}}>Customer Support</Text>
    </TouchableOpacity>
     <TouchableOpacity
    style={{flexDirection:'row',width:'90',height:50}}>
    <Image 
    source={require('../../../img/Chats.png')} 
    style={{width:20,height:20,alignSelf:'center'}}
    
    />
    <Text style={{marginLeft:20,alignSelf:'center'}}>Chats</Text>
    </TouchableOpacity>
     <TouchableOpacity
    style={{flexDirection:'row',width:'90',height:50}}>
    <Image 
    source={require('../../../img/Settings.png')} 
    style={{width:20,height:20,alignSelf:'center'}}
    
    />
    <Text style={{marginLeft:20,alignSelf:'center'}}>Setting</Text>
    </TouchableOpacity>
    

      
    </SafeAreaView>
  )
}
     
export default CustomDrawer

const styles = StyleSheet.create({})
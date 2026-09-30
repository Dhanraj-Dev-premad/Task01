import { Button, KeyboardAvoidingView, Platform, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import Form1 from './Form1'
import { SafeAreaView } from 'react-native-safe-area-context'


function ControlledComp () {
const [name,setName]=useState('Raj');
const [password,setPassword]=useState('');
const [email,setemail]=useState('');



  return (
    <SafeAreaView style={{flex:1}}>
      <KeyboardAvoidingView  behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
  style={{flex: 1}}>

    

  
    <View style={{flex:1,justifyContent:'center',alignItems:'center' ,gap:20}}>
      <Text>ControlledComp</Text>


      <Form1 action='' method=''/>


       <Pressable  style={{ height:45,width:300,borderRadius:3,backgroundColor:'#f1e3e3', justifyContent:'center',alignItems:'center'}}>
            <TextInput placeholder='Enter Name' value={name}   onChangeText={setName} ></TextInput>
        </Pressable> 


         <Pressable  style={{ height:45,width:300,borderRadius:3,backgroundColor:'#f1e3e3', justifyContent:'center',alignItems:'center'}}>
            <TextInput placeholder='Enter Password'value={password} onChangeText={setPassword}></TextInput>
        </Pressable> 



         <Pressable  style={{ height:45,width:300,borderRadius:3,backgroundColor:'#f1e3e3', justifyContent:'center',alignItems:'center'}}>
            <TextInput placeholder='Enter Email'value={email}  onChangeText={setemail}></TextInput>
        </Pressable> 

        <Button title='Submit'></Button>

        <Button onPress={()=>{setName("");setPassword("");setemail("");}} title='Clear'></Button>
        
        <Text style={{backgroundColor:'pink',height:50, fontSize:22}}>{name}</Text>
        <Text style={{backgroundColor:'pink',height:50, fontSize:22}}>{password}</Text>
        <Text style={{backgroundColor:'pink',height:50,fontSize:22}}>{email}</Text>
       


    </View>
      </KeyboardAvoidingView>
      </SafeAreaView>
  )
}

export default ControlledComp

const styles = StyleSheet.create({}) 
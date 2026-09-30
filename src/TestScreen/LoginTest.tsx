import {  Button, Image, Text, TextInput, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const LoginTest = () => {
  return (
    <SafeAreaView style={{flex:1, backgroundColor:'white', justifyContent:'center'}}>
        <View style={{ flex:0.4,justifyContent:'center' }}  >
           

                 <Image  style={{ height:180, width:200, alignSelf:'center', shadowRadius:10 }} source={{uri:"https://www.1999.co.jp/itbig81/10818105a.jpg"}} resizeMode='contain' />
        </View>


        <View style={{flex:0.6 ,justifyContent:'space-between'} }>

            <View style={{height:400, width:380,justifyContent:'space-around'}}>
                        <TextInput style={ {fontSize:40,justifyContent:'center', alignSelf:'flex-end',height:80 ,width:250, backgroundColor:'#f8c4c4'}} placeholder='Enter Email' />

                         <TextInput style={ {fontSize:40, height:80,alignSelf:'flex-end', color:'black' ,width:250, backgroundColor:'#f8c4c4'}} placeholder='Password' secureTextEntry={true}/>
                

            </View>
            <View style={{height:100, width:250,justifyContent:'center' }}>
                 <Button title='Submit' color='#f8c4c4'/>

            </View>


        
           

        </View>

     </SafeAreaView>
    
  )
}

export default LoginTest;


import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'

const ObjectUpdating = () => {
    const [data,setData]=useState({
        name:'Raj',
        address:{
            city:'jaipur',
            country:'India'
                },


    })
   
    const handleName=(name)=>{
        data.name=name
        console.log(data)

        setData({...data})
      

    }

     const handleCity=(city)=>{
        data.address.city=city
        console.log(city)
        setData({...data,address:{...data.address,city}})

    }
  return (
    
    <View style={{flex:1,gap:10, marginTop:50}}>
      <Text>Object Updating in state</Text>
       <TextInput onChangeText={(name)=>handleName(name)} placeholder='Enter User name' placeholderTextColor={'black'}  keyboardType='default' style={{width:300, height:55, backgroundColor:'pink'}}/>
         <TextInput onChangeText={(city)=>handleCity(city)} placeholder='Enter Your City' placeholderTextColor={'black'}  keyboardType='default' style={{width:300, height:55, backgroundColor:'pink'}}/>
      
      
      <Text>Name:{data.name}</Text>
      <Text>City:{data.address.city}</Text>
      <Text>Country:-{data.address.country}</Text>
      

    </View>
  )
}

export default ObjectUpdating

const styles = StyleSheet.create({})
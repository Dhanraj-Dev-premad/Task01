import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'

const DerivedState = () => {
    const [users,setUsers]=useState([]);
    const [user,setUser]=useState('');


    console.log(users, "users");
    

    const s  = 10

    const handleAddUsers=()=>
    {
        setUsers([...users,user])
    }
    console.log(users)


    const total=users.length;
    const lastUser=users[users.length-1];
    const Unique=[...new Set(users)].length
    
  return (
    <View>
        <Text>Total User :- {total}</Text>
        <Text>Last User :- {lastUser}</Text>
        <Text>Unique User :-{Unique}</Text>




        <TextInput  onChangeText={(text)=>setUser(text)} placeholder='Enter user name' keyboardType='default'  placeholderTextColor='black' style={{height:50,width:300,borderWidth:3, color:'black',borderRadius:5,borderColor:'black'}}/>
                <Button onPress={handleAddUsers} title='Add User'/>

                {
                    users.map((item,index)=>(
                        <Text>{item}</Text>
                    ))
                }
   
    </View>
  )
}

export default DerivedState

const styles = StyleSheet.create({})
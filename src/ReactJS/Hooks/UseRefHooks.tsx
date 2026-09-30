import { Alert, Button, StyleSheet, TextInput, View } from 'react-native'
import React, { useRef } from 'react'

const UseRefHooks = () => {
  const inputRef=useRef(null);
  const inputHandler=()=>{
    console.log(inputRef)
    inputRef.current.focus()
  
  }
  return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <TextInput ref={inputRef} placeholder='Enter user name' keyboardType='default' placeholderTextColor='black' style={{height:50,width:300,}}/>
        <Button onPress={inputHandler} title='Focus on Input field'/>
      
             

      
    </View>
  )
}
 
export default UseRefHooks

const styles = StyleSheet.create({})
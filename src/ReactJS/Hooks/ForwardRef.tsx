import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useRef } from 'react'
import InputFieldForForwardRef from './InputFieldForForwardRef'

const ForwardRef = () => {
    const inputRef=useRef(null)
    const updateInput=()=>
        {
          inputRef.current.focus()        }
  return (
     <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <InputFieldForForwardRef ref={inputRef}/>
       
        <Button  onPress={updateInput} title='Udate Input field'/>
      
             

      
    </View>
  )
}

export default ForwardRef

const styles = StyleSheet.create({ })
import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

const useToggle = (defaultVal) => {
    const[value ,setValue]=useState(defaultVal)

    function toggleValue(val){
        if(typeof val!='boolean'){
            setValue(!value)
        }else{
    22        setValue(val)
        }
    }
    return[value,toggleValue];


  
}

export default useToggle

const styles = StyleSheet.create({})
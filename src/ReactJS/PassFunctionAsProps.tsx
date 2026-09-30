import { Alert, Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const PassFunctionAsProps = () => {
    const displayName=(name)=>
        {
            Alert.alert(`Hii I am ${name} and i play Football`)
        }
  return (
    <View>
      
<Button onPress={()=>displayName("Raj")} title='DisaplayUser'/>

    </View>
  )
}

export default PassFunctionAsProps

const styles = StyleSheet.create({})
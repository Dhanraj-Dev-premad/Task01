import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

// the second methd we can diectlyu call the navigation here
const ScreenA = ({navigtion}) => {
  //  const navigation=useNavigation();
  // this is the first method that we useb for navigation from one screen to another class

  return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center', backgroundColor:'#e3dcf6'}}>
      <Button title='Go to Screen B' onPress={()=>
        {
            // BY this Option we can send the data to othere screen  
            navigation.navigate("ScreenB",
                {
                    name:' Raj',
                    City:' Tokoyo'
                });
        }}/>
        
    </View>
  )
}

export default ScreenA

const styles = StyleSheet.create({})
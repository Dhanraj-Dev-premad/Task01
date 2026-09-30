import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'

const ScreenB = ({navigation}) => {

   // const navigation=useNavigation();

    // we take use of useRoute() method for accesing the data that is share by ScreenB

    const route=useRoute();
    //  by take using of route.params we can can asses of data

  return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center', backgroundColor:'#efdaee'}}>
       
        
      <Text>ScreenB   
        {route.params.name}
        {route.params.City}</Text>



         <Button title='go back' onPress={()=>navigation.goBack()} />


    </View>
  )
}

export default ScreenB

const styles = StyleSheet.create({})
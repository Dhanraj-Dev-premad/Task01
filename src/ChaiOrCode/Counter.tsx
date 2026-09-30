import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const Counter = () => {
    const [counter,setCounter]=useState(15)

   

    const addValue=()=>{
        setCounter(counter+1)
       
        console.log("clicked",counter);
        
    }
    const removeValue=()=>{
        setCounter(counter-1) 

    }
  return (
    <SafeAreaView style={styles.sfav}>
        <View style={styles.main}>
            <Text> counter Value Page</Text>
            <Text> counter value:- {counter}</Text>
            <Button title='Add value' onPress={addValue}/>
            <Button title='remove value' onPress={removeValue}/>
         </View>
 
    </SafeAreaView>
    
  )
}

export default Counter

const styles = StyleSheet.create({

    sfav:{
        flex:1,
        margin:10,

    },
    main:{
        paddingHorizontal:10,

        
    }
})
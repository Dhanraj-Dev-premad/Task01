import { Button, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

const Class1 = () => {
    const [counter,setcounter]=useState(0)
    const [Rcounter,setRcounter]=useState(0)

  return (
    <View style={styles.main}>
      <Text style={styles.t1}>Days count:{counter}</Text>
      <Text style={styles.t2}>Hello React:{Rcounter}</Text>
      <View>
        <Pressable  style={{ height:45,width:300,borderRadius:3,backgroundColor:'#f1e3e3', justifyContent:'center',alignItems:'center'}} onPress={()=>setcounter(counter+1)}>
            <Text style={{fontSize:24}}>Counut</Text>
        </Pressable>
        </View>
        <View>
         <Pressable  style={{ height:45,width:300,borderRadius:3,backgroundColor:'#f1e3e3', justifyContent:'center',alignItems:'center'}} onPress={()=>setRcounter(Rcounter-1)}>
            <Text style={{fontSize:24}}>RCounut</Text>
        </Pressable>
      </View>
      <Raj></Raj>
    </View>
  )
}

function Raj(){
     const [counter,setcounter]=useState(0)
    return(
        <View style={styles.main2}>
      <Text style={styles.t1}>Night count:-{counter}</Text>
      <Text style={styles.t2}>Hello Raj</Text>
      <View>
        <Pressable  style={{ height:45,width:300,borderRadius:3,backgroundColor:'#f1e3e3', justifyContent:'center',alignItems:'center'}} onPress={()=>setcounter(counter+1)}>
            <Text style={{fontSize:24}}>Counut</Text>
        </Pressable>
      </View>
      
    

    </View>
    
        
    )
}

export default Class1

const styles = StyleSheet.create(
    {

        main:{
            flex:1,
            justifyContent:'center',
            alignItems:'center'
        },
         main2:{
            height:400,width:'100%',
            justifyContent:'center',
            alignItems:'center'
        },
        t1:{
            fontSize:35
        },

        t2:{
            fontSize:35
        },
    })
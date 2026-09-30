import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'

const UseEffectHooksWithProps = ({Counter}) => {
    const handleCounter=()=>{
        console.log("handlecounter call")
    }

    useEffect(()=>
        {
                handleCounter();


        },[])

    

  return (
    <View >
      
        <Text>Counter Component {Counter}</Text>

      
    </View>
  )
}

export default UseEffectHooksWithProps

const styles = StyleSheet.create({})
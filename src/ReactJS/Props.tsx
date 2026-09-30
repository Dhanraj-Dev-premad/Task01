import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Hide from './Hide'

const Props = () => {

    let userObj=
    {
        name:'Raj Singh Shekhawat' ,
        age:'29',
        email:'raj@1234'
    }
  return (
    <View>
      <Text>Props in React Js</Text>
      {/* <Hide rollno={948} name="DHANRAJ SINGH SHEKHAWAT" age={22}/> */}
      <Hide user={userObj}/>
    </View>
  )
}

export default Props

const styles = StyleSheet.create({}) 
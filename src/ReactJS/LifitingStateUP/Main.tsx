import { StyleSheet, View } from 'react-native'
import React, { useState } from 'react'
import AddUserl from './AddUserl'
import DisplayUserl from './DisplayUserl'

const Mainl = () => {
     const [user, setUser]=useState("")
  return (
    
    <View>
         <DisplayUserl user={user}/>
        <AddUserl setUser={setUser}/>
       
     
    </View>
  )
}

export default Mainl

const styles = StyleSheet.create({})
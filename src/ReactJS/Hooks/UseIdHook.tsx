import { StyleSheet, Text, View } from 'react-native'
import React, { useId } from 'react'

const UseIdHook = () => {
    const name =useId();
    const password =useId();
    const terms =useId();
    const skills =useId();

  return (
    <View>
      <Text>UseIdHook</Text>
      <Text>{name}</Text>
      <Text>{password}</Text>
      <Text>{terms}</Text>
      <Text>{skills}</Text>
    </View>
  )
}

export default UseIdHook

const styles = StyleSheet.create({})
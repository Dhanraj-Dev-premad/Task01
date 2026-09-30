import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

const InputFieldForForwardRef = (props) => {
  return (
    <View>


<TextInput ref={props.ref}  placeholder='Enter user name' keyboardType='default'  placeholderTextColor='black' style={{height:50,width:300,borderWidth:3, borderRadius:5,borderColor:'black'}}/>

    </View>
  )
}

export default InputFieldForForwardRef

const styles = StyleSheet.create({})



























// import { StyleSheet, Text, TextInput, View } from 'react-native'
// import React, { forwardRef } from 'react'

// const InputFieldForForwardRef = (props,ref) => {
//   return (
//     <View>
//  <TextInput ref={ref}  placeholder='Enter user name' keyboardType='default'  placeholderTextColor='black' style={{height:50,width:300,borderWidth:3, borderRadius:5,borderColor:'black'}}/>    </View>
//   )
// }

// export default forwardRef(InputFieldForForwardRef)

// const styles = StyleSheet.create({})  
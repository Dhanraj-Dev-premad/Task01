import { StyleSheet, TextInput, View } from 'react-native'


const AddUserl = ({setUser}) => {
    
  return (
    <View>
       
      <TextInput onChangeText={(text)=>setUser(text)} placeholder='Enter User name' placeholderTextColor={'black'}  keyboardType='default' style={{width:300, height:55, backgroundColor:'pink'}}/>
    </View>
  )
}

export default AddUserl

const styles = StyleSheet.create({})
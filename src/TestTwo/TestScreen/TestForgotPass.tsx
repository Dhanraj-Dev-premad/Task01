import { Image, Pressable, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const TestForgotPass = () => {
  const navigation=useNavigation()
  return (
   <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignContent: 'center',
      }}
    >
      <View style={styles.main}>
        <View style={{height:200 }}>

          <View>
          <View style={{height:60 ,padding:10}}>
          <Text style={{fontSize:28 , fontWeight:'bold'}}>Forget password</Text>
          <Text style={{fontSize:18, color:'#4f4c4c', fontWeight:'400'}}>please enter your email to reset the password</Text>
        </View>

      
       
        {/* Input */}
        <View style={styles.InputTextBox}>
          <Text
              style={{
               
               
                fontWeight:'500',
                fontSize: 23,
                color: 'black',
                paddingHorizontal: 5,
              }}
            >
              Your email
            </Text>
          <View
            style={{
              height: 75,
              borderWidth: 3,
              borderColor: '#222',
              borderRadius: 18,
              justifyContent: 'center',
            }}
          >
            

            <TextInput
              placeholder="info@example.com"
              placeholderTextColor="black"
              style={{
                color: 'black',
                fontSize: 22,
                paddingLeft: 25,
              }}
            />
          </View>
         


        </View>
        <View style={{height:80, padding:10, justifyContent:'flex-start',alignItems:'center',marginBottom:10 }}>
            <Pressable onPress={() =>navigation.replace('TestVerification')}  style={{ height: 70,  width: '95%',  backgroundColor: '#648DDB',  justifyContent: 'center',  alignItems: 'center',  borderRadius: 18, }}>
                <Text style={{fontWeight:'bold', color: '#f7f2f2', fontSize: 22 }}>
                      Rest password
                </Text>
            </Pressable>

        </View>

        </View>

        </View>
        
        
        

        

       

      </View>
    </SafeAreaView>
  )
}

export default TestForgotPass

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'flex-start',
    alignContent: 'center',
    padding:10,
    marginTop:20
  },


  
  

  InputTextBox: {
   // backgroundColor: 'orange',
    height: 150,
    padding: 20,
  },

 
  

 

  
})
import { Pressable, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const TestVerification = () => {
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
        <View style={{height:320 ,  justifyContent:'flex-start',alignItems:'flex-start'}}>

          <View>
          <View style={{height:100, paddingLeft:10,paddingRight:10, justifyContent:'center'}}>
          <Text style={{fontSize:28 ,color:'#1E1E1E', fontWeight:'bold'}}>Check your email</Text>
          <Text style={{fontSize:20, color:'#4f4c4c', fontWeight:'semibold' ,marginTop:10}}>We sent a resert link to contact@dscode...com enter 5 digit code that mentioned in the email</Text>
        </View>

      
       
        {/* Input */}
        <View style={styles.InputTextBox}>
          
          <View
            style={{
              height: 60,
              width:60,
              borderWidth: 3,
              borderColor: '#D9D9D9',
              borderRadius: 18,
              justifyContent: 'center',
            }}
          >
            

            <TextInput
               keyboardType="number-pad"
               maxLength={1}
             
               placeholderTextColor="black"
               style={{
                color: 'black',
                fontSize: 22,
               
              }}
            />
          </View>

          <View
            style={{
              height: 60,
              width:60,
              borderWidth: 3,
              borderColor: '#D9D9D9',
              borderRadius: 18,
              justifyContent: 'center',
            }}
          >
            

            <TextInput
               keyboardType="number-pad"
               maxLength={1}
             
               placeholderTextColor="black"
               style={{
                color: 'black',
                fontSize: 22,
               
              }}
            />
          </View>
          <View
            style={{
              height: 60,
              width:60,
              borderWidth: 3,
              borderColor: '#D9D9D9',
              borderRadius: 18,
              justifyContent: 'center',
            }}
          >
            

            <TextInput
               keyboardType="number-pad"
               maxLength={1}
             
               placeholderTextColor="black"
               style={{
                color: 'black',
                fontSize: 22,
               
              }}
            />
          </View>

          <View
            style={{
              height: 60,
              width:60,
              borderWidth: 3,
              borderColor: '#D9D9D9',
              borderRadius: 18,
              justifyContent: 'center',
            }}
          >
            

            <TextInput
               keyboardType="number-pad"
               maxLength={1}
             
               placeholderTextColor="black"
               style={{
                color: 'black',
                fontSize: 22,
               
              }}
            />
          </View>

          <View
            style={{
              height: 60,
              width:60,
              borderWidth: 3,
              borderColor: '#D9D9D9',
              borderRadius: 18,
              justifyContent: 'center',
            }}
          >
            

            <TextInput
               keyboardType="number-pad"
               maxLength={1}
             
               placeholderTextColor="black"
               style={{
                color: 'black',
                fontSize: 22,
               
              }}
            />
          </View>
         


        </View>


        <View style={{height:80, padding:10 }}>
            <Pressable onPress={() =>navigation.navigate('TestPassReset')}  style={{ height: 70,  width: '100%',  backgroundColor: '#648DDB',  justifyContent: 'center',  alignItems: 'center',  borderRadius: 8, }}>
                <Text style={{fontWeight:'bold', color: '#f7f2f2', fontSize: 22 }}>
                      Verify Code
                </Text>
            </Pressable>

        </View>

        </View>

        </View>
        <View style={{height:30,  flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
             <Text  style={{fontWeight:'semibold', color: '#989898', fontSize: 22, }}>
              Haven't got the email yet?
             </Text>
             <Pressable onPress={() => navigation.goBack()} style={{height:23 }}>
                <Text style={{fontWeight:'semibold', color: '#648DDB', fontSize: 22,marginLeft:3 }}>Resend email</Text>
             </Pressable>

        </View>
        
        
        

        

       

      </View>
    </SafeAreaView>
  )
}

export default TestVerification

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
    height: 120,
    padding: 20,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center'
    
  },

 
  

 

  
})
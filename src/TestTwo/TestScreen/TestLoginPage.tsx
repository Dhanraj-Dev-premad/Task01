import { Button, Image, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'


const TestLoginPage = () => {
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

        {/* Image */}
        <View style={styles.viewImage}>
          <View style={styles.ImageBox}>
            <Image />
          </View>
        </View>

        {/* Input */}
        <View style={styles.InputTextBox}>
          <Text
              style={{
                 fontWeight:'semibold',
                fontSize: 25,
                color: 'black',
                paddingHorizontal: 5,
              }}
            >
              Your Email
            </Text>
          <View
            style={{
              height: 75,
              borderWidth: 3,
              borderColor: '#a5a2a2',
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
          <Text
              style={{
                fontWeight:'semibold',
                fontSize: 25,
                color: 'black',
                paddingHorizontal: 5,
              }}
            >
              Password
            </Text>
          <View
            style={{
              height: 75,
              borderWidth: 3,
              borderColor: '#a5a2a2',
              borderRadius: 18,
              justifyContent: 'center',
            }}
          >
            

            <TextInput
              placeholder="Password"
              placeholderTextColor="black"
              secureTextEntry={true}
              style={{
                color: 'black',
                fontSize: 22,
                paddingLeft: 25,
              }}
            />
          </View>







        </View>

        {/* Button 1 */}
        <View style={styles.ButtonBox1}>
          <View style={{ height: 99, width: '85%' ,justifyContent:'center',alignItems:'center'}}>
            <Pressable onPress={() => navigation.navigate('TestForgotPass')} style={{height:25 ,width:200,marginLeft:260,marginEnd:5,marginBottom:15, justifyContent:'center',alignItems:'center'}}>
              <Text style={{fontWeight:'bold', color: '#648DDB', fontSize: 22, }}>Forgot Password?</Text>
            </Pressable>
            

            <Pressable onPress={() =>navigation.navigate('DrawerNavigation')} 
                 style={{ height: 70,  width: '100%',  backgroundColor: '#648DDB',  justifyContent: 'center',  alignItems: 'center',  borderRadius: 8, marginLeft:70}}>
                <Text style={{fontWeight:'bold', color: '#f7f2f2', fontSize: 22 }}>
                    Continue
                </Text>
            </Pressable>

                    </View>
          
        </View>

        {/* OR */}
        <View style={styles.OrText}>
          <View style={styles.LineView} />

          <Text
            style={{
              fontSize: 20,
              marginLeft: 10,
              marginRight: 10,
              color: 'black',
            }}
          >
            Or
          </Text>

          <View style={styles.LineView} />
        </View>

        {/* Button 2 */}
        <View style={styles.ButtonBox2}>

          <Pressable onPress={() =>console.log("clicked")} 
                 style={{ height: 70,  width: '350',  backgroundColor: 'white',  justifyContent: 'center',  alignItems: 'center',  borderRadius: 8, borderWidth:3,borderColor:'#a5a2a2' }}>
                <View style={{flexDirection:'row'}}>
                    <View style={{height:35, width:35,justifyContent:'center',alignItems:'center',  marginRight:8.}}>

                       <Image 
                         resizeMode='contain'
                         source={require('./pngwing 1.png')} 
                         style={{width:35,height:35,}} 
                        />

                    </View>
                    <Text style={{fontWeight:'bold', color: 'black', fontSize: 22 }}>
                      Login with Apple
                     </Text>

                  </View>
            </Pressable>
            <Pressable onPress={() =>console.log("clicked")} 
                 style={{ height: 70,  width: 350,  backgroundColor: 'white',  justifyContent: 'center',  alignItems: 'center',  borderRadius: 8, borderWidth:3,borderColor:'#a5a2a2'}}>
                  <View style={{flexDirection:'row'}}>
                    <View style={{height:35, width:35,justifyContent:'center',alignItems:'center', marginRight:8}}>

                       <Image 
                         resizeMode='contain'
                         source={require('./pngwing 2.png')} 
                         style={{width:35,height:35,}} 
                        />

                    </View>
                    <Text style={{fontWeight:'bold', color: 'black', fontSize: 22 }}>
                      Login with Google
                     </Text>

                  </View>
                
            </Pressable>

        </View>

        {/* Sign up */}
        <View style={styles.TextBox}>
          <Text style={{ fontSize: 20, marginRight: 10,color:'#989898' }}>
            Don't have an account?
          </Text>

          <Text style={{ color: '#648DDB', fontSize: 20 }}>
            Sign up
          </Text>
        </View>

      </View>
    </SafeAreaView>
  )
}

export default TestLoginPage

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignContent: 'center',
  },

  viewImage: {
    height: 200,
    //backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center', // changed from alignContent
  },

  ImageBox: {
    height: 200,
    width: 200,
    backgroundColor: '#D9D9D9',
    borderRadius: 9999,
  },

  InputTextBox: {
   // backgroundColor: 'orange',
    height: 240,
    padding: 20,
  },

  ButtonBox1: {
    backgroundColor: 'white',
    height: 120,
  },

  ButtonBox2: {
    //backgroundColor: 'green',
    height: 200,
    justifyContent:'space-around',
    alignItems:'center'
   
  },

  TextBox: {
    //backgroundColor: 'pink',
    height: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  OrText: {
    height: 35,
    //backgroundColor: 'pink',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 0.2,
  },

  LineView: {
    height: 4,
    width: 100,
    backgroundColor: 'black',
  },
})
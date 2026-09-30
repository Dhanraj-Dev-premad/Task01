import { View, Text, Button, TextInput, Image, Pressable } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const LoginPage = () => {
  return (
    <SafeAreaView style={{flex:1}}>
        <View style={{flex:1, backgroundColor:'white',padding:10}} >
            <View style={{ height:300, width:'100%', justifyContent:'flex-end', alignItems: 'center'}} >
                {/* for logo nas Login{text} */}
                
                <View style={{ height:180,width:'180',  backgroundColor:'black', borderRadius:999 ,overflow:'hidden'}}>
                      <Image
              style={{ height: '100%', width: '100%',  }}
              source={{ uri: 'https://images.unsplash.com/photo-1545231027-637d2f6210f8?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}}
              resizeMode="contain"
                     />
                     
                    {/*for image */}

                </View>
                
                <View style={{ height:100, width:'100%', justifyContent: 'center', alignItems: 'center'}}>

                    <Text style={{ fontSize: 50, fontWeight: 'bold', color: 'black', marginBottom: 8 }}>
                                 Login
                    </Text>
                    {/* forLogin text */}
                </View>


            </View>





            


            <View style={{ height: 450, justifyContent: 'flex-start', alignItems: 'center', padding: 20, }}>
                            {/* for text and all Email and Password and input text and login button */}


         
                <View style={{ height:150, width: '100%',  justifyContent:'center'}}>

                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'black', marginBottom: 8 }}>
                     Enter Email
                    </Text>

                    <TextInput
                           placeholderTextColor={'black'}
                            
                           style={{   borderBlockColor:'gray',borderWidth:1, backgroundColor: '#f1ebeb', width: '100%', height: 70, paddingHorizontal: 15, borderRadius: 8 }}
                           placeholder="Enter your Email"
                    />
                    {/* for Email */}

                </View>

          
                <View style={{height:150, width: '100%', }}>

                     <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'black', marginBottom: 8 }}>
                         Enter Password
                    </Text>

                     <TextInput
                           placeholderTextColor={'black'}
                            style={{ borderBlockColor:'gray',borderWidth:1,  fontWeight:400, backgroundColor: '#f1ebeb', width: '100%', height: 70, paddingHorizontal: 15, borderRadius: 8 }}
                         placeholder=" Enter your Password"
                          secureTextEntry={true}
                     />
                     {/* for password */}

                </View>


                <View style={{ height: 100, width: '100%' }}>

                    <Pressable onPress={() => console.log('Register pressed')}  style={{ height: 70,  width: '100%',  backgroundColor: 'blue',  justifyContent: 'center',  alignItems: 'center',  borderRadius: 8}}>
                            <Text style={{ color: 'white', fontSize: 18 }}>
                                     Register
                             </Text>
                    </Pressable>

                </View>









                {/* <View style={{ height:100, width: '100%',justifyContent:'flex-start' }}>

                    <Button title="Register" onPress={() => { console.log('Register pressed') }}>
                    </Button>

                     
                     for Login button 

                </View>
                */}







            </View>

           







           

            <View style={{justifyContent: 'flex-start', alignItems: 'center'}}>
                <View >

                    <Text style={{ fontSize: 20, fontWeight: 400, color: 'black', marginBottom: 8 }}>
                                 Don't have an account?
                    </Text>
                    {/* for Dont have an account */}
                </View>

                <View >

                    <Text style={{ fontSize: 25, fontWeight: 'bold', color: '#0d2154', marginBottom: 8 }}>
                                 Sign Up
                    </Text>
                    {/* for Sign up */}
                </View>


            </View>


           
        </View>

    </SafeAreaView>
    
  )
}

export default LoginPage
import React from 'react'
import { View, Text, Image, TextInput, Button } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const Login = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>

      <View style={{ flex: 1, backgroundColor: 'white', padding: 10, justifyContent: 'space-around' }}>

       
        <View style={{ height: 200, width: '100%',  justifyContent: 'center', alignItems: 'center' }}>

          <View style={{ height: 150, width: 150,  }}>

            <Image style={{ height: 150, width: 150 }} source={{ uri: 'https://www.1999.co.jp/itbig81/10818105a.jpg' }} resizeMode="contain" />

          </View>

        </View>

        <View style={{ height: 500, justifyContent:'space-evenly', alignItems: 'center', padding: 20 }}>

         
          <View style={{ width: '100%' }}>

            <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'black', marginBottom: 8 }}>
              Enter Email
            </Text>

            <TextInput style={{ backgroundColor: '#f3e2e2', width: '100%', height: 50, paddingHorizontal: 15, borderRadius: 8 }} placeholder="Email" />

          </View>

         
          <View style={{ width: '100%' }}>

            <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'black', marginBottom: 8 }}>
              Enter Password
            </Text>

            <TextInput style={{ backgroundColor: '#f3e2e2', width: '100%', height: 50, paddingHorizontal: 15, borderRadius: 8 }} placeholder="Password" secureTextEntry={true} />

          </View >



         
             <Button  title="Login" onPress={() => { console.log('Login pressed') }} />

          

          


       

        </View>

      </View>

    </SafeAreaView>
  )
}

export default Login
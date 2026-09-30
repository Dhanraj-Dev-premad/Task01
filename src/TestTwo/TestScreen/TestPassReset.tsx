import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context'

const TestPassReset = () => {
  const navigation = useNavigation()

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'flex-start',
        alignContent: 'center',
      }}
    >
      <View style={styles.main}>

        <View
          style={{
            height: 200,
          }}
         >

          {/* Heading */}
          <View
            style={{
              height: 100,
              padding: 10,
            }}
          >
            <Text style={{fontWeight:'500', fontSize: 28,color:'#1E1E1E' }}>
              Password reset
            </Text>

            <Text
              style={{
                fontSize: 18,
                color: '#989898',
              }}
            >
              Your password has been successfully reset. click confirm to set a new password
            </Text>
          </View>

          {/* Button */}
          <View
            style={{
              height: 80,
              padding: 10,
            }}
          >
            <Pressable
              onPress={() => navigation.pop(3)}
              style={{
                height: 70,
                width: '100%',
                backgroundColor: '#648DDB',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 8,
              }}
            >
              <Text
                style={{
                  fontWeight: 'bold',
                  color: '#f7f2f2',
                  fontSize: 22,
                }}
              >
                Confirm
              </Text>
            </Pressable>
          </View>

        </View>

      </View>
    </SafeAreaView>
  )
}

export default TestPassReset

const styles = StyleSheet.create({
  main: {
    height:200,
   
    paddingLeft: 10,
    paddingRight: 10,
    justifyContent: 'center',
    alignContent: 'center',
  },
})
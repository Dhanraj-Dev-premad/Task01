
import React from 'react';
import {
  Image,
  Text,
  TouchableOpacity,
} from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';

const CustomDrawer1 = ({ navigation }) => {

  const goToScreen = (screenName) => {
    navigation.navigate(screenName);
    navigation.closeDrawer();
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: '#f8f0e9',
      
      }}
    >

      {/* PROFILE IMAGE */}
      <Image
        source={require('../../img/user.png')}
        style={{
          width: 100,
          height: 100,
          alignSelf: 'center',
          marginTop: 20,
          borderRadius: 50,
        }}
      />

      {/* VIEW PROFILE */}
      <TouchableOpacity
        onPress={() => goToScreen('Profile')}
        style={{
          width: '90%',
          height: 50,
          alignSelf: 'center',
          justifyContent: 'center',
          marginTop: 10,
        }}
      >
        <Text
          style={{
            fontSize: 18,
            fontWeight: '600',
          }}
        >
          View Profile
        </Text>
      </TouchableOpacity>

      {/* HOME */}
      <TouchableOpacity
        onPress={() => goToScreen('Main')}
        style={{
          flexDirection: 'row',
          width: '90%',
          height: 55,
          alignSelf: 'center',
          alignItems: 'center',
           backgroundColor: '#e6e3e0',
           borderRadius:20,
           marginBottom:10

          
        }}
      >
        <Image
          source={require('../../img/Home.png')}
          style={{
            width: 25,
            height: 25,
          }}
        />

        <Text
          style={{
            marginLeft: 20,
            fontSize: 16,
          }}
        >
          Home
        </Text>
      </TouchableOpacity>

      {/* CUSTOMER SUPPORT */}
      <TouchableOpacity
        onPress={() => goToScreen('Help & Support')}
        style={{
          flexDirection: 'row',
          width: '90%',
          height: 55,
          alignSelf: 'center',
          alignItems: 'center',
           backgroundColor: '#e6e3e0',
           borderRadius:20,
           marginBottom:10
        }}
      >
        <Image
          source={require('../../img/Support.png')}
          style={{
            width: 25,
            height: 25,
          }}
        />

        <Text
          style={{
            marginLeft: 20,
            fontSize: 16,
          }}
        >
          Customer Support
        </Text>
      </TouchableOpacity>

      {/* CHATS */}
      <TouchableOpacity
        onPress={() => goToScreen('Chats')}
        style={{
          flexDirection: 'row',
          width: '90%',
          height: 55,
          alignSelf: 'center',
          alignItems: 'center',
           backgroundColor: '#e6e3e0',
           borderRadius:20,
           marginBottom:10
        }}
      >
        <Image
          source={require('../../img/Chats.png')}
          style={{
            width: 25,
            height: 25,
          }}
        />

        <Text
          style={{
            marginLeft: 20,
            fontSize: 16,
          }}
        >
          Chats
        </Text>
      </TouchableOpacity>

      {/* SETTINGS */}
      <TouchableOpacity
        onPress={() => goToScreen('Settings')}
        style={{
          flexDirection: 'row',
          width: '90%',
          height: 55,
          alignSelf: 'center',
          alignItems: 'center',
           backgroundColor: '#e6e3e0',
           borderRadius:20,
           marginBottom:10
        }}
      >
        <Image
          source={require('../../img/Settings.png')}
          style={{
            width: 25,
            height: 25,
          }}
        />

        <Text
          style={{
            marginLeft: 20,
            fontSize: 16,
          }}
        >
          Settings
        </Text>
      </TouchableOpacity>

      {/* ---------------------------Add me--------------------- */}

       <TouchableOpacity
        onPress={() => 
          {
            navigation.closeDrawer();
            navigation.navigate('Main',{

          screen:"AddPost1"
        } )
          }}
        style={{
          flexDirection: 'row',
          width: '90%',
          height: 55,
          alignSelf: 'center',
          alignItems: 'center',
           backgroundColor: '#e6e3e0',
           borderRadius:20,
           marginBottom:10
        }}
      >
        <Image
          source={require('../../img/Settings.png')}
          style={{
            width: 25,
            height: 25,
          }}
        />

        <Text
          style={{
            marginLeft: 20,
            fontSize: 16,
          }}
        >
          AddPost1
        </Text>
      </TouchableOpacity>


        <TouchableOpacity
        onPress={() => {
          navigation.closeDrawer();
          
          navigation.navigate('Main',{

          screen:"Profile"
        } )}}
        style={{
          flexDirection: 'row',
          width: '90%',
          height: 55,
          alignSelf: 'center',
          alignItems: 'center',
           backgroundColor: '#e6e3e0',
           borderRadius:20,
           marginBottom:10
        }}
      >
        <Image
          source={require('../../img/user.png')}
          style={{
            width: 25,
            height: 25,
          }}
        />

        <Text
          style={{
            marginLeft: 20,
            fontSize: 16,
          }}
        >
          Profile
        </Text>
      </TouchableOpacity>

     
    </SafeAreaView>
  );
};

export default CustomDrawer1;























// import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
// import React from 'react'
// import { SafeAreaView } from 'react-native-safe-area-context'

// const CustomDrawer1 = () => {
//   return (
//     <SafeAreaView style={{flex:1,backgroundColor:'white'}}> 
//     <Image 
//     source={require('../../../img/user.png')} 
//     style={{width:100,height:100,alignSelf:'center'}}
    
//     />
//     <Text style={{margin:20}}>{"View profile"}</Text>
//     <TouchableOpacity
//     style={{flexDirection:'row',width:'90',height:50}}>
//     <Image 
//     source={require('../../img/Home')} 
//     style={{width:20,height:20,alignSelf:'center'}}
    
//     />
//     <Text style={{marginLeft:20,alignSelf:'center'}}>Home</Text>
//     </TouchableOpacity>
//      <TouchableOpacity
//     style={{flexDirection:'row',width:'90',height:50}}>
//     <Image 
//     source={require('../../img/Support.png')} 
//     style={{width:20,height:20,alignSelf:'center'}}
    
//     />
//     <Text style={{marginLeft:20,alignSelf:'center'}}>Customer Support</Text>
//     </TouchableOpacity>
//      <TouchableOpacity
//     style={{flexDirection:'row',width:'90',height:50}}>
//     <Image 
//     source={require('../../img/Chats.png')} 
//     style={{width:20,height:20,alignSelf:'center'}}
    
//     />
//     <Text style={{marginLeft:20,alignSelf:'center'}}>Chats</Text>
//     </TouchableOpacity>
//      <TouchableOpacity
//     style={{flexDirection:'row',width:'90',height:50}}>
//     <Image 
//     source={require('../../img/Settings.png')} 
//     style={{width:20,height:20,alignSelf:'center'}}
    
//     />
//     <Text style={{marginLeft:20,alignSelf:'center'}}>Setting</Text>
//     </TouchableOpacity>
    

      
//     </SafeAreaView>
//   )
// }
     
// export default CustomDrawer1

// const styles = StyleSheet.create({})
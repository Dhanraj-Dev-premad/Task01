


import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ChatList11 from './ChatList11';
import StatusList11 from './StatusList11';



const Bottom = createBottomTabNavigator();

const Home11 = () => {
  return (
    <Bottom.Navigator
     
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,

        tabBarStyle: {
          position: 'absolute',
          left: 18,
          right: 18,
          bottom: 18,
          height: 72,

          backgroundColor: '#FFFFFF',

          borderRadius: 25,
          borderTopWidth: 0,

          elevation: 10,

          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 5,
          },
          shadowOpacity: 0.12,
          shadowRadius: 12,
        },

        tabBarItemStyle: {
          height: 72,
          paddingTop: 7,
        },
      }}
    >

      

      <Bottom.Screen
        name="chatList"
        component={ChatList11}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={[
                styles.tabItem,
                focused && styles.activeTab,
              ]}
            >
              <Text
                style={[
                  styles.icon,
                  {
                    color: focused
                      ? '#648DDB'
                      : '#8F8F8F',
                  },
                ]}
              >
                
              </Text>

              <Text
                style={[
                  styles.label,
                  {
                    color: focused
                      ? '#648DDB'
                      : '#8F8F8F',
                  },
                ]}
              >
                chatList
              </Text>
            </View>
          ),
        }}
      />

      

      <Bottom.Screen
        name="StatusList"
        component={StatusList11}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={[
                styles.tabItem,
                focused && styles.activeTab,
              ]}
            >
              <Text
                style={[
                  styles.icon,
                  {
                    color: focused
                      ? '#648DDB'
                      : '#8F8F8F',
                  },
                ]}
              >
                
              </Text>

              <Text
                style={[
                  styles.label,
                  {
                    color: focused
                      ? '#648DDB'
                      : '#8F8F8F',
                  },
                ]}
              >
                StatusList
              </Text>
            </View>
          ),
        }}
      />


      

      


    </Bottom.Navigator>
  );
};

export default Home11;

const styles = StyleSheet.create({

  // Common tab container
  tabItem: {
    width: 62,
    height: 58,

    alignItems: 'center',
    justifyContent: 'center',

    borderRadius: 18,
  },

  // Selected tab background
  activeTab: {
    backgroundColor: '#EEF3FF',
  },

  // Normal icons
  icon: {
    fontSize: 25,
    fontWeight: 'bold',
    lineHeight: 27,
  },

  // Profile icon
  profileIcon: {
    fontSize: 19,
    lineHeight: 27,
  },

  // Tab text
  label: {
    fontSize: 10,
    fontWeight: '600',
    marginTop: 2,
  },

});




















// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'
// import chatList11 from './ChatList11';
// import StatusList11 from './StatusList11';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//     const Bottom=createBottomTabNavigator();


// const Home11 = () => {
//   return (
//     <View>
//         <Bottom.Navigator>
//             <Bottom.Screen name='chatList' component={chatList11}/>
//         </Bottom.Navigator>

//          <Bottom.Navigator>
//             <Bottom.Screen name='StatusList11' component={StatusList11}/>
//         </Bottom.Navigator>


      
//     </View>
//   )
// }

// export default Home11

// const styles=StyleSheet.create(
//     {
//         wrapper:{
//             flex:1,
//             backgroundColor:'#f0aaaa',
//             justifyContent:'center',
//             alignItems:'center'
            
//         }
//     })

// function createMaterialTopTabNavigator() {
//     throw new Error('Function not implemented.');
// }


import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomePage1 from '../MainScreen/HomePage1';
import AddPost1 from '../MainScreen/AddPost1';
import Favorits1 from '../MainScreen/Favorits1';
import Profile1 from '../MainScreen/Profile1';
import Search1 from '../MainScreen/Search1';

const Bottom = createBottomTabNavigator();

const BottomTabNavigation1 = () => {
  return (
    <Bottom.Navigator
     // initialRouteName="Home"
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

      {/* ================= HOME ================= */}

      <Bottom.Screen
        name="Home"
        component={HomePage1}
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
                ⌂
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
                Home
              </Text>
            </View>
          ),
        }}
      />

      {/* ================= SEARCH ================= */}

      <Bottom.Screen
        name="Search"
        component={Search1}
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
                ⌕
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
                Search
              </Text>
            </View>
          ),
        }}
      />

      {/* ================= ADD ================= */}

      <Bottom.Screen
        name="AddPost1"
        component={AddPost1}
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
                +
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
                Add
              </Text>
            </View>
          ),
        }}
      />


      <Bottom.Screen
        name="Favorites"
        component={Favorits1}
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
                ♡
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
                Favorites
              </Text>
            </View>
          ),
        }}
      />

      

      <Bottom.Screen
        name="Profile"
        component={Profile1}
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
                  styles.profileIcon,
                  {
                    color: focused
                      ? '#648DDB'
                      : '#8F8F8F',
                  },
                ]}
              >
                ●
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
                Profile
              </Text>
            </View>
          ),
        }}
      />

    </Bottom.Navigator>
  );
};

export default BottomTabNavigation1;

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













// import React from 'react';
// import {
//   StyleSheet,
//   Text,
//   View,
// } from 'react-native';

// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// import HomePage1 from '../MainScreen/HomePage1';
// import AddPost1 from '../MainScreen/AddPost1';
// import Favorits1 from '../MainScreen/Favorits1';
// import Search1 from '../MainScreen/Search1';

// const Bottom = createBottomTabNavigator();

// const BottomTabNavigation1 = () => {
//   return (
//     <Bottom.Navigator
//       initialRouteName="Home"
//       screenOptions={{
//         headerShown: false,
//         tabBarShowLabel: false,

//         tabBarStyle: {
//           position: 'absolute',
//           left: 18,
//           right: 18,
//           bottom: 18,

//           height: 72,

//           backgroundColor: '#FFFFFF',

//           borderRadius: 25,
//           borderTopWidth: 0,

//           elevation: 10,

//           shadowColor: '#000',
//           shadowOffset: {
//             width: 0,
//             height: 5,
//           },
//           shadowOpacity: 0.12,
//           shadowRadius: 12,
//         },

//         tabBarItemStyle: {
//           height: 72,
//           paddingTop: 7,
//         },
//       }}
//     >

    

//       <Bottom.Screen
//         name="Home"
//         component={HomePage1}
//         options={{
//           tabBarIcon: ({ focused }) => (
//             <View
//               style={[
//                 styles.tabItem,
//                 focused && styles.activeTab,
//               ]}
//             >
//               <Text
//                 style={[
//                   styles.icon,
//                   {
//                     color: focused ? '#648DDB' : '#8F8F8F',
//                   },
//                 ]}
//               >
//                 ⌂
//               </Text>

//               <Text
//                 style={[
//                   styles.label,
//                   {
//                     color: focused ? '#648DDB' : '#8F8F8F',
//                   },
//                 ]}
//               >
//                 Home
//               </Text>
//             </View>
//           ),
//         }}
//       />

      

//       <Bottom.Screen
//         name="Search"
//         component={Search1}
//         options={{
//           tabBarIcon: ({ focused }) => (
//             <View
//               style={[
//                 styles.tabItem,
//                 focused && styles.activeTab,
//               ]}
//             >
//               <Text
//                 style={[
//                   styles.icon,
//                   {
//                     color: focused ? '#648DDB' : '#8F8F8F',
//                   },
//                 ]}
//               >
//                 ⌕
//               </Text>

//               <Text
//                 style={[
//                   styles.label,
//                   {
//                     color: focused ? '#648DDB' : '#8F8F8F',
//                   },
//                 ]}
//               >
//                 Search
//               </Text>
//             </View>
//           ),
//         }}
//       />

//       {/* ================= ADD ================= */}

//       <Bottom.Screen
//         name="AddPost"
//         component={AddPost1}
//         options={{
//           tabBarIcon: ({ focused }) => (
//             <View style={styles.addContainer}>
//               <View
//                 style={[
//                   styles.addButton,
//                   {
//                     backgroundColor: focused
//                       ? '#527BD0'
//                       : '#648DDB',
//                   },
//                 ]}
//               >
//                 <Text style={styles.plus}>
//                   +
//                 </Text>
//               </View>

//               <Text
//                 style={[
//                   styles.addLabel,
//                   {
//                     color: focused ? '#648DDB' : '#8F8F8F',
//                   },
//                 ]}
//               >
//                 Add
//               </Text>
//             </View>
//           ),
//         }}
//       />

//       {/* ================= FAVORITES ================= */}

//       <Bottom.Screen
//         name="Favorites"
//         component={Favorits1}
//         options={{
//           tabBarIcon: ({ focused }) => (
//             <View
//               style={[
//                 styles.tabItem,
//                 focused && styles.activeTab,
//               ]}
//             >
//               <Text
//                 style={[
//                   styles.icon,
//                   {
//                     color: focused ? '#648DDB' : '#8F8F8F',
//                   },
//                 ]}
//               >
//                 ♡
//               </Text>

//               <Text
//                 style={[
//                   styles.label,
//                   {
//                     color: focused ? '#648DDB' : '#8F8F8F',
//                   },
//                 ]}
//               >
//                 Favorites
//               </Text>
//             </View>
//           ),
//         }}
//       />

//       {/* ================= PROFILE ================= */}

//       <Bottom.Screen
//         name="Profile"
//         component={Profile1}
//         options={{
//           tabBarIcon: ({ focused }) => (
//             <View
//               style={[
//                 styles.tabItem,
//                 focused && styles.activeTab,
//               ]}
//             >
//               <Text
//                 style={[
//                   styles.profileIcon,
//                   {
//                     color: focused ? '#648DDB' : '#8F8F8F',
//                   },
//                 ]}
//               >
//                 ●
//               </Text>

//               <Text
//                 style={[
//                   styles.label,
//                   {
//                     color: focused ? '#648DDB' : '#8F8F8F',
//                   },
//                 ]}
//               >
//                 Profile
//               </Text>
//             </View>
//           ),
//         }}
//       />

//     </Bottom.Navigator>
//   );
// };

// export default BottomTabNavigation1;

// const styles = StyleSheet.create({

//   // Normal tab
//   tabItem: {
//     width: 62,
//     height: 58,

//     alignItems: 'center',
//     justifyContent: 'center',

//     borderRadius: 18,
//   },

//   // Active tab background
//   activeTab: {
//     backgroundColor: '#EEF3FF',
//   },

//   // Main icons
//   icon: {
//     fontSize: 25,
//     fontWeight: 'bold',
//     lineHeight: 27,
//   },

//   // Profile icon
//   profileIcon: {
//     fontSize: 19,
//     lineHeight: 27,
//   },

//   // Labels
//   label: {
//     fontSize: 10,
//     fontWeight: '600',
//     marginTop: 2,
//   },

//   // Add button container
//   addContainer: {
//     alignItems: 'center',
//     justifyContent: 'center',

//     width: 65,
//     height: 75,

//     marginTop: -12,
//   },

//   // Floating Add button
//   addButton: {
//     width: 58,
//     height: 58,

//     borderRadius: 29,

//     alignItems: 'center',
//     justifyContent: 'center',

//     elevation: 8,

//     shadowColor: '#000',
//     shadowOffset: {
//       width: 0,
//       height: 5,
//     },
//     shadowOpacity: 0.2,
//     shadowRadius: 7,
//   },

//   // Plus
//   plus: {
//     color: '#FFFFFF',
//     fontSize: 34,
//     fontWeight: '300',

//     marginTop: -3,
//   },

//   // Add text
//   addLabel: {
//     fontSize: 10,
//     fontWeight: '600',

//     marginTop: 2,
//   },

// });






























// import { Image, StyleSheet, Text, View } from 'react-native'
// import React from 'react'
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
// import AddPost1 from '../MainScreen/AddPost1'
// import Favorits1 from '../MainScreen/Favorits1'
// import Profile1 from '../MainScreen/Profile1'
// import Search1 from '../MainScreen/Search1'
// import HomePage1 from '../MainScreen/HomePage1'


// const Bottom=createBottomTabNavigator()

// const BottomTabNavigation1 = () => {
//   return (
//      // <Bottom.Navigator tabBar={(props)=><customBottomTab/>}>
//     <Bottom.Navigator>
       

        
//         <Bottom.Screen 
//         name='HoePage'
//         component={HomePage1}
//         // options={{headerShown:false,tabBarIcon:({size,color})=>
//         //     {
//         //         return<Image/>

//         //     }}}
//          />
//          <Bottom.Screen 
//         name='HoAddPost'
//         component={AddPost1}
//         options={{headerShown:false}}
//          />
//          <Bottom.Screen 
//         name='Favorits'
//         component={Favorits1}
//         options={{headerShown:false}}
//          />
//          <Bottom.Screen 
//         name='Profile'
//         component={Profile1}
//         options={{headerShown:false}}
//          />
//          <Bottom.Screen 
//         name='Search'
//         component={Search1}
//         options={{headerShown:false}}
//          />

       
//     </Bottom.Navigator>
//   )
// }

// export default BottomTabNavigation1

// const styles = StyleSheet.create({})

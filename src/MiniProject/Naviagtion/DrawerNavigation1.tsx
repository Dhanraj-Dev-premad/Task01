
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Chats1 from '../DrawerScreen/Chats1';
import Settings1 from '../DrawerScreen/Settings1';
import HelpSupport1 from '../DrawerScreen/HelpSupport1';
import BottomTabNavigation1 from './BottomNaviagtion1';
import Profile1 from '../MainScreen/Profile1';
import CustomDrawer1 from './CustomDrawer1';

const Drawer = createDrawerNavigator();

const DrawerNavigation1 = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Main"

      // YOUR CUSTOM DRAWER UI
      drawerContent={(props) => (
        <CustomDrawer1 {...props} />
      )}

      screenOptions={{
        headerShown: false,

        drawerStyle: {
          width: 280,
        },
      }}
    >

      {/* HOME → BOTTOM TABS */}
      <Drawer.Screen
        name="Main"
        component={BottomTabNavigation1}
      />

      {/* CHATS */}
      <Drawer.Screen
        name="Chats"
        component={Chats1}
      />

      {/* SETTINGS */}
      <Drawer.Screen
        name="Settings"
        component={Settings1}
      />

      {/* CUSTOMER SUPPORT */}
      <Drawer.Screen
        name="Help & Support"
        component={HelpSupport1}
      />

      

    </Drawer.Navigator>
  );
};

export default DrawerNavigation1;



































// import React from 'react';
// import { createDrawerNavigator } from '@react-navigation/drawer';



// import Chats1 from '../DrawerScreen/Chats1';
// import Settings1 from '../DrawerScreen/Settings1';
// import HelpSupport1 from '../DrawerScreen/HelpSupport1';
// import BottomTabNavigation1 from './BottomNaviagtion1';
// import Profile1 from '../MainScreen/Profile1';

// const Drawer = createDrawerNavigator();

// const DrawerNavigation1 = () => {
//   return (
//     <Drawer.Navigator
//       initialRouteName="Main"
//       screenOptions={{
//         headerShown: false,

//         drawerStyle: {
//           backgroundColor: '#f69b63',
//           width: 280,
//         },

//         drawerActiveBackgroundColor: '#f2f2f2',
//         drawerActiveTintColor: '#b83333',
//         drawerInactiveTintColor: '#ffffff',
//       }}
//     >

//       {/* MAIN → BOTTOM TABS */}
//       <Drawer.Screen
//         name="Main"
//         component={BottomTabNavigation1}
//         options={{
//           drawerLabel: 'Home',
//         }}
//       />

//       {/* DRAWER ONLY */}
//       <Drawer.Screen
//         name="Chats"
//         component={Chats1}
//       />

//       <Drawer.Screen
//         name="Settings"
//         component={Settings1}
//       />

//       <Drawer.Screen
//         name="Help & Support"
//         component={HelpSupport1}
       
//       />
//        <Drawer.Screen
//         name="Profile"
//         component={Profile1}
//       />


//     </Drawer.Navigator>
//   );
// };

// export default DrawerNavigation1;




















// // import { Image, Text } from 'react-native';
// // import React from 'react';
// // import { createDrawerNavigator } from '@react-navigation/drawer';

// // import BottomTabNavigation1 from './BottomTabNavigation1';
// // import HelpSupport1 from '../DrawerScreen/HelpSupport1';

// // const Drawer = createDrawerNavigator();

// // const DrawerNavigation1 = () => {
// //   return (
// //     <Drawer.Navigator
// //       screenOptions={{
// //         drawerActiveBackgroundColor: '#f2f2f2',
// //         drawerStyle: {
// //           backgroundColor: '#f69b63',
// //         },
// //         drawerActiveTintColor: '#b83333',
// //         drawerInactiveTintColor: '#a6d618',
// //       }}
// //     >

// //       {/* MAIN = Bottom Tabs */}
// //       <Drawer.Screen
// //         name="Main"
// //         component={BottomTabNavigation1}
// //         options={{
// //           headerShown: false,

// //           drawerIcon: ({ size, focused }) => (
// //             <Image
// //               source={require('../../img/Home.png')}
// //               style={{
// //                 width: size,
// //                 height: size,
// //                 tintColor: focused ? 'blue' : 'white',
// //               }}
// //             />
// //           ),

// //           drawerLabel: ({ color }) => (
// //             <Text
// //               style={{
// //                 color: color,
// //                 fontSize: 18,
// //               }}
// //             >
// //               Home
// //             </Text>
// //           ),
// //         }}
// //       />

// //       {/* HELP SUPPORT */}
// //       <Drawer.Screen
// //         name="HelpSupport"
// //         component={HelpSupport1}
// //         options={{
// //           drawerIcon: ({ size, focused }) => (
// //             <Image
// //               source={require('../../img/Support.png')}
// //               style={{
// //                 width: size,
// //                 height: size,
// //                 tintColor: focused ? 'blue' : 'white',
// //               }}
// //             />
// //           ),

// //           drawerLabel: ({ color }) => (
// //             <Text
// //               style={{
// //                 color: color,
// //                 fontSize: 18,
// //               }}
// //             >
// //               Help & Support
// //             </Text>
// //           ),
// //         }}
// //       />

// //     </Drawer.Navigator>
// //   );
// // };

// // export default DrawerNavigation1;
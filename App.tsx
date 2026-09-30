import React, {useEffect} from 'react';
import {
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';

import BootSplash from 'react-native-bootsplash';
import RootNavigationE from './src/ECommeerce/NavigationE/RootNavigationE';
import { AuthProvider } from './src/ECommeerce/Context/AuthContextE';
import { NavigationContainer } from '@react-navigation/native';
import CategoriesCard from './src/ECommeerce/Component/CategoriesCard';




const App = () => {

  useEffect(() => {
    const hideSplash = async () => {
      try {
        await BootSplash.hide({
          fade: true,
        });

        console.log('BootSplash hidden');
      } catch (error) {
        console.log('BootSplash error:', error);
      }
    };

    hideSplash();
  }, []);

  return (
    <View style={styles.container}>

      <StatusBar
        animated={true}
        barStyle="dark-content"
      />
      {/* <CategoriesCard/> */}
      <AuthProvider>
           <NavigationContainer>
               <RootNavigationE />
          </NavigationContainer>
      </AuthProvider>
 
      
{/* 
      <AuthProvider>
        <AppNavigation />
      </AuthProvider> */}

    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
});



// // import { StatusBar, StyleSheet, Text, View } from 'react-native'
// // import React, { useEffect } from 'react'


// // import BootSplash from 'react-native-bootsplash'


// // import { createAsyncStorage } from '@react-native-async-storage/async-storage/jest'
// // import RootNavigationE from './src/ECommeerce/NavigationE/RootNavigationE'
// // import OnB1E from './src/ECommeerce/ScreenE/OnBoardingE/OnB1E'
// // const App = () => {
// //   const storage = createAsyncStorage("appDB");

// // async function demo() {
// //   await storage.setItem("userToken", "abc123");

// //   const token = await storage.getItem("userToken");
// //   console.log("Stored token:", token); // abc123

// //   await storage.removeItem("userToken");
// // }

// //     useEffect(() => {
// //     const init = async () => {
// //       // …do multiple sync or async tasks
// //     };

// //     init().finally(async () => {
// //       await BootSplash.hide({ fade: true });
// //       console.log("BootSplash has been hidden successfully");
// //     });
// //   }, []);

// //   return (

// //     <View style={styles.container}>
// //       <StatusBar
// //           animated={true}
// //           barStyle={'dark-content'}
// //         />
// //         <RootNavigationE/>
   
     
    
  
// //     </View>
// //   )
// // }

// // export default App

// // const styles = StyleSheet.create({
// //   container:{
// //     flex:1,
// //     alignItems:'center', 
// //      justifyContent:'center', 
// //     backgroundColor:"#ffffff"


  
// // })
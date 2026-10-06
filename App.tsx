import React, {useEffect} from 'react';
import {
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';

import BootSplash from 'react-native-bootsplash';
import EditProfileScreenE from './src/ECommeerce/ScreenE/ProfileScreens/EditProfile';
import ChangeNameScreen from './src/ECommeerce/ScreenE/ProfileScreens/ChangeName';
import AddNewAddressScreenE from './src/ECommeerce/ScreenE/ProfileScreens/AddNewAddress';
import MyOrdersScreenE from './src/ECommeerce/ScreenE/ProfileScreens/MyOrders';
import { AuthProvider } from './src/ECommeerce/Context/AuthContextE';
import { NavigationContainer } from '@react-navigation/native';
import RootNavigationE from './src/ECommeerce/NavigationE/RootNavigationE';
import StoreE from './src/ECommeerce/ScreenE/BottomTabScreen/StoreE';
import BrandE from './src/ECommeerce/ScreenE/BarandScreen/BrandScreenE';
import BrandProductsE from './src/ECommeerce/ScreenE/BarandScreen/BrandProductsE';
import BrandScreenE from './src/ECommeerce/ScreenE/BarandScreen/BrandScreenE';
import { ProductProvider } from './src/ECommeerce/Context/ProductContextApi';
import { WishListProvider } from './src/ECommeerce/Context/WishListContext';



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
      
      <AuthProvider>
           <NavigationContainer>
              <WishListProvider>
                <ProductProvider>
                     <RootNavigationE />                 
               </ProductProvider>   

              </WishListProvider>

                  
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
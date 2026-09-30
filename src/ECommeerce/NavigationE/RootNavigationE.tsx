import React, {useContext} from 'react';
import {View, ActivityIndicator} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {AuthContext} from '../Context/AuthContextE';

import AuthNavigationE from './AuthNavigationE';
import BottomTabNavigationE from './BottomTabNavigationE';
import StackNaviagtionE from './StackNaviagtionE';

const Stack = createNativeStackNavigator();

const RootNavigationE = () => {
  const {isLoggedIn, loading} = useContext(AuthContext);

  if (loading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    
    

    

     isLoggedIn ? <StackNaviagtionE/> : <AuthNavigationE/>
    
  );
};

export default RootNavigationE;



// import React, {useContext} from 'react';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';

// import AuthNavigationE from './AuthNavigationE';

// import {AuthContext} from '../Context/AuthContextE';
// import StackNaviagtionE from './StackNaviagtionE';

// const Stack = createNativeStackNavigator();

// const RootNavigationE = () => {
//   const {isLoggedIn, loading} = useContext(AuthContext);

//   if (loading) {
//     return null;
//   }

//   return (
    
 
      
//       isLoggedIn ? 
      
//         <StackNaviagtionE />: (
        
//           <AuthNavigationE/>
        
//       ))}

   

// export default RootNavigationE;











// // import { StyleSheet, Text, View } from 'react-native'
// // import React from 'react'
// // import { NavigationContainer } from '@react-navigation/native'
// // import StackNaviagtionE from './StackNaviagtionE'
// // import OnB1E from '../ScreenE/OnBoardingE/OnB1E'
// // import OnB2E from '../ScreenE/OnBoardingE/OnB2E'
// // import OnB3E from '../ScreenE/OnBoardingE/OnB3E'



// // const RootNavigationE = () => {
// //   return (
// //      <NavigationContainer>
// //       <StackNaviagtionE/>
        
// //     </NavigationContainer>
// //   )
// // }

// // export default RootNavigationE

// // const styles = StyleSheet.create({})
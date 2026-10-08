import React, {useContext, useState} from 'react';
import {
  Alert,
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';

import {AuthContext} from '../../Context/AuthContextE';
import CustomCheckBox from '../../../MainComp/CustomCheckBox';




const LoginpageE = () => {
  const navigation = useNavigation();
  const {login} = useContext(AuthContext);

  const [passwordVisible, setPasswordVisible] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [gmail, setGmail] = useState('');
  const [password, setPassword] = useState('');




  const handleLogin = async () => {
  const email = gmail.trim();
  const pass = password.trim();

  if (!email) {
    Alert.alert('Error', 'Please enter your Gmail');
    return;
  }

  if (!pass) {
    Alert.alert('Error', 'Please enter your password');
    return;
  }

  try {
    console.log('Login started:', email);

    await login(email, pass);

    console.log('Login successful');
  } catch (error) {
    console.log('LOGIN ERROR:', error);

    Alert.alert(
      'Login Error',
      error?.message || 'Something went wrong',
    );
  }
};



//   const handleLogin = async () => {
//     const email = gmail.trim();
//     const pass = password.trim();

//     if (!email) {
//       Alert.alert('Error', 'Please enter your Gmail');
//       return;
//     }

//     if (!pass) {
//       Alert.alert('Error', 'Please enter your password');
//       return;
//     }

//     try {
//       await login(email, pass);
//       // RootNavigationE should show the logged-in screens when isLoggedIn becomes true.
//     } catch (error) {
//       console.log('Login error:', error);
//       Alert.alert('Error', 'Something went wrong');
//     }
//   };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.mainContainer}>
        <View style={styles.emptySpace} />

        <View style={styles.textMainContainer}>
          <Text style={styles.titleText}>Shop Smarter</Text>
          <Text style={styles.subtitleText}>
            Log in to access exclusive deals and simplify your shopping
            experience.
          </Text>
        </View>

        <View style={styles.inputMainContainer}>
          <View style={styles.inputBox}>
            <Image
              source={require('../../../ECommeerce/AssetsE/Img/LoginImg/mail.png')}
              resizeMode="contain"
              style={styles.inputIcon}
            />
            <TextInput
              placeholder="Email"
              placeholderTextColor="#a5a2a2"
              value={gmail}
              onChangeText={setGmail}
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
              style={styles.textInput}
            />
          </View>

          <View style={styles.inputBox}>
            <Image
              source={require('../../../ECommeerce/AssetsE/Img/LoginImg/account.png')}
              resizeMode="contain"
              style={styles.inputIcon}
            />
            <TextInput
              placeholder="Password"
              placeholderTextColor="#a5a2a2"
              value={password}
              onChangeText={setPassword}
              secureTextEntry={!passwordVisible}
              style={styles.textInput}
            />
            <Pressable
              onPress={() => setPasswordVisible(current => !current)}
              hitSlop={10}
              accessibilityRole="button"
              accessibilityLabel={
                passwordVisible ? 'Hide password' : 'Show password'
              }>
              <Image
                source={
                  passwordVisible
                    ? require('../../../ECommeerce/AssetsE/Img/LoginImg/view.png')
                    : require('../../../ECommeerce/AssetsE/Img/LoginImg/hide.png')
                }
                resizeMode="contain"
                style={styles.eyeIcon}
              />
            </Pressable>
          </View>
        </View>

        <View style={styles.rememberMainContainer}>
          <Pressable
            style={styles.rememberContainer}
            onPress={() => setRememberMe(current => !current)}>
            <CustomCheckBox
              value={rememberMe}
              onValueChange={setRememberMe}
            />
            <Text style={styles.rememberText}>Remember Me</Text>
          </Pressable>

          <Pressable
            onPress={() => navigation.navigate('ForgetPassPageE')}
            style={styles.forgotButton}>
            <Text style={styles.forgotText}>Forgot Password?</Text>
          </Pressable>
        </View>

        <View style={styles.buttonsMainContainer}>
          <Pressable onPress={handleLogin} style={styles.signInButton}>
            <Text style={styles.signInText}>Sign in</Text>
          </Pressable>

          <Pressable
            onPress={() => navigation.navigate('RegisterPageE')}
            style={styles.createAccountButton}>
            <Text style={styles.createAccountText}>Create Account</Text>
          </Pressable>
        </View>

        <View style={styles.orRow}>
          <View style={styles.lineView} />
          <Text style={styles.orText}>Or Sign In With</Text>
          <View style={styles.lineView} />
        </View>

        <View style={styles.socialMainContainer}>
          <View style={styles.socialIconContainer}>
            <Image
              source={require('../../../ECommeerce/AssetsE/Img/LoginImg/google.png')}
              resizeMode="contain"
              style={styles.socialIcon}
            />
          </View>

          <View style={styles.socialIconContainer}>
            <Image
              source={require('../../../ECommeerce/AssetsE/Img/LoginImg/facebook.png')}
              resizeMode="contain"
              style={styles.socialIcon}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginpageE;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  mainContainer: {
    flex: 1,
    paddingHorizontal: 20,
  },
  emptySpace: {
    height: 60,
  },
  textMainContainer: {
    marginBottom: 25,
  },
  titleText: {
    fontWeight: '700',
    fontSize: 35,
    color: '#111827',
  },
  subtitleText: {
    marginTop: 8,
    fontSize: 16,
    lineHeight: 23,
    color: '#777',
  },
  inputMainContainer: {
    gap: 18,
  },
  inputBox: {
    height: 58,
    borderWidth: 1,
    borderColor: '#a5a2a2',
    borderRadius: 14,
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputIcon: {
    height: 24,
    width: 24,
    opacity: 0.5,
    marginLeft: 14,
  },
  textInput: {
    flex: 1,
    color: '#111',
    fontSize: 16,
    paddingHorizontal: 14,
  },
  eyeIcon: {
    height: 24,
    width: 24,
    opacity: 0.6,
    marginHorizontal: 14,
  },
  rememberMainContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
  },
  rememberContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  rememberText: {
    fontSize: 14,
    color: '#333',
  },
  forgotButton: {
    paddingVertical: 8,
  },
  forgotText: {
    color: '#648DDB',
    fontWeight: '600',
    fontSize: 14,
  },
  buttonsMainContainer: {
    gap: 12,
    marginTop: 25,
  },
  signInButton: {
    height: 56,
    backgroundColor: '#0857A0',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  signInText: {
    fontWeight: 'bold',
    color: '#fff',
    fontSize: 18,
  },
  createAccountButton: {
    height: 56,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#0857A0',
  },
  createAccountText: {
    fontWeight: '600',
    color: '#0857A0',
    fontSize: 17,
  },
  orRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 28,
  },
  lineView: {
    flex: 1,
    height: 1,
    backgroundColor: '#d0d0d0',
  },
  orText: {
    fontSize: 14,
    marginHorizontal: 12,
    color: '#777',
  },
  socialMainContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 14,
    marginTop: 20,
  },
  socialIconContainer: {
    height: 56,
    width: 56,
    borderRadius: 28,
    borderWidth: 1,
    borderColor: '#bebebe',
    justifyContent: 'center',
    alignItems: 'center',
  },
  socialIcon: {
    height: 30,
    width: 30,
  },
});


























// import React, {useContext, useState} from 'react';
// import {
//   Alert,
//   Image,
//   Pressable,
//   StyleSheet,
//   Text,
//   TextInput,
//   View,
// } from 'react-native';
// import {SafeAreaView} from 'react-native-safe-area-context';
// import {useNavigation} from '@react-navigation/native';

// import {AuthContext} from '../../Context/AuthContextE';
// import CustomCheckBox from '../../../MainComp/CustomCheckBox';

// const LoginpageE = () => {
//   const navigation = useNavigation();
//   const {login} = useContext(AuthContext);

//   const [passwordVisible, setPasswordVisible] = useState(false);
//   const [rememberMe, setRememberMe] = useState(false);
//   const [gmail, setGmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleLogin = async () => {
//     const email = gmail.trim();
//     const pass = password.trim();

//     if (!email) {
//       Alert.alert('Error', 'Please enter your Gmail');
//       return;
//     }

//     if (!pass) {
//       Alert.alert('Error', 'Please enter your password');
//       return;
//     }

//     try {
//       await login(email, pass);
//       // RootNavigationE should show the logged-in screens when isLoggedIn becomes true.
//     } catch (error) {
//       console.log('Login error:', error);
//       Alert.alert('Error', 'Something went wrong');
//     }
//   };

//   return (
//     <SafeAreaView style={styles.safeArea}>
//       <View style={styles.mainContainer}>
//         <View style={styles.emptySpace} />

//         <View style={styles.textMainContainer}>
//           <Text style={styles.titleText}>Shop Smarter</Text>
//           <Text style={styles.subtitleText}>
//             Log in to access exclusive deals and simplify your shopping
//             experience.
//           </Text>
//         </View>

//         <View style={styles.inputMainContainer}>
//           <View style={styles.inputBox}>
//             <Image
//               source={require('../../../ECommeerce/AssetsE/Img/LoginImg/mail.png')}
//               resizeMode="contain"
//               style={styles.inputIcon}
//             />
//             <TextInput
//               placeholder="Email"
//               placeholderTextColor="#a5a2a2"
//               value={gmail}
//               onChangeText={setGmail}
//               keyboardType="email-address"
//               autoCapitalize="none"
//               autoCorrect={false}
//               style={styles.textInput}
//             />
//           </View>

//           <View style={styles.inputBox}>
//             <Image
//               source={require('../../../ECommeerce/AssetsE/Img/LoginImg/account.png')}
//               resizeMode="contain"
//               style={styles.inputIcon}
//             />
//             <TextInput
//               placeholder="Password"
//               placeholderTextColor="#a5a2a2"
//               value={password}
//               onChangeText={setPassword}
//               secureTextEntry={!passwordVisible}
//               style={styles.textInput}
//             />
//             <Pressable
//               onPress={() => setPasswordVisible(current => !current)}
//               hitSlop={10}
//               accessibilityRole="button"
//               accessibilityLabel={
//                 passwordVisible ? 'Hide password' : 'Show password'
//               }>
//               <Image
//                 source={
//                   passwordVisible
//                     ? require('../../../ECommeerce/AssetsE/Img/LoginImg/view.png')
//                     : require('../../../ECommeerce/AssetsE/Img/LoginImg/hide.png')
//                 }
//                 resizeMode="contain"
//                 style={styles.eyeIcon}
//               />
//             </Pressable>
//           </View>
//         </View>

//         <View style={styles.rememberMainContainer}>
//           <Pressable
//             style={styles.rememberContainer}
//             onPress={() => setRememberMe(current => !current)}>
//             <CustomCheckBox
//               value={rememberMe}
//               onValueChange={setRememberMe}
//             />
//             <Text style={styles.rememberText}>Remember Me</Text>
//           </Pressable>

//           <Pressable
//             onPress={() => navigation.navigate('ForgetPassPageE')}
//             style={styles.forgotButton}>
//             <Text style={styles.forgotText}>Forgot Password?</Text>
//           </Pressable>
//         </View>

//         <View style={styles.buttonsMainContainer}>
//           <Pressable onPress={handleLogin} style={styles.signInButton}>
//             <Text style={styles.signInText}>Sign in</Text>
//           </Pressable>

//           <Pressable
//             onPress={() => navigation.navigate('RegisterPageE')}
//             style={styles.createAccountButton}>
//             <Text style={styles.createAccountText}>Create Account</Text>
//           </Pressable>
//         </View>

//         <View style={styles.orRow}>
//           <View style={styles.lineView} />
//           <Text style={styles.orText}>Or Sign In With</Text>
//           <View style={styles.lineView} />
//         </View>

//         <View style={styles.socialMainContainer}>
//           <View style={styles.socialIconContainer}>
//             <Image
//               source={require('../../../ECommeerce/AssetsE/Img/LoginImg/google.png')}
//               resizeMode="contain"
//               style={styles.socialIcon}
//             />
//           </View>

//           <View style={styles.socialIconContainer}>
//             <Image
//               source={require('../../../ECommeerce/AssetsE/Img/LoginImg/facebook.png')}
//               resizeMode="contain"
//               style={styles.socialIcon}
//             />
//           </View>
//         </View>
//       </View>
//     </SafeAreaView>
//   );
// };

// export default LoginpageE;

// const styles = StyleSheet.create({
//   safeArea: {
//     flex: 1,
//     backgroundColor: '#fff',
//   },
//   mainContainer: {
//     flex: 1,
//     paddingHorizontal: 20,
//   },
//   emptySpace: {
//     height: 60,
//   },
//   textMainContainer: {
//     marginBottom: 25,
//   },
//   titleText: {
//     fontWeight: '700',
//     fontSize: 35,
//     color: '#111827',
//   },
//   subtitleText: {
//     marginTop: 8,
//     fontSize: 16,
//     lineHeight: 23,
//     color: '#777',
//   },
//   inputMainContainer: {
//     gap: 18,
//   },
//   inputBox: {
//     height: 58,
//     borderWidth: 1,
//     borderColor: '#a5a2a2',
//     borderRadius: 14,
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   inputIcon: {
//     height: 24,
//     width: 24,
//     opacity: 0.5,
//     marginLeft: 14,
//   },
//   textInput: {
//     flex: 1,
//     color: '#111',
//     fontSize: 16,
//     paddingHorizontal: 14,
//   },
//   eyeIcon: {
//     height: 24,
//     width: 24,
//     opacity: 0.6,
//     marginHorizontal: 14,
//   },
//   rememberMainContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginTop: 20,
//   },
//   rememberContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     gap: 8,
//   },
//   rememberText: {
//     fontSize: 14,
//     color: '#333',
//   },
//   forgotButton: {
//     paddingVertical: 8,
//   },
//   forgotText: {
//     color: '#648DDB',
//     fontWeight: '600',
//     fontSize: 14,
//   },
//   buttonsMainContainer: {
//     gap: 12,
//     marginTop: 25,
//   },
//   signInButton: {
//     height: 56,
//     backgroundColor: '#0857A0',
//     justifyContent: 'center',
//     alignItems: 'center',
//     borderRadius: 10,
//   },
//   signInText: {
//     fontWeight: 'bold',
//     color: '#fff',
//     fontSize: 18,
//   },
//   createAccountButton: {
//     height: 56,
//     backgroundColor: '#fff',
//     justifyContent: 'center',
//     alignItems: 'center',
//     borderRadius: 10,
//     borderWidth: 1,
//     borderColor: '#0857A0',
//   },
//   createAccountText: {
//     fontWeight: '600',
//     color: '#0857A0',
//     fontSize: 17,
//   },
//   orRow: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginTop: 28,
//   },
//   lineView: {
//     flex: 1,
//     height: 1,
//     backgroundColor: '#d0d0d0',
//   },
//   orText: {
//     fontSize: 14,
//     marginHorizontal: 12,
//     color: '#777',
//   },
//   socialMainContainer: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems: 'center',
//     gap: 14,
//     marginTop: 20,
//   },
//   socialIconContainer: {
//     height: 56,
//     width: 56,
//     borderRadius: 28,
//     borderWidth: 1,
//     borderColor: '#bebebe',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   socialIcon: {
//     height: 30,
//     width: 30,
//   },
// });


























// import React, {useContext, useState} from 'react';

// import {
//   Alert,
//   Pressable,
//   StyleSheet,
//   Text,
//   TextInput,
//   View,
// } from 'react-native';

// import {SafeAreaView} from 'react-native-safe-area-context';

// import {AuthContext} from '../../Context/AuthContextE';

// import CustomCheckBox from '../../../MainComp/CustomCheckBox';
// import { useNavigation } from '@react-navigation/native';




// const LoginpageE = () => {
//    const navigation = useNavigation();

//   const {login} = useContext(AuthContext);

//   const [passwordVisiable, setPassowrdVisiable] = useState(true);

//   const [rememberMe, setRememberMe] = useState(false);

//   const [gmail, setGmail] = useState('');

//   const [password, setPassword] = useState('');


//   const handleLogin = async () => {

//     const email = gmail.trim();

//     const pass = password.trim();


//     // Email validation
//     if (email === '') {

//       Alert.alert(
//         'Error',
//         'Please enter your Gmail',
//       );

//       return;
//     }


//     // Password validation
//     if (pass === '') {

//       Alert.alert(
//         'Error',
//         'Please enter your password',
//       );

//       return;
//     }


//     try {

//       // Login through AuthContext
//       await login(email, pass);

      

//     } catch (error) {

//       console.log(
//         'Login error:',
//         error,
//       );

//       Alert.alert(
//         'Error',
//         'Something went wrong',
//       );
//     }
//   };


//   return (

//     <SafeAreaView style={styles.container}>

//       {/* Title */}

//       <Text style={styles.title}>
//         Shope Smarter
//       </Text>


//       {/* Subtitle */}

//       <Text style={styles.subtitle}>
//         Log in to Access Exclusive Deals and Simpliy Your Shopping Experience
//       </Text>


//       {/* Gmail */}

//       <Text style={styles.label}>
//         Gmail
//       </Text>


//       <TextInput
//         style={styles.input}
//         placeholder="Enter your Gmail"
//         value={gmail}
//         onChangeText={setGmail}
//         keyboardType="email-address"
//         autoCapitalize="none"
//       />


//       {/* Password */}

//       <Text style={styles.label}>
//         Password
//       </Text>


//       <View style={styles.passwordContainer}>

//         <TextInput
//           style={styles.passwordInput}
//           placeholder="Enter your password"
//           value={password}
//           onChangeText={setPassword}
//           secureTextEntry={passwordVisiable}
//         />


//         {/* Eye */}

//         <Pressable
//           onPress={() =>
//             setPassowrdVisiable(!passwordVisiable)
//           }>

//           <Text style={styles.eye}>
//             {passwordVisiable ? '👁️' : '🙈'}
//           </Text>

//         </Pressable>

//       </View>


//       {/* Remember Me + Forgot Password */}

//       <View style={styles.row}>

//         {/* Remember Me */}

//         <Pressable
//           style={styles.rememberContainer}
//           onPress={() =>
//             setRememberMe(!rememberMe)
//           }>

//           <CustomCheckBox
//             value={rememberMe}
//             onValueChange={setRememberMe}
//           />

//           <Text style={styles.rememberText}>
//             Remember Me
//           </Text>

//         </Pressable>


//         {/* Forgot Password */}

//         <Pressable
//           onPress={() =>
//           navigation.navigate('ForgetPassPageE')
//           }
        
//         >

//           <Text style={styles.forgotText}>
//             Forgot Password?
//           </Text>

//         </Pressable>

//       </View>


//       {/* Sign In */}

//       <Pressable
//         style={styles.signInButton}
//         onPress={handleLogin}>

//         <Text style={styles.signInText}>
//           Sign In
//         </Text>
        

//       </Pressable>


//       {/* Create Account */}

//       <Pressable
//       onPress={() =>
//       navigation.navigate('RegisterPageE')}
      
      

      
//       >

//         <Text style={styles.createAccount}>
//           Create Account
//         </Text>

//       </Pressable>


//       {/* Social Login */}

//       <View style={styles.socialContainer}>

//         <Pressable style={styles.socialButton}>

//           <Text>
//             Google
//           </Text>

//         </Pressable>


//         <Pressable style={styles.socialButton}>

//           <Text>
//             Facebook
//           </Text>

//         </Pressable>

//       </View>

//     </SafeAreaView>
//   );
// };


// export default LoginpageE;


// const styles = StyleSheet.create({

//   container: {
//     flex: 1,
//     paddingHorizontal: 20,
//     backgroundColor: '#fff',
//   },


//   title: {
//     fontSize: 30,
//     fontWeight: 'bold',
//     marginTop: 50,
//   },


//   subtitle: {
//     fontSize: 14,
//     color: '#777',
//     marginTop: 10,
//     marginBottom: 30,
//   },


//   label: {
//     fontSize: 15,
//     fontWeight: '600',
//     marginBottom: 8,
//     marginTop: 15,
//   },


//   input: {
//     height: 50,
//     borderWidth: 1,
//     borderColor: '#ddd',
//     borderRadius: 10,
//     paddingHorizontal: 15,
//   },


//   passwordContainer: {
//     height: 50,
//     borderWidth: 1,
//     borderColor: '#ddd',
//     borderRadius: 10,
//     flexDirection: 'row',
//     alignItems: 'center',
//   },


//   passwordInput: {
//     flex: 1,
//     paddingHorizontal: 15,
//   },


//   eye: {
//     fontSize: 18,
//     marginRight: 15,
//   },


//   row: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginTop: 20,
//   },


//   rememberContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },


//   rememberText: {
//     marginLeft: 8,
//   },


//   forgotText: {
//     color: '#648DDB',
//   },


//   signInButton: {
//     height: 50,
//     backgroundColor: '#648DDB',
//     borderRadius: 10,
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginTop: 30,
//   },


//   signInText: {
//     color: '#fff',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },


//   createAccount: {
//     textAlign: 'center',
//     color: '#648DDB',
//     marginTop: 20,
//     fontWeight: '600',
//   },


//   socialContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginTop: 30,
//   },


//   socialButton: {
//     width: '48%',
//     height: 45,
//     borderWidth: 1,
//     borderColor: '#ddd',
//     borderRadius: 10,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },

// });










// import {
//   Alert,
//   Image,
//   Pressable,
//   StyleSheet,
//   Text,
//   TextInput,
//   View,
// } from 'react-native';

// import React, {useContext, useState} from 'react';

// import {SafeAreaView} from 'react-native-safe-area-context';

// import CustomCheckBox from '../../../MainComp/CustomCheckBox';

// import {useNavigation} from '@react-navigation/native';

// import {AuthContext} from '../../Context/AuthContextE';


// const LoginpageE = () => {

//   const navigation = useNavigation();

//   // Password visibility
//   const [passwordVisiable, setPassowrdVisiable] = useState(true);

//   // Remember Me checkbox
//   const [rememberMe, setRememberMe] = useState(false);

//   // Login input values
//   const [gmail, setGmail] = useState('');

//   const [password, setPassword] = useState('');

//   // Auth Context
//   const {login} = useContext(AuthContext);


//   // LOGIN
//   const handleLogin = async () => {

//     const email = gmail.trim();

//     const pass = password.trim();


//     // Check email
//     if (email === '') {

//       Alert.alert(
//         'Error',
//         'Please enter your Gmail',
//       );

//       return;
//     }


//     // Check password
//     if (pass === '') {

//       Alert.alert(
//         'Error',
//         'Please enter your password',
//       );

//       return;
//     }


//     try {

//       // Login through Context
//       await login(email, pass);

//       // Go to Bottom Tab
//       navigation.navigate('BottomTabNavigationE');

//     } catch (error) {

//       console.log('Login error:', error);

//       Alert.alert(
//         'Error',
//         'Something went wrong',
//       );

//     }
//   };


//   return (
//     <SafeAreaView style={styles.safeArea}>

//       <View style={styles.mainContainer}>


//         {/* Empty Space */}

//         <View style={styles.emptySpace}>
//         </View>


//         {/* Title */}

//         <View style={styles.textMainContainer}>

//           <View style={styles.titleContainer}>

//             <Text style={styles.titleText}>
//               Shope Smarter
//             </Text>

//           </View>


//           <View style={styles.subtitleContainer}>

//             <Text style={styles.subtitleText}>
//               Log in to Access Exclusive Deals and Simpliy Your Shopping
//               Experience
//             </Text>

//           </View>

//         </View>


//         {/* INPUTS */}

//         <View style={styles.inputMainContainer}>


//           {/* Email */}

//           <View style={styles.inputBox}>

//             <Image
//               source={require('../../../ECommeerce/AssetsE/Img/LoginImg/mail.png')}
//               resizeMode="contain"
//               style={styles.inputIcon}
//             />


//             <TextInput
//               placeholder="Email"
//               placeholderTextColor="#a5a2a2"
//               value={gmail}
//               onChangeText={email => {
//                 setGmail(email);
//               }}
//               style={styles.textInput}
//             />

//           </View>


//           {/* Password */}

//           <View style={styles.inputBox}>

//             <Image
//               source={require('../../../ECommeerce/AssetsE/Img/LoginImg/account.png')}
//               resizeMode="contain"
//               style={styles.inputIcon}
//             />


//             <TextInput
//               placeholder="Password"
//               placeholderTextColor="#a5a2a2"
//               secureTextEntry={passwordVisiable}
//               value={password}
//               onChangeText={pass => {
//                 setPassword(pass);
//               }}
//               style={styles.textInput}
//             />


//             {/* Password Eye */}

//             <Pressable
//               onPress={() => {
//                 setPassowrdVisiable(!passwordVisiable);
//               }}
//             >

//               {passwordVisiable ? (

//                 <Image
//                   source={require('../../../ECommeerce/AssetsE/Img/LoginImg/hide.png')}
//                   resizeMode="contain"
//                   style={styles.eyeIcon}
//                 />

//               ) : (

//                 <Image
//                   source={require('../../../ECommeerce/AssetsE/Img/LoginImg/view.png')}
//                   resizeMode="contain"
//                   style={styles.eyeIcon}
//                 />

//               )}

//             </Pressable>

//           </View>

//         </View>


//         {/* REMEMBER ME + FORGOT PASSWORD */}

//         <View style={styles.rememberMainContainer}>


//           {/* Remember Me */}

//           <View style={styles.rememberContainer}>

//             <View style={styles.checkboxContainer}>

//               <CustomCheckBox
//                 value={rememberMe}
//                 onChange={setRememberMe}
//               />

//             </View>


//             <View style={styles.rememberTextContainer}>

//               <Text style={styles.rememberText}>
//                 Remember Me
//               </Text>

//             </View>

//           </View>


//           {/* Forgot Password */}

//           <View style={styles.forgotContainer}>

//             <Pressable
//               onPress={() =>
//                 navigation.navigate('ForgetPassPageE')
//               }
//               style={styles.forgotButton}
//             >

//               <Text style={styles.forgotText}>
//                 Forgot Password?
//               </Text>

//             </Pressable>

//           </View>

//         </View>


//         {/* BUTTONS */}

//         <View style={styles.buttonsMainContainer}>


//           {/* SIGN IN */}

//           <Pressable
//             onPress={handleLogin}
//             style={[
//               styles.signInButton,
//               {
//                 backgroundColor: '#0857A0',
//               },
//             ]}
//           >

//             <Text style={styles.signInText}>
//               Sign in
//             </Text>

//           </Pressable>


//           {/* CREATE ACCOUNT */}

//           <Pressable
//             onPress={() =>
//               navigation.navigate('RegisterPageE')
//             }
//             style={styles.createAccountButton}
//           >

//             <Text style={styles.createAccountText}>
//               Create Account
//             </Text>

//           </Pressable>

//         </View>


//         {/* OR */}

//         <View style={styles.OrText}>

//           <View style={styles.LineView} />

//           <Text style={styles.orText}>
//             Or Sign In With
//           </Text>

//           <View style={styles.LineView} />

//         </View>


//         {/* SOCIAL LOGIN */}

//         <View style={styles.socialMainContainer}>


//           {/* Google */}

//           <View style={styles.socialIconContainer}>

//             <Image
//               source={require('../../../ECommeerce/AssetsE/Img/LoginImg/google.png')}
//               resizeMode="center"
//               style={styles.socialIcon}
//             />

//           </View>


//           {/* Facebook */}

//           <View style={styles.socialIconContainer}>

//             <Image
//               source={require('../../../ECommeerce/AssetsE/Img/LoginImg/facebook.png')}
//               resizeMode="center"
//               style={styles.socialIcon}
//             />

//           </View>

//         </View>


//       </View>

//     </SafeAreaView>
//   );
// };


// export default LoginpageE;


// const styles = StyleSheet.create({

//   safeArea: {
//     flex: 1,
//     padding: 10,
//   },


//   mainContainer: {
//     flex: 1,
//     paddingHorizontal: 20,
//   },


//   // Empty space

//   emptySpace: {
//     height: 80,
//     width: '100%',
//   },


//   // Title

//   textMainContainer: {
//     height: 120,
//     width: '100%',
//   },


//   titleContainer: {
//     height: 50,
//   },


//   titleText: {
//     fontWeight: '700',
//     fontSize: 35,
//   },


//   subtitleContainer: {
//     height: 50,
//   },


//   subtitleText: {
//     fontWeight: '400',
//     fontSize: 20,
//     opacity: 0.4,
//   },


//   // Inputs

//   inputMainContainer: {
//     height: 180,
//     width: '100%',
//     gap: 20,
//   },


//   inputBox: {
//     height: 60,
//     borderWidth: 2,
//     borderColor: '#a5a2a2',
//     borderRadius: 18,
//     flexDirection: 'row',
//   },


//   inputIcon: {
//     height: 25,
//     width: 25,
//     opacity: 0.3,
//     marginLeft: 10,
//     marginTop: 16,
//   },


//   textInput: {
//     flex: 1,
//     color: 'black',
//     fontSize: 22,
//     paddingLeft: 25,
//   },


//   eyeIcon: {
//     height: 30,
//     width: 25,
//     opacity: 0.3,
//     marginTop: 12,
//     marginRight: 5,
//   },


//   // Remember Me

//   rememberMainContainer: {
//     height: 80,
//     width: '100%',
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems: 'center',
//     gap: 50,
//   },


//   rememberContainer: {
//     height: 40,
//     width: 155,
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems: 'center',
//     gap: 10,
//   },


//   checkboxContainer: {
//     marginBottom: 8,
//   },


//   rememberTextContainer: {
//     height: 35,
//   },


//   rememberText: {
//     fontSize: 20,
//   },


//   forgotContainer: {
//     height: 40,
//     width: 170,
//   },


//   forgotButton: {
//     height: 25,
//     width: 170,
//   },


//   forgotText: {
//     fontWeight: 'bold',
//     color: '#648DDB',
//     fontSize: 22,
//   },


//   // Buttons

//   buttonsMainContainer: {
//     height: 150,
//     width: '100%',
//     gap: 10,
//   },


//   signInButton: {
//     height: 60,
//     width: '100%',
//     justifyContent: 'center',
//     alignItems: 'center',
//     borderRadius: 8,
//   },


//   signInText: {
//     fontWeight: 'bold',
//     color: '#ffffff',
//     fontSize: 22,
//   },


//   createAccountButton: {
//     height: 60,
//     width: '100%',
//     backgroundColor: '#ffffff',
//     justifyContent: 'center',
//     alignItems: 'center',
//     borderRadius: 8,
//     borderWidth: 2,
//   },


//   createAccountText: {
//     fontWeight: 'bold',
//     color: '#000000',
//     fontSize: 22,
//   },


//   // Or Sign In With

//   OrText: {
//     height: 35,
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems: 'center',
//     opacity: 0.2,
//   },


//   LineView: {
//     height: 2,
//     width: 100,
//     backgroundColor: 'black',
//   },


//   orText: {
//     fontSize: 20,
//     marginLeft: 10,
//     marginRight: 10,
//     color: 'black',
//   },


//   // Social icons

//   socialMainContainer: {
//     height: 80,
//     width: '100%',
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems: 'center',
//     gap: 10,
//   },


//   socialIconContainer: {
//     height: 65,
//     width: 65,
//     borderRadius: 9999,
//     borderWidth: 1,
//     borderColor: '#BEBEBE',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },


//   socialIcon: {
//     height: 40,
//     width: 40,
//   },

// });


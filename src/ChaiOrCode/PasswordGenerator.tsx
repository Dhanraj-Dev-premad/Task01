import React, {useCallback, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Pressable,
  Alert,
  
} from 'react-native';
import Clipboard from '@react-native-clipboard/clipboard';
const PasswordGenerator = () => {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState('');

 



 
   

  // Generate Password
  const generatePassword = useCallback(() => {
    let pass = '';

    let str =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

    if (numberAllowed) {
      str += '0123456789';
    }

    if (charAllowed) {
      str += '!@#$%^&*()_+=-';
    }

    for (let i = 0; i < length; i++) {
      const char = Math.floor(Math.random() * str.length);

      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed]);

  // Copy button
   const copyPassword = () => {
    const pass = password.trim();
    
    if (pass) {
      Clipboard.setString(pass);
      Alert.alert('Copied!', 'Password copied to clipboard.');
    } else {
      Alert.alert('Error', 'Generate a password first!');
    }
  };

  
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.card}>

        {/* Title */}
        <Text style={styles.title}>
          Password Generator
        </Text>

        {/* Password + Copy */}
        <View style={styles.passwordRow}>
          <TextInput
            value={password}
            placeholder="Password"
            placeholderTextColor="#999"
            editable={false}
            style={styles.passwordInput}
          />

          <Pressable
            style={styles.copyButton}
            onPress={copyPassword}>
            <Text style={styles.copyText}>
              Copy
            </Text>
          </Pressable>
        </View>

        {/* Length */}
        <View style={styles.lengthRow}>
          <Text style={styles.label}>
            Length:
          </Text>

          <TextInput
            value={String(length)}
            onChangeText={text => {
              setLength(Number(text));
            }}
            keyboardType="numeric"
            style={styles.lengthInput}
            maxLength={2}
          />
        </View>

        {/* Numbers */}
        <Pressable
          style={styles.optionRow}
          onPress={() => setNumberAllowed(!numberAllowed)}>

          <View
            style={[
              styles.checkbox,
              numberAllowed && styles.checked,
            ]}>
            {numberAllowed && (
              <Text style={styles.checkmark}>
                ✓
              </Text>
            )}
          </View>

          <Text style={styles.label}>
            Numbers
          </Text>
        </Pressable>

        {/* Characters */}
        <Pressable
          style={styles.optionRow}
          onPress={() => setCharAllowed(!charAllowed)}>

          <View
            style={[
              styles.checkbox,
              charAllowed && styles.checked,
            ]}>
            {charAllowed && (
              <Text style={styles.checkmark}>
                ✓
              </Text>
            )}
          </View>

          <Text style={styles.label}>
            Characters
          </Text>
        </Pressable>

        {/* Generate Password */}
        <Pressable
          style={styles.generateButton}
          onPress={generatePassword}>
          <Text style={styles.generateText}>
            Generate Password
          </Text>
        </Pressable>

      </View>
    </SafeAreaView>
  );
};

export default PasswordGenerator;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    padding: 20,
  },

  card: {
    backgroundColor: '#eae4e4',
    borderRadius: 12,
    padding: 20,
  },

  title: {
    color: '#514e4e',
    fontSize: 22,
    textAlign: 'center',
    marginBottom: 20,
  },

  passwordRow: {
    flexDirection: 'row',
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 10,
    overflow: 'hidden',
  },

  passwordInput: {
    flex: 1,
    fontSize: 18,
    paddingHorizontal: 15,
    color: '#222',
  },

  copyButton: {
    width: 75,
    backgroundColor: '#1554d1',
    justifyContent: 'center',
    alignItems: 'center',
  },

  copyText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },

  lengthRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },

  label: {
    color: '#070707',
    fontSize: 17,
  },

  lengthInput: {
    width: 70,
    height: 40,
    backgroundColor: '#fff',
    borderRadius: 7,
    marginLeft: 10,
    paddingHorizontal: 10,
    fontSize: 18,
    color: '#222',
    textAlign: 'center',
  },

  optionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15,
  },

  checkbox: {
    width: 20,
    height: 20,
    backgroundColor: '#fff',
    borderRadius: 4,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },

  checked: {
    backgroundColor: '#1976f3',
  },

  checkmark: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },

  generateButton: {
    backgroundColor: '#1554d1',
    paddingVertical: 13,
    borderRadius: 8,
    marginTop: 25,
    alignItems: 'center',
  },

  generateText: {
    color: '#fff',
    fontSize: 17,
    fontWeight: '600',
  },
});










// import React, {useState, useCallback} from 'react';
// import {
//   SafeAreaView,
//   StyleSheet,
//   Text,
//   TextInput,
//   View,
//   Pressable,
// } from 'react-native';
// import Slider from '@react-native-community/slider';

// const PasswordGenerator = () => {
//   const [length, setLength] = useState(8);
//   const [numberAllowed, setNumberAllowed] = useState(false);
//   const [charAllowed, setCharAllowed] = useState(false);
//   const [password, setPassword] = useState('');

//   const generatePassword = useCallback(() => {
//     let pass = '';
//     let str =
//       'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

//     if (numberAllowed) {
//       str += '0123456789';
//     }

//     if (charAllowed) {
//       str += '!@#$%^&*()_+=/*-+~`';
//     }

//     for (let i = 0; i < length; i++) {
//       const char = Math.floor(Math.random() * str.length);
//       pass += str.charAt(char);
//     }

//     setPassword(pass);
//   }, [length, numberAllowed, charAllowed]);

//   const toggleNumbers = () => {
//     setNumberAllowed(prev => !prev);
//   };

//   const toggleCharacters = () => {
//     setCharAllowed(prev => !prev);
//   };

//   return (
//     <SafeAreaView style={styles.container}>
//       <View style={styles.card}>

//         {/* Title */}
//         <Text style={styles.title}>
//           Password generator
//         </Text>

//         {/* Password input + Copy button */}
//         <View style={styles.passwordRow}>
//           <TextInput
//             value={password}
//             placeholder="Password"
//             placeholderTextColor="#999999"
//             editable={false}
//             style={styles.passwordInput}
//           />

//           <Pressable
//             style={styles.copyButton}
//             onPress={generatePassword}>
//             <Text style={styles.copyText}>copy</Text>
//           </Pressable>
//         </View>

//         {/* Slider + Length */}
//         <View style={styles.optionsRow}>

//           <Slider
//             style={styles.slider}
//             minimumValue={4}
//             maximumValue={30}
//             step={1}
//             value={length}
//             minimumTrackTintColor="#eeeeee"
//             maximumTrackTintColor="#eeeeee"
//             thumbTintColor="#0878f9"
//             onValueChange={value => setLength(value)}
//           />

//           <Text style={styles.optionText}>
//             Length: {length}
//           </Text>

//           {/* Numbers checkbox */}
//           <Pressable
//             style={styles.checkOption}
//             onPress={toggleNumbers}>
//             <View style={[
//               styles.checkbox,
//               numberAllowed && styles.checkedBox,
//             ]}>
//               {numberAllowed && (
//                 <Text style={styles.checkmark}>✓</Text>
//               )}
//             </View>

//             <Text style={styles.optionText}>Numbers</Text>
//           </Pressable>

//           {/* Characters checkbox */}
//           <Pressable
//             style={styles.checkOption}
//             onPress={toggleCharacters}>
//             <View style={[
//               styles.checkbox,
//               charAllowed && styles.checkedBox,
//             ]}>
//               {charAllowed && (
//                 <Text style={styles.checkmark}>✓</Text>
//               )}
//             </View>

//             <Text style={styles.optionText}>Characters</Text>
//           </Pressable>

//         </View>

//         {/* Generate button */}
//         <Pressable
//           style={styles.generateButton}
//           onPress={generatePassword}>
//           <Text style={styles.generateText}>
//             Generate Password
//           </Text>
//         </Pressable>

//       </View>
//     </SafeAreaView>
//   );
// };

// export default PasswordGenerator;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#000000',
//     justifyContent: 'center',
//     paddingHorizontal: 32,
//   },

//   card: {
//     backgroundColor: '#1d2636',
//     borderRadius: 10,
//     padding: 20,
//   },

//   title: {
//     color: '#ffffff',
//     fontSize: 21,
//     textAlign: 'center',
//     marginBottom: 18,
//   },

//   passwordRow: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#ffffff',
//     borderRadius: 11,
//     overflow: 'hidden',
//     height: 43,
//   },

//   passwordInput: {
//     flex: 1,
//     height: 43,
//     paddingHorizontal: 15,
//     fontSize: 18,
//     color: '#333333',
//   },

//   copyButton: {
//     backgroundColor: '#164edb',
//     height: 43,
//     paddingHorizontal: 17,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },

//   copyText: {
//     color: '#ffffff',
//     fontSize: 18,
//   },

//   optionsRow: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     flexWrap: 'wrap',
//     marginTop: 17,
//     gap: 5,
//   },

//   slider: {
//     width: 135,
//     height: 30,
//   },

//   optionText: {
//     color: '#e87924',
//     fontSize: 17,
//   },

//   checkOption: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     gap: 5,
//   },

//   checkbox: {
//     width: 13,
//     height: 13,
//     backgroundColor: '#ffffff',
//     borderRadius: 2,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },

//   checkedBox: {
//     backgroundColor: '#1976f3',
//   },

//   checkmark: {
//     color: '#ffffff',
//     fontSize: 11,
//     fontWeight: 'bold',
//   },

//   generateButton: {
//     backgroundColor: '#164edb',
//     borderRadius: 8,
//     paddingVertical: 12,
//     marginTop: 20,
//     alignItems: 'center',
//   },

//   generateText: {
//     color: '#ffffff',
//     fontSize: 16,
//     fontWeight: '600',
//   },
// });






















// import { Button, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native'
// import React, { useState,useCallback } from 'react'

// const PasswordGenerator = () => {
//     const [length, setLength]=useState(8)
//     const [numberAllowed,setNumberAllowed]=useState(false)
//     const[charAllowed, setCharAllowed]=useState(false)
//     const [password,setpassword]=useState('')


//     const PasswordGenerator=useCallback(()=>{
//         let pass =''
//         let str='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'

//         if(numberAllowed) str+='0123456789'
//         if(charAllowed)  str+='!@#$%^&*()_+=/*-+~`'

//         for(let i=1; i<=Array.length; i++){
//             let char=Math.floor(Math.random()*str.length+1)

//             pass=str.charAt(char)

//         }
//         setpassword(pass)
            
    



//     }, [length,numberAllowed,charAllowed,setpassword])

     
//   return (
//     <SafeAreaView style={styles.sfav}>
//         <View style={styles.main}>
//            <Text style={{fontSize:33}}>PasswordGenerator</Text>
//            <TextInput
//            value={password}
//            placeholder='password'
//            placeholderTextColor='#afabab'
//            readOnly
//            style={{height:55,width:350, fontSize:25,backgroundColor:'#f4e9e9'}}
           
//            >

//            </TextInput>

//            <Button title='copy'/>

//            <TextInput
//              value={String(length)}
//            placeholder='passLength'
//            placeholderTextColor='#afabab'
//            onChangeText={(length)=>{setLength(Number(length))}}


//            style={{height:55,width:150, fontSize:25,backgroundColor:'#f4e9e9'}}>

//            </TextInput>



//         </View>
        

//     </SafeAreaView>
    
//   )
// }

// export default PasswordGenerator

// const styles = StyleSheet.create({
//       sfav:{
//         flex:1,
//         margin:20,

//     },
//     main:{
//         padding:10,

        
//     }
// })
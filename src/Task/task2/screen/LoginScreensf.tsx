import React, {
  useContext,
  useState,
} from 'react';

import {
  View,
  Text,
  TextInput,
  Pressable,
  StyleSheet,
  Alert,
} from 'react-native';

import {
  AuthContext,
} from '../context/AuthContextf';


const LoginScreen = () => {

  const {login} = useContext(AuthContext);


  const [gmail, setGmail] =useState('');

  const [password, setPassword] =useState('');


 
  // LOGIN BUTTON


  const handleLogin = () => {

    const email =
      gmail.trim();

    const pass =
      password.trim();


    if (email === '') {

      Alert.alert(
        'Error',
        'Please enter your Gmail',
      );

      return;
    }


    if (pass === '') {

      Alert.alert(
        'Error',
        'Please enter your password',
      );

      return;
    }


    login(
      email,
      pass,
    );
  };


  



  return (

    <View style={styles.container}>

      <View style={styles.loginCard}>

        <Text style={styles.title}>
          Welcome Back
        </Text>


        <Text style={styles.subtitle}>
          Login to continue
        </Text>


        {/* EMAIL */}

        <Text style={styles.label}>
          Gmail
        </Text>

        <TextInput
          style={styles.input}
          placeholder="Enter your Gmail"
          value={gmail}
          onChangeText={setGmail}
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
        />


        {/* password */}

        <Text style={styles.label}>
          Password
        </Text>

        <TextInput
          style={styles.input}
          placeholder="Enter your password"
          value={password}
          onChangeText={setPassword}
     
        />


        {/* login */}

        <Pressable
          style={styles.loginButton}
          onPress={handleLogin}
        >

          <Text style={styles.loginButtonText}>
            Login
          </Text>

        </Pressable>

      </View>

    </View>
  );
};


export default LoginScreen;


const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#F3F4F6',
    justifyContent: 'center',
    padding: 20,
  },


  loginCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    padding: 25,
    elevation: 5,
  },


  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#111827',
  },


  subtitle: {
    fontSize: 15,
    color: '#6B7280',
    textAlign: 'center',
    marginTop: 8,
    marginBottom: 30,
  },


  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#374151',
    marginBottom: 7,
  },


  input: {
    height: 52,
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: 10,
    paddingHorizontal: 15,
    fontSize: 16,
    marginBottom: 18,
    backgroundColor: '#FFFFFF',
  },


  loginButton: {
    height: 52,
    backgroundColor: '#4F46E5',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5,
  },


  loginButtonText: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: 'bold',
  },

});
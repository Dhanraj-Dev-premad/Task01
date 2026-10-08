// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'

// const TestScreenE = () => {
//   return (
//     <View>
//       <Text>TestScreenE</Text>
//     </View>
//   )
// }

// export default TestScreenE

// const styles = StyleSheet.create({})





import React, {useContext} from 'react';

import {
  Alert,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { AuthContext } from '../Context/AuthContextE';


const TestScreenE = () => {

  const {user, logout} = useContext(AuthContext);


  const handleLogout = async () => {

    try {

      await logout();

    } catch (error) {

      console.log('Logout Error:', error);

      Alert.alert(
        'Error',
        'Unable to logout',
      );
    }
  };


  return (
    <View style={styles.container}>

      <Text style={styles.title}>
        Profile
      </Text>


      <View style={styles.userContainer}>

        <Text style={styles.label}>
          First Name
        </Text>

        <Text style={styles.value}>
          {user.firstName}
        </Text>


        <Text style={styles.label}>
          Last Name
        </Text>

        <Text style={styles.value}>
          {user.lastName}
        </Text>


        <Text style={styles.label}>
          Username
        </Text>

        <Text style={styles.value}>
          {user.userName}
        </Text>


        <Text style={styles.label}>
          Gmail
        </Text>

        <Text style={styles.value}>
          {user.gmail}
        </Text>


        <Text style={styles.label}>
          Phone
        </Text>

        <Text style={styles.value}>
          {user.phoneNo}
        </Text>


        <Text style={styles.label}>
          Gender
        </Text>

        <Text style={styles.value}>
          {user.gender}
        </Text>

      </View>


      <Pressable
        onPress={handleLogout}
        style={styles.logoutButton}
      >
        <Text style={styles.logoutText}>
          Logout
        </Text>
      </Pressable>

    </View>
  );
};


const styles = StyleSheet.create({

  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F8F0E9',
  },

  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#222',
  },

  userContainer: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 15,
  },

  label: {
    fontSize: 14,
    color: '#777',
    marginTop: 10,
  },

  value: {
    fontSize: 17,
    fontWeight: '600',
    color: '#222',
    marginTop: 3,
  },

  logoutButton: {
    marginTop: 30,
    height: 50,
    backgroundColor: '#D9534F',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },

  logoutText: {
    color: '#fff',
    fontSize: 17,
    fontWeight: 'bold',
  },

});

export default TestScreenE;














// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'

// const ProfileE = () => {
//   return (
//     <View>
//       <Text>Profile</Text>
//     </View>
//   )
// }

// export default ProfileE

// const styles = StyleSheet.create({})



import React, {useContext} from 'react';
import {
  View,
  Text,
  Pressable,
  StyleSheet,
} from 'react-native';
import { AuthContext } from '../../Context/AuthContextE';



const ProfileE = () => {
  const {gmail, logout} = useContext(AuthContext);

  return (
    <View style={styles.container}>

      <Text style={styles.title}>
        Hello {gmail}
      </Text>

      <Pressable
        style={styles.logoutButton}
        onPress={logout}
      >
        <Text style={styles.logoutText}>
          Logout
        </Text>
      </Pressable>

    </View>
  );
};

export default ProfileE;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    padding: 20,
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 25,
  },

  logoutButton: {
    backgroundColor: '#4F46E5',
    paddingVertical: 12,
    paddingHorizontal: 35,
    borderRadius: 8,
  },

  logoutText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});












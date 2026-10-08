import React, {useContext, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import MaterialDesignIcons from '@react-native-vector-icons/material-design-icons';
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../../Context/AuthContextE';

const ChangeNameScreenE = () => {
  const {user, setUser} = useContext(AuthContext);
  const navigation = useNavigation();

  const [firstName, setFirstName] = useState(user?.firstName || '');
  const [lastName, setLastName] = useState(user?.lastName || ''); 

 const handleSave = () => {
  setUser({
    ...user,
    firstName,
    lastName,
  });

  navigation.goBack();
};

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />

      {/*  HEADER  */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          activeOpacity={0.7}
          onPress={() => {
            navigation.goBack();
          }}
        >
          <MaterialDesignIcons
            name="arrow-left"
            size={22}
            color="#111111"
          />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>
          Change Name
        </Text>
      </View>

      {/*  DESCRIPTION  */}
      <Text style={styles.description}>
        Update your name to keep your profile accurate and personalized
      </Text>

      {/*  FIRST NAME  */}
      <View style={styles.inputContainer}>
        <MaterialDesignIcons
          name="account-outline"
          size={24}
          color="#B5B5B5"
          style={styles.inputIcon}
        />
        <TextInput
          style={styles.input}
          placeholder="First Name"
          placeholderTextColor="#838181"
          value={firstName}
          onChangeText={setFirstName}
          autoCapitalize="words"
        />
      </View>

      {/*  LAST NAME  */}
      <View style={styles.inputContainer}>
        <MaterialDesignIcons
          name="account-outline"
          size={24}
          color="#B5B5B5"
          style={styles.inputIcon}
        />
        <TextInput
          style={styles.input}
          placeholder="Last Name"
          placeholderTextColor="#838181"
          value={lastName}
          onChangeText={setLastName}
          autoCapitalize="words"
        />
      </View>

      {/*  SAVE  */}
      <TouchableOpacity
        style={styles.saveButton}
        activeOpacity={0.8}
        onPress={handleSave}
      >
        <Text style={styles.saveText}>
          Save
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

// This is now correctly recognized at the file's top level!
export default ChangeNameScreenE;


/*                     STYLES                        */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 10,
  },
  header: {
    height: 55,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 18,
  },
  backButton: {
    width: 30,
    height: 40,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#111111',
    marginLeft: 1,
  },
  description: {
    fontSize: 16,
    lineHeight: 16,
    color: '#858585',
    marginHorizontal: 17,
    marginTop: 1,
    marginBottom: 17,
  },
  inputContainer: {
    height: 50,
    marginHorizontal: 18,
    marginBottom: 9,
    borderWidth: 1,
    borderColor: '#CFCFCF',
    borderRadius: 7,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  inputIcon: {
    marginLeft: 7,
  },
  input: {
    flex: 1,
    height: 34,
    paddingHorizontal: 10,
    paddingVertical: 0,
    fontSize: 16,
    color: 'black',
  },
  saveButton: {
    height: 50,
    marginHorizontal: 20,
    marginTop: 8,
    borderRadius: 7,
    backgroundColor: '#0963AA',
    justifyContent: 'center',
    alignItems: 'center',
  },
  saveText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
});

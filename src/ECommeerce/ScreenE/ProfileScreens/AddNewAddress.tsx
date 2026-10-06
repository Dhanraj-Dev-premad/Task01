import React, {useState} from 'react';

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

import {useNavigation} from '@react-navigation/native';

const AddNewAddressScreenE = () => {
   const navigation = useNavigation();

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [street, setStreet] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [country, setCountry] = useState('');

  const handleSave = () => {
    console.log({
      name,
      phone,
      street,
      postalCode,
      city,
      state,
      country,
    });

 
    
  };

  return (
    <SafeAreaView
      style={styles.container}
      edges={['top', 'bottom']}
    >

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
            size={24}
            color="#111111"
          />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>
          Add new Address
        </Text>

      </View>


      {/*  NAME  */}

      <View style={styles.inputContainer}>

        <MaterialDesignIcons
          name="account-outline"
          size={22}
          color="#B8B8B8"
          style={styles.inputIcon}
        />

        <TextInput
          style={styles.input}
          placeholder="Name"
          placeholderTextColor="#333333"
          value={name}
          onChangeText={setName}
        />

      </View>


      {/*  PHONE  */}

      <View style={styles.inputContainer}>

        <MaterialDesignIcons
          name="cellphone"
          size={20}
          color="#B8B8B8"
          style={styles.inputIcon}
        />

        <TextInput
          style={styles.input}
          placeholder="Phone Number"
          placeholderTextColor="#333333"
          value={phone}
          onChangeText={setPhone}
          keyboardType="phone-pad"
        />

      </View>


      {/*  STREET + POSTAL CODE  */}

      <View style={styles.doubleRow}>

        <View style={[styles.smallInputContainer, styles.leftInput]}>

          <MaterialDesignIcons
            name="road-variant"
            size={19}
            color="#B8B8B8"
            style={styles.inputIcon}
          />

          <TextInput
            style={styles.input}
            placeholder="Street"
            placeholderTextColor="#333333"
            value={street}
            onChangeText={setStreet}
          />

        </View>


        <View style={styles.smallInputContainer}>

          <MaterialDesignIcons
            name="code-brackets"
            size={19}
            color="#B8B8B8"
            style={styles.inputIcon}
          />

          <TextInput
            style={styles.input}
            placeholder="Postal Code"
            placeholderTextColor="#333333"
            value={postalCode}
            onChangeText={setPostalCode}
            keyboardType="number-pad"
          />

        </View>

      </View>


      {/*  CITY + STATE  */}

      <View style={styles.doubleRow}>

        <View style={[styles.smallInputContainer, styles.leftInput]}>

          <MaterialDesignIcons
            name="city-variant-outline"
            size={19}
            color="#B8B8B8"
            style={styles.inputIcon}
          />

          <TextInput
            style={styles.input}
            placeholder="City"
            placeholderTextColor="#333333"
            value={city}
            onChangeText={setCity}
          />

        </View>


        <View style={styles.smallInputContainer}>

          <MaterialDesignIcons
            name="chart-box-outline"
            size={19}
            color="#B8B8B8"
            style={styles.inputIcon}
          />

          <TextInput
            style={styles.input}
            placeholder="State"
            placeholderTextColor="#333333"
            value={state}
            onChangeText={setState}
          />

        </View>

      </View>


      {/*  COUNTRY  */}

      <View style={styles.inputContainer}>

        <MaterialDesignIcons
          name="web"
          size={20}
          color="#B8B8B8"
          style={styles.inputIcon}
        />

        <TextInput
          style={styles.input}
          placeholder="Country"
          placeholderTextColor="#333333"
          value={country}
          onChangeText={setCountry}
        />

      </View>


      {/*  SAVE  */}

      <TouchableOpacity
        style={styles.saveButton}
        activeOpacity={0.8}
        onPress={()=>{navigation.goBack()}}
      >

        <Text style={styles.saveText}>
          Save
        </Text>

      </TouchableOpacity>

    </SafeAreaView>
  );
};

export default AddNewAddressScreenE;


/*                     STYLES                        */

const styles = StyleSheet.create({

  /*  CONTAINER  */

  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal:10
  },


  /*  HEADER  */

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


  /*  FULL INPUT  */

  inputContainer: {
    height: 50,

    marginHorizontal: 17,

    marginBottom: 15,

    borderWidth: 1,

    borderColor: '#D0D0D0',

    borderRadius: 7,

    flexDirection: 'row',

    alignItems: 'center',

    backgroundColor: '#FFFFFF',
  },


  /*  DOUBLE ROW  */

  doubleRow: {
    flexDirection: 'row',

    marginHorizontal: 17,

    marginBottom: 15,
  },


  smallInputContainer: {
    flex: 1,

    height: 55,

    borderWidth: 1,

    borderColor: '#D0D0D0',

    borderRadius: 7,

    flexDirection: 'row',

    alignItems: 'center',

    backgroundColor: '#FFFFFF',
  },


  leftInput: {
    marginRight: 9,
  },


  /*  INPUT ICON  */

  inputIcon: {
    marginLeft: 7,
  },


  /*  TEXT INPUT  */

  input: {
    flex: 1,

    height: 35,

    paddingHorizontal: 9,

    paddingVertical: 0,

    fontSize: 16,

    color: '#222222',
  },


  /*  SAVE  */

  saveButton: {
    height: 55,

    marginHorizontal: 17,

    marginTop: 20,

    borderRadius: 7,

    backgroundColor: '#0963AA',

    justifyContent: 'center',

    alignItems: 'center',
  },


  saveText: {
    fontSize: 18,

    fontWeight: '600',

    color: '#FFFFFF',
  },

});
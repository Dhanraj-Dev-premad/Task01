import React, {useState} from 'react';

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from 'react-native';

import MaterialDesignIcons from '@react-native-vector-icons/material-design-icons';

const AddressE = ({navigation}) => {

  const [selectedAddress, setSelectedAddress] = useState('1');

  const addresses = [
    {
      id: '1',
      name: 'Dhanraj Shekhawat',
      phone: '+919876543210',
      address: 'House No. 25, Vaishali Nagar, Jaipur, Rajasthan',
    },

    {
      id: '2',
      name: 'Rahul Sharma',
      phone: '+919876543211',
      address: 'House No. 18, Malviya Nagar, Jaipur, Rajasthan',
    },

    {
      id: '3',
      name: 'Amit Kumar',
      phone: '+919876543212',
      address: 'Flat No. 302, Sector 15, Gurugram, Haryana',
    },

    {
      id: '4',
      name: 'Priya Singh',
      phone: '+919876543213',
      address: 'House No. 42, Andheri West, Mumbai, Maharashtra',
    },
  ];

  return (
    <View style={styles.container}>

      {/* Header */}
      <View style={styles.header}>

        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        >
          <MaterialDesignIcons
            name="arrow-left"
            size={23}
            color="#111111"
          />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>
          Addresses
        </Text>

      </View>


      {/* Address List */}
      <FlatList
        data={addresses}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.list}
        renderItem={({item}) => {

          const isSelected = selectedAddress === item.id;

          return (
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => setSelectedAddress(item.id)}
              style={[
                styles.addressCard,
                isSelected && styles.selectedCard,
              ]}
            >

              <View style={styles.addressContent}>

                {/* Name */}
                <Text
                  style={[
                    styles.name,
                    isSelected && styles.selectedText,
                  ]}
                >
                  {item.name}
                </Text>

                {/* Phone */}
                <Text
                  style={[
                    styles.phone,
                    isSelected && styles.selectedText,
                  ]}
                >
                  {item.phone}
                </Text>

                {/* Address */}
                <Text
                  style={[
                    styles.address,
                    isSelected && styles.selectedText,
                  ]}
                  numberOfLines={1}
                >
                  {item.address}
                </Text>

              </View>


              {/* Selected Icon */}
              {isSelected && (
                <MaterialDesignIcons
                  name="check-circle"
                  size={17}
                  color="#0865AD"
                  style={styles.checkIcon}
                />
              )}

            </TouchableOpacity>
          );
        }}
      />


      {/* Add Address Button */}
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => navigation.navigate("AddNewAddressScreenE")}
      >
        <MaterialDesignIcons
          name="plus"
          size={25}
          color="#FFFFFF"
        />
      </TouchableOpacity>

    </View>
  );
};

export default AddressE;


const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingTop:20,
  },

  // HEADER

  header: {
    height: 70,

    flexDirection: 'row',

    alignItems: 'center',

    paddingHorizontal: 20,
  },

  backButton: {
    width: 30,
    height: 35,

    justifyContent: 'center',
  },

  headerTitle: {
    fontSize: 22,

    fontWeight: 'bold',

    color: '#111111',

    marginLeft: 5,
  },

  // LIST

  list: {
    paddingHorizontal: 30,

    paddingTop: 20,

    paddingBottom: 100,
  },

  // ADDRESS CARD

  addressCard: {
    minHeight: 100,

    borderWidth: 1,

    borderColor: '#CCCCCC',

    borderRadius: 8,

    marginBottom: 13,

    paddingHorizontal: 12,

    paddingVertical: 9,

    flexDirection: 'row',

    alignItems: 'center',

    position: 'relative',
  },

  selectedCard: {
    backgroundColor: '#8DB8E0',

    borderColor: '#0865AD',
  },

  addressContent: {
    flex: 1,
  },

  name: {
    fontSize: 18,

    fontWeight: '700',

    color: '#111111',

    marginBottom: 3,
  },

  selectedText: {
    color: '#123A5A',
  },

  phone: {
    fontSize: 14,

    color: '#333333',

    marginBottom: 5,
  },

  address: {
    fontSize: 14,

    color: '#333333',
  },

  checkIcon: {
    position: 'absolute',

    right: 12,

    top: '50%',
  },

  // ADD BUTTON
  

  addButton: {
    position: 'absolute',

    right: 28,

    bottom: 37,

    width: 38,

    height: 38,

    borderRadius: 9,

    backgroundColor: '#0865AD',

    justifyContent: 'center',

    alignItems: 'center',

    elevation: 4,
  },

});
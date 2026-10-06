import { useNavigation } from '@react-navigation/native';
import React from 'react';

import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';

const PaymentSuccessE = () => {
  const navigation=useNavigation()

  return (
    <View style={styles.container}>

      {/* Success Image */}
      <Image
        source={require('../../AssetsE/Img/ProductDetails/Happy.png')}
        style={styles.successImage}
        resizeMode="contain"
      />

      {/* Title */}
      <Text style={styles.title}>
        Payment Success!
      </Text>

      {/* Subtitle */}
      <Text style={styles.subtitle}>
        Your item will be shipped soon!
      </Text>

      {/* Continue Shopping */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.buttonText}>
          Continue Shopping
        </Text>
      </TouchableOpacity>

    </View>
  );
};

export default PaymentSuccessE;


const styles = StyleSheet.create({

  container: {
    flex: 1,

    backgroundColor: '#FFFFFF',

    alignItems: 'center',

    paddingHorizontal: 34,

    paddingTop: 225,
  },

  successImage: {
    width: 160,

    height: 130,

    marginBottom: 8,
  },

  title: {
    fontSize: 20,

    fontWeight: '700',

    color: '#111111',

    marginTop: 2,
  },

  subtitle: {
    fontSize: 10,

    color: '#AAAAAA',

    marginTop: 5,

    marginBottom: 22,
  },

  button: {
    width: '100%',

    height: 38,

    backgroundColor: '#0865AD',

    borderRadius: 7,

    justifyContent: 'center',

    alignItems: 'center',
  },

  buttonText: {
    color: '#FFFFFF',

    fontSize: 12,

    fontWeight: '600',
  },

});
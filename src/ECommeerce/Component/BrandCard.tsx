import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
} from 'react-native';

import MaterialDesignIcons from '@react-native-vector-icons/material-design-icons';

const BrandCard = ({ data }) => {
  return (
    <View style={styles.card}>

      {/* Brand Logo */}
      <View style={styles.logoContainer}>
        {data.image ? (
          <Image
            source={data.image}
            style={styles.logo}
            resizeMode="contain"
          />
        ) : (
          <Text style={styles.logoText}>
            {data.name}
          </Text>
        )}
      </View>

      {/* Brand Details */}
      <View style={styles.detailsContainer}>

        <View style={styles.nameRow}>
          <Text style={styles.brandName}>
            {data.name}
          </Text>

          <MaterialDesignIcons
            name="check-circle"
            size={14}
            color="#1DA1F2"
          />
        </View>

        <Text style={styles.productText}>
          {data.products} products
        </Text>

      </View>

    </View>
  );
};

export default BrandCard;

const styles = StyleSheet.create({
  card: {
    width: 185,
    height:85 ,
    borderWidth: 1,
    borderColor: '#D6D6D6',
    borderRadius: 9,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 9,
    marginBottom: 10,
    backgroundColor: '#FFFFFF',
  },

  logoContainer: {
    width: 42,
    height: 42,
    justifyContent: 'center',
    alignItems: 'center',
  },

  logo: {
    width: 42,
    height: 40,
  },

  logoText: {
    fontSize: 18,
    fontWeight: 'bold',
    fontStyle: 'italic',
    color: '#111111',
  },

  detailsContainer: {
    marginLeft: 7,
    flex: 1,
    justifyContent: 'center',
  },

  nameRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  brandName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#222222',
    marginRight: 3,
  },

  productText: {
    fontSize: 12,
    color: '#8A8A8A',
    marginTop: 2,
  },
});
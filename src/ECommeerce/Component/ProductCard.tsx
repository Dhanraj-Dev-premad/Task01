import React from 'react';

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';

import MaterialDesignIcons from '@react-native-vector-icons/material-design-icons';


const ProductCard = ({product}) => {

  return (
    <TouchableOpacity
      style={styles.card}
      activeOpacity={0.8}
      onPress={() => {
        // Product functionality later
      }}
    >

      {/* PRODUCT IMAGE */}

      <View style={styles.imageContainer}>

        <Image
          source={{uri: product.image}}
          style={styles.image}
          resizeMode="cover"
        />

        {/* HEART */}

        <TouchableOpacity
          style={styles.heartButton}
          activeOpacity={0.7}
        >

          <MaterialDesignIcons
            name="heart-outline"
            size={18}
            color="#111111"
          />

        </TouchableOpacity>

      </View>


      {/* PRODUCT DETAILS */}

      <View style={styles.info}>

        <Text
          style={styles.productName}
          numberOfLines={1}
        >
          {product.name}
        </Text>


        <View style={styles.brandRow}>

          <Text style={styles.brand}>
            {product.brand}
          </Text>

          <View style={styles.dot} />

        </View>


        <Text style={styles.price}>
          {product.price}
        </Text>

      </View>


      {/* PLUS BUTTON */}

      <TouchableOpacity
        style={styles.plusButton}
        activeOpacity={0.8}
      >

        <MaterialDesignIcons
          name="plus"
          size={21}
          color="#FFFFFF"
        />

      </TouchableOpacity>

    </TouchableOpacity>
  );
};


export default ProductCard;


const styles = StyleSheet.create({

  card: {
    width: 190,
    height: 64,

    backgroundColor: '#F3F3F3',

    borderRadius: 7,

    marginRight: 10,

    flexDirection: 'row',

    overflow: 'hidden',

    position: 'relative',
  },


  imageContainer: {
    width: 65,
    height: 64,

    backgroundColor: '#FFFFFF',

    padding: 3,

    position: 'relative',
  },


  image: {
    width: '100%',
    height: '100%',

    borderRadius: 6,
  },


  heartButton: {
    position: 'absolute',

    top: 2,
    right: -1,

    width: 20,
    height: 20,

    borderRadius: 10,

    backgroundColor: '#FFFFFF',

    justifyContent: 'center',
    alignItems: 'center',
  },


  info: {
    flex: 1,

    paddingLeft: 7,
    paddingTop: 7,
    paddingRight: 28,
  },


  productName: {
    fontSize: 10,

    fontWeight: '600',

    color: '#111111',
  },


  brandRow: {
    flexDirection: 'row',

    alignItems: 'center',

    marginTop: 3,
  },


  brand: {
    fontSize: 7,

    color: '#999999',
  },


  dot: {
    width: 4,
    height: 4,

    borderRadius: 2,

    backgroundColor: '#4267B2',

    marginLeft: 3,
  },


  price: {
    fontSize: 10,

    fontWeight: '600',

    color: '#111111',

    marginTop: 5,
  },


  plusButton: {
    position: 'absolute',

    right: 0,
    bottom: 0,

    width: 27,
    height: 27,

    backgroundColor: '#0865AD',

    borderTopLeftRadius: 7,

    justifyContent: 'center',
    alignItems: 'center',
  },

});
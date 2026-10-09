import React from 'react';
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import MaterialDesignIcons from '@react-native-vector-icons/material-design-icons';

import CartComp from '../../Component/CartComp';
import {useCart} from '../../Context/CartContextE';

const Cart = () => {
  const navigation = useNavigation();
  const {cart} = useCart();

 

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Pressable onPress={() => navigation.goBack()}>
          <MaterialDesignIcons
            name="arrow-left-thin"
            size={45}
            color="black"
          />
        </Pressable>

        <Text style={styles.title}>Cart</Text>
      </View>

      <ScrollView>
        <View style={styles.productGrid}>
          {cart.map(item => (
            <CartComp key={item.id} data={item} />
          ))}
        </View>

        {cart.length === 0 && (
          <Text style={styles.emptyText}>Your cart is empty</Text>
        )}
      </ScrollView>

      <View style={styles.checkoutContainer}>
        <Pressable
          onPress={() => navigation.navigate('CheckOutScreen')}
          style={styles.checkoutButton}>
          <Text style={styles.checkoutText}>Checkout</Text>
          <Text style={styles.checkoutText}>
            ₹2555
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default Cart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 15,
    gap: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
  },
  productGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    rowGap: 15,
    padding: 10,
  },
  emptyText: {
    textAlign: 'center',
    fontSize: 18,
    marginTop: 20,
  },
  checkoutContainer: {
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkoutButton: {
    height: 55,
    width: '90%',
    borderRadius: 10,
    backgroundColor: '#0857A0',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
  },
  checkoutText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
});


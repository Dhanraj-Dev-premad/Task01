import React from 'react';
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import MaterialDesignIcons from '@react-native-vector-icons/material-design-icons';
import { useNavigation } from '@react-navigation/native';

const CheckOutScreen = () => {
  const navigation=useNavigation();
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>

        {/* HEADER */}
        <View style={styles.header}>
          <Pressable>
            <MaterialDesignIcons
              name="arrow-left"
              size={25}
              color="#111"
            />
          </Pressable>

          <Text style={styles.headerTitle}>Order Review</Text>
        </View>

        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}>

          {/* PRODUCTS */}
          <View style={styles.productsContainer}>
            <ProductItem />
            <ProductItem />
            <ProductItem />
          </View>

          {/* PROMO CODE */}
          <View style={styles.promoContainer}>
            <Text style={styles.promoText}>Promo code</Text>

            <Pressable style={styles.applyButton}>
              <Text style={styles.applyText}>Apply</Text>
            </Pressable>
          </View>

          {/* ORDER SUMMARY */}
          <View style={styles.summaryCard}>

            <View style={styles.summaryRow}>
              <Text style={styles.summaryLabel}>Subtotal</Text>
              <Text style={styles.summaryValue}>$7997.0</Text>
            </View>

            <View style={styles.summaryRow}>
              <Text style={styles.summaryLabel}>Shipping Fee</Text>
              <Text style={styles.summaryValue}>$32.0</Text>
            </View>

            <View style={styles.summaryRow}>
              <Text style={styles.summaryLabel}>Tax Fee</Text>
              <Text style={styles.summaryValue}>$231.0</Text>
            </View>

            <View style={styles.totalRow}>
              <Text style={styles.totalLabel}>Order Total</Text>
              <Text style={styles.totalValue}>$8663.0</Text>
            </View>

            <View style={styles.divider} />

            {/* PAYMENT METHOD */}
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>Payment Method</Text>

              <Pressable>
                <Text style={styles.changeText}>Change</Text>
              </Pressable>
            </View>

            <View style={styles.paymentRow}>
              <View style={styles.masterCard}>
                <View style={styles.redCircle} />
                <View style={styles.yellowCircle} />
              </View>

              <Text style={styles.cardText}>Mater Card</Text>
            </View>

            {/* SHIPPING ADDRESS */}
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>Shipping Address</Text>

              <Pressable>
                <Text style={styles.changeText}>Change</Text>
              </Pressable>
            </View>

            <Text style={styles.name}>Unknown Pro</Text>

            <View style={styles.addressRow}>
              <MaterialDesignIcons
                name="phone-outline"
                size={18}
                color="#111"
              />
              <Text style={styles.addressText}>
                +92123456789
              </Text>
            </View>

            <View style={styles.addressRow}>
              <MaterialDesignIcons
                name="account-outline"
                size={19}
                color="#111"
              />
              <Text style={styles.addressText}>
                House No.295, Hyderabad, Sindh, Pakistan
              </Text>
            </View>

          </View>

          {/* BOTTOM SPACE */}
          <View style={{height: 75}} />

        </ScrollView>

        {/* CHECKOUT BUTTON */}
        <View style={styles.bottomButtonContainer}>
          <Pressable
          onPress={()=>{navigation.navigate("SelectPaymentMethodScreen")}}
          
          style={styles.checkoutButton}>
            <Text style={styles.checkoutText}>
              Checkout $8663.0
            </Text>
          </Pressable>
        </View>

      </View>
    </SafeAreaView>
  );
};

const ProductItem = () => {
  return (
    <View style={styles.productItem}>

      {/* PRODUCT IMAGE */}
      <View style={styles.productImageContainer}>
        <Image
          source={require('../../AssetsE/Img/ProductDetails/Shoes.png')}
          style={styles.productImage}
          resizeMode="contain"
        />
      </View>

      <View style={styles.productInfo}>

        <View style={styles.brandRow}>
          <Text style={styles.brand}>Nike</Text>

          <MaterialDesignIcons
            name="check-decagram"
            size={11}
            color="#526DDB"
          />
        </View>

        <Text style={styles.productName}>
          Blue Shoes of Nike
        </Text>

        <View style={styles.productDetails}>
          <Text style={styles.colorLabel}>Color </Text>
          <Text style={styles.colorValue}>Green</Text>

          <Text style={styles.sizeLabel}> Size </Text>
          <Text style={styles.sizeValue}>32</Text>
        </View>

      </View>
    </View>
  );
};

export default CheckOutScreen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },

  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  /* HEADER */

  header: {
    height: 58,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
  },

  headerTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#111',
    marginLeft: 18,
  },

  scrollContent: {
    paddingHorizontal: 34,
    paddingBottom: 20,
  },

  /* PRODUCTS */

  productsContainer: {
    marginTop: 5,
    marginBottom: 12,
  },

  productItem: {
    height: 70,
    flexDirection: 'row',
    alignItems: 'center',
  },

  productImageContainer: {
    width: 42,
    height: 42,
    borderRadius: 8,
    backgroundColor: '#f1f1f1',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },

  productImage: {
    width: 36,
    height: 36,
  },

  productInfo: {
    marginLeft: 10,
    justifyContent: 'center',
  },

  brandRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 3,
  },

  brand: {
    fontSize: 9,
    color: '#999',
  },

  productName: {
    fontSize: 11,
    color: '#333',
    marginTop: 1,
  },

  productDetails: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 1,
  },

  colorLabel: {
    fontSize: 9,
    color: '#999',
  },

  colorValue: {
    fontSize: 9,
    color: '#111',
  },

  sizeLabel: {
    fontSize: 9,
    color: '#999',
  },

  sizeValue: {
    fontSize: 9,
    color: '#111',
    fontWeight: '600',
  },

  /* PROMO */

  promoContainer: {
    height: 41,
    borderWidth: 1,
    borderColor: '#cfcfcf',
    borderRadius: 9,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 12,
    paddingRight: 6,
    marginBottom: 14,
  },

  promoText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#222',
  },

  applyButton: {
    width: 51,
    height: 31,
    borderRadius: 9,
    backgroundColor: '#d8d8d8',
    alignItems: 'center',
    justifyContent: 'center',
  },

  applyText: {
    fontSize: 10,
    color: '#999',
    fontWeight: '600',
  },

  /* SUMMARY */

  summaryCard: {
    borderWidth: 1,
    borderColor: '#c9c9c9',
    borderRadius: 9,
    paddingHorizontal: 13,
    paddingTop: 12,
    paddingBottom: 14,
  },

  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 7,
  },

  summaryLabel: {
    fontSize: 10,
    color: '#222',
  },

  summaryValue: {
    fontSize: 10,
    color: '#222',
  },

  totalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 3,
    marginBottom: 11,
  },

  totalLabel: {
    fontSize: 12,
    fontWeight: '700',
    color: '#111',
  },

  totalValue: {
    fontSize: 12,
    fontWeight: '700',
    color: '#111',
  },

  divider: {
    height: 1,
    backgroundColor: '#d5d5d5',
    marginBottom: 11,
  },

  /* SECTION */

  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 9,
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#111',
  },

  changeText: {
    fontSize: 10,
    color: '#075BA7',
  },

  /* PAYMENT */

  paymentRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 23,
  },

  masterCard: {
    width: 38,
    height: 24,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  redCircle: {
    width: 18,
    height: 18,
    borderRadius: 9,
    backgroundColor: '#F21D25',
    marginRight: -5,
  },

  yellowCircle: {
    width: 18,
    height: 18,
    borderRadius: 9,
    backgroundColor: '#FFB900',
  },

  cardText: {
    fontSize: 10,
    fontWeight: '600',
    color: '#222',
    marginLeft: 10,
  },

  /* ADDRESS */

  name: {
    fontSize: 11,
    fontWeight: '600',
    color: '#222',
    marginBottom: 6,
  },

  addressRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 7,
  },

  addressText: {
    fontSize: 10,
    color: '#333',
    marginLeft: 7,
    flex: 1,
  },

  /* CHECKOUT */

  bottomButtonContainer: {
    position: 'absolute',
    left: 34,
    right: 34,
    bottom: 20,
  },

  checkoutButton: {
    height: 40,
    borderRadius: 8,
    backgroundColor: '#085FA8',
    alignItems: 'center',
    justifyContent: 'center',
  },

  checkoutText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },


});
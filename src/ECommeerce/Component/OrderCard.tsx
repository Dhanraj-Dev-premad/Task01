import React from 'react';

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import MaterialDesignIcons from '@react-native-vector-icons/material-design-icons';


const OrderCard = ({
  status = 'Processing',
  orderDate = '01 Jan 2025',
  orderNumber = 'GYS324',
  deliveryDate = '06 Jan 2025',
}) => {

  return (
    <TouchableOpacity
      style={styles.card}
      activeOpacity={0.8}
      onPress={() => {
       
      }}
    >

      {/*  TOP SECTION  */}

      <View style={styles.topSection}>

        <View style={styles.statusSection}>

          <MaterialDesignIcons
            name="package-variant-closed"
            size={22}
            color="#000000"
          />

          <View style={styles.statusText}>

            <Text style={styles.status}>
              {status}
            </Text>

            <Text style={styles.orderDate}>
              {orderDate}
            </Text>

          </View>

        </View>


        <MaterialDesignIcons
          name="chevron-right"
          size={22}
          color="#999999"
        />

      </View>


      {/*  BOTTOM SECTION  */}

      <View style={styles.bottomSection}>

        {/* ORDER NUMBER */}

        <View style={styles.detail}>

          <MaterialDesignIcons
            name="tag-outline"
            size={22}
            color="#222222"
          />

          <View style={styles.detailText}>

            <Text style={styles.label}>
              Order
            </Text>

            <Text style={styles.value}>
              {orderNumber}
            </Text>

          </View>

        </View>


        {/* ORDER DATE */}

        <View style={styles.detail}>

          <MaterialDesignIcons
            name="calendar-month-outline"
            size={22}
            color="#222222"
          />

          <View style={styles.detailText}>

            <Text style={styles.label}>
              Order
            </Text>

            <Text style={styles.value}>
              {deliveryDate}
            </Text>

          </View>

        </View>

      </View>

    </TouchableOpacity>
  );
};


export default OrderCard;




const styles = StyleSheet.create({

  /*  CARD  */

  card: {
    height: 120,

    backgroundColor: '#F3F3F3',

    borderRadius: 13,

    marginBottom: 11,

    paddingHorizontal: 12,

    paddingVertical: 10,
  },


  /*  TOP  */

  topSection: {
    height: 40,

    flexDirection: 'row',

    alignItems: 'flex-start',

    justifyContent: 'space-between',
   // marginBottom:15,
  },


  statusSection: {
    flexDirection: 'row',

    alignItems: 'flex-start',
  },


  statusText: {
    marginLeft: 9,
  },


  status: {
    fontSize: 18,

    fontWeight: '600',

    color: '#0066B3',

    marginBottom: 2,
  },


  orderDate: {
    fontSize: 16,

    fontWeight: '500',

    color: '#111111',
  },


  /*  BOTTOM  */

  bottomSection: {
    flexDirection: 'row',

    alignItems: 'center',

    justifyContent: 'space-between',
  },


  detail: {
    width: '48%',

    flexDirection: 'row',

    alignItems: 'center',
  },


  detailText: {
    marginLeft: 9,
    marginTop:15,
  },


  label: {
    fontSize: 16,

    color: '#A0A0A0',

    marginBottom: 1,
  },


  value: {
    fontSize: 16,

    color: '#111111',

    fontWeight: '500',
  },

});
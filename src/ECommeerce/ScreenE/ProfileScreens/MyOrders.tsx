import React from 'react';

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  StatusBar,
} from 'react-native';

import {SafeAreaView} from 'react-native-safe-area-context';

import MaterialDesignIcons from '@react-native-vector-icons/material-design-icons';

import OrderCard from '../../Component/OrderCard';



 import {useNavigation} from '@react-navigation/native';


const MyOrdersScreenE = () => {

   const navigation = useNavigation();


  return (
    <SafeAreaView
      style={styles.container}
      edges={['top', 'bottom']}
    >

      <StatusBar barStyle="dark-content" />



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
          My Orders
        </Text>

      </View>


      {/*  ORDER LIST  */}

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >

        <OrderCard
          status="Processing"
          orderDate="01 Jan 2025"
          orderNumber="GYS324"
          deliveryDate="06 Jan 2025"
        />

        <OrderCard
          status="Processing"
          orderDate="01 Jan 2025"
          orderNumber="GYS324"
          deliveryDate="06 Jan 2025"
        />

        <OrderCard
          status="Processing"
          orderDate="01 Jan 2025"
          orderNumber="GYS324"
          deliveryDate="06 Jan 2025"
        />

        <OrderCard
          status="Processing"
          orderDate="01 Jan 2025"
          orderNumber="GYS324"
          deliveryDate="06 Jan 2025"
        />

        <OrderCard
          status="Processing"
          orderDate="01 Jan 2025"
          orderNumber="GYS324"
          deliveryDate="06 Jan 2025"
        />

        <OrderCard
          status="Processing"
          orderDate="01 Jan 2025"
          orderNumber="GYS324"
          deliveryDate="06 Jan 2025"
        />

        <OrderCard
          status="Processing"
          orderDate="01 Jan 2025"
          orderNumber="GYS324"
          deliveryDate="06 Jan 2025"
        />

        <OrderCard
          status="Processing"
          orderDate="01 Jan 2025"
          orderNumber="GYS324"
          deliveryDate="06 Jan 2025"
        />



         <OrderCard
          status="Processing"
          orderDate="01 Jan 2025"
          orderNumber="GYS324"
          deliveryDate="06 Jan 2025"
        />

        <OrderCard
          status="Processing"
          orderDate="01 Jan 2025"
          orderNumber="GYS324"
          deliveryDate="06 Jan 2025"
        />

        <OrderCard
          status="Processing"
          orderDate="01 Jan 2025"
          orderNumber="GYS324"
          deliveryDate="06 Jan 2025"
        />

      </ScrollView>

    </SafeAreaView>
  );
};


export default MyOrdersScreenE;


/*                     STYLES                        */

const styles = StyleSheet.create({

  /*  CONTAINER  */

  container: {
    flex: 1,

    backgroundColor: '#FFFFFF',
    paddingHorizontal:10,
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
    fontSize: 24,

    fontWeight: '600',

    color: '#111111',

    marginLeft: 1,
  },


  /*  SCROLL  */

  scrollContent: {
    paddingHorizontal: 20,

    paddingTop: 4,

    paddingBottom: 20,
  },

});
import React from 'react';

import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  Pressable,
} from 'react-native';

import MaterialDesignIcons from '@react-native-vector-icons/material-design-icons';

import BrandCard from '../../Component/BrandCard';
import CategoriesCard from '../../Component/CategoriesCard';
import { useNavigation } from '@react-navigation/native';
import { useProduct } from '../../Context/ProductContextApi';

const BrandProductsE = (data) => {
  const navigation =useNavigation();
   const {products} = useProduct();

  
  // BRAND DATA
  const brands = [
    {
      id: 1,
      name: 'Nike',
      products: '172 products',
    },
  ];

  // PRODUCT DATA



  return (
    <View style={styles.container}>

      {/* 
          HEADER
       */}

      <View style={styles.header}>

        <TouchableOpacity>
          <MaterialDesignIcons
            name="arrow-left"
            size={24}
            color="#111111"
          />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>
          Brand
        </Text>

      </View>


      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >

        {/* 
            NIKE BRAND
         */}
          <View style={styles.card}>

      {/* Brand Logo */}
      <View style={styles.logoContainer}>
         
          <Image
            source={require('../../AssetsE/Img/ProductDetails/nike.png')}
            style={styles.logo}
            resizeMode="contain"
          />
        
        
      </View>

      {/* Brand Details */}
      <View style={styles.detailsContainer}>

        <View style={styles.nameRow}>
          <Text style={styles.brandName}>
            Nike
          </Text>

          <MaterialDesignIcons
            name="check-circle"
            size={14}
            color="#1DA1F2"
          />
        </View>

        <Text style={styles.productText}>
          172 products
        </Text>

      </View>

    </View>

      


        {/* 
            FILTER
         */}

        <TouchableOpacity style={styles.filterButton}>

          <View style={styles.filterLeft}>

            <MaterialDesignIcons
              name="filter-variant"
              size={20}
              color="#999999"
            />

            <Text style={styles.filterText}>
              Filter
            </Text>

          </View>

          <MaterialDesignIcons
            name="menu-down"
            size={23}
            color="#111111"
          />

        </TouchableOpacity>


        {/* 
            PRODUCT GRID
         */}

          <View style={styles.productGrid}>
             {products?.map(data => (
               <Pressable
                  key={data.id}
              onPress={()=>{
                console.log("on press called");
                
                navigation.navigate('ProductDetailsComp',{data:data})


         

              }}
               >
                    <CategoriesCard products={data} />              
               </Pressable>
                 ))}
         </View>

      </ScrollView>

    </View>
  );
};

export default BrandProductsE;


const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal:10,
    paddingTop:20
  },
  BrandCard:{
    width:300

  },

   
  // HEADER
   

  header: {
    height: 65,

    paddingHorizontal: 20,

    flexDirection: 'row',

    alignItems: 'center',
  },

  headerTitle: {
    fontSize: 24,

    fontWeight: 'bold',

    color: '#111111',

    marginLeft: 15,
  },

  
  // SCROLL


  scrollContent: {
    paddingHorizontal: 20,

    paddingBottom: 30,
  },

   
  // FILTER

  filterButton: {
    height: 40,

    borderWidth: 1,

    borderColor: '#CCCCCC',

    borderRadius: 8,

    marginTop: 50,

    marginBottom: 15,

    paddingHorizontal: 12,

    flexDirection: 'row',

    alignItems: 'center',

    justifyContent: 'space-between',
  },

  filterLeft: {
    flexDirection: 'row',

    alignItems: 'center',
  },

  filterText: {
    fontSize: 12,

    fontWeight: '600',

    color: '#111111',

    marginLeft: 14,
  },

  // PRODUCT GRID

  productGrid: {
    flexDirection: 'row',

    flexWrap: 'wrap',

    justifyContent: 'space-between',
  },
























  card: {
    width: '100%',
    height:70 ,
    borderWidth: 1,
    borderColor: '#D6D6D6',
    borderRadius: 9,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 9,
   // marginBottom: 10,
    backgroundColor: '#FFFFFF',
  },

  logoContainer: {
    width: 42,
    height: 42,
    justifyContent: 'center',
    alignItems: 'center',
  },

  logo: {
    width: 45,
    height: 45,
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
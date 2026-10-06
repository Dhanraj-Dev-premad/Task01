import React from 'react';

import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Pressable,
} from 'react-native';

import MaterialDesignIcons from '@react-native-vector-icons/material-design-icons';


import { useNavigation } from '@react-navigation/native';
import BrandCard from '../../Component/BrandCard';

const BrandScreenE = () => {
  const navigation=useNavigation();

  const brands = [
    {
      id: '1',
      name: 'Bata',
      products: 172,
      image: require('../../AssetsE/Img/ComponentImg/Phone.png'),
    },
    {
      id: '2',
      name: 'Nike',
      products: 145,
      image: require('../../AssetsE/Img/ComponentImg/Phone.png'),
    },
    {
      id: '3',
      name: 'Adidas',
      products: 128,
      image: require('../../AssetsE/Img/ComponentImg/Phone.png'),
    },
    {
      id: '4',
      name: 'Puma',
      products: 116,
      image: require('../../AssetsE/Img/ComponentImg/Phone.png'),
    },
    {
      id: '5',
      name: 'Reebok',
      products: 98,
      image: require('../../AssetsE/Img/ComponentImg/Phone.png'),
    },
    {
      id: '6',
      name: 'Levis',
      products: 87,
      image: require('../../AssetsE/Img/ComponentImg/Phone.png'),
    },
    {
      id: '7',
      name: 'H&M',
      products: 76,
      image: require('../../AssetsE/Img/ComponentImg/Phone.png'),
    },
    {
      id: '8',
      name: 'Zara',
      products: 92,
      image: require('../../AssetsE/Img/ComponentImg/Phone.png'),
    },
    {
      id: '9',
      name: 'Peter England',
      products: 84,
      image: require('../../AssetsE/Img/ComponentImg/Phone.png'),
    },
    {
      id: '10',
      name: 'Allen Solly',
      products: 73,
      image: require('../../AssetsE/Img/ComponentImg/Phone.png'),
    },
    {
      id: '11',
      name: 'Roadster',
      products: 65,
      image: require('../../AssetsE/Img/ComponentImg/Phone.png'),
    },
    {
      id: '12',
      name: 'Wrogn',
      products: 58,
      image: require('../../AssetsE/Img/ComponentImg/Phone.png'),
    },
    {
      id: '13',
      name: 'Van Heusen',
      products: 71,
      image: require('../../AssetsE/Img/ComponentImg/Phone.png'),
    },
    {
      id: '14',
      name: 'Louis Philippe',
      products: 63,
      image: require('../../AssetsE/Img/ComponentImg/Phone.png'),
    },
     {
      id: '15',
      name: 'Bata',
      products: 172,
      image: require('../../AssetsE/Img/ComponentImg/Phone.png'),
    },
    {
      id: '16',
      name: 'Nike',
      products: 145,
      image: require('../../AssetsE/Img/ComponentImg/Phone.png'),
    },
    {
      id: '17',
      name: 'Adidas',
      products: 128,
      image: require('../../AssetsE/Img/ComponentImg/Phone.png'),
    },
    {
      id: '18',
      name: 'Puma',
      products: 116,
      image: require('../../AssetsE/Img/ComponentImg/Phone.png'),
    },
    {
      id: '19',
      name: 'Reebok',
      products: 98,
      image: require('../../AssetsE/Img/ComponentImg/Phone.png'),
    },
    {
      id: '20',
      name: 'Levis',
      products: 87,
      image: require('../../AssetsE/Img/ComponentImg/Phone.png'),
    },
    {
      id: '21',
      name: 'H&M',
      products: 76,
      image: require('../../AssetsE/Img/ComponentImg/Phone.png'),
    },
    {
      id: '22',
      name: 'Zara',
      products: 92,
      image: require('../../AssetsE/Img/ComponentImg/Phone.png'),
    },
    {
      id: '23',
      name: 'Peter England',
      products: 84,
      image: require('../../AssetsE/Img/ComponentImg/Phone.png'),
    },
    {
      id: '24',
      name: 'Allen Solly',
      products: 73,
      image: require('../../AssetsE/Img/ComponentImg/Phone.png'),
    },
    {
      id: '25',
      name: 'Roadster',
      products: 65,
      image: require('../../AssetsE/Img/ComponentImg/Phone.png'),
    },
    {
      id: '26',
      name: 'Wrogn',
      products: 58,
      image: require('../../AssetsE/Img/ComponentImg/Phone.png'),
    },
    {
      id: '27',
      name: 'Van Heusen',
      products: 71,
      image: require('../../AssetsE/Img/ComponentImg/Phone.png'),
    },
    {
      id: '28',
      name: 'Louis Philippe',
      products: 63,
      image: require('../../AssetsE/Img/ComponentImg/Phone.png'),
    },
  ];

  return (
    <View style={styles.container}>

      {/* Header */}
      <View style={styles.header}>

        <Pressable
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        >
          <MaterialDesignIcons
            name="arrow-left"
            size={23}
            color="#222222"
          />
        </Pressable>

        <Text style={styles.headerTitle}>
          Brand
        </Text>

      </View>

      {/* Content */}
      <View style={styles.content}>

        <Text style={styles.sectionTitle}>
          Brands
        </Text>

        <FlatList
          data={brands}
          keyExtractor={(item) => item.id}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          columnWrapperStyle={styles.row}
          contentContainerStyle={styles.list}
          renderItem={({ item }) => (
            <Pressable
            onPress={()=>{navigation.navigate('BrandProductsE')}}
            
            >
               <BrandCard data={item} />

            </Pressable>
           
          )}
        />

      </View>

    </View>
  );
};

export default BrandScreenE;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingTop:20
  },

  header: {
    height: 65,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 18,
  },

  backButton: {
    width: 35,
    height: 35,
    justifyContent: 'center',
    alignItems: 'flex-start',
    opacity:0.5,
  },

  headerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#222222',
    marginLeft: 4,
  },

  content: {
    flex: 1,
    paddingHorizontal: 18,
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#222222',
    marginBottom: 12,
  },

  list: {
    paddingBottom: 20,
  },

  row: {
    justifyContent: 'space-between',
  },
});
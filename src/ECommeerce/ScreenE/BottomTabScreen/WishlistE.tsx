
import React from 'react';

import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';

import MaterialDesignIcons from '@react-native-vector-icons/material-design-icons';

import CategoriesCard from '../../Component/CategoriesCard';
import { useWishList } from '../../Context/WishListContext';

const WishlistE = () => {
  const { isFavorite } = useWishList();

  return (
    <View style={styles.Container}>

      {/* HEADER */}
      <View style={styles.Header}>
        <Text style={styles.Title}>
          Wishlist
        </Text>

        <TouchableOpacity style={styles.AddButton}>
          <MaterialDesignIcons
            name="plus"
            size={24}
            color="#000"
          />
        </TouchableOpacity>
      </View>

      {/* WISHLIST PRODUCTS */}
      <FlatList
        data={isFavorite}
        renderItem={({ item }) => (
          <View style={styles.ProductWrapper}>
            <CategoriesCard products={item} />
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        columnWrapperStyle={styles.Row}
        contentContainerStyle={styles.ListContainer}
        ListEmptyComponent={
          <Text style={styles.EmptyText}>
            Your wishlist is empty
          </Text>
        }
      />

    </View>
  );
};

export default WishlistE;

const styles = StyleSheet.create({

  Container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingTop: 20,
  },

  Header: {
    height: 65,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },

  Title: {
    fontSize: 23,
    fontWeight: 'bold',
    color: '#000',
    textDecorationLine: 'underline',
  },

  AddButton: {
    height: 40,
    width: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },

  ListContainer: {
    paddingHorizontal: 8,
    paddingBottom: 20,
  },

  Row: {
    justifyContent: 'space-around',
  },

  ProductWrapper: {
    width: '50%',
    alignItems: 'center',
    marginBottom: 5,
  },

  EmptyText: {
    textAlign: 'center',
    marginTop: 50,
    fontSize: 18,
    color: '#777',
  },
});










// import React from 'react';

// import {
//   View,
//   Text,
//   StyleSheet,
//   FlatList,
//   TouchableOpacity,
// } from 'react-native';

// import MaterialDesignIcons from '@react-native-vector-icons/material-design-icons';

// import CategoriesCard from '../../Component/CategoriesCard';


// const WishlistE = () => {

//   // WISHLIST PRODUCTS

//   const wishlistData = [
//     {
//       id: '1',
//       productName: 'Shoes of Nike',
//       companyName: 'Nike',
//       price: '$399',
//       discount: '9%',
//       image: require('../../AssetsE/Img/ProductDetails/Shoes1.png'),
//     },

//     {
//       id: '2',
//       productName: 'Shoes of Nike',
//       companyName: 'Nike',
//       price: '$399',
//       discount: '9%',
//       image: require('../../AssetsE/Img/ProductDetails/Shoes1.png'),
//     },

//     {
//       id: '3',
//       productName: 'Shoes of Nike',
//       companyName: 'Nike',
//       price: '$399',
//       discount: '9%',
//       image: require('../../AssetsE/Img/ProductDetails/Shoes1.png'),
//     },

//     {
//       id: '4',
//       productName: 'Shoes of Nike',
//       companyName: 'Nike',
//       price: '$399',
//       discount: '9%',
//       image: require('../../AssetsE/Img/ProductDetails/Shoes1.png'),
//     },

//     {
//       id: '5',
//       productName: 'Shoes of Nike',
//       companyName: 'Nike',
//       price: '$399',
//       discount: '9%',
//       image: require('../../AssetsE/Img/ProductDetails/Shoes1.png'),
//     },

//     {
//       id: '6',
//       productName: 'Shoes of Nike',
//       companyName: 'Nike',
//       price: '$399',
//       discount: '9%',
//       image: require('../../AssetsE/Img/ProductDetails/Shoes1.png'),
//     },
//     {
//       id: '7',
//       productName: 'Shoes of Nike',
//       companyName: 'Nike',
//       price: '$399',
//       discount: '9%',
//       image: require('../../AssetsE/Img/ProductDetails/Shoes1.png'),
//     },

//     {
//       id: '8',
//       productName: 'Shoes of Nike',
//       companyName: 'Nike',
//       price: '$399',
//       discount: '9%',
//       image: require('../../AssetsE/Img/ProductDetails/Shoes1.png'),
//     },

//     {
//       id: '9',
//       productName: 'Shoes of Nike',
//       companyName: 'Nike',
//       price: '$399',
//       discount: '9%',
//       image: require('../../AssetsE/Img/ProductDetails/Shoes1.png'),
//     },

//     {
//       id: '10',
//       productName: 'Shoes of Nike',
//       companyName: 'Nike',
//       price: '$399',
//       discount: '9%',
//       image: require('../../AssetsE/Img/ProductDetails/Shoes1.png'),
//     },

//     {
//       id: '11',
//       productName: 'Shoes of Nike',
//       companyName: 'Nike',
//       price: '$399',
//       discount: '9%',
//       image: require('../../AssetsE/Img/ProductDetails/Shoes1.png'),
//     },

//     {
//       id: '12',
//       productName: 'Shoes of Nike',
//       companyName: 'Nike',
//       price: '$399',
//       discount: '9%',
//       image: require('../../AssetsE/Img/ProductDetails/Shoes1.png'),
//     },
//   ];


//   // 
//   // RENDER PRODUCT

//   const renderProduct = ({ item }) => {
//     return (
//       <View style={styles.ProductWrapper}>
//         <CategoriesCard data={item} />
//       </View>
//     );
//   };


//   // SCREEN

//   return (
//     <View style={styles.Container}>

//       {/*  HEADER  */}

//       <View style={styles.Header}>

//         <Text style={styles.Title}>
//           Wishlist
//         </Text>

//         <TouchableOpacity style={styles.AddButton}>
//           <MaterialDesignIcons
//             name="plus"
//             size={24}
//             color="#000"
//           />
//         </TouchableOpacity>

//       </View>


//       {/*  PRODUCT LIST  */}

//       <FlatList
//         data={wishlistData}
//         renderItem={renderProduct}
//         keyExtractor={(item) => item.id}
//         numColumns={2}
//         showsVerticalScrollIndicator={false}
//         columnWrapperStyle={styles.Row}
//         contentContainerStyle={styles.ListContainer}
        
//       />

//     </View>
//   );
// };


// export default WishlistE;


// // STYLES

// const styles = StyleSheet.create({

  
//   // MAIN CONTAINER

//   Container: {
//     flex: 1,
//     backgroundColor: '#FFFFFF',
//     paddingTop:20
//   },


//   // HEADER

//   Header: {
//     height: 65,

//     flexDirection: 'row',

//     alignItems: 'center',

//     justifyContent: 'space-between',

//     paddingHorizontal: 20,
//   },

//   Title: {
//     fontSize: 23,

//     fontWeight: 'bold',

//     color: '#000',

//     textDecorationLine: 'underline',
//   },

//   AddButton: {
//     height: 40,

//     width: 40,

//     alignItems: 'center',

//     justifyContent: 'center',
//   },


//   // PRODUCT LIST

//   ListContainer: {
//     paddingHorizontal: 8,

//     paddingBottom: 20,
//   },

//   Row: {
//     justifyContent: 'space-around',
//   },

//   ProductWrapper: {
//     width: '50%',

//     alignItems: 'center',

//     marginBottom: 5,
//   },

// });
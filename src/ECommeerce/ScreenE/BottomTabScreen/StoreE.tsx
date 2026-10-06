import React from 'react';

import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  Pressable,
} from 'react-native';

import MaterialDesignIcons from '@react-native-vector-icons/material-design-icons';

import CategoriesCard from '../../Component/CategoriesCard';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';


const StoreE = () => {
  const navigation=useNavigation();


  // PRODUCTS FOR CATEGORIES CARD


  const products = [
    {
      id: 1,
      image: require('../../AssetsE/Img/ComponentImg/Phone.png'),
      discount: '9%',
      productName: 'iPhone 11',
      companyName: 'Bata',
      price: '$120',
    },

    {
      id: 2,
      image: require('../../AssetsE/Img/ComponentImg/Phone.png'),
      discount: '9%',
      productName: 'Running Shoes',
      companyName: 'Nike',
      price: '$95',
    },

    {
      id: 3,
      image: require('../../AssetsE/Img/ComponentImg/Phone.png'),
      discount: '15%',
      productName: 'Pink Shirt',
      companyName: 'Bata',
      price: '$80',
    },

    {
      id: 4,
      image: require('../../AssetsE/Img/ComponentImg/Phone.png'),
      discount: '12%',
      productName: 'Smart Phone',
      companyName: 'Nike',
      price: '$150',
    },

     {
      id: 5,
      image: require('../../AssetsE/Img/ComponentImg/Phone.png'),
      discount: '9%',
      productName: 'iPhone 11',
      companyName: 'Bata',
      price: '$120',
    },

    {
      id: 6,
      image: require('../../AssetsE/Img/ComponentImg/Phone.png'),
      discount: '9%',
      productName: 'Running Shoes',
      companyName: 'Nike',
      price: '$95',
    },

    {
      id: 7,
      image: require('../../AssetsE/Img/ComponentImg/Phone.png'),
      discount: '15%',
      productName: 'Pink Shirt',
      companyName: 'Bata',
      price: '$80',
    },

    {
      id: 8,
      image: require('../../AssetsE/Img/ComponentImg/Phone.png'),
      discount: '12%',
      productName: 'Smart Phone',
      companyName: 'Nike',
      price: '$150',
    },
  ];


  // SCREEN
 

  return (
  <SafeAreaView style={styles.SafeAreaCoantainer}>

   
    <View style={styles.container}>


          {/* HEADER */}
    

      <View style={styles.header}>

        <View style={styles.headerRow}>

          <Text style={styles.storeTitle}>
            Store
          </Text>


          {/* SHOPPING BAG */}

           <View style={styles.cartNotificationConatiner}>
          
                        <View style={styles.CartImageContainer}>
          
                          <Image
                            style={styles.cartImage}
                            source={require('../../AssetsE/Img/Homepage/shoppingBag.png')}
                          />
          
                        </View>
          
                        {/* Notification */}
          
                        <View style={styles.NotificationConatiner} />
                        <Text style={styles.NotificationText}>2</Text>
          
                      </View>

        </View>


        {/* 
            SEARCH BOX
         */}

        <View style={styles.searchBox}>

          <MaterialDesignIcons
            name="magnify"
            size={22}
            color="#AAAAAA"
          />

          <Text style={styles.searchText}>
            Search in Store
          </Text>

        </View>

      </View>


      {/* 
          MAIN SCROLL
       */}

      <ScrollView
        showsVerticalScrollIndicator={false}
       
      >

        {/*
            BRANDS
         */}

        <View>

          <View style={styles.brandsHeader}>

            <Text style={styles.brandsTitle}>
              Brands
            </Text>


            <Pressable
              onPress={()=>{navigation.navigate("BrandScreenE")}}
            >

              <Text style={styles.viewAll}>
                View all
              </Text>

            </Pressable>

          </View>


          {/* 
              BRAND CARDS
           */}

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.brandScroll}
          >

            {/* BATA */}

            <View style={styles.brandCard}>

              <Text style={styles.brandLogo}>
                Bata
              </Text>

              <View>

                <View style={styles.brandNameRow}>

                  <Text style={styles.brandName}>
                    Bata
                  </Text>

                  <MaterialDesignIcons
                    name="check-decagram"
                    size={11}
                    color="#0875D1"
                  />

                </View>

                <Text style={styles.brandProducts}>
                  172 products
                </Text>

              </View>

            </View>


            {/* NIKE */}

            <View style={styles.brandCard}>

              <Text style={styles.nikeLogo}>
                Nike
              </Text>

              <View>

                <View style={styles.brandNameRow}>

                  <Text style={styles.brandName}>
                    Nike
                  </Text>

                  <MaterialDesignIcons
                    name="check-decagram"
                    size={11}
                    color="#0875D1"
                  />

                </View>

                <Text style={styles.brandProducts}>
                  172 products
                </Text>

              </View>

            </View>


            {/* NIKE */}

            <View style={styles.brandCard}>

              <Text style={styles.nikeLogo}>
                Nike
              </Text>

              <View>

                <View style={styles.brandNameRow}>

                  <Text style={styles.brandName}>
                    Nike
                  </Text>

                  <MaterialDesignIcons
                    name="check-decagram"
                    size={11}
                    color="#0875D1"
                  />

                </View>

                <Text style={styles.brandProducts}>
                  172 products
                </Text>

              </View>

            </View>

          </ScrollView>

        </View>


        {/* 
            CATEGORY BAR
         */}

        <View style={styles.categoryBar}>

          <Text style={styles.activeCategory}>
            Sports
          </Text>

          <Text style={styles.category}>
            Furniture
          </Text>

          <Text style={styles.category}>
            Electronics
          </Text>

          <Text style={styles.category}>
            Clothes
          </Text>

          <Text style={styles.category}>
            Sports
          </Text>

        </View>


        {/* 
            STORE CONTENT
         */}

        <View style={styles.content}>

          {/* 
              STORE CARD 1
           */}

          <View style={styles.storeCard}>

            <View style={styles.storeHeader}>

              <Text style={styles.storeLogo}>
                Bata
              </Text>

              <View>

                <View style={styles.storeNameRow}>

                  <Text style={styles.storeName}>
                    Bata
                  </Text>

                  <MaterialDesignIcons
                    name="check-decagram"
                    size={12}
                    color="#0875D1"
                  />

                </View>

                <Text style={styles.storeProducts}>
                  172 products
                </Text>

              </View>

            </View>


            {/* STORE PRODUCTS */}

            <View style={styles.storeItems}>

              <View style={styles.storeItem}>

                <Image
                  source={require('../../AssetsE/Img/ComponentImg/Phone.png')}
                  style={styles.storeImage}
                  resizeMode="contain"
                />

              </View>


              <View style={styles.storeItem}>

                <Image
                  source={require('../../AssetsE/Img/ComponentImg/Phone.png')}
                  style={styles.storeImage}
                  resizeMode="contain"
                />

              </View>


              <View style={styles.storeItem}>

                <Image
                  source={require('../../AssetsE/Img/ComponentImg/Phone.png')}
                  style={styles.storeImage}
                  resizeMode="contain"
                />

              </View>

            </View>

          </View>


          {/* 
              STORE CARD 2
           */}

          <View style={styles.storeCard}>

            <View style={styles.storeHeader}>

              <Text style={styles.storeLogo}>
                Bata
              </Text>

              <View>

                <View style={styles.storeNameRow}>

                  <Text style={styles.storeName}>
                    Bata
                  </Text>

                  <MaterialDesignIcons
                    name="check-decagram"
                    size={12}
                    color="#0875D1"
                  />

                </View>

                <Text style={styles.storeProducts}>
                  172 products
                </Text>

              </View>

            </View>


            {/* STORE PRODUCTS */}

            <View style={styles.storeItems}>

              <View style={styles.storeItem}>

                <Image
                  source={require('../../AssetsE/Img/ComponentImg/Phone.png')}
                  style={styles.storeImage}
                  resizeMode="contain"
                />

              </View>


              <View style={styles.storeItem}>

                <Image
                  source={require('../../AssetsE/Img/ComponentImg/Phone.png')}
                  style={styles.storeImage}
                  resizeMode="contain"
                />

              </View>


              <View style={styles.storeItem}>

                <Image
                  source={require('../../AssetsE/Img/ComponentImg/Phone.png')}
                  style={styles.storeImage}
                  resizeMode="contain"
                />

              </View>

            </View>

          </View>



          {/* 
              YOU MIGHT LIKE
           */}

          <View style={styles.likeHeader}>

            <Text style={styles.likeTitle}>
              You might like
            </Text>

            <Text style={styles.viewAll}>
              View all
            </Text>

          </View>


          {/* 
              CATEGORIES CARD
           */}

          {/* <ScrollView
            horizontal
          showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.productList}
          > */}
            <View  style={styles.ProductGrid}>
               {products.map((item) => (

              <CategoriesCard
                key={item.id}
                data={item}
              />

            ))}


            </View>

{/*            
          </ScrollView> */}


          {/* BOTTOM SPACE */}

          <View style={styles.bottomSpace} />

        </View>

      </ScrollView>

    </View>

  </SafeAreaView>

  );
};


export default StoreE;



// STYLES
 

const styles = StyleSheet.create({
  SafeAreaCoantainer:{
    flex:1,
    
   // backgroundColor:'yellow',


  },

   
  // MAIN CONTAINER
   

  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',

  },


  
  // HEADER
   

  header: {
    height: 145,

    backgroundColor: '#0865AD',

    paddingHorizontal: 20,
    paddingTop:10,

   // marginTop: 18,
    position:'relative'
  },


  headerRow: {
    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',
  },


  storeTitle: {
    color: '#FFFFFF',

    fontSize: 24,

    fontWeight: 'bold',
  },


    cartNotificationConatiner: {
    height: 40,
    width: 40,
    //backgroundColor:'yellow',
    position:'absolute',
    zIndex:2,
    left:165,
  },

  CartImageContainer: {
    height: 40,
    width: 40,
    marginLeft: 189,
    marginTop: 15,
  },

  cartImage: {
    height: 25,
    width: 25,
    tintColor: 'white',
  },

  NotificationConatiner: {
    height: 20,
    width: 20,
    borderRadius: 99,
    backgroundColor: 'black',
   position: 'absolute',
    top: 1,
    left: 200,
    zIndex:3,
    justifyContent:'center',
    alignItems:'center',
  },
  NotificationText:{
    fontSize:14,
    color:'white',
    position:'absolute',
     top: 1,
    left: 205,
    zIndex:3,


  },


 


  // SEARCH

  searchBox: {
    height: 55,

    backgroundColor: '#FFFFFF',

    borderWidth: 2,

    borderColor: '#159EFF',

    marginTop: 34,

    flexDirection: 'row',

    alignItems: 'center',

    paddingHorizontal: 10,
    borderRadius:11,
  },


  searchText: {
    color: '#AAAAAA',

    fontSize: 16,

    marginLeft: 8,
  },


  // BRANDS

  brandsHeader: {
    height: 55,

    paddingHorizontal: 20,

    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',
  },


  brandsTitle: {
    fontSize: 22,

    fontWeight: '700',

    color: '#111111',
  },


  viewAll: {
    fontSize: 15,

    color: '#0865AD',
  },


  brandScroll: {
    paddingHorizontal: 20,

    paddingBottom: 14,
  },


  brandCard: {
    width: 130,

    height: 70,

    borderWidth: 1,

    borderColor: '#D0D0D0',

    borderRadius: 9,

    marginRight: 15,

    paddingHorizontal: 7,

    flexDirection: 'row',

    alignItems: 'center',
  },


  brandLogo: {
    fontSize: 16,

    fontWeight: 'bold',

    fontStyle: 'italic',

    marginRight: 8,
  },


  nikeLogo: {
    fontSize: 15,

    fontWeight: 'bold',

    fontStyle: 'italic',

    marginRight: 8,
  },


  brandNameRow: {
    flexDirection: 'row',

    alignItems: 'center',
  },


  brandName: {
    fontSize: 20,

    fontWeight: '600',
  },


  brandProducts: {
    fontSize: 12,

    color: '#999999',

    marginTop: 2,
  },


  // CATEGORY BAR

  categoryBar: {
    height: 56,

    backgroundColor: '#FFFFFF',

    borderBottomWidth: 1,

    borderBottomColor: '#DDDDDD',

    flexDirection: 'row',

    alignItems: 'center',

    paddingHorizontal: 20,
  },


  activeCategory: {
    fontSize: 18,

    color: '#0875D1',

    marginRight: 22,

    height: 46,

    paddingTop: 14,

    borderBottomWidth: 2,

    borderBottomColor: '#0875D1',
  },


  category: {
    fontSize: 18,

    color: '#999999',

    marginRight: 22,
  },


  
  // CONTENT

  content: {
    paddingHorizontal: 20,

    paddingTop: 10,
  },


  // STORE CARD

  storeCard: {
    height: 182,

    borderWidth: 1,

    borderColor: '#D0D0D0',

    borderRadius: 14,

    padding: 13,

    marginBottom: 14,
  },


  storeHeader: {
    flexDirection: 'row',

    alignItems: 'center',

    marginBottom: 12,
  },


  storeLogo: {
    fontSize: 15,

    fontWeight: 'bold',

    fontStyle: 'italic',

    marginRight: 10,
  },


  storeNameRow: {
    flexDirection: 'row',

    alignItems: 'center',
  },


  storeName: {
    fontSize: 22,

    fontWeight: '600',

    marginRight: 4,
  },


  storeProducts: {
    fontSize: 14,

    color: '#999999',

    marginTop: 2,
  },


  // STORE ITEMS

  storeItems: {
    flexDirection: 'row',

    justifyContent: 'space-between',
  },


  storeItem: {
    width: '31.5%',

    height: 78,

    backgroundColor: '#F3F3F3',

    borderRadius: 8,

    justifyContent: 'center',

    alignItems: 'center',
  },


  storeImage: {
    width: '80%',

    height: '80%',
  },


  // YOU MIGHT LIKE
  

  likeHeader: {
    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',

    marginTop: 5,

    marginBottom: 10,
  },


  likeTitle: {
    fontSize: 14,

    fontWeight: '700',

    color: '#111111',
  },


  productList: {
    paddingRight: 10,
  },
  ProductGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    rowGap: 15,
    paddingBottom: 30,
  },


  // BOTTOM SPACE

  bottomSpace: {
    height: 100,
  },

});









































// import React from 'react';

// import {
//   View,
//   Text,
//   StyleSheet,
//   ScrollView,
//   Image,
//   TouchableOpacity,
//   Pressable,
// } from 'react-native';

// import MaterialDesignIcons from '@react-native-vector-icons/material-design-icons';
// import CategoriesCard from '../../Component/CategoriesCard';




// const StoreE = (navigation) => {

//   // ==========================================
//   // PRODUCTS FOR YOUR CategoriesCard
//   // ==========================================

//   const products = [
//     {
//       id: 1,
//       image: require('../../AssetsE/Img/ComponentImg/Phone.png'),
//       discount: '9%',
//       productName: 'iPhone 11',
//       companyName: 'Bata',
//       price: '$120',
//     },

//     {
//       id: 2,
//       image: require('../../AssetsE/Img/ComponentImg/Phone.png'),
//       discount: '9%',
//       productName: 'Running Shoes',
//       companyName: 'Nike',
//       price: '$95',
//     },

//     {
//       id: 3,
//       image: require('../../AssetsE/Img/ComponentImg/Phone.png'),
//       discount: '15%',
//       productName: 'Pink Shirt',
//       companyName: 'Bata',
//       price: '$80',
//     },

//     {
//       id: 4,
//       image: require('../../AssetsE/Img/ComponentImg/Phone.png'),
//       discount: '12%',
//       productName: 'Smart Phone',
//       companyName: 'Nike',
//       price: '$150',
//     },
//   ];


//   return (
//     <View style={styles.container}>

//       {/* =================================
//           TOP HEADER
//       ================================= */}

//       <View style={styles.header}>

//         <View style={styles.headerRow}>

//           <Text style={styles.storeTitle}>
//             Store
//           </Text>

//           <View>

//             <MaterialDesignIcons
//               name="shopping-bag-outline"
//               size={23}
//               color="#FFFFFF"
//             />

//             <View style={styles.badge}>
//               <Text style={styles.badgeText}>
//                 2
//               </Text>
//             </View>

//           </View>

//         </View>


//         {/* SEARCH */}

//         <View style={styles.searchBox}>

//           <MaterialDesignIcons
//             name="magnify"
//             size={22}
//             color="#AAAAAA"
//           />

//           <Text style={styles.searchText}>
//             Search in Store
//           </Text>

//         </View>

//       </View>


//       {/* =================================
//           MAIN SCROLL
//       ================================= */}

//       <ScrollView
//         showsVerticalScrollIndicator={false}
//         stickyHeaderIndices={[1]}
//       >

//         {/* =================================
//             TOP SECTION
//         ================================= */}

//         <View>

//           {/* BRANDS */}

//           <View style={styles.brandsHeader}>

//             <Text style={styles.brandsTitle}>
//               Brands
//             </Text>

//             <Pressable
//             onPress={()=>{navigation.navigate('BrandE')}}>
//                <Text style={styles.viewAll}>
//               View all
//             </Text>

//             </Pressable>

           

//           </View>


//           {/* BRAND CARDS */}

//           <ScrollView
//             horizontal
//             showsHorizontalScrollIndicator={false}
//             contentContainerStyle={styles.brandScroll}
//           >

//             <View style={styles.brandCard}>

//               <Text style={styles.brandLogo}>
//                 Bata
//               </Text>

//               <View>

//                 <View style={styles.brandNameRow}>

//                   <Text style={styles.brandName}>
//                     Bata
//                   </Text>

//                   <MaterialDesignIcons
//                     name="check-decagram"
//                     size={11}
//                     color="#0875D1"
//                   />

//                 </View>

//                 <Text style={styles.brandProducts}>
//                   172 products
//                 </Text>

//               </View>

//             </View>


//             <View style={styles.brandCard}>

//               <Text style={styles.nikeLogo}>
//                 Nike
//               </Text>

//               <View>

//                 <View style={styles.brandNameRow}>

//                   <Text style={styles.brandName}>
//                     Nike
//                   </Text>

//                   <MaterialDesignIcons
//                     name="check-decagram"
//                     size={11}
//                     color="#0875D1"
//                   />

//                 </View>

//                 <Text style={styles.brandProducts}>
//                   172 products
//                 </Text>

//               </View>

//             </View>


//             <View style={styles.brandCard}>

//               <Text style={styles.nikeLogo}>
//                 Nike
//               </Text>

//               <View>

//                 <View style={styles.brandNameRow}>

//                   <Text style={styles.brandName}>
//                     Nike
//                   </Text>

//                   <MaterialDesignIcons
//                     name="check-decagram"
//                     size={11}
//                     color="#0875D1"
//                   />

//                 </View>

//                 <Text style={styles.brandProducts}>
//                   172 products
//                 </Text>

//               </View>

//             </View>

//           </ScrollView>

//         </View>


//         {/* =================================
//             STICKY CATEGORY BAR
//         ================================= */}

//         <View style={styles.categoryBar}>

//           <Text style={styles.activeCategory}>
//             Sports
//           </Text>

//           <Text style={styles.category}>
//             Furniture
//           </Text>

//           <Text style={styles.category}>
//             Electronics
//           </Text>

//           <Text style={styles.category}>
//             Clothes
//           </Text>

//           <Text style={styles.category}>
//             Sports
//           </Text>

//         </View>


//         {/* =================================
//             STORE CONTENT
//         ================================= */}

//         <View style={styles.content}>


//           {/* =================================
//               STORE CARD 1
//           ================================= */}

//           <View style={styles.storeCard}>

//             <View style={styles.storeHeader}>

//               <Text style={styles.storeLogo}>
//                 Bata
//               </Text>

//               <View>

//                 <View style={styles.storeNameRow}>

//                   <Text style={styles.storeName}>
//                     Bata
//                   </Text>

//                   <MaterialDesignIcons
//                     name="check-decagram"
//                     size={12}
//                     color="#0875D1"
//                   />

//                 </View>

//                 <Text style={styles.storeProducts}>
//                   172 products
//                 </Text>

//               </View>

//             </View>


//             <View style={styles.storeItems}>

//               <View style={styles.storeItem}>
//                 <Image
//                   source={require('../../AssetsE/Img/ComponentImg/Phone.png')}
//                   style={styles.storeImage}
//                   resizeMode="contain"
//                 />
//               </View>

//               <View style={styles.storeItem}>
//                 <Image
//                   source={require('../../AssetsE/Img/ComponentImg/Phone.png')}
//                   style={styles.storeImage}
//                   resizeMode="contain"
//                 />
//               </View>

//               <View style={styles.storeItem}>
//                 <Image
//                   source={require('../../AssetsE/Img/ComponentImg/Phone.png')}
//                   style={styles.storeImage}
//                   resizeMode="contain"
//                 />
//               </View>

//             </View>

//           </View>


//           {/* =================================
//               STORE CARD 2
//           ================================= */}

//           <View style={styles.storeCard}>

//             <View style={styles.storeHeader}>

//               <Text style={styles.storeLogo}>
//                 Bata
//               </Text>

//               <View>

//                 <View style={styles.storeNameRow}>

//                   <Text style={styles.storeName}>
//                     Bata
//                   </Text>

//                   <MaterialDesignIcons
//                     name="check-decagram"
//                     size={12}
//                     color="#0875D1"
//                   />

//                 </View>

//                 <Text style={styles.storeProducts}>
//                   172 products
//                 </Text>

//               </View>

//             </View>


//             <View style={styles.storeItems}>

//               <View style={styles.storeItem}>
//                 <Image
//                   source={require('../../AssetsE/Img/ComponentImg/Phone.png')}
//                   style={styles.storeImage}
//                   resizeMode="contain"
//                 />
//               </View>

//               <View style={styles.storeItem}>
//                 <Image
//                   source={require('../../AssetsE/Img/ComponentImg/Phone.png')}
//                   style={styles.storeImage}
//                   resizeMode="contain"
//                 />
//               </View>

//               <View style={styles.storeItem}>
//                 <Image
//                   source={require('../../AssetsE/Img/ComponentImg/Phone.png')}
//                   style={styles.storeImage}
//                   resizeMode="contain"
//                 />
//               </View>

//             </View>

//           </View>


//           {/* =================================
//               YOU MIGHT LIKE
//           ================================= */}

//           <View style={styles.likeHeader}>

//             <Text style={styles.likeTitle}>
//               You might like
//             </Text>

//             <Text style={styles.viewAll}>
//               View all
//             </Text>

//           </View>


//           {/* =================================
//               YOUR CategoriesCard COMPONENT
//           ================================= */}

//           <ScrollView
//             horizontal
//             showsHorizontalScrollIndicator={false}
//             contentContainerStyle={styles.productList}
//           >

//             {products.map((item) => (

//               <CategoriesCard
//                 key={item.id}
//                 data={item}
//               />

//             ))}

//           </ScrollView>


//           <View style={{height: 100}} />

//         </View>

//       </ScrollView>

//     </View>
//   );
// };


// export default StoreE;


// // =================================================
// // STYLES
// // =================================================

// const styles = StyleSheet.create({

//   container: {
//     flex: 1,
//     backgroundColor: '#FFFFFF',
//   },


//   // HEADER

//   header: {
//     height: 145,

//     backgroundColor: '#0865AD',

//     paddingHorizontal: 20,
//     paddingTop: 18,
//   },


//   headerRow: {
//     flexDirection: 'row',

//     justifyContent: 'space-between',

//     alignItems: 'center',
//   },


//   storeTitle: {
//     color: '#FFFFFF',

//     fontSize: 17,

//     fontWeight: '600',
//   },


//   badge: {
//     position: 'absolute',

//     right: -5,
//     top: -5,

//     width: 13,
//     height: 13,

//     borderRadius: 7,

//     backgroundColor: '#222222',

//     justifyContent: 'center',
//     alignItems: 'center',
//   },


//   badgeText: {
//     color: '#FFFFFF',

//     fontSize: 7,

//     fontWeight: 'bold',
//   },


//   // SEARCH

//   searchBox: {
//     height: 43,

//     backgroundColor: '#FFFFFF',

//     borderWidth: 2,
//     borderColor: '#159EFF',

//     marginTop: 34,

//     flexDirection: 'row',

//     alignItems: 'center',

//     paddingHorizontal: 10,
//   },


//   searchText: {
//     color: '#AAAAAA',

//     fontSize: 12,

//     marginLeft: 8,
//   },


//   // BRANDS

//   brandsHeader: {
//     height: 55,

//     paddingHorizontal: 20,

//     flexDirection: 'row',

//     justifyContent: 'space-between',

//     alignItems: 'center',
//   },


//   brandsTitle: {
//     fontSize: 17,

//     fontWeight: '700',

//     color: '#111111',
//   },


//   viewAll: {
//     fontSize: 10,

//     color: '#0865AD',
//   },


//   brandScroll: {
//     paddingHorizontal: 20,

//     paddingBottom: 14,
//   },


//   brandCard: {
//     width: 108,
//     height: 51,

//     borderWidth: 1,

//     borderColor: '#D0D0D0',

//     borderRadius: 9,

//     marginRight: 6,

//     paddingHorizontal: 7,

//     flexDirection: 'row',

//     alignItems: 'center',
//   },


//   brandLogo: {
//     fontSize: 8,

//     fontWeight: 'bold',

//     fontStyle: 'italic',

//     marginRight: 8,
//   },


//   nikeLogo: {
//     fontSize: 11,

//     fontWeight: 'bold',

//     fontStyle: 'italic',

//     marginRight: 8,
//   },


//   brandNameRow: {
//     flexDirection: 'row',

//     alignItems: 'center',
//   },


//   brandName: {
//     fontSize: 11,

//     fontWeight: '600',
//   },


//   brandProducts: {
//     fontSize: 7,

//     color: '#999999',

//     marginTop: 2,
//   },


//   // CATEGORY

//   categoryBar: {
//     height: 46,

//     backgroundColor: '#FFFFFF',

//     borderBottomWidth: 1,

//     borderBottomColor: '#DDDDDD',

//     flexDirection: 'row',

//     alignItems: 'center',

//     paddingHorizontal: 20,
//   },


//   activeCategory: {
//     fontSize: 13,

//     color: '#0875D1',

//     marginRight: 22,

//     height: 46,

//     paddingTop: 14,

//     borderBottomWidth: 2,

//     borderBottomColor: '#0875D1',
//   },


//   category: {
//     fontSize: 13,

//     color: '#999999',

//     marginRight: 22,
//   },


//   // CONTENT

//   content: {
//     paddingHorizontal: 20,

//     paddingTop: 20,
//   },


//   // STORE CARD

//   storeCard: {
//     height: 152,

//     borderWidth: 1,

//     borderColor: '#D0D0D0',

//     borderRadius: 14,

//     padding: 13,

//     marginBottom: 14,
//   },


//   storeHeader: {
//     flexDirection: 'row',

//     alignItems: 'center',

//     marginBottom: 12,
//   },


//   storeLogo: {
//     fontSize: 8,

//     fontWeight: 'bold',

//     fontStyle: 'italic',

//     marginRight: 10,
//   },


//   storeNameRow: {
//     flexDirection: 'row',

//     alignItems: 'center',
//   },


//   storeName: {
//     fontSize: 12,

//     fontWeight: '600',

//     marginRight: 4,
//   },


//   storeProducts: {
//     fontSize: 8,

//     color: '#999999',

//     marginTop: 2,
//   },


//   storeItems: {
//     flexDirection: 'row',

//     justifyContent: 'space-between',
//   },


//   storeItem: {
//     width: '31.5%',

//     height: 68,

//     backgroundColor: '#F3F3F3',

//     borderRadius: 8,

//     justifyContent: 'center',

//     alignItems: 'center',
//   },


//   storeImage: {
//     width: '80%',

//     height: '80%',
//   },


//   // YOU MIGHT LIKE

//   likeHeader: {
//     flexDirection: 'row',

//     justifyContent: 'space-between',

//     alignItems: 'center',

//     marginTop: 5,

//     marginBottom: 10,
//   },


//   likeTitle: {
//     fontSize: 14,

//     fontWeight: '700',

//     color: '#111111',
//   },


//   productList: {
//     paddingRight: 10,
//   },

// });
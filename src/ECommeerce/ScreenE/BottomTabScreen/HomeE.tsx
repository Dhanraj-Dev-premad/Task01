import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import CategoriesCard from '../../Component/CategoriesCard'
import { useNavigation } from '@react-navigation/native'
import { useProduct } from '../../Context/ProductContextApi'

const HomeE = () => {
  const {products} = useProduct();
    const navigation=useNavigation();

  // PRODUCT DATA

  const ProductData = [
    {
      id: '1',
      Categorie: 'Phone',
      image: require('../../AssetsE/Img/ComponentImg/Phone.png'),
      discount: '49%',
      productName: 'iPhone 11 64GB',
      companyName: 'Apple',
      price: '$399',
    },
    {
      id: '2',
      Categorie: 'Shoes',
      image: require('../../AssetsE/Img/ComponentImg/Phone.png'),
      discount: '49%',
      productName: 'Shoes of Nike',
      companyName: 'Nike',
      price: '$398',
      cropePrice: '$599',
    },
    {
      id: '3',
      Categorie: 'Phone',
      image: require('../../AssetsE/Img/ComponentImg/Phone.png'),
      discount: '59%',
      productName: 'iPhone 17 1TB',
      companyName: 'Apple',
      price: '$999',
    },
    {
      id: '4',
      Categorie: 'Shoes',
      image: require('../../AssetsE/Img/ComponentImg/Phone.png'),
      discount: '49%',
      productName: 'Shoes of Bata',
      companyName: 'Bata',
      price: '$299',
      cropePrice: '$499',
    },
    {
      id: '5',
      Categorie: 'Phone',
      image: require('../../AssetsE/Img/ComponentImg/Phone.png'),
      discount: '49%',
      productName: 'iPhone 11 64GB',
      companyName: 'Apple',
      price: '$399',
    },
    {
      id: '6',
      Categorie: 'Shoes',
      image: require('../../AssetsE/Img/ComponentImg/Phone.png'),
      discount: '49%',
      productName: 'Shoes of Nike',
      companyName: 'Nike',
      price: '$399',

      cropePrice: '$599',
    },
    {
      id: '7',
      Categorie: 'Phone',
      image: require('../../AssetsE/Img/ComponentImg/Phone.png'),
      discount: '59%',
      productName: 'iPhone 17 1TB',
      companyName: 'Apple',
      price: '$999',
    },
    {
      id: '8',
      Categorie: 'Shoes',
      image: require('../../AssetsE/Img/ComponentImg/Phone.png'),
      discount: '49%',
      productName: 'Shoes of Bata',
      companyName: 'Bata',
      price: '$299',
      cropePrice: '$499',
    },
  ]

  //  BANNER DATA

  const BannerData = [
    {
      id: '1',
      Categorie: 'Clothes',
      image: require('../../AssetsE/Img/Homepage/banner/Clothes.png'),
    },
    {
      id: '2',
      Categorie: 'Shoes',
      image: require('../../AssetsE/Img/Homepage/banner/Clothes.png'),
    },
    {
      id: '3',
      Categorie: 'Jewellery',
      image: require('../../AssetsE/Img/Homepage/banner/Clothes.png'),
    },
  ]

  //  CATEGORIES DATA 

  const CategoriesData = [
    {
      id: '1',
      Categorie: 'Sports',
      image: require('../../AssetsE/Img/CategoriesDataImg/Sports.png'),
    },
    {
      id: '2',
      Categorie: 'Furniture',
      image: require('../../AssetsE/Img/CategoriesDataImg/Furniture.png'),
    },
    {
      id: '3',
      Categorie: 'Electronics',
      image: require('../../AssetsE/Img/CategoriesDataImg/Electronics.png'),
    },
    {
      id: '4',
      Categorie: 'Clothes',
      image: require('../../AssetsE/Img/CategoriesDataImg/Clothes.png'),
    },
    {
      id: '5',
      Categorie: 'Shoes',
      image: require('../../AssetsE/Img/CategoriesDataImg/Shoes.png'),
    },
    {
      id: '6',
      Categorie: 'Books',
      image: require('../../AssetsE/Img/CategoriesDataImg/book.png'),
    },
    {
      id: '7',
      Categorie: 'Cosmetics',
      image: require('../../AssetsE/Img/CategoriesDataImg/Cosmetics.png'),
    },
  ]

  

  return (
    <ScrollView>
    <SafeAreaView style={styles.safeAreaViewBox}>
    

     

      <View style={styles.mainContainer}>

        {/* HEADER */}

        <View style={styles.headerContainer}>

          {/* Blue Background */}

          <View style={styles.blueimageContainer}>
            <Image
              style={styles.blueimage}
              source={require('../../AssetsE/Img/Homepage/BlueBackground.png')}
            />
          </View>

          {/* Circle 1 */}

          <View style={styles.CircleTopLeftImage1Conatiner}>
            <Image
              style={styles.CircleTopLeftImage1}
              source={require('../../AssetsE/Img/Homepage/Ellipse1.png')}
            />
          </View>

          {/* Circle 2 */}

          <View style={styles.CircleTopLeftImage2Conatiner}>
            <Image
              style={styles.CircleTopLeftImage2}
              source={require('../../AssetsE/Img/Homepage/Ellipse2.png')}
            />
          </View>

          {/* SEARCH  */}

          <View style={styles.SearchBarContainer}>

            <View style={styles.searchBar}>

              <Image
                style={styles.searchimag}
                source={require('../../AssetsE/Img/Homepage/search.png')}
              />

              <TextInput
                placeholder="Search in Store"
                placeholderTextColor="#aba9a9"
                style={styles.SearchButton}
              />

            </View>

          </View>

          {/* USER HEADER  */}

          <View style={styles.headerTextContainer}>

            <View>
              <Text style={styles.GMText}>
                Good Morning
              </Text>

              <Text style={styles.NameProText}>
                Unknown Pro
              </Text>
            </View>

            {/* Cart */}

            <View style={styles.cartNotificationConatiner}>

              <View style={styles.CartImageContainer}>

                <Image
                  style={styles.cartImage}
                  source={require('../../AssetsE/Img/Homepage/shoppingBag.png')}
                />

              </View>

              {/* Notification */}

              <View style={styles.NotificationConatiner} />

            </View>

          </View>

          {/*  POPULAR CATEGORIES  */}

          <View style={styles.CategoriesBox}>

            <View style={styles.TextPopularContainer}>

              <Text style={styles.TextPopular}>
                Popular Categories
              </Text>

            </View>

            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              style={styles.ScrollViewContainer}
            >

              {CategoriesData.map(data => (

                <View
                  key={data.id}
                  style={styles.CategoriesCOntainer}
                >

                  <View style={styles.CategoriesImgCOntainer}>

                    <Image
                      style={styles.Categoriesimage}
                      source={data.image}
                    />

                  </View>

                  <Text style={styles.CategoriesName}>
                    {data.Categorie}
                  </Text>

                </View>

              ))}

            </ScrollView>

          </View>

        </View>

        {/*  BODY*/}

        <View style={styles.BodyConatainer}>

          {/* BANNER  */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.BannerContent}
        >
            {BannerData.map((bannerData) => (
                <View
                  key={bannerData.id}
                  style={styles.BannerContainer}
                >
                      <Image
                      style={styles.bannerImage}
                      source={bannerData.image}
                      resizeMode="cover"
                      />
                </View>
                 ))}
         </ScrollView>

         

          {/* PRODUCT HEADING*/}

          <View style={styles.TextHeadingLable}>

            <Text style={styles.TextPopular2}>
              Popular Products
            </Text>

            <Text style={styles.TextViewAll}>
              View all
            </Text>

          </View>

          {/* PRODUCT   */}

         <View style={styles.ProductGrid}>
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

        </View>

      </View>
       

    </SafeAreaView>
    </ScrollView>
  )
}

export default HomeE



const styles = StyleSheet.create({

  safeAreaViewBox: {
    flex: 1,
  },

  mainContainer: {
    flex: 1,
    backgroundColor: 'white',
  },

  // HEADER 

  headerContainer: {
    height: 320,
    position: 'relative',
    opacity: 0.9,
    top: -45,
  },

  blueimageContainer: {
    height: 320,
  },

  blueimage: {
    height: 320,
    width: '100%',
  },

  CircleTopLeftImage1Conatiner: {
    height: 200,
    width: 200,
    position: 'absolute',
    opacity: 0.9,
    zIndex: 2,
    right: -62,
    top: 2,
  },

  CircleTopLeftImage1: {
    height: '100%',
    width: '100%',
  },

  CircleTopLeftImage2Conatiner: {
    height: 200,
    width: 200,
    position: 'absolute',
    opacity: 0.9,
    zIndex: 3,
    right: -105,
    top: 80,
  },

  CircleTopLeftImage2: {
    height: '100%',
    width: '100%',
  },

  // SEARCH 

  SearchBarContainer: {
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 290,
    left: 40,
    zIndex: 4,
  },

  searchBar: {
    height: 55,
    width: 340,
    flexDirection: 'row',
    borderRadius: 15,
    backgroundColor: 'white',
    elevation: 5,
  },

  SearchButton: {
    height: 55,
    width: 305,
    fontSize: 20,
  },

  searchimag: {
    height: 25,
    width: 25,
    opacity: 0.3,
    marginTop: 15,
    marginLeft: 10,
  },

  // USER HEADER 

  headerTextContainer: {
    height: 60,
    paddingHorizontal: 40,
    flexDirection: 'row',
    position: 'absolute',
    top: 60,
  },

  GMText: {
    fontSize: 16,
    color: 'white',
  },

  NameProText: {
    fontSize: 23,
    color: 'white',
    fontWeight: 'bold',
  },

  cartNotificationConatiner: {
    height: 40,
    width: 40,
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
    backgroundColor: '#ffffff',
    position: 'absolute',
    top: 1,
    left: 200,
  },

  //  CATEGORIES 

  CategoriesBox: {
    height: 130,
    width: '100%',
    position: 'absolute',
    top: 145,
   
   // backgroundColor:'yellow',

  },

  TextPopularContainer: {
    marginLeft: 40,
  },

  TextPopular: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },

  ScrollViewContainer: {
    position:'absolute',
    zIndex:5,
    top:20,
    
    height: 130,
  },

  CategoriesImgCOntainer: {
    height: 58,
    width: 58,
    borderRadius: 999,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },

  CategoriesName: {
    marginTop: 10,
    fontSize: 16,
    color: 'white',
  },

  CategoriesCOntainer: {
    height: 110,
    width: 79,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 1,
  },

  Categoriesimage: {
    height: 30,
    width: 30,
  },

  //  BODY

  BodyConatainer: {
    flex: 1,
    width: '100%',
    paddingHorizontal: 20,
  },

  // BANNE
BannerContainer: {
  height: 185,
  width: 380,
  borderRadius: 15,
  overflow: 'hidden',
  elevation: 1,
  backgroundColor: 'yellow',
  marginRight: 15,
},

bannerImage: {
  height: '100%',
  width: '100%',
},

BannerContent: {
  paddingRight: 15,
},

  //PRODUCT HEADING

  TextHeadingLable: {
    height: 30,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
    marginBottom: 15,
  },

  TextPopular2: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },

  TextViewAll: {
    fontSize: 18,
    color: '#1DA1F2',
  },

  // PRODUCT GRID 

  ProductGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    rowGap: 15,
    paddingBottom: 30,
  },

})



















// import {
//   Image,
//   Pressable,
//   ScrollView,
//   StyleSheet,
//   Text,
//   TextInput,
//   View,
// } from 'react-native'
// import React from 'react'
// import { SafeAreaView } from 'react-native-safe-area-context'
// import CategoriesCard from '../../Component/CategoriesCard'
// import { useNavigation } from '@react-navigation/native'

// const HomeE = ({navigation}) => {
//   // const navigation=useNavigation();

//   // PRODUCT DATA

//   const ProductData = [
//     {
//       id: '1',
//       Categorie: 'Phone',
//       image: require('../../AssetsE/Img/ComponentImg/Phone.png'),
//       discount: '49%',
//       productName: 'iPhone 11 64GB',
//       companyName: 'Apple',
//       price: '$399',
//     },
//     {
//       id: '2',
//       Categorie: 'Shoes',
//       image: require('../../AssetsE/Img/ComponentImg/Phone.png'),
//       discount: '49%',
//       productName: 'Shoes of Nike',
//       companyName: 'Nike',
//       price: '$398',
//       cropePrice: '$599',
//     },
//     {
//       id: '3',
//       Categorie: 'Phone',
//       image: require('../../AssetsE/Img/ComponentImg/Phone.png'),
//       discount: '59%',
//       productName: 'iPhone 17 1TB',
//       companyName: 'Apple',
//       price: '$999',
//     },
//     {
//       id: '4',
//       Categorie: 'Shoes',
//       image: require('../../AssetsE/Img/ComponentImg/Phone.png'),
//       discount: '49%',
//       productName: 'Shoes of Bata',
//       companyName: 'Bata',
//       price: '$299',
//       cropePrice: '$499',
//     },
//     {
//       id: '5',
//       Categorie: 'Phone',
//       image: require('../../AssetsE/Img/ComponentImg/Phone.png'),
//       discount: '49%',
//       productName: 'iPhone 11 64GB',
//       companyName: 'Apple',
//       price: '$399',
//     },
//     {
//       id: '6',
//       Categorie: 'Shoes',
//       image: require('../../AssetsE/Img/ComponentImg/Phone.png'),
//       discount: '49%',
//       productName: 'Shoes of Nike',
//       companyName: 'Nike',
//       price: '$399',

//       cropePrice: '$599',
//     },
//     {
//       id: '7',
//       Categorie: 'Phone',
//       image: require('../../AssetsE/Img/ComponentImg/Phone.png'),
//       discount: '59%',
//       productName: 'iPhone 17 1TB',
//       companyName: 'Apple',
//       price: '$999',
//     },
//     {
//       id: '8',
//       Categorie: 'Shoes',
//       image: require('../../AssetsE/Img/ComponentImg/Phone.png'),
//       discount: '49%',
//       productName: 'Shoes of Bata',
//       companyName: 'Bata',
//       price: '$299',
//       cropePrice: '$499',
//     },
//   ]

//   //  BANNER DATA

//   const BannerData = [
//     {
//       id: '1',
//       Categorie: 'Clothes',
//       image: require('../../AssetsE/Img/Homepage/banner/Clothes.png'),
//     },
//     {
//       id: '2',
//       Categorie: 'Shoes',
//       image: require('../../AssetsE/Img/Homepage/banner/Clothes.png'),
//     },
//     {
//       id: '3',
//       Categorie: 'Jewellery',
//       image: require('../../AssetsE/Img/Homepage/banner/Clothes.png'),
//     },
//   ]

//   //  CATEGORIES DATA 

//   const CategoriesData = [
//     {
//       id: '1',
//       Categorie: 'Sports',
//       image: require('../../AssetsE/Img/CategoriesDataImg/Sports.png'),
//     },
//     {
//       id: '2',
//       Categorie: 'Furniture',
//       image: require('../../AssetsE/Img/CategoriesDataImg/Furniture.png'),
//     },
//     {
//       id: '3',
//       Categorie: 'Electronics',
//       image: require('../../AssetsE/Img/CategoriesDataImg/Electronics.png'),
//     },
//     {
//       id: '4',
//       Categorie: 'Clothes',
//       image: require('../../AssetsE/Img/CategoriesDataImg/Clothes.png'),
//     },
//     {
//       id: '5',
//       Categorie: 'Shoes',
//       image: require('../../AssetsE/Img/CategoriesDataImg/Shoes.png'),
//     },
//     {
//       id: '6',
//       Categorie: 'Books',
//       image: require('../../AssetsE/Img/CategoriesDataImg/book.png'),
//     },
//     {
//       id: '7',
//       Categorie: 'Cosmetics',
//       image: require('../../AssetsE/Img/CategoriesDataImg/Cosmetics.png'),
//     },
//   ]

  

//   return (
//     <ScrollView>
//     <SafeAreaView style={styles.safeAreaViewBox}>
    

     

//       <View style={styles.mainContainer}>

//         {/* HEADER */}

//         <View style={styles.headerContainer}>

//           {/* Blue Background */}

//           <View style={styles.blueimageContainer}>
//             <Image
//               style={styles.blueimage}
//               source={require('../../AssetsE/Img/Homepage/BlueBackground.png')}
//             />
//           </View>

//           {/* Circle 1 */}

//           <View style={styles.CircleTopLeftImage1Conatiner}>
//             <Image
//               style={styles.CircleTopLeftImage1}
//               source={require('../../AssetsE/Img/Homepage/Ellipse1.png')}
//             />
//           </View>

//           {/* Circle 2 */}

//           <View style={styles.CircleTopLeftImage2Conatiner}>
//             <Image
//               style={styles.CircleTopLeftImage2}
//               source={require('../../AssetsE/Img/Homepage/Ellipse2.png')}
//             />
//           </View>

//           {/* SEARCH  */}

//           <View style={styles.SearchBarContainer}>

//             <View style={styles.searchBar}>

//               <Image
//                 style={styles.searchimag}
//                 source={require('../../AssetsE/Img/Homepage/search.png')}
//               />

//               <TextInput
//                 placeholder="Search in Store"
//                 placeholderTextColor="#aba9a9"
//                 style={styles.SearchButton}
//               />

//             </View>

//           </View>

//           {/* USER HEADER  */}

//           <View style={styles.headerTextContainer}>

//             <View>
//               <Text style={styles.GMText}>
//                 Good Morning
//               </Text>

//               <Text style={styles.NameProText}>
//                 Unknown Pro
//               </Text>
//             </View>

//             {/* Cart */}

//             <View style={styles.cartNotificationConatiner}>

//               <View style={styles.CartImageContainer}>

//                 <Image
//                   style={styles.cartImage}
//                   source={require('../../AssetsE/Img/Homepage/shoppingBag.png')}
//                 />

//               </View>

//               {/* Notification */}

//               <View style={styles.NotificationConatiner} />

//             </View>

//           </View>

//           {/*  POPULAR CATEGORIES  */}

//           <View style={styles.CategoriesBox}>

//             <View style={styles.TextPopularContainer}>

//               <Text style={styles.TextPopular}>
//                 Popular Categories
//               </Text>

//             </View>

//             <ScrollView
//               horizontal
//               showsHorizontalScrollIndicator={false}
//               style={styles.ScrollViewContainer}
//             >

//               {CategoriesData.map(data => (

//                 <View
//                   key={data.id}
//                   style={styles.CategoriesCOntainer}
//                 >

//                   <View style={styles.CategoriesImgCOntainer}>

//                     <Image
//                       style={styles.Categoriesimage}
//                       source={data.image}
//                     />

//                   </View>

//                   <Text style={styles.CategoriesName}>
//                     {data.Categorie}
//                   </Text>

//                 </View>

//               ))}

//             </ScrollView>

//           </View>

//         </View>

//         {/*  BODY*/}

//         <View style={styles.BodyConatainer}>

//           {/* BANNER  */}
//         <ScrollView
//           horizontal
//           showsHorizontalScrollIndicator={false}
//           contentContainerStyle={styles.BannerContent}
//         >
//             {BannerData.map((bannerData) => (
//                 <View
//                   key={bannerData.id}
//                   style={styles.BannerContainer}
//                 >
//                       <Image
//                       style={styles.bannerImage}
//                       source={bannerData.image}
//                       resizeMode="cover"
//                       />
//                 </View>
//                  ))}
//          </ScrollView>

         

//           {/* PRODUCT HEADING*/}

//           <View style={styles.TextHeadingLable}>

//             <Text style={styles.TextPopular2}>
//               Popular Products
//             </Text>

//             <Text style={styles.TextViewAll}>
//               View all
//             </Text>

//           </View>

//           {/* PRODUCT   */}

//          <View style={styles.ProductGrid}>
//              {ProductData?.map(data => (
//                <Pressable
//                   key={data.id}
//               onPress={()=>{
//                 console.log("on press called");
                
//                 navigation.navigate('ProductDetailsComp')

//               }}
//          >
//                  <CategoriesCard data={data} />
//                </Pressable>
//                  ))}
//          </View>

//         </View>

//       </View>
       

//     </SafeAreaView>
//     </ScrollView>
//   )
// }

// export default HomeE



// const styles = StyleSheet.create({

//   safeAreaViewBox: {
//     flex: 1,
//   },

//   mainContainer: {
//     flex: 1,
//     backgroundColor: 'white',
//   },

//   // HEADER 

//   headerContainer: {
//     height: 320,
//     position: 'relative',
//     opacity: 0.9,
//     top: -45,
//   },

//   blueimageContainer: {
//     height: 320,
//   },

//   blueimage: {
//     height: 320,
//     width: '100%',
//   },

//   CircleTopLeftImage1Conatiner: {
//     height: 200,
//     width: 200,
//     position: 'absolute',
//     opacity: 0.9,
//     zIndex: 2,
//     right: -62,
//     top: 2,
//   },

//   CircleTopLeftImage1: {
//     height: '100%',
//     width: '100%',
//   },

//   CircleTopLeftImage2Conatiner: {
//     height: 200,
//     width: 200,
//     position: 'absolute',
//     opacity: 0.9,
//     zIndex: 3,
//     right: -105,
//     top: 80,
//   },

//   CircleTopLeftImage2: {
//     height: '100%',
//     width: '100%',
//   },

//   // SEARCH 

//   SearchBarContainer: {
//     height: 60,
//     justifyContent: 'center',
//     alignItems: 'center',
//     position: 'absolute',
//     top: 290,
//     left: 40,
//     zIndex: 4,
//   },

//   searchBar: {
//     height: 55,
//     width: 340,
//     flexDirection: 'row',
//     borderRadius: 15,
//     backgroundColor: 'white',
//     elevation: 5,
//   },

//   SearchButton: {
//     height: 55,
//     width: 305,
//     fontSize: 20,
//   },

//   searchimag: {
//     height: 25,
//     width: 25,
//     opacity: 0.3,
//     marginTop: 15,
//     marginLeft: 10,
//   },

//   // USER HEADER 

//   headerTextContainer: {
//     height: 60,
//     paddingHorizontal: 40,
//     flexDirection: 'row',
//     position: 'absolute',
//     top: 60,
//   },

//   GMText: {
//     fontSize: 16,
//     color: 'white',
//   },

//   NameProText: {
//     fontSize: 23,
//     color: 'white',
//     fontWeight: 'bold',
//   },

//   cartNotificationConatiner: {
//     height: 40,
//     width: 40,
//   },

//   CartImageContainer: {
//     height: 40,
//     width: 40,
//     marginLeft: 189,
//     marginTop: 15,
//   },

//   cartImage: {
//     height: 25,
//     width: 25,
//     tintColor: 'white',
//   },

//   NotificationConatiner: {
//     height: 20,
//     width: 20,
//     borderRadius: 99,
//     backgroundColor: '#ffffff',
//     position: 'absolute',
//     top: 1,
//     left: 200,
//   },

//   //  CATEGORIES 

//   CategoriesBox: {
//     height: 130,
//     width: '100%',
//     position: 'absolute',
//     top: 145,
   
//    // backgroundColor:'yellow',

//   },

//   TextPopularContainer: {
//     marginLeft: 40,
//   },

//   TextPopular: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     color: 'white',
//   },

//   ScrollViewContainer: {
//     position:'absolute',
//     zIndex:5,
//     top:20,
    
//     height: 130,
//   },

//   CategoriesImgCOntainer: {
//     height: 58,
//     width: 58,
//     borderRadius: 999,
//     backgroundColor: 'white',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },

//   CategoriesName: {
//     marginTop: 10,
//     fontSize: 16,
//     color: 'white',
//   },

//   CategoriesCOntainer: {
//     height: 110,
//     width: 79,
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginTop: 1,
//   },

//   Categoriesimage: {
//     height: 30,
//     width: 30,
//   },

//   //  BODY

//   BodyConatainer: {
//     flex: 1,
//     width: '100%',
//     paddingHorizontal: 20,
//   },

//   // BANNE
// BannerContainer: {
//   height: 185,
//   width: 380,
//   borderRadius: 15,
//   overflow: 'hidden',
//   elevation: 1,
//   backgroundColor: 'yellow',
//   marginRight: 15,
// },

// bannerImage: {
//   height: '100%',
//   width: '100%',
// },

// BannerContent: {
//   paddingRight: 15,
// },

//   //PRODUCT HEADING

//   TextHeadingLable: {
//     height: 30,
//     width: '100%',
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginTop: 15,
//     marginBottom: 15,
//   },

//   TextPopular2: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     color: 'black',
//   },

//   TextViewAll: {
//     fontSize: 18,
//     color: '#1DA1F2',
//   },

//   // PRODUCT GRID 

//   ProductGrid: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     justifyContent: 'space-between',
//     rowGap: 15,
//     paddingBottom: 30,
//   },

// })











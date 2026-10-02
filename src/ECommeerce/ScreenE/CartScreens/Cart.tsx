// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'

// const Cart = () => {
//   return (
//     <View>
//       <Text>Cart</Text>
//     </View>
//   )
// }

// export default Cart

// const styles = StyleSheet.create({})





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

import { useNavigation } from '@react-navigation/native'
import CartComp from '../../Component/CartComp'
import MaterialDesignIcons from '@react-native-vector-icons/material-design-icons'

const Cart = () => {
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
      Color:'Green',
      Storage:'512'
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
       Color:'Green',
      Storage:'512'
    },
    {
      id: '3',
      Categorie: 'Phone',
      image: require('../../AssetsE/Img/ComponentImg/Phone.png'),
      discount: '59%',
      productName: 'iPhone 17 1TB',
      companyName: 'Apple',
      price: '$999',
       Color:'Green',
      Storage:'512'
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
       Color:'Green',
      Storage:'512'
    },
    {
      id: '5',
      Categorie: 'Phone',
      image: require('../../AssetsE/Img/ComponentImg/Phone.png'),
      discount: '49%',
      productName: 'iPhone 11 64GB',
      companyName: 'Apple',
      price: '$399',
       Color:'Green',
      Storage:'512'
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
       Color:'Green',
      Storage:'512'
    },
    {
      id: '7',
      Categorie: 'Phone',
      image: require('../../AssetsE/Img/ComponentImg/Phone.png'),
      discount: '59%',
      productName: 'iPhone 17 1TB',
      companyName: 'Apple',
      price: '$999',
       Color:'Green',
      Storage:'512'
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
       Color:'Green',
      Storage:'512'
    },
  ]

  const totalPrise=()=>{

    {5559}



  }

 

 
    

  

  return (
   
    <SafeAreaView style={styles.safeAreaViewBox}>
      <View style={styles.headerContainer}>
        <Pressable onPress={()=>{navigation.goBack() 
              console.log("icon clicked")
              }}
        
              style={styles.backArrowContainer}
                            
              >
                  <MaterialDesignIcons
                  name="arrow-left-thin"
                  size={45}
                  color="black"
                  />
        </Pressable>
        <Text style={styles.CartText}>Cart</Text>

      </View>

       <ScrollView>
    

     

      <View style={styles.mainContainer}>


          {/* PRODUCT   */}

         <View style={styles.ProductGrid}>
             {
             ProductData?.map(data => (
               <Pressable
                  key={data.id}
              onPress={()=>{
                console.log("on press called");
                
                

              }}
         >
                 <CartComp data={data} />
               </Pressable>
                 ))}
         </View>
         

       

      </View>
      </ScrollView>
      <View style={styles.CheckOutContainer}>
          <Pressable
          style={styles.checkOutButton}
          >
            <Text style={styles.checkoutText}>Checkout </Text>
            <Text style={styles.checkoutText}>$5674.54</Text>

          </Pressable>

         </View>
       

    </SafeAreaView>
    
  )
}

export default Cart



const styles = StyleSheet.create({

  safeAreaViewBox: {
    flex: 1,
    backgroundColor: 'white',
    gap:30
  },
  headerContainer:{
    height:40,
    width:'100%',
    flexDirection:'row',
    alignItems:'center',
    marginLeft:15,
    gap:10
    //position:'relative'

  },
  
  backArrowContainer:{
    //position:'absolute',
   // top:5,
   // left:20,
    opacity:0.5,
    //zIndex:3

  },
  CartText:{
    fontSize:24,
    fontWeight:'bold'

  },

  mainContainer: {
    flex: 1,
    backgroundColor: 'white',
    paddingLeft:10
  },

  // HEADER 




  ScrollViewContainer: {
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
  CheckOutContainer:{
    height:100,
    width:'100%',
    justifyContent:'center',
    alignItems:'center',
   
    
    
  },
  checkOutButton:{
    height:55,
    width:'90%',
    borderRadius:10,
    backgroundColor:'#0857A0',
     justifyContent:'center',
    alignItems:'center',
    flexDirection:'row',
    
  },
  checkoutText:{
    fontSize:18,
    fontWeight:'bold',
    color:'white'
    

  }

})












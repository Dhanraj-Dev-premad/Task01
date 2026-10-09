
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import MaterialDesignIcons from '@react-native-vector-icons/material-design-icons';
import { useCart } from '../Context/CartContextE';


const CartComp = ({data}) => {
  const {increaseQuantity, decreaseQuantity} = useCart();

  return (
    <View style={styles.MainContainer}>
      <View style={styles.CardContainer}>
        <View style={styles.productDetails}>
          {/* Product Image */}
          <View style={styles.ImgItemContainer}>
            <Image
              style={styles.PhoneImage}
              source={data.image}
              resizeMode="contain"
            />
          </View>

          {/* Product Information */}
          <View style={styles.ProductNameContainer}>
            {/* Company Name + Verified Icon */}
            <View style={styles.ProductCompanyName}>
              <Text style={styles.TextProductCompanyName}>
                {data.companyName}
              </Text>

              <MaterialDesignIcons
                name="check-circle"
                size={16}
                color="#1DA1F2"
              />
            </View>

            {/* Product Name */}
            <Text
              style={styles.TextProductName}
              numberOfLines={1}>
              {data.productName}
            </Text>

            <View style={styles.productDetailsComp}>
              <View style={styles.CategoryCantainer}>
                <Text style={styles.HeadingName}>Color</Text>
                <Text style={styles.Datatext}>
                  {data.Color}
                </Text>
              </View>

              <View style={styles.CategoryCantainer}>
                <Text style={styles.HeadingName}>Storage</Text>
                <Text style={styles.Datatext}>
                  {data.Storage}
                </Text>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.prizeCartContainer}>
          <View style={styles.quantitySelectorContainer}>
            <Pressable
              style={styles.SubButton}
              onPress={() => decreaseQuantity(data.id)}>
              <MaterialDesignIcons
                name="minus"
                size={25}
                color="black"
              />
            </Pressable>

            <Text style={styles.QuantityText}>
              {data.quantity}
            </Text>

            <Pressable
              style={styles.addButton}
              onPress={() => increaseQuantity(data.id)}>
              <MaterialDesignIcons
                name="plus"
                size={25}
                color="white"
              />
            </Pressable>
          </View>

          <View style={styles.priseContainer}>
            <Text style={styles.priseText}>
              {data.price }
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default CartComp;

const styles = StyleSheet.create({
  MainContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 130,
    width: 410,
    paddingLeft: 20,
    marginBottom: 20,
  },

  productDetails: {
    flexDirection: 'row',
  },

  CardContainer: {
    height: '100%',
    width: '100%',
    borderRadius: 23,
    overflow: 'hidden',
  },

  ImgItemContainer: {
    marginTop: 10,
    marginLeft: 10,
    height: 50,
    width: 50,
    borderRadius: 9,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#BEBEBE33',
  },

  PhoneImage: {
    height: 40,
    width: 40,
  },

  ProductNameContainer: {
    marginTop: 5,
    marginLeft: 15,
    gap: 5,
  },

  TextProductName: {
    fontSize: 18,
    fontWeight: 'bold',
  },

  ProductCompanyName: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },

  TextProductCompanyName: {
    fontSize: 18,
    fontWeight: 'bold',
    opacity: 0.5,
  },

  prizeCartContainer: {
    flexDirection: 'row',
  },

  quantitySelectorContainer: {
    height: 50,
    width: 150,
    flexDirection: 'row',
    gap: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 55,
  },

  SubButton: {
    height: 40,
    width: 40,
    borderRadius: 999,
    backgroundColor: '#BEBEBE33',
    justifyContent: 'center',
    alignItems: 'center',
  },

  addButton: {
    height: 40,
    width: 40,
    borderRadius: 999,
    backgroundColor: '#0857A0',
    justifyContent: 'center',
    alignItems: 'center',
  },

  productDetailsComp: {
    flexDirection: 'row',
    gap: 10,
  },

  HeadingName: {
    fontSize: 18,
    opacity: 0.5,
  },

  Datatext: {
    fontSize: 18,
    fontWeight: 'bold',
  },

  CategoryCantainer: {
    flexDirection: 'row',
    gap: 5,
  },

  priseContainer: {
    height: 50,
    marginLeft: 110,
    marginTop: 20,
  },

  priseText: {
    fontSize: 22,
    fontWeight: 'bold',
  },

  QuantityText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});







// import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
// import React from 'react'
// import MaterialDesignIcons from '@react-native-vector-icons/material-design-icons'
// import { useNavigation } from '@react-navigation/native'

// const CartComp = ({ data }) => {
  
  
//   return (

//     <View style={styles.MainContainer}>

      

     

//      <View style={styles.CardContainer}>

       
//       <View style={styles.productDetails}>

//         {/* Product Image */}
//         <View style={styles.ImgItemContainer}>
//           <Image
//             style={styles.PhoneImage}
//             source={data.image}
//             resizeMode="contain"
//           />
//         </View>

  

      

//         {/* Product Information */}
//         <View style={styles.ProductNameContainer}>

        
//           {/* Company Name + Verified Icon */}
//           <View style={styles.ProductCompanyName}>

//             <Text style={styles.TextProductCompanyName}>
//               {data.companyName}
//             </Text>

//             <MaterialDesignIcons
//               name="check-circle"
//               size={16}
//               color="#1DA1F2"
//             />

//           </View>
//             {/* Product Name */}
//           <Text
//             style={styles.TextProductName}
//             numberOfLines={1}
//           >
//             {data.productName}
//           </Text>
//         <View style={styles.productDetailsComp}>

         
//           <View style={styles.CategoryCantainer}>
//             <Text style={styles.HeadingName}>Color</Text>
//             <Text style={styles.Datatext}>{data.Color}</Text>

//           </View>
//           <View style={styles.CategoryCantainer}>
//             <Text style={styles.HeadingName}>Storage</Text>
//             <Text style={styles.Datatext}>{data.Storage}</Text>

//           </View>
//         </View> 


//       </View>

//      </View>





//      <View style={styles.prizeCartContainer}>


//         <View style={styles.quantitySelectorContainer}>
                     
//                     <Pressable
//                          style={styles.SubButton}
//                         onPress={() => console.log(` Sub pressed`)}
//                     >
//                              <MaterialDesignIcons
//                              name="minus"
//                              size={25}
//                              color="black"
//                             />
//                     </Pressable>
//                     <Text style={styles.QuantityText}>{quantity}</Text>
     
                     
                  
                     
//                     <Pressable
//                         style={styles.addButton}
//                         onPress={() => console.log(` Plus pressed`)}
//                     >
//                             <MaterialDesignIcons
//                              name="plus"
//                              size={25}
//                             color="white"
//                             />
//                     </Pressable>
     
     
                     
     
//         </View>

//         <View style={styles.priseContainer}>
//             <Text style={styles.priseText}>{data.price}</Text>


//         </View>

//      </View>





         

//       </View>
     
       

//     </View>
//   )
// }

// export default CartComp

// const styles = StyleSheet.create({


//   MainContainer: {
//     justifyContent: 'center',
//     alignItems: 'center',
//    // backgroundColor:'pink',
//      height: 130,
//     width: 410,
//     paddingLeft:20,
//     marginBottom:20
   
   
//   },

//   productDetails:{
//     flexDirection:'row',
   



//   },

//   CardContainer: {
//      height:'100%',
//     width:'100%',
//     borderRadius: 23,
//     overflow: 'hidden',

   
//   },

//   /* ---------------- IMAGE ---------------- */

//   ImgItemContainer: {
//     marginTop: 10,
//     marginLeft:10,
//     height: 50,
//     width: 50,
//     borderRadius:9,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#BEBEBE33',


  
//   },

//   PhoneImage: {
//     height: 40,
//     width: 40,
//   },

 

 

//   /* ---------------- PRODUCT NAME ---------------- */

//   ProductNameContainer: {
//     marginTop: 5,
//     marginLeft:15,
//     gap:5
//   },

//   TextProductName: {
//     fontSize: 18,
//     fontWeight: 'bold',
//   },

//   /* ---------------- COMPANY ---------------- */

//   ProductCompanyName: {
//     flexDirection: 'row',

//     alignItems: 'center',

//     gap: 8,
//   },

//   TextProductCompanyName: {
//     fontSize: 18,

//     fontWeight: 'bold',

//     opacity: 0.5,
//   },

//   prizeCartContainer:{
//     flexDirection:'row',

//   },

  

//      quantitySelectorContainer:{
//             height:50,
//             width:150,
//             flexDirection:'row',
//            // backgroundColor:'yellow',
//             gap:20,
//             justifyContent:'center',
//             alignItems:'center',
//             marginLeft:55,



//         },
//          SubButton:{
//             height:40,
//             width:40,
//             borderRadius:999,
//             backgroundColor:'#BEBEBE33',
//             justifyContent:'center',
//             alignItems:'center',




//         },
     
//          addButton:{
//             height:40,
//             width:40,
//             borderRadius:999,
//             backgroundColor:'#0857A0',
//             justifyContent:'center',
//             alignItems:'center',

//         },
//         productDetailsComp:{
//             flexDirection:'row',
//             gap:10,
            

//         },
//         HeadingName:{
//             fontSize:18,
//             opacity:0.5

//         },
//         Datatext:{
//             fontSize:18,
//             fontWeight:'bold'

//         },
//         CategoryCantainer:{
//              flexDirection:'row',
//             gap:5


//         },
//         priseContainer:{
//             height:50,
//            // backgroundColor:'yellow',
//             marginLeft:110,
//             marginTop:20
            
            

            
//         },
//         priseText:{
//             fontSize:22,
//             fontWeight:'bold'

//         }


  

 
// })



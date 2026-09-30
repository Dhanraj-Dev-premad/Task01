// import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
// import React from 'react'
// import MaterialDesignIcons from '@react-native-vector-icons/material-design-icons'

// const CategoriesCard = () => {
     


//   return (
//     <View style={styles.MainContainer}>
       
//                     <View style={styles.CardContainier}>
//             <View style={styles.ImgItemContainer}>

//                 <Image 
//                     style={styles.PhoneImage}
//                     source={require('../AssetsE/Img/ComponentImg/Phone.png')}
//                     resizeMode='cover'
//                 />

//             </View>
//             <View style={styles.discountContainer}>
//                 <Text style={styles.discountText}>49%</Text>

//             </View>
//             <View style={styles.likeContainer}>
//                  <Image 
//                     style={styles.likeImage}
//                     source={require('../AssetsE/Img/ComponentImg/heart.png')}
//                     resizeMode='contain'
//                 />
                

//             </View>
//             <View style={styles.ProductNameConatiner}>
//                 <View style={styles.ProductName}>
//                     <Text style={styles.TextProducName}>iPhone 11 64GB</Text>

//                 </View>
//                 <View style={styles.ProductCompenyName}>
//                     <View>
//                         <Text style={styles.TextProductCompenyName}>Apple</Text>

//                     </View>
//                     <View>
//                         <MaterialDesignIcons
//                             name="check-circle"
//                             size={16}
//                             color="#1DA1F2"
//                         />

//                     </View>
                   


//                 </View>

//             </View>

//             <View style={styles.PriceConatainer}>
//                 <Text style={styles.TextPrice}>$399</Text>

//             </View>

//             <View style={styles.AddButtonConatiner}>
//                 <Pressable onPress={() => console.log('Plus pressed')}>
//                      <MaterialDesignIcons
//                       name="plus"
//                       size={25}
//                       color="white"
//                      />
//                 </Pressable>

//             </View>
            

//         </View>
      
    


                

        
        

//         </View>
        
//   )
// }

// export default CategoriesCard

// const styles = StyleSheet.create(
//     {
//         MainContainer:{
//             flex:1,
//             justifyContent:'center',
//             alignItems:'center',
//            // backgroundColor:'yellow',
            
           
//         },
//         CardContainier:{
//             height:230,
//             width:170,
//             backgroundColor:'#0857A01A',
//             position:'relative',
//             borderRadius:23,
//             overflow: 'hidden',
//             paddingHorizontal:10
//         },
//         ImgItemContainer:{
//             marginTop:5,
//             height:130,
//             width:150,
//             borderRadius:20,

//             backgroundColor:'white',
//             alignSelf:'center',
//             justifyContent:'center',
//             alignItems:'center'
//         },
//         PhoneImage:{
          
//             height:90,
//             width:90,
//            // backgroundColor:'yellow'

//         },
//         discountContainer:{
//             height:20,
//             width:30,
//             borderRadius:5,
//             backgroundColor:'#FFC10780',
//             position:'absolute',
//             top:15,
//             left:20,
//             justifyContent:'center',
//             alignItems:'center'

//         },
//         discountText:{
//             fontSize:14


//         },
//           likeContainer:{
//             height:30,
//             width:35,
//             borderRadius:9999,
//             backgroundColor:'#F2F2F2D1',
//             position:'absolute',
//             top:10,
//             left:113,
//             paddingLeft:8,
//             paddingTop:5

//         },
//         likeImage:{
//             height:20,
//             width:20


//         },
//         ProductNameConatiner:{

//         },
//         ProductName:{

//         },
//         TextProducName:{
//             fontSize:18,
//             fontWeight:'bold'
//         },
//         ProductCompenyName:{
//             flexDirection:'row',
//            gap:15,
//            //justifyContent:'center',
//            alignItems:'center'

//         },
//         TextProductCompenyName:{
//              fontSize:18,
//             fontWeight:'bold',
//             opacity:0.5

//         },
//         PriceConatainer:{
//             marginTop:12



//         },
//         TextPrice:{
//             fontSize:22,
//             fontWeight:'bold',

//         },

        

//         AddButtonConatiner: {
//          position: 'absolute',
//          right: 0,
//          bottom: 0,

//          height: 40,
//          width: 40,

//          backgroundColor: 'black',

//          borderTopLeftRadius: 20,

//          justifyContent: 'center',
//          alignItems: 'center',
// },



//     })































//     import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
// import React from 'react'
// import MaterialDesignIcons from '@react-native-vector-icons/material-design-icons'

// const CategoriesCard = ({ data }) => {

//   return (
//     <View style={styles.MainContainer}>

//       <View style={styles.CardContainier}>

//         {/* Product Image */}
//         <View style={styles.ImgItemContainer}>
//           <Image
//             style={styles.PhoneImage}
//             source={data.image}
//             resizeMode="contain"
//           />
//         </View>

//         {/* Discount */}
//         <View style={styles.discountContainer}>
//           <Text style={styles.discountText}>
//             {data.discount}
//           </Text>
//         </View>

//         {/* Like */}
//         <View style={styles.likeContainer}>
//           <Image
//             style={styles.likeImage}
//             source={require('../AssetsE/Img/ComponentImg/heart.png')}
//             resizeMode="contain"
//           />
//         </View>

//         {/* Product Name */}
//         <View style={styles.ProductNameConatiner}>

//           <Text style={styles.TextProducName}>
//             {data.productName}
//           </Text>

//           {/* Company */}
//           <View style={styles.ProductCompenyName}>

//             <Text style={styles.TextProductCompenyName}>
//               {data.companyName}
//             </Text>

//             <MaterialDesignIcons
//               name="check-circle"
//               size={16}
//               color="#1DA1F2"
//             />

//           </View>

//         </View>

//         {/* Price */}
//         <View style={styles.PriceConatainer}>
//           <Text style={styles.TextPrice}>
//             {data.price}
//           </Text>
//         </View>

//         {/* Add Button */}
//         <View style={styles.AddButtonConatiner}>
//           <Pressable
//             onPress={() => console.log('Plus pressed')}
//             style={styles.AddButton}
//           >
//             <MaterialDesignIcons
//               name="plus"
//               size={25}
//               color="white"
//             />
//           </Pressable>
//         </View>

//       </View>

//     </View>
//   )
// }




import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MaterialDesignIcons from '@react-native-vector-icons/material-design-icons'

const CategoriesCard = ({ data }) => {
  return (
    <View style={styles.MainContainer}>

      <View style={styles.CardContainer}>

        {/* Product Image */}
        <View style={styles.ImgItemContainer}>
          <Image
            style={styles.PhoneImage}
            source={data.image}
            resizeMode="contain"
          />
        </View>

        {/* Discount */}
        <View style={styles.discountContainer}>
          <Text style={styles.discountText}>
            {data.discount}
          </Text>
        </View>

        {/* Like Button */}
        <View style={styles.likeContainer}>
          <Image
            style={styles.likeImage}
            source={require('../AssetsE/Img/ComponentImg/heart.png')}
            resizeMode="contain"
          />
        </View>

        {/* Product Information */}
        <View style={styles.ProductNameContainer}>

          {/* Product Name */}
          <Text
            style={styles.TextProductName}
            numberOfLines={1}
          >
            {data.productName}
          </Text>

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

        </View>

        {/* Price */}
        <View style={styles.PriceContainer}>
          <Text style={styles.TextPrice}>
            {data.price}
          </Text>
        </View>

        {/* Add Button */}
        <View style={styles.AddButtonContainer}>

          <Pressable
            style={styles.AddButton}
            onPress={() => console.log(`${data.productName} Plus pressed`)}
          >
            <MaterialDesignIcons
              name="plus"
              size={25}
              color="white"
            />
          </Pressable>

        </View>

      </View>

    </View>
  )
}

export default CategoriesCard

const styles = StyleSheet.create({

  MainContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  CardContainer: {
    height: 230,
    width: 170,

    backgroundColor: '#0857A01A',

    position: 'relative',

    borderRadius: 23,

    overflow: 'hidden',

    paddingHorizontal: 10,
  },

  /* ---------------- IMAGE ---------------- */

  ImgItemContainer: {
    marginTop: 5,

    height: 130,
    width: 150,

    borderRadius: 20,

    backgroundColor: 'white',

    alignSelf: 'center',

    justifyContent: 'center',
    alignItems: 'center',
  },

  PhoneImage: {
    height: 90,
    width: 90,
  },

  /* ---------------- DISCOUNT ---------------- */

  discountContainer: {
    height: 20,
    width: 30,

    borderRadius: 5,

    backgroundColor: '#FFC10780',

    position: 'absolute',

    top: 15,
    left: 20,

    justifyContent: 'center',
    alignItems: 'center',
  },

  discountText: {
    fontSize: 14,
    fontWeight: '500',
  },

  /* ---------------- LIKE ---------------- */

  likeContainer: {
    height: 30,
    width: 35,

    borderRadius: 9999,

    backgroundColor: '#F2F2F2D1',

    position: 'absolute',

    top: 10,
    right: 10,

    justifyContent: 'center',
    alignItems: 'center',
  },

  likeImage: {
    height: 20,
    width: 20,
  },

  /* ---------------- PRODUCT NAME ---------------- */

  ProductNameContainer: {
    marginTop: 5,
  },

  TextProductName: {
    fontSize: 18,
    fontWeight: 'bold',
  },

  /* ---------------- COMPANY ---------------- */

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

  /* ---------------- PRICE ---------------- */

  PriceContainer: {
    marginTop: 8,
  },

  TextPrice: {
    fontSize: 22,

    fontWeight: 'bold',
  },

  /* ---------------- ADD BUTTON ---------------- */

  AddButtonContainer: {
    position: 'absolute',

    right: 0,
    bottom: 0,

    height: 40,
    width: 40,

    backgroundColor: 'black',

    borderTopLeftRadius: 20,

    justifyContent: 'center',
    alignItems: 'center',
  },

  AddButton: {
    height: '100%',
    width: '100%',

    justifyContent: 'center',
    alignItems: 'center',
  },

})

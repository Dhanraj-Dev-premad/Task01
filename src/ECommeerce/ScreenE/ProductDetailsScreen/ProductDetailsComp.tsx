import { Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import MaterialDesignIcons from '@react-native-vector-icons/material-design-icons'
import { useNavigation } from '@react-navigation/native'



import { useRoute } from '@react-navigation/native';

const ProductDetailsComp = () => {
   const route = useRoute();
   const { data } = route.params ;
const navigation=useNavigation();

  return (
     <SafeAreaView style={styles.safeAreaView}>
        <View style={styles.HeaderIconContainer}>
            {/* <View style={styles.backArrowContainer}> */}
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
                   


                {/* </View> */}
                <Pressable 
                onPress={()=>{console.log("licked licked")}}
                
                style={styles.heartContainer}>
                    <MaterialDesignIcons
                        name="heart-outline"
                        size={30}
                        color="black"
                    />

                </Pressable>

                
                 
        </View>

      <ScrollView style={styles.ScrollViewContainer} contentContainerStyle={styles.Scrollcontent}>

       
        <View style={styles.mainContainer}>
          <View style={styles.ProductImageConatiner}>
            <Pressable
            onPress={()=>navigation.navigate("ProductImageScreen",{data:data.image})}
            
            >
                 <Image
                  style={styles.ProductImage}
                  source={data.image}
                  //source={require('../../AssetsE/Img/ProductDetails/Shoes1.png')}
                />

            </Pressable>
               
                
              <View style={styles.PriceBox}>
                

                <View style={styles.RateBox}>
                    <View style={styles.discountContainer}>
                          <Text style={styles.discountText}>{data.discount}</Text>
                          
                    </View>
                  {/* Price */}
                    <View style={styles.PriceContainer}>
                         <Text style={styles.TextPrice}>{data.price}</Text>
                    </View>
                    

                </View>

                <View style={styles.shareIconecontainer}>
                       <MaterialDesignIcons
                        name="share-variant"
                        size={30}
                        color="black"
                        />

                </View>
               
                


            </View>
         </View>  




                <View style={styles.ProductDetailsContainer}>
                    <View style={styles.ProductNameContainer}>
                        <Text style={{fontSize:22,fontWeight:'bold'}}>{data.productName}</Text>

                    </View>
                    <View style={styles.StockContainer}>
                        <Text style={{fontSize:19}}>Stock:</Text>
                        <Text style={{fontSize:19,fontWeight:'bold'}}>In Stock</Text>

                    </View>

                   {/* Company Name + Verified Icon */}
                    <View style={styles.ProductCompanyName}>

                                <Image
                                  style={styles.brandImage}
                                  source={require('../../AssetsE/Img/ProductDetails/bata.png')}
                                />  
                               <Text style={{fontSize:19,fontWeight:'bold'}}>{data.companyName}</Text>
                   
                               <MaterialDesignIcons
                                 name="check-circle"
                                 size={16}
                                 color="#1DA1F2"
                               />
                   
                    </View>

                </View>

                <View style={styles.ColorCategories}>
                    <View>
                        <Text style={{ fontSize:23,fontWeight:'bold'}}>Color</Text>

                    </View>
                    <View style={styles.ColorConatiner}>
                        <Pressable style={styles.whiteColorBox}>


                        </Pressable>

                        <Pressable style={styles.blackColorBox}>
                            
                        </Pressable>

                        <Pressable style={styles.blueColorBox}>
                            
                        </Pressable>
                        

                    </View>

                </View>

                <View style={styles.StorageCategories}>
                    <View>
                        <Text style={{ fontSize:23,fontWeight:'bold'}}>Storage</Text>

                    </View>
                    <View style={styles.StorageConatiner}>
                        <Pressable style={styles.StorageBox}>
                            <Text style={styles.GbText}>64 GB</Text>


                        </Pressable>

                        <Pressable style={styles.StorageBox}>
                            <Text style={styles.GbText}>256 GB</Text>
                            
                        </Pressable>

                        <Pressable style={styles.StorageBox}>
                            <Text style={styles.GbText}>512 GB</Text>
                            
                        </Pressable>
                        

                    </View>

                </View>
                <View style={styles.CheckOutContaineer}>
                    <Pressable
                    onPress={()=>{navigation.navigate('Cart')}}
                    style={styles.CheckOutButton}
                    >
                        <Text style={styles.TextCheckOut}>Checkout</Text>
                        
                    </Pressable>

                </View>

                

                <View style={styles.DescriptionContainer}>
                    <Text style={styles.DescText} >Description</Text>
                    <Text style={styles.DescContent} >This is a product Description of BATA brands shoes.There are more things that can added but I'm...</Text>
                    <Pressable
                    style={styles.ShowMorebutton}
                    >
                        <Text style={styles.ShowMoreText}>Show more</Text>
                    </Pressable>
                </View>
 

             

          
            
    
        </View>

     </ScrollView>


     {/* bottom tab bar */}
        <View style={styles.BottomBarContainer}>
            <View style={styles.quantitySelectorContainer}>
                
                     <Pressable
                                style={styles.SubButton}
                                onPress={() => console.log(` Sub pressed`)}
                              >
                                <MaterialDesignIcons
                                  name="minus"
                                  size={25}
                                  color="white"
                                />
                              </Pressable>

                
                <Text style={styles.QuantityText}>2</Text>
                
                     <Pressable
                                style={styles.addButton}
                                onPress={() => console.log(` Plus pressed`)}
                              >
                                <MaterialDesignIcons
                                  name="plus"
                                  size={25}
                                  color="white"
                                />
                              </Pressable>


                

            </View>
            <View style={styles.AddToCartContainer}>
                 <View style={styles.CartImageContainer}>
               
                    <Image
                         style={styles.cartImage}
                         source={require('../../AssetsE/Img/Homepage/shoppingBag.png')}
                    />
               
                </View>

                <Text style={styles.addToCartText}>Add TO Cart</Text>


            </View>

        </View>

    </SafeAreaView>
    
  )
}

export default ProductDetailsComp

const styles = StyleSheet.create(
    {
        safeAreaView:{
            //padding:10,
            flex:1,


        },

        HeaderIconContainer:{
            position:'relative',
           
           

            

        },
            backArrowContainer:{
            position:'absolute',
            top:5,
            left:20,
            opacity:0.7,
            zIndex:3

        },
        heartContainer:{
            position:'absolute',
            top:5,
            right:20,
             zIndex:3
        },

        ScrollViewContainer:{
            flex:1,
            padding:10,


        },
        Scrollcontent:{
            marginBottom:100,
        },
        mainContainer:{
            flex:1,
            
            //backgroundColor:'pink',
            position:'relative',
             //justifyContent:'center',
            alignItems:'center',
            paddingTop:10



        },
        ProductImageConatiner:{
            height:370,
            width:'90%',
           // backgroundColor:'green',
           // justifyContent:'center',
            alignItems:'center',
            gap:20


        },
        ProductImage:{
            height:310,
            width:320,
            //backgroundColor:'white'
            backgroundColor: 'transparent'
            

        },
    
         /* ---------------- DISCOUNT ---------------- */

        discountContainer: {
            height: 20,
            width: 30,
            borderRadius: 5,
            backgroundColor: '#FFC10780',
            alignSelf:'baseline',
            justifyContent: 'center',
            marginTop:'8',
           
        },

        discountText: {
            fontSize: 14,
            fontWeight: '500',
            alignSelf:'center'
        },
        /* ---------------- PRICE ---------------- */

        PriceContainer: {
            marginTop: 8,
        },

        TextPrice: {
           fontSize: 22,

        fontWeight: 'bold',
        },
        PriceBox:{
            
            gap:240,
            
            //backgroundColor:'pink',
            flexDirection:'row',
            justifyContent:'center',
            alignItems:'center',
        
            


        },
        shareIconecontainer:{


        },
        RateBox:{
            
            flexDirection:'row',
             justifyContent:'center',
            alignItems:'center',
            gap:10,
           // backgroundColor:'pink',


        },
        ProductDetailsContainer:{
            height:100,
            width:'100%',
           // backgroundColor:'yellow',
            paddingHorizontal:22,
            gap:8
            
          



        },
        ProductNameContainer:{
            height:25,

        },
        StockContainer:{
            height:25,
            flexDirection:'row'

        },
        ProductCompanyName:{
            height:25,
            flexDirection:'row',
            gap:5,
            alignItems:'center',


        },
        TextProductCompanyName:{
            height:25

        },
        brandImage:{
            height:30,
            width:30

        },
        ColorCategories:{
            height:80,
            width:'100%',
          //  backgroundColor:'pink',
            paddingHorizontal:20,
            marginTop:10,
            gap:8
            

        },
        ColorConatiner:{
            height:30,
            flexDirection:'row',
            gap:10,
            alignItems:'center',


        },
        whiteColorBox:{
            height:25,
            width:25,
            borderRadius:999,
            borderWidth:1,
            borderColor:'black',
            backgroundColor:'white'

        },
        blackColorBox:{
            height:25,
            width:25,
            borderRadius:999,
            borderWidth:1,
            borderColor:'black',
            backgroundColor:'black'
            
        },
        blueColorBox:{
            height:25,
            width:25,
            borderRadius:999,
            borderWidth:1,
            borderColor:'black',
            backgroundColor:'blue'
            
        },




        StorageCategories:{
            height:90,
            width:'100%',
           // backgroundColor:'yellow',
            paddingHorizontal:20,
            gap:10
            

        },
        StorageConatiner:{
            height:30,
            flexDirection:'row',
            gap:10,
            alignItems:'center',


        },
        StorageBox:{
            height:35,
            width:65,
            borderRadius:9,
            borderWidth:1,
            borderColor:'black',
            backgroundColor:'white',
            justifyContent:'center',
            alignItems:'center',

        },
      
        GbText:{
            fontSize:16
        },
        CheckOutContaineer:{
            height:70,
            width:'100%',
            paddingHorizontal:25,
          //  backgroundColor:'pink',
            justifyContent:'center',
            alignItems:'center',

        },
        CheckOutButton:{
            height:55,
            width:'100%',
            borderRadius:9,
            backgroundColor:'#0857A0',
             justifyContent:'center',
            alignItems:'center',

        },
        TextCheckOut:{
            fontSize:20,
            color:'white',
            fontWeight:'bold'
        },

        DescriptionContainer:{
            paddingHorizontal:20,
            height:120,
            width:'100%',
          //  backgroundColor:'yellow',
            marginTop:15,
            

        

        },
        DescText:{
        fontSize:23,
        fontWeight:'bold',
            

        },
        DescContent:{
        fontSize:16,
        marginTop:10

        },
        ShowMorebutton:{

        },
        ShowMoreText:{
        fontSize:17,
        fontWeight:'bold',


        },
        BottomBarContainer:{
            height:80,
            width:'100%',
            backgroundColor:'#D9D9D9',
             flexDirection:'row',
          
            gap:50,
            justifyContent:'center',
            alignItems:'center',

        },
         quantitySelectorContainer:{
            height:50,
            width:150,
            flexDirection:'row',
            //backgroundColor:'yellow',
            gap:8,
          //  justifyContent:'center',
            alignItems:'center',



        },
         SubButton:{
            height:45,
            width:45,
            borderRadius:999,
            backgroundColor:'gray',
            justifyContent:'center',
            alignItems:'center',




        },
        QuantityText:{
            fontSize:20

        },
         addButton:{
            height:45,
            width:45,
            borderRadius:999,
            backgroundColor:'black',
            justifyContent:'center',
            alignItems:'center',

        },
        AddToCartContainer:{
             height:50,
            width:150,
            flexDirection:'row',
            backgroundColor:'black',
           borderRadius:11,
            justifyContent:'center',
            alignItems:'center',

        },

        CartImageContainer:{
            height:40,
            width:40,
          
            //backgroundColor:'yellow',
            justifyContent:'center',
            alignItems:'center',
             
           
            
            
            
        },
        cartImage:{
            tintColor:'white',
             resizeMode:'contain',
              height:25,
            width:25,

           

        },
        addToCartText:{
            fontSize:17,
            color:'white'

        },





        



    })
import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'

const ProductImageScreen = () => {
    const route = useRoute();
       const { data } = route.params ;
    const navigation=useNavigation();
  return (
    <View>
        <View style={styles.mainContainer}>
             <Image
             
                  style={styles.ProductImage}
                   source={data}
                  //source={require('../../AssetsE/Img/ProductDetails/Shoes1.png')}
                />
                <Pressable
                onPress={()=>{navigation.goBack()}}
                style={styles.CloseButton}
                >
                    <Text style={styles.CloseText}>Close</Text>

                </Pressable>
            

        </View>
      
    </View>
  )
}

export default ProductImageScreen

const styles = StyleSheet.create(
    {
        mainContainer:{
            justifyContent:'center',
            alignItems:'center',
            padding:30

        },
      
        ProductImage:{
            marginTop:'40%',
            marginBottom:20,
            height:280,
            width:300,
            //backgroundColor:'yellow'


        },
        CloseButton:{
            height:50,
            width:'95%',
            borderRadius:10,
            backgroundColor:'white',
            borderWidth:1,
            borderColor:'black',
            justifyContent:'center',
            alignItems:'center'


        },
        CloseText:{
            fontSize:20,
            fontWeight:'bold'

        },


    })
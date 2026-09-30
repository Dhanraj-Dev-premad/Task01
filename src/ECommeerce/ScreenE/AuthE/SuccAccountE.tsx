import React from 'react';
import {
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const SuccAccountE = ({ route }) => {
  const navigation = useNavigation();
  const {width, height} = useWindowDimensions();
  const { emailVal } = route.params ?? {};

  return (
    <SafeAreaView style={styles.SafeAreaContainer}>
    <View style={styles.Maincontainer}>

     

      {/* Skip Button */}
      <View style={styles.cancleContainer}>
        
          
       
      </View>


      {/* Image */}
      <View style={[styles.imageContainer, {
        width: width , 
      }]}>
        <Image
        source={require('../../AssetsE/Img/LoginImg/PassReset.png')}

           
          resizeMode="contain"
          style={styles.image}
        />
      </View>


      {/* Title + Subtitle */}
      <View style={styles.textContainer}>
        <View style={{height:75,width:'400',}}>
            <Text style={styles.title}>
                Your account successfully created
          
        </Text>

        </View>

       

        



        <View style={{height:100,width:'400',}}>
            <Text style={styles.subtitle}>
         Congratulation! Your account has been successfully created. You can now explore all the amazing features, start personalizing your experiences, and enjoy seamless access to our services. Let's get started!
        </Text>

        </View>

    

      </View>


      {/* Next Button */}
      <View style={styles.DoneContainer}>

        <Pressable
          style={styles.DoneButton}
          onPress={() => navigation.navigate('LoginpageE')}>

          <Text style={styles.DoneText}>
            Done
          </Text>
    
        </Pressable>


      </View>
     
     </View>  

    </SafeAreaView>
  );
};

export default SuccAccountE;


const styles = StyleSheet.create({

  SafeAreaContainer:{
    flex:1,
    padding:10
  },

  // Main screen
  Maincontainer: {
    marginTop:15
   
    
   
  },


  // cancle
  cancleContainer: {
    height: 50,
    width: '100%',
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingHorizontal: 20,
 
    
    
   
  },

  cancleImage: {
    height:25,
    width:25,
    marginTop:25,
    marginRight:10,
    
    
    paddingTop:22,
    
  },


  // Image
  imageContainer: {
    height: 390,
    
    alignItems: 'center',
    justifyContent: 'center',
    

  },

  image: {
    width: '100%',
    height: 390,
  },


  // Text
  textContainer: {
    height:210,
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: 20,
    
    gap:10
    
    
     
  },

  title: {
    fontSize: 33,
    fontWeight: '700',
    color: '#000',
    textAlign: 'center',
  },

  

 

  subtitle: {
    flexWrap:'wrap',
    fontSize: 18,
    fontWeight: '400',
    color: '#222',
    textAlign: 'center',
    paddingHorizontal: 10,
    opacity:0.5
    
    
   
    
  },


  // Done button
  DoneContainer: {
    marginTop:10,
    alignItems: 'center',
    
  },

  DoneButton: {
    width: '84%',
    height: 50,
    backgroundColor: '#0868B7',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },

  DoneText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '500',
  },
  

});
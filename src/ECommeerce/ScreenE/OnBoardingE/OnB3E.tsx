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

const OnB3E = () => {
  const navigation = useNavigation();
 const {width, height} = useWindowDimensions();

  return (
    <SafeAreaView style={styles.Maincontainer}>

      {/* Skip Button */}
      <View style={styles.skipContainer}>
        
      </View>


      {/* Image */}
      <View style={[styles.imageContainer,{
          width:width

      }
      
      ]}>
        <Image
          source={require('../../AssetsE/Img/BordingScreenImg/Im3.png')}
          resizeMode="contain"
          style={styles.image}
        />
      </View>


      {/* Title + Subtitle */}
      <View style={styles.textContainer}>
        <View style={{height:50,width:400,}}>
            <Text style={styles.title}>
          Fast & Reliable Delivery!
        </Text>

        </View>



        <View style={{height:70,width:400,}}>
            <Text style={styles.subtitle}>
          Get your favorit items delivered to your doorstep anytime, anywhere
        </Text>

        </View>

    

      </View>


      {/* Next Button */}
      <View style={styles.nextContainer}>

        <Pressable
          style={styles.nextButton}
          onPress={() => navigation.navigate('LoginpageE')}>

          <Text style={styles.nextText}>
            Next
          </Text>

        </Pressable>

      </View>

    </SafeAreaView>
  );
};

export default OnB3E;


const styles = StyleSheet.create({

  // Main screen
  Maincontainer: {
    flex: 1,
    padding:10
   
  },


  // Skip
  skipContainer: {
    height: 100,
    width: '100%',
    
   
  },

  


  // Image
  imageContainer: {
    height: 400,
    alignItems: 'center',
    justifyContent: 'center',
    
   

  },

  image: {
    width: '100%',
    height: 390,
   
  },


  // Text
  textContainer: {
    height:125,
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom:10,
    
     
  },

  title: {
    fontSize: 33,
    fontWeight: '700',
    color: '#000',
    textAlign: 'center',
    
  },

  subtitle: {
    fontSize: 20,
    fontWeight: '400',
    color: '#222',
    textAlign: 'center',
    paddingHorizontal: 10
    
    
   
    
  },


  // Next button
  nextContainer: {
  
    justifyContent: 'flex-end',
    alignItems: 'center',
   
  },

  nextButton: {
    width: '84%',
    height: 50,
    backgroundColor: '#0868B7',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },

  nextText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '500',
  },

});
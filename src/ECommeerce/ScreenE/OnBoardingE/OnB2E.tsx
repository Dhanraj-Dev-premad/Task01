import React from 'react';
import {
  Image,
  Pressable,

  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

const OnB2E = () => {
  const navigation = useNavigation();
 const {width, height} = useWindowDimensions();

  return (
    <View style={styles.Maincontainer}>

      {/* Skip Button */}
      <View style={styles.skipContainer}>
        <Pressable
          onPress={() => navigation.navigate('LoginpageE')}>
          <Text style={styles.skipText}>
            Skip
          </Text>
        </Pressable>
      </View>


      {/* Image */}
      <View style={[styles.imageContainer,{
          width:width

      }
      
      ]}>
        <Image
          source={require('../../AssetsE/Img/BordingScreenImg/Im2.png')}
          resizeMode="contain"
          style={styles.image}
        />
      </View>


      {/* Title + Subtitle */}
      <View style={styles.textContainer}>
        <View style={{height:50,width:400,}}>
            <Text style={styles.title}>
          Shop Everything You Love!
        </Text>

        </View>



        <View style={{height:70,width:400,}}>
            <Text style={styles.subtitle}>
          Discover top-quality product at the best prices with a seamless shopping experience
        </Text>

        </View>

    

      </View>


      {/* Next Button */}
      <View style={styles.nextContainer}>

        <Pressable
          style={styles.nextButton}
          onPress={() => navigation.navigate('OnB3E')}>

          <Text style={styles.nextText}>
            Next
          </Text>

        </Pressable>

      </View>

    </View>
  );
};

export default OnB2E;


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
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingHorizontal: 20,
   
   
  },

  skipText: {
    fontSize: 18,
    fontWeight: '400',
    color: '#0857A0',
    paddingTop:22
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
    paddingHorizontal: 30,
    marginBottom:10
     
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
    paddingHorizontal: 20
    
    
   
    
  },


  // Next button
  nextContainer: {
  
    alignItems: 'center',
    paddingBottom: 25,
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
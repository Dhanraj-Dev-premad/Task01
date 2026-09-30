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

const VerifyEmailE = ({ route }) => {
  const navigation = useNavigation();
  const {width, height} = useWindowDimensions();
  const { emailVal } = route.params ?? {};

  return (
    <SafeAreaView style={styles.SafeAreaContainer}>
    <View style={styles.Maincontainer}>

     

      {/* Skip Button */}
      <View style={styles.cancleContainer}>
        <Pressable
          onPress={() => navigation.navigate('LoginpageE')}>
            <Image
            source={require('../../AssetsE/Img/LoginImg/cancel.png')}
            style={styles.cancleImage}
            
            />
          
        </Pressable>
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
        <View style={{height:50,width:'400',}}>
            <Text style={styles.title}>
          Verify your email address!
        </Text>

        </View>

        <View style={styles.emailTextBox}>
            <Text style={styles.emailText}>{emailVal || 'No email provided'}</Text>

        </View>

        



        <View style={{height:70,width:'400',}}>
            <Text style={styles.subtitle}>
          We've sent a verification link to your email. Please check your inbox and click the link to Verify your account
        </Text>

        </View>

    

      </View>


      {/* Next Button */}
      <View style={styles.DoneContainer}>

        <Pressable
          style={styles.DoneButton}
          onPress={() => navigation.navigate('SuccAccountE')}>

          <Text style={styles.DoneText}>
            Done
          </Text>
    
        </Pressable>


      </View>
      <View style={styles.ResendEmailContaier}>
        <Text style={styles.ResendEmailText}>Resend Email</Text>
      </View>
     </View>  

    </SafeAreaView>
  );
};

export default VerifyEmailE;


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
    height:180,
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: 20,
    
    
     
  },

  title: {
    fontSize: 34,
    fontWeight: '700',
    color: '#000',
    textAlign: 'center',
  },

  emailTextBox:{
    height:40,
    width:400,
    justifyContent:'center',
    alignItems:'center'

  },
  emailText:{
    fontSize:22,
    color:'black'

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
  ResendEmailContaier:{
    height:30,
    justifyContent:'center',
    alignItems:'center',
    marginTop:10
    
  

  },
  ResendEmailText:{
    fontSize:18,
    color: '#648DDB'
  }

});
import {
  Image,
  Linking,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import CustomCheckBox from '../../../MainComp/CustomCheckBox';
import {useNavigation} from '@react-navigation/native';

const ForgetPassPageE = () => {

  

    
  const [emailVal, setEmailVal] = useState('unknownpro@gmail.com');
 

  const handleSignupData = () => {
    const credentials = {emailVal};
    console.log(credentials);
  };

  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.mainContainer}>

        <View style={styles.arrowContainer}>
               <Pressable
                 onPress={() => navigation.navigate('LoginpageE')}>
                 <Image
                    source={require('../../../ECommeerce/AssetsE/Img/LoginImg/back.png')}
                    resizeMode="contain"
                    style={styles.arrow}
                 />
               </Pressable>
             </View>

        
                <View style={styles.textMainContainer}>
                  {/* for text */}
        
                  <View style={styles.titleContainer}>
                    <Text style={styles.titleText}>
                      Forget Password
                    </Text>
                  </View>
        
                  <View style={styles.subtitleContainer}>
                    <Text style={styles.subtitleText}>
                      No worries! Enter your registered email address, and we'll help you reset your password
                    </Text>
                  </View>
                </View>


        

        <View style={styles.inputMainContainer}>
          {/* for TextInput */}

          
          {/* Email */}
          <View style={styles.inputBox}>
            <Image
              source={require('../../../ECommeerce/AssetsE/Img/LoginImg/mail.png')}
              resizeMode="contain"
              style={styles.inputIcon}
            />

            <TextInput
              placeholder="Email"
              placeholderTextColor="black"
              value={emailVal}
              onChangeText={email => {
                setEmailVal(email);
              }}
              style={styles.textInput}
            />
          </View>
    
         
        </View>


        <View style={styles.buttonsMainContainer}>
          {/* for submit buttons */}

          <Pressable
            onPress={() => navigation.navigate('PassResetE',{ emailVal: emailVal})}
           
            style={styles.submitButton}>
            <Text
              onPress={handleSignupData}
              style={styles.submitText}>
              Submit
            </Text>
          </Pressable>

        </View>

        
      </View>
    </SafeAreaView>
  );
};

export default ForgetPassPageE;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    padding:10,
  },

  mainContainer: {
    flex: 1,
     paddingHorizontal: 20,
  
  },
  // Arrow button

  arrowContainer: {
    height: 100,
    width: '100%',
    justifyContent: 'center',

   
    
    
   
  },

  //arrow
  arrow: {
    height: 30,
    width: 30,
    marginTop: 12,
    opacity:0.6
  },

 

  // Title and subtitle
  textMainContainer: {
    height: 140,
    width: '100%',
  },

  titleContainer: {
    height: 50,
  },

  titleText: {
    fontWeight: '700',
    fontSize: 35,
  },

  subtitleContainer: {
    height: 50,
  },

  subtitleText: {
    fontWeight: '400',
    fontSize: 20,
    opacity: 0.4,
  },

  // Text inputs
  inputMainContainer: {
    height: 100,
    width: '100%',
    gap: 20,
  },

  inputBox: {
    height: 60,
    borderWidth: 2,
    borderColor: '#a5a2a2',
    borderRadius: 18,
    flexDirection: 'row',
  },
   

  inputIcon: {
    height: 30,
    width: 30,
    opacity: 0.3,
    marginLeft: 10,
    marginTop: 12,
  },

  textInput: {
    flex: 1,
    color: 'black',
    fontSize: 22,
    paddingLeft: 25,
  },
 


  // Buttons
  buttonsMainContainer: {
    height: 70,
    width: '100%',
    gap: 10,
  },

  submitButton: {
    height: 60,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    backgroundColor:'#0857A0'
  },

  submitText: {
    fontWeight: 'bold',
    color: '#ffffff',
    fontSize: 22,
  },

 

  

  

 
});

























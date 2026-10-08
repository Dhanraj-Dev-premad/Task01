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

const RegisterPageE = () => {

    const [firstName, setFirstName]=useState('');
    const [secondName, setSecondName]=useState('');

    
  const [emailVal, setEmailVal] = useState('');
  const [phoneNo,setPhoneNO]= useState('');
  const [passwordVal, setPasswordVal] = useState('');
  

  const [isChecked, setIsChecked] = useState(false);
  const [passwordVisiable, setPassowrdVisiable] = useState(true);

  const handleSignupData = () => {
    const credentials = {emailVal, passwordVal,firstName,secondName};
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
              Let's Get you Registered
            </Text>
          </View>

          
        </View>


        

        <View style={styles.inputMainContainer}>
          {/* for TextInput */}

          <View style={styles.NameContainer}>
            {/* for row input box */}
            <View style={styles.NameBox}>
                {/* for first Name box */}
              <Image
              source={require('../../../ECommeerce/AssetsE/Img/LoginImg/user.png')}
              resizeMode="contain"
              style={styles.inputIcon}
              />

              <TextInput
              
              placeholder="First Name"
              placeholderTextColor='#a5a2a2'
              value={firstName}
              onChangeText={firstName => {
                setFirstName(firstName);
              }}
              style={styles.NametextInput}
              />
             </View>

            <View style={styles.NameBox}>
              {/* for last name box */}
              <Image
              source={require('../../../ECommeerce/AssetsE/Img/LoginImg/user.png')}
              resizeMode="contain"
              style={styles.inputIcon}
              />

              <TextInput
              placeholder="Last Name"
              placeholderTextColor='#a5a2a2'
              value={secondName}
              onChangeText={secondName => {
                setSecondName(secondName);
              }}
              style={styles.NametextInput}
              />
            </View>
            


          </View>

          {/* Email */}
          <View style={styles.inputBox}>
            <Image
              source={require('../../../ECommeerce/AssetsE/Img/LoginImg/mail.png')}
              resizeMode="contain"
              style={styles.inputIcon}
            />

            <TextInput
              placeholder="Email"
              placeholderTextColor='#a5a2a2'
              value={emailVal}
              onChangeText={email => {
                setEmailVal(email);
              }}
              style={styles.textInput}
            />
          </View>
          

          <View style={styles.inputBox}>
            {/* for phone no */}
            <Image
              source={require('../../../ECommeerce/AssetsE/Img/LoginImg/phone.png')}
              resizeMode="contain"
              style={styles.inputIcon}
            />

            <TextInput
              placeholder="Phone Number"
              placeholderTextColor='#a5a2a2'
              value={phoneNo}
              onChangeText={phone => {
                setPhoneNO(phone);
              }}
              style={styles.textInput}
            />
          </View>

          {/* Password */}
          <View style={styles.inputBox}>
            <Image
              source={require('../../../ECommeerce/AssetsE/Img/LoginImg/account.png')}
              resizeMode="contain"
              style={styles.inputIcon}
            />

            <TextInput
              placeholder="Password"
              placeholderTextColor='#a5a2a2'
              secureTextEntry={passwordVisiable}
              value={passwordVal}
              onChangeText={pass => {
                setPasswordVal(pass);
              }}
              style={styles.textInput}
            />

            <Pressable
              onPress={() => {
                setPassowrdVisiable(!passwordVisiable);
              }}>
              {passwordVisiable ? (
                <Image
                  source={require('../../../ECommeerce/AssetsE/Img/LoginImg/hide.png')}
                  resizeMode="contain"
                  style={styles.eyeIcon}
                />
              ) : (
                <Image
                  source={require('../../../ECommeerce/AssetsE/Img/LoginImg/view.png')}
                  resizeMode="contain"
                  style={styles.eyeIcon}
                />
              )}
            </Pressable>
          </View>
        </View>

        <View style={styles.rememberMainContainer}>
          {/* forCheck button */}

          <View style={styles.rememberContainer}>
            <View style={styles.checkboxContainer}>
              <CustomCheckBox
                value={isChecked}
                onChange={setIsChecked}
              />
            </View>

            <View style={styles.TextContainer}>
              <Text style={styles.NormalText}>
                I agree to
              </Text>
              
              <Text onPress={()=>{Linking.openURL('https://nagaurisringar.com/privacy')}} style={styles.ColorText}>
                Privacy Policy
              </Text>
              <Text style={styles.NormalText}>
                and
              </Text>
              <Text onPress={()=>{Linking.openURL('https://nagaurisringar.com/terms')}} style={styles.ColorText}>
                Terms of use
              </Text>
            </View>
          </View>

        </View>

        <View style={styles.buttonsMainContainer}>
          {/* for buttons */}

          <Pressable
            onPress={() => navigation.navigate('LoginpageE')}
            disabled={!isChecked}
            style={[
              styles.signInButton,
              {
                backgroundColor: isChecked
                  ? '#0857A0'
                  : '#dddddd',
              },
            ]}>
            <Text
              onPress={handleSignupData}
              style={styles.signInText}>
              Create Account
            </Text>
          </Pressable>

        </View>

        <View style={styles.OrText}>
          <View style={styles.LineView} />

          <Text style={styles.orText}>
            Or Sign In With
          </Text>

          <View style={styles.LineView} />
        </View>

        <View style={styles.socialMainContainer}>
          {/* for google and facebook */}

          <View style={styles.socialIconContainer}>
            <Image
              source={require('../../../ECommeerce/AssetsE/Img/LoginImg/google.png')}
              resizeMode="contain"
              style={styles.socialIcon}
            />
          </View>

          <View style={styles.socialIconContainer}>
            <Image
              source={require('../../../ECommeerce/AssetsE/Img/LoginImg/facebook.png')}
              resizeMode="contain"
              style={styles.socialIcon}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default RegisterPageE;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    padding: 10,
  },

  mainContainer: {
    flex: 1,
    paddingHorizontal:20
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

  NameContainer:{
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    gap:20,
  },

  // Title and subtitle
  textMainContainer: {
    height: 50,
    width: '100%',
  },

  titleContainer: {
    height: 50,
  },

  titleText: {
    fontWeight: '700',
    fontSize: 33,
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
    height: 300,
    width: '100%',
    gap: 20,
  },

  inputBox: {
    height: 50,
    borderWidth: 1,
    borderColor: '#a5a2a2',
    borderRadius: 9,
    flexDirection: 'row',
  },
   NameBox: {
    height: 50,
    width:173,
    borderWidth: 1,
    borderColor: '#a5a2a2',
    borderRadius: 9,
    flexDirection: 'row',
  },

  inputIcon: {
    height: 25,
    width: 25,
    opacity: 0.3,
    marginLeft: 10,
    marginTop: 12,
  },

  textInput: {
    flex: 1,
    color: 'black',
    fontSize: 18,
    paddingLeft: 25,
  },
  NametextInput: {
    flex: 1,
    color: 'black',
    fontSize: 18,
   alignSelf:'center',
   marginLeft:8,
  },
  

  eyeIcon: {
    height: 30,
    width: 30,
    opacity: 0.3,
    marginTop: 12,
    marginRight: 8,
  },

  // Remember me + Forgot password
  rememberMainContainer: {
    height: 80,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 50,
  },

  rememberContainer: {
    height: 40,
    width: 155,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },

  checkboxContainer: {
    marginBottom: 8,
  },

 TextContainer: {
    height: 35,
    flexDirection:'row',
    gap:2
  },

  NormalText: {
    fontSize: 20,
  },
  ColorText:{
    fontSize: 20,
    color: '#648DDB'

  },


  // Buttons
  buttonsMainContainer: {
    height: 70,
    width: '100%',
    gap: 10,
  },

  signInButton: {
    height: 55,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },

  signInText: {
    fontWeight: 'bold',
    color: '#ffffff',
    fontSize: 22,
  },

  createAccountButton: {
    height: 60,
    width: '100%',
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    borderWidth: 2,
  },

  createAccountText: {
    fontWeight: 'bold',
    color: '#000000',
    fontSize: 22,
  },

  // Or Sign In With
  OrText: {
    height: 35,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 0.2,
  },

  LineView: {
    height: 2,
    width: 100,
    backgroundColor: 'black',
  },

  orText: {
    fontSize: 20,
    marginLeft: 10,
    marginRight: 10,
    color: 'black',
  },

  // Social icons
  socialMainContainer: {
    height: 80,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },

  socialIconContainer: {
    height: 65,
    width: 65,
    borderRadius: 9999,
     justifyContent: 'center',
    alignItems: 'center',
    borderWidth:1,
   borderColor:'#BEBEBE',

  },

  socialIcon: {
    height: 40,
    width: 40,
  },
});

























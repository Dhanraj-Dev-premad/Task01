import React, { useContext } from 'react';

import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  StatusBar,
} from 'react-native';

import {SafeAreaView} from 'react-native-safe-area-context';

import MaterialDesignIcons from '@react-native-vector-icons/material-design-icons';
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../../Context/AuthContextE';



const EditProfileScreenE = () => {
   const {user} = useContext(AuthContext);
  
   const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container} edges={['top', 'bottom']}>

      <StatusBar barStyle="dark-content" />

      {/*  HEADER  */}

      <View style={styles.header}>

        {/* Back button */}

        <TouchableOpacity
          style={styles.backButton}
          activeOpacity={0.7}
          onPress={() => {
             navigation.goBack();
          }}
        >
          <MaterialDesignIcons
            name="arrow-left"
            size={22}
            color="#111111"
          />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>
          Edit Profile
        </Text>

      </View>


      {/*  PROFILE IMAGE  */}

      <View style={styles.profileImageContainer}>

        <Image
          source={require('../../AssetsE/Img/CustomBottomTabImages/user.png')}
          style={styles.profileImage}
          resizeMode="cover"
        />

      </View>


      {/*  DIVIDER  */}

      <View style={styles.divider} />


      {/*  ACCOUNT SETTINGS  */}

      <Text style={styles.sectionTitle}>
        Account Settings
      </Text>


      {/* NAME */}

      <TouchableOpacity
        style={styles.row}
        activeOpacity={0.7}
        onPress={()=>{navigation.navigate("ChangeNameScreenE")}}
      >

        <Text style={styles.label}>
          Name
        </Text>

        <View style={styles.valueContainer}>

          <Text style={styles.value}>
           {user.firstName} {user.lastName}
          </Text>

          <MaterialDesignIcons
            name="chevron-right"
            size={21}
            color="#111111"
          />

        </View>

      </TouchableOpacity>


      {/* USERNAME */}

      <TouchableOpacity
        style={styles.row}
        activeOpacity={0.7}
      >

        <Text style={styles.label}>
          Username
        </Text>

        <View style={styles.valueContainer}>

          <Text style={styles.value}>
            {user.userName}
          </Text>

          <MaterialDesignIcons
            name="chevron-right"
            size={21}
            color="#111111"
          />

        </View>

      </TouchableOpacity>


      {/* DIVIDER */}

      <View style={styles.divider} />


      {/*  PROFILE SETTINGS  */}

      <Text style={styles.sectionTitle}>
        Profile Settings
      </Text>


      {/* USER ID */}

      <View style={styles.row}>

        <Text style={styles.label}>
          User ID
        </Text>

        <View style={styles.valueContainer}>

          <Text style={styles.value}>
            232345
          </Text>

          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => {
              // Copy User ID later
            }}
          >
            <MaterialDesignIcons
              name="content-copy"
              size={18}
              color="#111111"
            />
          </TouchableOpacity>

        </View>

      </View>


      {/* EMAIL */}

      <TouchableOpacity
        style={styles.row}
        activeOpacity={0.7}
      >

        <Text style={styles.label}>
          Email
        </Text>

        <View style={styles.valueContainer}>

          <Text style={styles.value}>
            {user.gmail}
          </Text>

          <MaterialDesignIcons
            name="chevron-right"
            size={21}
            color="#111111"
          />

        </View>

      </TouchableOpacity>


      {/* PHONE NUMBER */}

      <TouchableOpacity
        style={styles.row}
        activeOpacity={0.7}
      >

        <Text style={styles.label}>
          Phone Number
        </Text>

        <View style={styles.valueContainer}>

          <Text style={styles.value}>
            {user.phoneNo}
          </Text>

          <MaterialDesignIcons
            name="chevron-right"
            size={21}
            color="#111111"
          />

        </View>

      </TouchableOpacity>


      {/* GENDER */}

      <TouchableOpacity
        style={styles.row}
        activeOpacity={0.7}
      >

        <Text style={styles.label}>
          Gender
        </Text>

        <View style={styles.valueContainer}>

          <Text style={styles.value}>
            {user.gender}
          </Text>

          <MaterialDesignIcons
            name="chevron-right"
            size={21}
            color="#111111"
          />

        </View>

      </TouchableOpacity>


      {/* DIVIDER */}

      <View style={styles.divider} />


      {/*  CLOSE ACCOUNT  */}

      <TouchableOpacity
        style={styles.closeAccountButton}
        activeOpacity={0.7}
        onPress={()=>{navigation.goBack()}}
          
      >

        <Text style={styles.closeAccountText}>
          Close Account
        </Text>

      </TouchableOpacity>

    </SafeAreaView>
  );
};

export default EditProfileScreenE;


/*                     STYLES                        */

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal:10
  },


  /*  HEADER  */

  header: {
    height: 55,

    flexDirection: 'row',
    alignItems: 'center',

    paddingHorizontal: 18,
  },

  backButton: {
    width: 30,
    height: 40,

    justifyContent: 'center',
    alignItems: 'flex-start',
  },

  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#111111',

    marginLeft: 1,
  },


  /*  PROFILE IMAGE  */

  profileImageContainer: {
    width: 92,
    height: 92,

    borderRadius: 46,

    alignSelf: 'center',

    borderWidth: 3,
    borderColor: '#1260A8',

    justifyContent: 'center',
    alignItems: 'center',

    overflow: 'hidden',

    marginTop: 7,
    marginBottom: 27,
  },

  profileImage: {
    width: 86,
    height: 86,

    borderRadius: 43,
  },


  /*  DIVIDER  */

  divider: {
    height: 1,

    backgroundColor: '#D9D9D9',

    marginHorizontal: 18,

    marginBottom: 18,
  },


  /*  SECTION  */

  sectionTitle: {
    fontSize: 22,

    fontWeight: 'bold',

    color: '#111111',

    marginHorizontal: 18,

    marginBottom: 9,
  },


  /*  ROW  */

  row: {
    minHeight: 32,

    flexDirection: 'row',

    alignItems: 'center',

    marginHorizontal: 18,

    marginBottom: 2,
  },


  label: {
    width: 150,

    fontSize: 16,

    color: '#8B8B8B',
  },


  valueContainer: {
    flex: 1,

    flexDirection: 'row',

    alignItems: 'center',

    justifyContent: 'space-between',
  },


  value: {
    fontSize: 16,

    color: '#333333',
  },


  /*  CLOSE ACCOUNT  */

  closeAccountButton: {
    alignSelf: 'center',

    marginTop: 1,

    paddingVertical: 8,

    paddingHorizontal: 15,
  },

  closeAccountText: {
    fontSize: 16,

    color: '#FF4B32',

    fontWeight: '400',
  },

});
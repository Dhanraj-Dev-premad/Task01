import React, { useContext } from 'react';

import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  StatusBar,
  Alert,
} from 'react-native';

import {SafeAreaView} from 'react-native-safe-area-context';

import MaterialDesignIcons from '@react-native-vector-icons/material-design-icons';

 import {useNavigation} from '@react-navigation/native';
import { AuthContext } from '../../Context/AuthContextE';

const ProfileE = () => {
  const {user, logout} = useContext(AuthContext);
   const handleLogout = async () => {

    try {

      await logout();

    } catch (error) {

      console.log('Logout Error:', error);

      Alert.alert(
        'Error',
        'Unable to logout',
      );
    }
  };
  
   const navigation = useNavigation();

  return (
    <SafeAreaView
      style={styles.container}
      edges={['top', 'bottom']}
    >

      {/*  STATUS BAR  */}

      <StatusBar barStyle="dark-content" />


      {/*  HEADER  */}

      <View style={styles.header}>

        {/* Blue background image */}

        <Image
          source={require('../../AssetsE/Img/ProfileImage/BlueBorder.png')}
          style={styles.backgroundImage}
          resizeMode="cover"
        />


        {/* Profile Image */}

        <View style={styles.profileImageContainer}>

          <Image
            source={require('../../AssetsE/Img/CustomBottomTabImages/user.png')}
            style={styles.profileImage}
          />

        </View>

      </View>


      {/*  PROFILE INFO  */}

      <View style={styles.profileInfo}>

        <View style={styles.userInfo}>

          <Text style={styles.name}>
           {user.firstName} {user.lastName}
          </Text>

          <Text style={styles.email}>
            {user.gmail}
          </Text>

        </View>


        {/* Edit */}

        <TouchableOpacity
          style={styles.editButton}
          activeOpacity={0.7}
          onPress={()=>{navigation.navigate("EditProfileScreenE")}}
        >

          <MaterialDesignIcons
            name="pencil-outline"
            size={25}
            color="#222222"
          />

        </TouchableOpacity>

      </View>


      {/*  ACCOUNT SETTINGS  */}

      <Text style={styles.heading}>
        Account Settings
      </Text>


      {/*  MY ADDRESSES  */}

      <TouchableOpacity
        style={styles.settingRow}
        activeOpacity={0.7}
        onPress={() => {
           navigation.navigate('AddressE');
        }}
      >

        <View style={styles.iconContainer}>

          <MaterialDesignIcons
            name="map-marker-outline"
            size={27}
            color="#0066CC"
          />

        </View>

        <View style={styles.settingText}>

          <Text style={styles.title}>
            My Addresses
          </Text>

          <Text style={styles.subtitle}>
            Set shopping delivery addresses
          </Text>

        </View>

      </TouchableOpacity>


      {/*  MY CART  */}

      <TouchableOpacity
        style={styles.settingRow}
        activeOpacity={0.7}
        onPress={() => {
         navigation.navigate('WishlistE');
        }}
      >

        <View style={styles.iconContainer}>

          <MaterialDesignIcons
            name="cart-outline"
            size={27}
            color="#0066CC"
          />

        </View>

        <View style={styles.settingText}>

          <Text style={styles.title}>
            My Cart
          </Text>

          <Text style={styles.subtitle}>
            Add, remove products and move to checkout
          </Text>

        </View>

      </TouchableOpacity>


      {/*  MY ORDERS  */}

      <TouchableOpacity
        style={styles.settingRow}
        activeOpacity={0.7}
        onPress={() => {
        navigation.navigate('MyOrdersScreenE');
        }}
      >

        <View style={styles.iconContainer}>

          <MaterialDesignIcons
            name="shopping-outline"
            size={27}
            color="#0066CC"
          />

        </View>

        <View style={styles.settingText}>

          <Text style={styles.title}>
            My Orders
          </Text>

          <Text style={styles.subtitle}>
            In-progress and Completed Orders
          </Text>

        </View>

      </TouchableOpacity>


      {/* ================= LOGOUT  */}

      <TouchableOpacity
        style={styles.logoutButton}
        activeOpacity={0.7}
        onPress={handleLogout}      >

        <Text style={styles.logoutText}>
          Logout
        </Text>

      </TouchableOpacity>


    </SafeAreaView>
  );
};

export default ProfileE;


/*                     STYLES                        */

const styles = StyleSheet.create({

  /*  CONTAINER  */

  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },


  /*  HEADER  */

  header: {
    height: 175,
    position: 'relative',
    overflow: 'hidden',
  },


  /*  BLUE BACKGROUND IMAGE  */

  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,

    width: '100%',
    height: 150,
  },


  /*  PROFILE IMAGE  */

  profileImageContainer: {
    position: 'absolute',

    top: 30,
    left: '50%',

    marginLeft: -58,

    width: 116,
    height: 116,

    borderRadius: 58,

    backgroundColor: '#FFFFFF',

    borderWidth: 5,
    borderColor: '#FFFFFF',

    justifyContent: 'center',
    alignItems: 'center',

    elevation: 5,

    shadowColor: '#000000',

    shadowOffset: {
      width: 0,
      height: 2,
    },

    shadowOpacity: 0.2,
    shadowRadius: 4,
  },


  profileImage: {
    width: 106,
    height: 106,

    borderRadius: 53,
  },


  /*  PROFILE INFO  */

  profileInfo: {
    flexDirection: 'row',

    justifyContent: 'space-between',
    alignItems: 'center',

    paddingHorizontal: 30,

    marginTop: 2,
  },


  userInfo: {
    flex: 1,
  },


  name: {
    fontSize: 18,

    fontWeight: '700',

    color: '#111111',
  },


  email: {
    fontSize: 14,

    color: '#555555',

    marginTop: 4,
  },


  /*  EDIT  */

  editButton: {
    width: 40,
    height: 40,

    justifyContent: 'center',
    alignItems: 'center',
  },


  /*  ACCOUNT SETTINGS  */

  heading: {
    fontSize: 22,

    fontWeight: 'bold',

    color: '#111111',

    marginTop: 25,

    marginBottom: 13,

    paddingHorizontal: 30,
  },


  /*  SETTINGS ROW  */

  settingRow: {
    flexDirection: 'row',

    alignItems: 'center',

    paddingHorizontal: 30,

    marginBottom: 20,

    minHeight: 45,
  },


  iconContainer: {
    width: 38,

    alignItems: 'center',

    justifyContent: 'center',

    marginRight: 13,
  },


  settingText: {
    flex: 1,

    justifyContent: 'center',
  },


  title: {
    fontSize: 16,

    fontWeight: '600',

    color: '#111111',
  },


  subtitle: {
    fontSize: 13,

    color: '#999999',

    marginTop: 5,
  },


  /*  LOGOUT  */

  logoutButton: {
    height: 45,

    marginHorizontal: 42,

    marginTop: 5,

    borderWidth: 1,

    borderColor: '#222222',

    borderRadius: 10,

    justifyContent: 'center',

    alignItems: 'center',
  },


  logoutText: {
    fontSize: 15,

    fontWeight: '600',

    color: '#111111',
  },

});



































// // import { StyleSheet, Text, View } from 'react-native'
// // import React from 'react'

// // const ProfileE = () => {
// //   return (
// //     <View>
// //       <Text>Profile</Text>
// //     </View>
// //   )
// // }

// // export default ProfileE

// // const styles = StyleSheet.create({})



// import React, {useContext} from 'react';
// import {
//   View,
//   Text,
//   Pressable,
//   StyleSheet,
// } from 'react-native';
// import { AuthContext } from '../../Context/AuthContextE';



// const ProfileE = () => {
//   const {gmail, logout} = useContext(AuthContext);

//   return (
//     <View style={styles.container}>

//       <Text style={styles.title}>
//         Hello {gmail}
//       </Text>

//       <Pressable
//         style={styles.logoutButton}
//         onPress={logout}
//       >
//         <Text style={styles.logoutText}>
//           Logout
//         </Text>
//       </Pressable>

//     </View>
//   );
// };

// export default ProfileE;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#ffffff',
//     padding: 20,
//   },

//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: '#111827',
//     marginBottom: 25,
//   },

//   logoutButton: {
//     backgroundColor: '#4F46E5',
//     paddingVertical: 12,
//     paddingHorizontal: 35,
//     borderRadius: 8,
//   },

//   logoutText: {
//     color: '#ffffff',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
// });












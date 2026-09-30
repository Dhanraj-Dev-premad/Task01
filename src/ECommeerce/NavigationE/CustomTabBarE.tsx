import React from 'react';
import {
  Image,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import {SafeAreaView} from 'react-native-safe-area-context';

const CustomTabBarE = ({ navigation}) => {

  const goToScreen = (screenName) => {
    navigation.navigate(screenName);
  };

  return (
    

      <View
        style={{
          flexDirection: 'row',
          height: 70,
          alignItems: 'center',
          justifyContent: 'space-around',
          backgroundColor: '#ffffff',
          
        }}>

        {/* HOME */}
        <TouchableOpacity
          onPress={() => goToScreen('HomeE')}
          style={{
            alignItems: 'center',
            justifyContent: 'center',
          }}>

          <Image
            source={require('../AssetsE/Img/CustomBottomTabImages/home.png')}
            style={{
              width: 25,
              height: 25,
            }}
          />

          <Text
            style={{
              marginTop: 5,
              fontSize: 12,
            }}>
            Home
          </Text>

        </TouchableOpacity>


        {/* STORE */}
        <TouchableOpacity
          onPress={() => goToScreen('StoreE')}
          style={{
            alignItems: 'center',
            justifyContent: 'center',
          }}>

          <Image
            source={require('../AssetsE/Img/CustomBottomTabImages/store.png')}
            style={{
              width: 25,
              height: 25,
            }}
          />

          <Text
            style={{
              marginTop: 5,
              fontSize: 12,
            }}>
            Store
          </Text>

        </TouchableOpacity>


        {/* WISHLIST */}
        <TouchableOpacity
          onPress={() => goToScreen('WishlistE')}
          style={{
            alignItems: 'center',
            justifyContent: 'center',
          }}>

          <Image
            source={require('../AssetsE/Img/CustomBottomTabImages/wishlist.png')}
            style={{
              width: 25,
              height: 25,
            }}
          />

          <Text
            style={{
              marginTop: 5,
              fontSize: 12,
            }}>
            Wishlist
          </Text>

        </TouchableOpacity>


        {/* PROFILE */}
        <TouchableOpacity
          onPress={() => goToScreen('ProfileE')}
          style={{
            alignItems: 'center',
            justifyContent: 'center',
          }}>

          <Image
            source={require('../AssetsE/Img/CustomBottomTabImages/user.png')}
            style={{
              width: 25,
              height: 25,
            }}
          />

          <Text
            style={{
              marginTop: 5,
              fontSize: 12,
            }}>
            Profile
          </Text>

        </TouchableOpacity>

      </View>

    
  );
};

export default CustomTabBarE;

import React, {useContext} from 'react';
import {
  View,
  Text,
  Pressable,
  StyleSheet,
} from 'react-native';

import {AuthContext} from '../context/AuthContextf';

const HomeScreen = () => {
  const {gmail, logout} = useContext(AuthContext);

  return (
    <View style={styles.container}>

      <Text style={styles.title}>
        Hello {gmail}
      </Text>

      <Pressable
        style={styles.logoutButton}
        onPress={logout}
      >
        <Text style={styles.logoutText}>
          Logout
        </Text>
      </Pressable>

    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    padding: 20,
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 25,
  },

  logoutButton: {
    backgroundColor: '#4F46E5',
    paddingVertical: 12,
    paddingHorizontal: 35,
    borderRadius: 8,
  },

  logoutText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

























// import React, {
//   useContext,
// } from 'react';

// import {
//   View,
//   Text,
//   FlatList,
//   Pressable,
//   StyleSheet,
// } from 'react-native';

// import {AuthContext} from '../context/AuthContextf';

// import FeatureCard from '../components/FeatureCardf';

// import ProductCard from '../components/ProductCardf';


// const HomeScreen = () => {

//   const {
//     gmail,
//     logout,
//   } = useContext(AuthContext);


//   const username =
//     gmail
//       ? gmail.split('@')[0]
//       : 'User';


//   // --------------------------------
//   // FEATURES
//   // --------------------------------

//   const features = [

//     {
//       id: '1',
//       icon: '⚡',
//       title: 'Fast',
//       description:
//         'Fast and smooth application.',
//     },

//     {
//       id: '2',
//       icon: '🔒',
//       title: 'Secure',
//       description:
//         'Your account is protected.',
//     },

//     {
//       id: '3',
//       icon: '👍',
//       title: 'Easy',
//       description:
//         'Simple and easy to use.',
//     },

//   ];


//   // --------------------------------
//   // PRODUCTS
//   // --------------------------------

//   const products = [

//     {
//       id: '1',
//       name: 'Product One',
//       price: '$29',
//       image:
//         'https://picsum.photos/500/300?random=1',
//     },

//     {
//       id: '2',
//       name: 'Product Two',
//       price: '$39',
//       image:
//         'https://picsum.photos/500/300?random=2',
//     },

//     {
//       id: '3',
//       name: 'Product Three',
//       price: '$49',
//       image:
//         'https://picsum.photos/500/300?random=3',
//     },

//   ];


//   // --------------------------------
//   // HEADER
//   // --------------------------------

//   const renderHeader = () => {

//     return (

//       <View>

//         {/* TOP */}

//         <View style={styles.topSection}>

//           <View>

//             <Text style={styles.smallText}>
//               Welcome back
//             </Text>

//             <Text style={styles.username}>
//               {username}
//             </Text>

//           </View>


//           <Pressable
//             style={styles.logoutButton}
//             onPress={logout}
//           >

//             <Text style={styles.logoutText}>
//               Logout
//             </Text>

//           </Pressable>

//         </View>


//         {/* FEATURES */}

//         <Text style={styles.sectionTitle}>
//           Features
//         </Text>


//         <View style={styles.features}>

//           {features.map((item) => (

//             <FeatureCard
//               key={item.id}
//               icon={item.icon}
//               title={item.title}
//               description={item.description}
//             />

//           ))}

//         </View>


//         {/* PRODUCTS */}

//         <Text style={styles.sectionTitle}>
//           Products
//         </Text>

//       </View>
//     );
//   };


//   // --------------------------------
//   // PRODUCT
//   // --------------------------------

//   const renderProduct = ({
//     item,
//   }) => {

//     return (
//       <ProductCard
//         item={item}
//       />
//     );
//   };


//   // --------------------------------
//   // UI
//   // --------------------------------

//   return (

//     <View style={styles.container}>

//       <FlatList

//         data={products}

//         keyExtractor={(item) =>
//           item.id
//         }

//         renderItem={renderProduct}

//         ListHeaderComponent={
//           renderHeader
//         }

//         contentContainerStyle={
//           styles.content
//         }

//         showsVerticalScrollIndicator={
//           false
//         }

//       />

//     </View>
//   );
// };


// export default HomeScreen;


// const styles = StyleSheet.create({

//   container: {
//     flex: 1,
//     backgroundColor: '#F3F4F6',
//   },


//   content: {
//     padding: 20,
//     paddingBottom: 40,
//   },


//   topSection: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: 25,
//   },


//   smallText: {
//     fontSize: 14,
//     color: '#6B7280',
//   },


//   username: {
//     fontSize: 26,
//     fontWeight: 'bold',
//     color: '#111827',
//     marginTop: 3,
//   },


//   logoutButton: {
//     backgroundColor: '#EF4444',
//     paddingHorizontal: 15,
//     paddingVertical: 10,
//     borderRadius: 9,
//   },


//   logoutText: {
//     color: '#FFFFFF',
//     fontWeight: 'bold',
//   },


//   sectionTitle: {
//     fontSize: 21,
//     fontWeight: 'bold',
//     color: '#111827',
//     marginBottom: 14,
//     marginTop: 5,
//   },


//   features: {
//     marginBottom: 20,
//   },

// });
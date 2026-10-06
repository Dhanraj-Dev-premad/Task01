// import React from 'react';
// import {
//   Pressable,
//   StyleSheet,
//   Text,
//   View,
// } from 'react-native';
// import MaterialDesignIcons from '@react-native-vector-icons/material-design-icons';

// const SelectAddress = () => {
//   return (
//     <View style={styles.container}>

//       {/* DARK OVERLAY */}
//       <View style={styles.overlay} />

//       {/* ADDRESS BOTTOM SHEET */}
//       <View style={styles.bottomSheet}>

//         {/* HANDLE */}
//         <View style={styles.handle} />

//         {/* TITLE */}
//         <Text style={styles.title}>
//           Select Address
//         </Text>

//         {/* ADDRESS 1 */}
//         <Pressable style={styles.addressCard}>

//           <View style={styles.addressContent}>
//             <Text style={styles.name}>
//               Unknown Pro
//             </Text>

//             <Text style={styles.phone}>
//               +92123456789
//             </Text>

//             <Text style={styles.address}>
//               House No.295, Hyderabad, Sindh, Pakistan
//             </Text>
//           </View>

//           {/* SELECTED ICON */}
//           <View style={styles.selectedCircle}>
//             <MaterialDesignIcons
//               name="check"
//               size={16}
//               color="#FFFFFF"
//             />
//           </View>

//         </Pressable>

//         {/* ADDRESS 2 */}
//         <Pressable style={styles.addressCard}>

//           <View style={styles.addressContent}>
//             <Text style={styles.name}>
//               Pro Unknown
//             </Text>

//             <Text style={styles.phone}>
//               +92123456789
//             </Text>

//             <Text style={styles.address}>
//               House No.295, Hyderabad, Sindh, Pakistan
//             </Text>
//           </View>

//         </Pressable>

//         {/* ADD NEW ADDRESS */}
//         <Pressable
//           style={styles.addButton}
//           onPress={() => {
//             console.log('Add new address');
//           }}>
//           <Text style={styles.addButtonText}>
//             Add new address
//           </Text>
//         </Pressable>

//       </View>
//     </View>
//   );
// };

// export default SelectAddress;

// const styles = StyleSheet.create({

//   /* FULL SCREEN */

//   container: {
//     flex: 1,
//     backgroundColor: 'transparent',
//   },

//   /* DARK OVERLAY */

//   overlay: {
//     ...StyleSheet.absoluteFillObject,
//     backgroundColor: 'rgba(0, 0, 0, 0.50)',
//   },

//   /* BOTTOM SHEET */

//   bottomSheet: {
//     position: 'absolute',

//     left: 0,
//     right: 0,
//     bottom: 0,

//     height: '47%',

//     backgroundColor: '#FFFFFF',

//     borderTopLeftRadius: 16,
//     borderTopRightRadius: 16,

//     paddingTop: 12,
//     paddingHorizontal: 20,

//     elevation: 10,
//   },

//   /* HANDLE */

//   handle: {
//     width: 32,
//     height: 5,

//     backgroundColor: '#D8D8D8',

//     borderRadius: 10,

//     alignSelf: 'center',

//     marginBottom: 26,
//   },

//   /* TITLE */

//   title: {
//     fontSize: 17,
//     fontWeight: '700',

//     color: '#111111',

//     marginBottom: 18,
//   },

//   /* ADDRESS CARD */

//   addressCard: {
//     minHeight: 76,

//     borderWidth: 1,
//     borderColor: '#D2D2D2',

//     borderRadius: 8,

//     marginBottom: 12,

//     paddingVertical: 11,
//     paddingHorizontal: 12,

//     flexDirection: 'row',

//     alignItems: 'center',

//     justifyContent: 'space-between',
//   },

//   /* FIRST SELECTED CARD */

//   addressContent: {
//     flex: 1,
//     paddingRight: 10,
//   },

//   /* NAME */

//   name: {
//     fontSize: 13,
//     fontWeight: '700',

//     color: '#111111',

//     marginBottom: 4,
//   },

//   /* PHONE */

//   phone: {
//     fontSize: 10,

//     color: '#333333',

//     marginBottom: 5,
//   },

//   /* ADDRESS */

//   address: {
//     fontSize: 10,

//     color: '#333333',

//     lineHeight: 14,
//   },

//   /* SELECTED CHECK */

//   selectedCircle: {
//     width: 17,
//     height: 17,

//     borderRadius: 10,

//     backgroundColor: '#0865B5',

//     alignItems: 'center',
//     justifyContent: 'center',
//   },

//   /* ADD ADDRESS BUTTON */

//   addButton: {
//     height: 37,

//     backgroundColor: '#0865B5',

//     borderRadius: 7,

//     alignItems: 'center',
//     justifyContent: 'center',

//     marginTop: 5,

//     marginHorizontal: 8,
//   },

//   addButtonText: {
//     color: '#FFFFFF',

//     fontSize: 13,

//     fontWeight: '500',
//   },
// });












import React from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import MaterialDesignIcons from '@react-native-vector-icons/material-design-icons';
import { useNavigation } from '@react-navigation/native';

const SelectAddress = () => {
  const navigation=useNavigation();
  return (
    <View style={styles.container}>

      {/* DARK OVERLAY */}
      <View style={styles.overlay} />

      {/* ADDRESS BOTTOM SHEET */}
      <View style={styles.bottomSheet}>

        {/* HANDLE */}
        <View style={styles.handle} />

        {/* TITLE */}
        <Text style={styles.title}>
          Select Address
        </Text>

        {/* ADDRESS 1 */}
        <Pressable style={styles.addressCardSelected}>

          <View style={styles.addressContent}>

            <Text style={styles.name}>
              Unknown Pro
            </Text>

            <Text style={styles.phone}>
              +92123456789
            </Text>

            <Text style={styles.address}>
              House No.295, Hyderabad, Sindh, Pakistan
            </Text>

          </View>

          {/* SELECTED CHECK */}
          <View style={styles.selectedCircle}>
            <MaterialDesignIcons
              name="check"
              size={14}
              color="#FFFFFF"
            />
          </View>

        </Pressable>

        {/* ADDRESS 2 */}
        <Pressable style={styles.addressCard}>

          <View style={styles.addressContent}>

            <Text style={styles.name}>
              Pro Unknown
            </Text>

            <Text style={styles.phone}>
              +92123456789
            </Text>

            <Text style={styles.address}>
              House No.295, Hyderabad, Sindh, Pakistan
            </Text>

          </View>

        </Pressable>

        {/* ADD NEW ADDRESS */}
        <Pressable
          style={styles.addButton}
          onPress={()=>{navigation.navigate("PaymentSuccessE")}}>

          <Text style={styles.addButtonText}>
            Add new address
          </Text>

        </Pressable>

      </View>
    </View>
  );
};

export default SelectAddress;

const styles = StyleSheet.create({

  /* FULL SCREEN */

  container: {
    flex: 1,
    backgroundColor: 'transparent',
  },

  /* DARK OVERLAY */

  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.50)',
  },

  /* BOTTOM SHEET */

  bottomSheet: {
    position: 'absolute',

    left: 0,
    right: 0,
    bottom: 0,

    height: '47%',

    backgroundColor: '#FFFFFF',

    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,

    paddingTop: 12,
    paddingHorizontal: 20,

    elevation: 10,
  },

  /* HANDLE */

  handle: {
    width: 32,
    height: 5,

    backgroundColor: '#D8D8D8',

    borderRadius: 10,

    alignSelf: 'center',

    marginBottom: 26,
  },

  /* TITLE */

  title: {
    fontSize: 17,

    fontWeight: '700',

    color: '#111111',

    marginBottom: 18,
  },

  /* SELECTED ADDRESS */

  addressCardSelected: {
    minHeight: 76,

    borderWidth: 1,

    borderColor: '#0865B5',

    borderRadius: 8,

    marginBottom: 12,

    paddingVertical: 11,

    paddingHorizontal: 12,

    flexDirection: 'row',

    alignItems: 'center',

    justifyContent: 'space-between',
  },

  /* NORMAL ADDRESS */

  addressCard: {
    minHeight: 76,

    borderWidth: 1,

    borderColor: '#D2D2D2',

    borderRadius: 8,

    marginBottom: 12,

    paddingVertical: 11,

    paddingHorizontal: 12,

    flexDirection: 'row',

    alignItems: 'center',

    justifyContent: 'space-between',
  },

  /* ADDRESS CONTENT */

  addressContent: {
    flex: 1,

    paddingRight: 10,
  },

  /* NAME */

  name: {
    fontSize: 13,

    fontWeight: '700',

    color: '#111111',

    marginBottom: 4,
  },

  /* PHONE */

  phone: {
    fontSize: 10,

    color: '#333333',

    marginBottom: 5,
  },

  /* ADDRESS */

  address: {
    fontSize: 10,

    color: '#333333',

    lineHeight: 14,
  },

  /* SELECTED CHECK */

  selectedCircle: {
    width: 17,
    height: 17,

    borderRadius: 10,

    backgroundColor: '#0865B5',

    alignItems: 'center',

    justifyContent: 'center',
  },

  /* ADD BUTTON */

  addButton: {
    height: 37,

    backgroundColor: '#0865B5',

    borderRadius: 7,

    alignItems: 'center',

    justifyContent: 'center',

    marginTop: 5,

    marginHorizontal: 8,
  },

  addButtonText: {
    color: '#FFFFFF',

    fontSize: 13,

    fontWeight: '500',
  },
});
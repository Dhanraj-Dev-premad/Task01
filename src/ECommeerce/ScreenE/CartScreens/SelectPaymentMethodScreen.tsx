import React from 'react';
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import MaterialDesignIcons from '@react-native-vector-icons/material-design-icons';
import {useNavigation} from '@react-navigation/native';

type PaymentItemProps = {
  icon: React.ComponentProps<typeof MaterialDesignIcons>['name'];
  iconColor: string;
  title: string;
  masterCard?: boolean;
  onSelect: () => void;
};

const SelectPaymentMethodScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>

      {/* DARK OVERLAY */}
      <View style={styles.overlay} />

      {/* PAYMENT BOTTOM SHEET */}
      <View style={styles.bottomSheet}>

        {/* HANDLE */}
        <View style={styles.handle} />

        {/* TITLE */}
        <Text style={styles.title}>
          Payment Method
        </Text>

        {/* PAYMENT LIST */}
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.paymentList}>

          {/* CASH ON DELIVERY */}
          <PaymentItem
            icon="truck"
            iconColor="#0865B5"
            title="Cash on delivery"
            onSelect={() => {
              navigation.navigate('SelectAddress' as never);
            }}
          />

          {/* VISA */}
          <PaymentItem
            icon="credit-card"
            iconColor="#29366F"
            title="VISA"
            onSelect={() => {
              navigation.navigate('SelectAddress' as never);
            }}
          />

          {/* MASTER CARD */}
          <PaymentItem
            icon="credit-card"
            iconColor="#F5A900"
            title="Master Card"
            masterCard={true}
            onSelect={() => {
              navigation.navigate('SelectAddress' as never);
            }}
          />

          {/* PAYPAL */}
          <PaymentItem
            icon="alpha-p-box"
            iconColor="#123A8C"
            title="Paypal"
            onSelect={() => {
              navigation.navigate('SelectAddress' as never);
            }}
          />

          {/* EASYPAISA */}
          <PaymentItem
            icon="wallet"
            iconColor="#159447"
            title="Easypaisa"
            onSelect={() => {
              navigation.navigate('SelectAddress' as never);
            }}
          />

        </ScrollView>
      </View>
    </View>
  );
};

const PaymentItem = ({
  icon,
  iconColor,
  title,
  masterCard = false,
  onSelect,
}: PaymentItemProps) => {
  return (
    <Pressable
      style={styles.paymentItem}
      onPress={onSelect}>

      {/* ICON */}
      <View style={styles.iconContainer}>

        {masterCard ? (
          <View style={styles.masterCardContainer}>
            <View style={styles.redCircle} />
            <View style={styles.yellowCircle} />
          </View>
        ) : (
          <MaterialDesignIcons
            name={icon}
            size={24}
            color={iconColor}
          />
        )}

      </View>

      {/* PAYMENT NAME */}
      <Text style={styles.paymentTitle}>
        {title}
      </Text>

    </Pressable>
  );
};

export default SelectPaymentMethodScreen;

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

  /* PAYMENT SHEET */

  bottomSheet: {
    position: 'absolute',

    left: 0,
    right: 0,
    bottom: 0,

    height: '50%',

    backgroundColor: '#FFFFFF',

    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,

    paddingTop: 12,
    paddingHorizontal: 28,

    elevation: 10,
  },

  /* HANDLE */

  handle: {
    width: 38,
    height: 5,

    backgroundColor: '#D5D5D5',

    borderRadius: 10,

    alignSelf: 'center',

    marginBottom: 28,
  },

  /* TITLE */

  title: {
    fontSize: 19,
    fontWeight: '700',

    color: '#111111',

    marginBottom: 20,
  },

  /* PAYMENT LIST */

  paymentList: {
    paddingBottom: 20,
  },

  /* PAYMENT ITEM */

  paymentItem: {
    height: 56,

    flexDirection: 'row',

    alignItems: 'center',
  },

  /* ICON BOX */

  iconContainer: {
    width: 48,
    height: 38,

    borderRadius: 9,

    backgroundColor: '#F7F7F7',

    alignItems: 'center',
    justifyContent: 'center',

    marginRight: 16,
  },

  /* PAYMENT TEXT */

  paymentTitle: {
    fontSize: 14,

    fontWeight: '600',

    color: '#111111',
  },

  /* MASTER CARD */

  masterCardContainer: {
    width: 35,
    height: 22,

    flexDirection: 'row',

    alignItems: 'center',

    justifyContent: 'center',
  },

  redCircle: {
    width: 19,
    height: 19,

    borderRadius: 10,

    backgroundColor: '#F21D25',

    marginRight: -6,
  },

  yellowCircle: {
    width: 19,
    height: 19,

    borderRadius: 10,

    backgroundColor: '#FFB900',
  },
});













// // import React from 'react';
// // import {
// //   Pressable,
// //   ScrollView,
// //   StyleSheet,
// //   Text,
// //   View,
// // } from 'react-native';
// // import {SafeAreaView} from 'react-native-safe-area-context';
// // import MaterialDesignIcons from '@react-native-vector-icons/material-design-icons';

// // type PaymentItemProps = {
// //   icon: React.ComponentProps<typeof MaterialDesignIcons>['name'];
// //   iconColor: string;
// //   title: string;
// //   masterCard?: boolean;
// // };

// // const SelectPaymentMethodScreen = () => {
// //   return (
// //     <SafeAreaView
// //       style={styles.container}
// //       edges={['top', 'bottom']}>

// //       {/* DARK OVERLAY */}
// //       <View style={styles.overlay} />

// //       {/* BOTTOM SHEET */}
// //       <View style={styles.bottomSheet}>

// //         {/* DRAG HANDLE */}
// //         <View style={styles.handle} />

// //         {/* TITLE */}
// //         <Text style={styles.title}>
// //           Payment Method
// //         </Text>

// //         {/* PAYMENT LIST */}
// //         <ScrollView
// //           showsVerticalScrollIndicator={false}
// //           contentContainerStyle={styles.paymentList}>

// //           {/* CASH ON DELIVERY */}
// //           <PaymentItem
// //             icon="truck"
// //             iconColor="#0865B5"
// //             title="Cash on delivery"
// //           />

// //           {/* VISA */}
// //           <PaymentItem
// //             icon="credit-card"
// //             iconColor="#29366F"
// //             title="VISA"
// //           />

// //           {/* MASTER CARD */}
// //           <PaymentItem
// //             icon="credit-card"
// //             iconColor="#F5A900"
// //             title="Master Card"
// //             masterCard={true}
// //           />

// //           {/* PAYPAL */}
// //           <PaymentItem
// //             icon="alpha-p-box"
// //             iconColor="#123A8C"
// //             title="Paypal"
// //           />

// //           {/* EASYPAISA */}
// //           <PaymentItem
// //             icon="wallet"
// //             iconColor="#159447"
// //             title="Easypaisa"
// //           />

// //         </ScrollView>
// //       </View>
// //     </SafeAreaView>
// //   );
// // };

// // const PaymentItem = ({
// //   icon,
// //   iconColor,
// //   title,
// //   masterCard = false,
// // }: PaymentItemProps) => {
// //   return (
// //     <Pressable
// //       style={styles.paymentItem}
// //       onPress={() => {
// //         console.log(`${title} selected`);
// //       }}>

// //       {/* ICON */}
// //       <View style={styles.iconContainer}>

// //         {masterCard ? (
// //           <View style={styles.masterCardContainer}>
// //             <View style={styles.redCircle} />
// //             <View style={styles.yellowCircle} />
// //           </View>
// //         ) : (
// //           <MaterialDesignIcons
// //             name={icon}
// //             size={24}
// //             color={iconColor}
// //           />
// //         )}

// //       </View>

// //       {/* PAYMENT NAME */}
// //       <Text style={styles.paymentTitle}>
// //         {title}
// //       </Text>

// //     </Pressable>
// //   );
// // };

// // export default SelectPaymentMethodScreen;

// // const styles = StyleSheet.create({

// //   /* SCREEN */

// //   container: {
// //     flex: 1,
// //     backgroundColor: 'transparent',
// //   },

// //   /* DARK OVERLAY */

// //   overlay: {
// //     ...StyleSheet.absoluteFillObject,
// //     backgroundColor: 'rgba(0, 0, 0, 0.50)',
// //   },

// //   /* BOTTOM SHEET */

// //   bottomSheet: {
// //     position: 'absolute',

// //     left: 0,
// //     right: 0,
// //     bottom: 0,

// //     height: '50%',

// //     backgroundColor: '#FFFFFF',

// //     borderTopLeftRadius: 16,
// //     borderTopRightRadius: 16,

// //     paddingTop: 14,
// //     paddingHorizontal: 28,

// //     elevation: 10,
// //   },

// //   /* DRAG HANDLE */

// //   handle: {
// //     width: 37,
// //     height: 5,

// //     backgroundColor: '#D8D8D8',

// //     borderRadius: 5,

// //     alignSelf: 'center',

// //     marginBottom: 30,
// //   },

// //   /* TITLE */

// //   title: {
// //     fontSize: 19,
// //     fontWeight: '700',

// //     color: '#111111',

// //     marginBottom: 20,
// //   },

// //   /* PAYMENT LIST */

// //   paymentList: {
// //     paddingBottom: 20,
// //   },

// //   /* PAYMENT ITEM */

// //   paymentItem: {
// //     height: 56,

// //     flexDirection: 'row',

// //     alignItems: 'center',
// //   },

// //   /* ICON BOX */

// //   iconContainer: {
// //     width: 48,
// //     height: 38,

// //     borderRadius: 9,

// //     backgroundColor: '#F8F8F8',

// //     alignItems: 'center',
// //     justifyContent: 'center',

// //     marginRight: 16,
// //   },

// //   /* PAYMENT TEXT */

// //   paymentTitle: {
// //     fontSize: 14,

// //     fontWeight: '600',

// //     color: '#111111',
// //   },

// //   /* MASTER CARD */

// //   masterCardContainer: {
// //     width: 35,
// //     height: 22,

// //     flexDirection: 'row',

// //     alignItems: 'center',

// //     justifyContent: 'center',
// //   },

// //   redCircle: {
// //     width: 19,
// //     height: 19,

// //     borderRadius: 10,

// //     backgroundColor: '#F21D25',

// //     marginRight: -6,
// //   },

// //   yellowCircle: {
// //     width: 19,
// //     height: 19,

// //     borderRadius: 10,

// //     backgroundColor: '#FFB900',
// //   },
// // });


// import React from 'react';
// import {
//   Pressable,
//   ScrollView,
//   StyleSheet,
//   Text,
//   View,
// } from 'react-native';
// import MaterialDesignIcons from '@react-native-vector-icons/material-design-icons';

// const SelectPaymentMethodScreen = () => {
//   return (
//     <View style={styles.container}>

//       {/* DARK OVERLAY OVER CHECKOUT SCREEN */}
//       <View style={styles.overlay} />

//       {/* PAYMENT BOTTOM SHEET */}
//       <View style={styles.bottomSheet}>

//         {/* HANDLE */}
//         <View style={styles.handle} />

//         {/* TITLE */}
//         <Text style={styles.title}>
//           Payment Method
//         </Text>

//         <ScrollView
//           showsVerticalScrollIndicator={false}
//           contentContainerStyle={styles.paymentList}>

//           {/* CASH ON DELIVERY */}
//           <PaymentItem
//             icon="truck"
//             iconColor="#0865B5"
//             title="Cash on delivery"
//           />

//           {/* VISA */}
//           <PaymentItem
//             icon="credit-card"
//             iconColor="#29366F"
//             title="VISA"
//           />

//           {/* MASTER CARD */}
//           <PaymentItem
//             icon="credit-card"
//             iconColor="#F5A900"
//             title="Master Card"
//             masterCard
//           />

//           {/* PAYPAL */}
//           <PaymentItem
//             icon="alpha-p-box"
//             iconColor="#123A8C"
//             title="Paypal"
//           />

//           {/* EASYPAISA */}
//           <PaymentItem
//             icon="wallet"
//             iconColor="#159447"
//             title="Easypaisa"
//           />

//         </ScrollView>
//       </View>
//     </View>
//   );
// };

// type PaymentItemProps = {
//   icon: React.ComponentProps<typeof MaterialDesignIcons>['name'];
//   iconColor: string;
//   title: string;
//   masterCard?: boolean;
// };

// const PaymentItem = ({
//   icon,
//   iconColor,
//   title,
//   masterCard = false,
// }: PaymentItemProps) => {
//   return (
//     <Pressable
//       style={styles.paymentItem}
//       onPress={() => {
//         console.log(`${title} selected`);
//       }}>

//       <View style={styles.iconContainer}>

//         {masterCard ? (
//           <View style={styles.masterCardContainer}>
//             <View style={styles.redCircle} />
//             <View style={styles.yellowCircle} />
//           </View>
//         ) : (
//           <MaterialDesignIcons
//             name={icon}
//             size={24}
//             color={iconColor}
//           />
//         )}

//       </View>

//       <Text style={styles.paymentTitle}>
//         {title}
//       </Text>

//     </Pressable>
//   );
// };

// export default SelectPaymentMethodScreen;

// const styles = StyleSheet.create({

//   /* FULL SCREEN */

//   container: {
//     flex: 1,
//     backgroundColor: 'transparent',
//   },

//   /* DARK BACKGROUND */

//   overlay: {
//     ...StyleSheet.absoluteFillObject,
//     backgroundColor: 'rgba(0, 0, 0, 0.50)',
//   },

//   /* PAYMENT SHEET */

//   bottomSheet: {
//     position: 'absolute',

//     left: 0,
//     right: 0,
//     bottom: 0,

//     height: '50%',

//     backgroundColor: '#FFFFFF',

//     borderTopLeftRadius: 18,
//     borderTopRightRadius: 18,

//     paddingTop: 12,
//     paddingHorizontal: 28,

//     elevation: 10,
//   },

//   /* HANDLE */

//   handle: {
//     width: 38,
//     height: 5,

//     backgroundColor: '#D5D5D5',

//     borderRadius: 10,

//     alignSelf: 'center',

//     marginBottom: 28,
//   },

//   /* TITLE */

//   title: {
//     fontSize: 19,
//     fontWeight: '700',

//     color: '#111111',

//     marginBottom: 20,
//   },

//   /* PAYMENT LIST */

//   paymentList: {
//     paddingBottom: 20,
//   },

//   /* PAYMENT ITEM */

//   paymentItem: {
//     height: 56,

//     flexDirection: 'row',

//     alignItems: 'center',
//   },

//   /* ICON BOX */

//   iconContainer: {
//     width: 48,
//     height: 38,

//     borderRadius: 9,

//     backgroundColor: '#F7F7F7',

//     alignItems: 'center',
//     justifyContent: 'center',

//     marginRight: 16,
//   },

//   /* PAYMENT TEXT */

//   paymentTitle: {
//     fontSize: 14,
//     fontWeight: '600',

//     color: '#111111',
//   },

//   /* MASTER CARD */

//   masterCardContainer: {
//     width: 35,
//     height: 22,

//     flexDirection: 'row',

//     alignItems: 'center',
//     justifyContent: 'center',
//   },

//   redCircle: {
//     width: 19,
//     height: 19,

//     borderRadius: 10,

//     backgroundColor: '#F21D25',

//     marginRight: -6,
//   },

//   yellowCircle: {
//     width: 19,
//     height: 19,

//     borderRadius: 10,

//     backgroundColor: '#FFB900',
//   },
// });
import React from 'react';
import {
  FlatList,
  Image,
  Pressable,
  ScrollView,
  Text,
  View,
} from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

const data = [
  {
    id: '1',
    title: 'Bitcoin',
    $: '$7,367.78',
    Brand: 'BTC',
    Profit: +2.32,
    image: require('../../img/bitcoin.png'),
  },
  {
    id: '2',
    title: 'Ethereum',
    $: '$1,367.78',
    Brand: 'ETH',
    Profit: -1.4,
    image: require('../../img/coins.png'),
  },
];

const HomePage1 = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: '#f8f0e9',
      }}
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 120,
        }}
      >

        {/* ================= TOP SECTION ================= */}

        <View
          style={{
            width: '100%',
            alignItems: 'center',
            paddingTop: 10,
          }}
        >

          {/* ================= HEADER ================= */}

          <View
            style={{
              width: '90%',
              height: 90,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: 20,
            }}
          >

            {/* Hamburger Menu */}

            <Pressable
              onPress={() => navigation.openDrawer()}
              style={{
                width: 50,
                height: 50,
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Image
                source={require('../../img/menu.png')}
                style={{
                  height: 50,
                  width: 50,
                  resizeMode: 'contain',
                }}
              />
            </Pressable>

            {/* Logo */}

            <Image
              source={require('../../img/logo.png')}
              style={{
                height: 90,
                width: 90,
                resizeMode: 'contain',
              }}
            />

            {/* Empty space */}

            <View
              style={{
                width: 50,
                height: 50,
              }}
            />

          </View>

          {/* ================= TOTAL BALANCE ================= */}

          <View
            style={{
              width: '90%',
              paddingVertical: 20,
            }}
          >

            <Text
              style={{
                fontSize: 16,
                color: '#777',
                marginBottom: 4,
              }}
            >
              Total Balance
            </Text>

            <Text
              style={{
                fontSize: 38,
                fontWeight: 'bold',
                color: '#222',
              }}
            >
              $20,360.34
            </Text>

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 8,
              }}
            >

              <Image
                source={require('../../img/up-right-arrow.png')}
                style={{
                  height: 18,
                  width: 18,
                  resizeMode: 'contain',
                }}
              />

              <Text
                style={{
                  fontSize: 16,
                  color: '#777',
                  marginLeft: 6,
                }}
              >
                4,511.33 (+4.57%)
              </Text>

            </View>

          </View>

          {/* ================= ACTIONS ================= */}

          <View
            style={{
              width: '94%',
              paddingVertical: 20,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >

            {/* SEND */}

            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                width: 80,
              }}
            >

              <View
                style={{
                  height: 60,
                  width: 60,
                  borderRadius: 18,
                  backgroundColor: '#e6e3e0',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >

                <Image
                  source={require('../../img/up-right-arrow.png')}
                  style={{
                    height: 28,
                    width: 28,
                    resizeMode: 'contain',
                  }}
                />

              </View>

              <Text
                style={{
                  fontSize: 15,
                  marginTop: 7,
                  color: '#222',
                }}
              >
                Send
              </Text>

            </View>

            {/* RECEIVE */}

            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                width: 80,
              }}
            >

              <View
                style={{
                  height: 60,
                  width: 60,
                  borderRadius: 18,
                  backgroundColor: '#e6e3e0',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >

                <Image
                  source={require('../../img/down-left-arrow.png')}
                  style={{
                    height: 28,
                    width: 28,
                    resizeMode: 'contain',
                  }}
                />

              </View>

              <Text
                style={{
                  fontSize: 15,
                  marginTop: 7,
                  color: '#222',
                }}
              >
                Receive
              </Text>

            </View>

            {/* SWAP */}

            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                width: 80,
              }}
            >

              <View
                style={{
                  height: 60,
                  width: 60,
                  borderRadius: 18,
                  backgroundColor: '#e6e3e0',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >

                <Image
                  source={require('../../img/swap.png')}
                  style={{
                    height: 28,
                    width: 28,
                    resizeMode: 'contain',
                  }}
                />

              </View>

              <Text
                style={{
                  fontSize: 15,
                  marginTop: 7,
                  color: '#222',
                }}
              >
                Swap
              </Text>

            </View>

            {/* BUY */}

            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                width: 80,
              }}
            >

              <View
                style={{
                  height: 60,
                  width: 60,
                  borderRadius: 18,
                  backgroundColor: '#e6e3e0',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >

                <Image
                  source={require('../../img/plus.png')}
                  style={{
                    height: 28,
                    width: 28,
                    resizeMode: 'contain',
                  }}
                />

              </View>

              <Text
                style={{
                  fontSize: 15,
                  marginTop: 7,
                  color: '#222',
                }}
              >
                Buy
              </Text>

            </View>

          </View>

        </View>

        {/* ================= POPULAR ================= */}

        <View
          style={{
            width: '100%',
            marginTop: 10,
          }}
        >

          {/* Popular Header */}

          <View
            style={{
              width: '90%',
              height: 55,
              alignSelf: 'center',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >

            <Text
              style={{
                fontSize: 28,
                fontWeight: 'bold',
                color: '#222',
              }}
            >
              Popular
            </Text>

            <Pressable>
              <Text
                style={{
                  fontSize: 16,
                  color: '#74b9eb',
                }}
              >
                See All
              </Text>
            </Pressable>

          </View>

          {/* Popular Cards */}

          <View
            style={{
              width: '90%',
              alignSelf: 'center',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingVertical: 10,
            }}
          >

            {/* Bitcoin */}

            <View
              style={{
                height: 175,
                width: '48%',
                backgroundColor: '#e6e3e0',
                borderRadius: 22,
                overflow: 'hidden',
              }}
            >

              <Image
                source={require('../../img/image1.png')}
                style={{
                  height: '100%',
                  width: '100%',
                  resizeMode: 'stretch',
                }}
              />

            </View>

            {/* Ethereum */}

            <View
              style={{
                height: 175,
                width: '48%',
                backgroundColor: '#dfdbd7',
                borderRadius: 22,
                overflow: 'hidden',
              }}
            >

              <Image
                source={require('../../img/image2.png')}
                style={{
                  height: '100%',
                  width: '100%',
                  resizeMode: 'stretch',
                }}
              />

            </View>

          </View>

        </View>

        {/* ================= ASSETS ================= */}

        <View
          style={{
            width: '100%',
            marginTop: 15,
          }}
        >

          {/* Assets Header */}

          <View
            style={{
              width: '90%',
              height: 55,
              alignSelf: 'center',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >

            <Text
              style={{
                fontSize: 28,
                fontWeight: 'bold',
                color: '#222',
              }}
            >
              Assets
            </Text>

            <Pressable>
              <Text
                style={{
                  fontSize: 16,
                  color: '#74b9eb',
                }}
              >
                See All
              </Text>
            </Pressable>

          </View>

          {/* Assets FlatList */}

          <View
            style={{
              width: '90%',
              alignSelf: 'center',
            }}
          >

            <FlatList
              data={data}
              horizontal
              showsHorizontalScrollIndicator={false}
              keyExtractor={(item) => item.id}
              contentContainerStyle={{
                paddingVertical: 10,
              }}
              renderItem={({ item }) => (
                <View
                  style={{
                    height: 140,
                    width: 330,
                    backgroundColor: '#e6e3e0',
                    borderRadius: 22,
                    paddingHorizontal: 16,
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginRight: 12,
                  }}
                >

                  {/* ASSET IMAGE */}

                  <View
                    style={{
                      height: 55,
                      width: 55,
                      borderRadius: 15,
                      justifyContent: 'center',
                      alignItems: 'center',
                      backgroundColor: '#f8f0e9',
                    }}
                  >

                    <Image
                      source={item.image}
                      style={{
                        height: 42,
                        width: 42,
                        resizeMode: 'contain',
                      }}
                    />

                  </View>

                  {/* NAME + BRAND */}

                  <View
                    style={{
                      flex: 1,
                      marginLeft: 14,
                      justifyContent: 'center',
                    }}
                  >

                    <Text
                      style={{
                        fontSize: 17,
                        fontWeight: 'bold',
                        color: '#222',
                      }}
                    >
                      {item.title}
                    </Text>

                    <Text
                      style={{
                        fontSize: 13,
                        color: '#777',
                        marginTop: 3,
                      }}
                    >
                      {item.Brand}
                    </Text>

                  </View>

                  {/* PRICE + PROFIT */}

                  <View
                    style={{
                      alignItems: 'flex-end',
                      justifyContent: 'center',
                    }}
                  >

                    <Text
                      style={{
                        fontSize: 16,
                        fontWeight: 'bold',
                        color: '#222',
                      }}
                    >
                      {item.$}
                    </Text>

                    <Text
                      style={{
                        fontSize: 13,
                        marginTop: 5,
                        color:
                          item.Profit >= 0
                            ? 'green'
                            : 'red',
                      }}
                    >
                      {item.Profit > 0 ? '+' : ''}
                      {item.Profit}%
                    </Text>

                  </View>

                </View>
              )}
            />

          </View>

        </View>

      </ScrollView>
    </SafeAreaView>
  );
};

export default HomePage1;












// import {
//   FlatList,
//   Image,
//   Text,
//   View,
// } from 'react-native';
// import React from 'react';
// import { SafeAreaView } from 'react-native-safe-area-context';

// const data = [
//   {
//     id: '1',
//     title: 'Bitcoin',
//     $: '$7,367.78',
//     Brand: 'BTC',
//     Profit: +2.32,
//     image: require('../../img/bitcoin.png'),
//   },
//   {
//     id: '2',
//     title: 'Ethereum',
//     Brand: 'ETH',
//     $: '$1,367.78',
//     Profit: -1.4,
//     image: require('../../img/coins.png'),
//   },
// ];

// const HomePage1 = () => {
//   return (
//     <View
//       style={{
//         flex: 1,
//          backgroundColor: '#f8f0e9',
       
//       }}
//     >
//       <View
//         style={{
//           flex: 1,
//           backgroundColor: '#f8f0e9',
//            marginTop:20
//         }}
//       >

    

//         <View
//           style={{
//             justifyContent: 'center',
//             alignItems: 'center',
//             height: 420,
//             width: '100%',
           
//           }}
//         >

//           {/* Menu + User */}
//           <View
//             style={{
//               flexDirection: 'row',
//               height: 80,
             
//               width: '90%',
//               justifyContent: 'space-between',
//               alignItems: 'center',
//               marginBottom: 35,
//             }}
//           >
//             <Image
//               source={require('../../img/menu.png')}
//               style={{
//                 height: 60,
//                 width: 60,
//               }}
//             />

//             <Image
//               source={require('../../img/user.png')}
//               style={{
//                 height: 80,
//                 width: 80,
//               }}
//             />
//           </View>

//           {/* Total Balance */}
//           <View
//             style={{
//               height: 160,
             
//               width: '93%',
//             }}
//           >
//             <Text
//               style={{
//                 fontSize: 24,
//                 opacity: 0.2,
//               }}
//             >
//               Total Balance
//             </Text>

//             <Text
//               style={{
//                 fontSize: 45,
//                 fontWeight: 'bold',
//               }}
//             >
//               $20,360.34
//             </Text>

//             <View
//               style={{
//                 flexDirection: 'row',
//                 alignItems: 'center',
//                 marginTop: 8,
//                 marginLeft: 10,
//               }}
//             >
//               <Image
//                 source={require('../../img/up-right-arrow.png')}
//                 style={{
//                   height: 24,
//                   width: 24,
//                   opacity: 0.2,
//                 }}
//               />

//               <Text
//                 style={{
//                   fontSize: 24,
//                   opacity: 0.2,
//                   marginLeft: 5,
//                 }}
//               >
//                 4,511.33 (+4.57%)
//               </Text>
//             </View>
//           </View>

//           {/*  Swap  */}
//           <View
//             style={{
//               height: 120,
              
//               width: '100%',
//               flexDirection: 'row',
//               justifyContent: 'space-between',
//               alignItems: 'center',
//             }}
//           >

//             {/* Send */}
//             <View
//               style={{
//                 height: 110,
//                 width: 110,
//                 justifyContent: 'center',
//                 alignItems: 'center',
//               }}
//             >
//               <View
//                 style={{             
//                   height: 80,
//                   width: 80,
//                   borderRadius:20,
//                   backgroundColor: '#e6e3e0',
//                   justifyContent: 'center',
//                   alignItems: 'center',
//                 }}
//               >
//                 <Image
//                   source={require('../../img/up-right-arrow.png')}
//                   style={{
//                     height: 30,
//                     width: 30,
//                     resizeMode: 'center',
//                   }}
//                 />
//               </View>

//               <Text
//                 style={{
//                   fontSize: 20,
//                 }}
//               >
//                 Send
//               </Text>
//             </View>

//             {/* Receive */}
//             <View
//               style={{
//                 height: 110,
//                 width: 110,
//                 justifyContent: 'center',
//                 alignItems: 'center',
//               }}
//             >
//               <View
//                 style={{
//                   height: 80,
//                   width: 80,
//                   borderRadius:20,
//                   backgroundColor: '#e6e3e0',
//                   justifyContent: 'center',
//                   alignItems: 'center',
//                 }}
//               >
//                 <Image
//                   source={require('../../img/down-left-arrow.png')}
//                   style={{
//                     height: 30,
//                     width: 30,
//                     resizeMode: 'center',
//                   }}
//                 />
//               </View>

//               <Text
//                 style={{
//                   fontSize: 20,
//                 }}
//               >
//                 Receive
//               </Text>
//             </View>

//             {/* Swap */}
//             <View
//               style={{
//                 height: 110,
//                 width: 110,
//                 justifyContent: 'center',
//                 alignItems: 'center',
//               }}
//             >
//               <View
//                 style={{
//                   height: 80,
//                   width: 80,
//                   borderRadius:20,
//                   backgroundColor: '#e6e3e0',
//                   justifyContent: 'center',
//                   alignItems: 'center',
//                 }}
//               >
//                 <Image
//                   source={require('../../img/swap.png')}
//                   style={{
//                     height: 30,
//                     width: 30,
//                     resizeMode: 'center',
//                   }}
//                 />
//               </View>

//               <Text
//                 style={{
//                   fontSize: 20,
//                 }}
//               >
//                 Swap
//               </Text>
//             </View>

//             {/* Buy */}
//             <View
//               style={{
//                 height: 110,
//                 width: 110,
//                 justifyContent: 'center',
//                 alignItems: 'center',
//               }}
//             >
//               <View
//                 style={{
//                   height: 80,
//                   width: 80,
//                   borderRadius:20,
//                   backgroundColor: '#e6e3e0',
//                   alignItems: 'center',
//                   justifyContent: 'center',
//                 }}
//               >
//                 <Image
//                   source={require('../../img/plus.png')}
//                   style={{
//                     height: 27,
//                     width: 27,
//                     resizeMode: 'center',
//                   }}
//                 />
//               </View>

//               <Text
//                 style={{
//                   fontSize: 20,
//                 }}
//               >
//                 Buy
//               </Text>
//             </View>

//           </View>
//         </View>

      

//         <View
//           style={{
//             height: 250,
//             width: '100%',
          
//             alignItems: 'center',
//             justifyContent: 'center',
//           }}
//         >

        
//           <View
//           // for popular
//             style={{
//               height: 40,
//               width: '98%',
            
//               flexDirection: 'row',
//               alignItems: 'center',
//               justifyContent: 'space-between',
//             }}
//           >
//             <Text
//               style={{
//                 fontSize: 35,
//                 fontWeight: 'bold',
//               }}
//             >
//               Popular
//             </Text>

//             <Text
//               style={{
//                 fontSize: 22,
//                 color: '#74b9eb',
//                 paddingTop: 10,
//               }}
//             >
//               See All
//             </Text>
//           </View>
//           <View
//             style={{
//               flexDirection: 'row',
//               height: 210,
              
             
//               justifyContent: 'space-between',
//               alignItems: 'center',
//               gap: 15,
//             }}
//           >

//             <View
//               style={{
//                 height: 190,
//                 width: 190,
//                 backgroundColor:'#e6e3e0',
//                 borderRadius:25
               
//               }}
//             >
//               <Image
//                 source={require('../../img/bar-graph.png')}
//                 style={{
//                   height: 190,
//                   width: 190,
//                 }}
//               />
//             </View>

//             <View
//               style={{
//                 height: 190,
//                 width: 190,
//                 backgroundColor:'#dfdbd7',
//                  borderRadius:25

                 

               
//               }}
//             >
//               <Image
//                 source={require('../../img/ethereum.png')}
//                 style={{
//                   height: 190,
//                   width: 190,
                  
//                 }}
//               />
//             </View>

//           </View>
//         </View>

      

//         <View
//           style={{
//             height: 225,
//             width: '100%',
          
//             alignItems: 'center',
//             justifyContent: 'center',
//           }}
//         >


//           <View
//             style={{
//               height: 40,
//               width: '98%',
             
//               flexDirection: 'row',
//               alignItems: 'center',
//               justifyContent: 'space-between',
//             }}
//           >
//             <Text
//               style={{
//                 fontSize: 35,
//                 fontWeight: 'bold',
//               }}
//             >
//               Assets
//             </Text>

//             <Text
//               style={{
//                 fontSize: 22,
//                 color: '#74b9eb',
//                 paddingTop: 10,
//               }}
//             >
//               See All
//             </Text>
//           </View>

//           {/* FlatList  */}
//           <View
//             style={{
//               height: 155,
//               width: '98%',
             
//               justifyContent: 'center',
//               padding:10,
//               gap:10

//             }}
//           >

//             <FlatList
//               data={data}
//               showsVerticalScrollIndicator={false}

            
//               keyExtractor={(item) => item.id}

//               renderItem={({ item }) => (
//                 <View style={{height:150,width:'98%',}}>


               
//                 <View
//                   style={{
//                     height: 130,
//                     width: 350,
//                   backgroundColor:'#e6e3e0',
                   
//                     borderRadius: 25,
//                     padding: 15,
//                     flexDirection: 'row',
//                     alignItems: 'center',
//                     marginLeft:20
                   
//                   }}
//                 >

//                   {/* IMAGE  */}
//                   <View
//                     style={{
//                       height: 60,
//                       width: 60,
//                       justifyContent: 'center',
//                       alignItems: 'center',
//                     }}
//                   >
//                     <Image
//                       source={item.image}
//                       style={{
//                         height: 50,
//                         width: 50,
//                         resizeMode: 'contain',
//                       }}
//                     />
//                   </View>

//                   {/* BITCOIN ,BTC  */}
//                   <View
//                     style={{
//                       flex: 1,
//                       marginLeft: 15,
//                       justifyContent: 'center',
//                     }}
//                   >
//                     <Text
//                       style={{
//                         fontSize: 18,
//                         fontWeight: 'bold',
//                       }}
//                     >
//                       {item.title}
//                     </Text>

//                     <Text
//                       style={{
//                         fontSize: 14,
//                         color: 'gray',
//                         marginTop: 4,
//                       }}
//                     >
//                       {item.Brand}
//                     </Text>
//                   </View>

//                   {/* PRICE,PROFIT  */}
//                   <View
//                     style={{
//                       marginLeft: 20,
//                       alignItems: 'flex-end',
//                     }}
//                   >
//                     <Text
//                       style={{
//                         fontSize: 17,
//                         fontWeight: 'bold',
//                       }}
//                     >
//                       {item.$}
//                     </Text>

//                     <Text
//                       style={{
//                         fontSize: 14,
//                         color:
//                           item.Profit >= 0
//                             ? 'green'
//                             : 'red',
//                         marginTop: 5,
//                       }}
//                     >
//                       {item.Profit > 0 ? '+' : ''}
//                       {item.Profit}%
//                     </Text>
//                   </View>

//                 </View>
//                 </View>
//               )}
//             />

//           </View>
//         </View>

//       </View>
//     </View>
//   );
// };

// export default HomePage1;

import React, {
  createContext,
  useContext,
  useState,
} from 'react';

// Create Context
const CartContext = createContext(null);

// Provider
export const CartProvider = ({children}) => {
  const [cart, setCart] = useState([]);

  // Add product to cart
  const addToCart = (product , quantity=1) => {
    
   

  
  };

  // Delete product completely
  const deleteFromCart = productId => {
    
  };

  // Increase quantity
  const increaseQuantity = productId => {
 
  };

  // Decrease quantity
  const decreaseQuantity = productId => {
    
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        deleteFromCart,
        increaseQuantity,
        decreaseQuantity,
      }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom Hook
export const useCart = () => {
  const context = useContext(CartContext);

 

  return context;
};















// import React, {
//   createContext,
//   useContext,
//   useState,
// } from 'react';

// // Create Context
// const CartContext = createContext(null);

// // Provider
// export const CartProvider = ({children}) => {
//   const [cart, setCart] = useState([]);

//   // Add product to cart
//   const addToCart = (product, quantity = 1) => {
//     setCart(prevCart => {
//       const existingProduct = prevCart.find(
//         item => item.id === product.id,
//       );

//       // Product already exists
//       if (existingProduct) {
//         return prevCart.map(item =>
//           item.id === product.id
//             ? {
//                 ...item,
//                 quantity: item.quantity + quantity,
//               }
//             : item,
//         );
//       }

//       // Product doesn't exist
//       return [
//         ...prevCart,
//         {
//           ...product,
//           quantity: quantity,
//         },
//       ];
//     });
//   };

//   // Delete product completely
//   const deleteFromCart = productId => {
//     setCart(prevCart =>
//       prevCart.filter(
//         item => item.id !== productId,
//       ),
//     );
//   };

//   // Increase quantity
//   const increaseQuantity = productId => {
//     setCart(prevCart =>
//       prevCart.map(item =>
//         item.id === productId
//           ? {
//               ...item,
//               quantity: item.quantity + 1,
//             }
//           : item,
//       ),
//     );
//   };

//   // Decrease quantity
//   const decreaseQuantity = productId => {
//     setCart(prevCart =>
//       prevCart
//         .map(item =>
//           item.id === productId
//             ? {
//                 ...item,
//                 quantity: item.quantity - 1,
//               }
//             : item,
//         )
//         .filter(item => item.quantity > 0),
//     );
//   };

//   return (
//     <CartContext.Provider
//       value={{
//         cart,
//         addToCart,
//         deleteFromCart,
//         increaseQuantity,
//         decreaseQuantity,
//       }}>
//       {children}
//     </CartContext.Provider>
//   );
// };

// // Custom Hook
// export const useCart = () => {
//   const context = useContext(CartContext);

//   if (!context) {
//     throw new Error(
//       'useCart must be used inside CartProvider',
//     );
//   }

//   return context;
// };

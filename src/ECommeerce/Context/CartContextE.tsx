
import React, {
  createContext,
  useContext,
  useState,
} from 'react';

const CartContext = createContext(null);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Add product to cart
  const addToCart = (product, quantity = 1) => {
    setCart(prevCart => {
      const existingProduct = prevCart.find(
        item => item.id === product.id
      );

      if (existingProduct) {
        return prevCart.map(item =>
          item.id === product.id
            ? {
                ...item,
                quantity: item.quantity + quantity,
              }
            : item
        );
      }

      return [
        ...prevCart,
        {
          ...product,
          quantity,
        },
      ];
    });
  };

  // Increase quantity
  const increaseQuantity = productId => {
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === productId
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      )
    );
  };

  // Decrease quantity
  const decreaseQuantity = productId => {
    setCart(prevCart =>
      prevCart
        .map(item =>
          item.id === productId
            ? {
                ...item,
                quantity: item.quantity - 1,
              }
            : item
        )
        .filter(item => item.quantity > 0)
    );
  };

  // Delete product completely
  const deleteFromCart = productId => {
    setCart(prevCart =>
      prevCart.filter(item => item.id !== productId)
    );
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        increaseQuantity,
        decreaseQuantity,
        deleteFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error(
      'useCart must be used inside CartProvider'
    );
  }

  return context;
};


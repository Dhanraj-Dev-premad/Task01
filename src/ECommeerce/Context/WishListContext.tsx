import React, { createContext, useContext, useState } from 'react';

// 1. Create Context
const WishListContext = createContext();

// 2. Create Provider
export const WishListProvider = ({ children }) => {
  const [isFavorite, setIsFavorite] = useState([]);

  // Add product to wishlist
  const addToWishList = product => {
    setIsFavorite(prevWishList => [...prevWishList, product]);
  };

  // Delete product from wishlist
  const deleteFromWishList = productId => {
    setIsFavorite(prevWishList =>
      prevWishList.filter(product => product.id !== productId)
    );
  };

  return (
    <WishListContext.Provider
      value={{
        isFavorite,
        addToWishList,
        deleteFromWishList,
      }}>
      {children}
    </WishListContext.Provider>
  );
};

// 3. Custom Hook
export const useWishList = () => {
  return useContext(WishListContext);
};
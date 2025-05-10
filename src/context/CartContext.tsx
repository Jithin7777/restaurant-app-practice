'use client';

import React, { createContext, useContext, useState } from 'react';
import type { CartItem } from '../types/cart-item.type';

type CartContextType = {
  cartItems: CartItem[];
clearCart: () => void
} 
const CartContext = createContext<CartContextType | undefined>(undefined);

// Custom hook to use the CartContext
export const useCart = () => {
  const context = useContext(CartContext);
  if (context === null) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

// CartProvider component
export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

    const clearCart = () => {
    setCartItems([]);
  };



  return (
    <CartContext.Provider value={{ cartItems,clearCart}}>
      {children}
    </CartContext.Provider>
  );
};

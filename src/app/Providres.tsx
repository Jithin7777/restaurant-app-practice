'use client'

import { CartProvider } from "@/context/CartContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import { Toaster } from "react-hot-toast";

interface providerProps {
  children: React.ReactNode;
}

const Providres: React.FC<providerProps> = ({ children }) => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <CartProvider>{children}</CartProvider>
      <Toaster />
    </QueryClientProvider>
  );
};

export default Providres;

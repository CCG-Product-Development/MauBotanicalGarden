"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { Product, products } from "@/lib/products";

interface CartContextType {
  cart: Record<string, number>;
  addToCart: (id: string, qty?: number) => void;
  updateQty: (id: string, delta: number) => void;
  clearCart: () => void;
  cartItems: { product: Product; qty: number }[];
  total: number;
  totalItems: number;
}

const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<Record<string, number>>({});

  const addToCart = (id: string, qty: number = 1) =>
    setCart(prev => ({ ...prev, [id]: qty }));

  const updateQty = (id: string, delta: number) =>
    setCart(prev => {
      const next = (prev[id] || 0) + delta;
      if (next <= 0) {
        const { [id]: _, ...rest } = prev;
        return rest;
      }
      return { ...prev, [id]: next };
    });

  const clearCart = () => setCart({});

  const cartItems = Object.entries(cart)
    .map(([id, qty]) => ({ product: products.find(p => p.id === id)!, qty }))
    .filter(item => item.product != null);

  const total = cartItems.reduce((sum, { product, qty }) => sum + product.price * qty, 0);
  const totalItems = cartItems.reduce((sum, { qty }) => sum + qty, 0);

  return (
    <CartContext.Provider value={{ cart, addToCart, updateQty, clearCart, cartItems, total, totalItems }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}

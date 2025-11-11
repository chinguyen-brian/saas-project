'use client';
import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from 'react';
import { Cart, CartItem } from '../types/cart';

interface CartContextType {
  cart: Cart;
  addItem: (item: CartItem) => void;
  updateItem: (item: CartItem) => void;
  removeItem: (productId: string) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<Cart>({ items: [], total: 0 });

  useEffect(() => {
    const stored = localStorage.getItem('cart');
    if (stored) {
      setTimeout(() => setCart(JSON.parse(stored)), 0);
    }
  }, []);

  // helper lưu cart vào state + localStorage
  const saveCart = (newCart: Cart) => {
    setCart(newCart);
    localStorage.setItem('cart', JSON.stringify(newCart));
  };

  const addItem = (item: CartItem) => {
    const existing = cart.items.find((i) => i.productId === item.productId);
    let newItems;
    if (existing) {
      newItems = cart.items.map((i) =>
        i.productId === item.productId
          ? { ...i, quantity: i.quantity + item.quantity }
          : i
      );
    } else {
      newItems = [...cart.items, item];
    }
    const total = newItems.reduce((sum, i) => sum + i.price * i.quantity, 0);
    saveCart({ items: newItems, total });
  };

  const updateItem = (item: CartItem) => {
    const newItems = cart.items.map((i) =>
      i.productId === item.productId ? { ...i, quantity: item.quantity } : i
    );
    const total = newItems.reduce((sum, i) => sum + i.price * i.quantity, 0);
    saveCart({ items: newItems, total });
  };

  const removeItem = (productId: string) => {
    const newItems = cart.items.filter((i) => i.productId !== productId);
    const total = newItems.reduce((sum, i) => sum + i.price * i.quantity, 0);
    saveCart({ items: newItems, total });
  };

  const clearCart = () => saveCart({ items: [], total: 0 });

  return (
    <CartContext.Provider
      value={{ cart, addItem, updateItem, removeItem, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error('useCart must be used inside CartProvider');
  return context;
};

import { createContext, useContext, useMemo, useState } from "react";

export type CartItem = {
  id: number;
  name: string;
  price: number;
  quantity: number;
  restaurant?: string;
  image?: string;
};

type CartContextValue = {
  items: CartItem[];
  addItem: (item: Omit<CartItem, "quantity"> & { quantity?: number }) => void;
  updateQuantity: (id: number, delta: number) => void;
  removeItem: (id: number) => void;
  clear: () => void;
  subtotal: number;
};

const CartContext = createContext<CartContextValue | undefined>(undefined);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [items, setItems] = useState<CartItem[]>([]);

  const addItem: CartContextValue["addItem"] = (incoming) => {
    setItems(prev => {
      const quantityToAdd = incoming.quantity ?? 1;
      const existing = prev.find(i => i.id === incoming.id);
      if (existing) {
        return prev.map(i => i.id === incoming.id ? { ...i, quantity: i.quantity + quantityToAdd } : i);
      }
      return [...prev, { ...incoming, quantity: quantityToAdd } as CartItem];
    });
  };

  const updateQuantity: CartContextValue["updateQuantity"] = (id, delta) => {
    setItems(prev => prev.map(i => i.id === id ? { ...i, quantity: Math.max(1, i.quantity + delta) } : i));
  };

  const removeItem: CartContextValue["removeItem"] = (id) => {
    setItems(prev => prev.filter(i => i.id !== id));
  };

  const clear = () => setItems([]);

  const subtotal = useMemo(() => items.reduce((sum, i) => sum + i.price * i.quantity, 0), [items]);

  const value: CartContextValue = {
    items,
    addItem,
    updateQuantity,
    removeItem,
    clear,
    subtotal,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within a CartProvider");
  return ctx;
};



import { createContext } from 'react';

export type productProps = {
    id: number;
    name: string;
    price: number;
    image: string;
};

export type CartItem = productProps & {
    quantity: number;
};

type CartContextType = {
    cartItems: CartItem[];
    addToCart: (item: productProps, quantity: number) => void;
    removeFromCart: (id: number) => void;
    updateQuantity: (id: number, quantity: number) => void;
};

export const CartContext = createContext<CartContextType | null>(null);
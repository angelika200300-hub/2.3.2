import { useState, type ReactNode } from 'react';
import { CartContext, type CartItem, type productProps } from './CartContext';

type CartProviderProps = {
    children: ReactNode;
};

function CartProvider({ children }: CartProviderProps) {
    const [cartItems, setCartItems] = useState<CartItem[]>([]);

    function addToCart(item: productProps, quantity: number) {
        setCartItems((prev) => {
            const existing = prev.find((i) => i.id === item.id);
            if (existing) {
                return prev.map((i) =>
                    i.id === item.id
                        ? { ...i, quantity: i.quantity + quantity }
                        : i
                );
            }
            return [...prev, { ...item, quantity }];
        });
    }

    function removeFromCart(id: number) {
        setCartItems((prev) => prev.filter((i) => i.id !== id));
    }

    function updateQuantity(id: number, quantity: number) {
        if (quantity <= 0) {
            removeFromCart(id);
            return;
        }
        setCartItems((prev) =>
            prev.map((i) => (i.id === id ? { ...i, quantity } : i))
        );
    }

    return (
        <CartContext.Provider
            value={{ cartItems, addToCart, removeFromCart, updateQuantity }}
        >
            {children}
        </CartContext.Provider>
    );
}

export default CartProvider;
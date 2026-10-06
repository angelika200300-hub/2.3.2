import { Container, SimpleGrid } from '@mantine/core';
import { useState, useEffect, useContext } from 'react';
import ky from 'ky';

import Header from '../Header/Header';
import CardItem from '../CardItem/CardItem';
import CardItemSkeleton from '../CardItemSkeleton/CardItemSkeleton';
import CartEmpty from '../CartEmpty/CartEmpty';
import Cart from '../Cart/Cart';
import { CartContext } from '../../context/CartContext';

type productProps = {
    id: number;
    name: string;
    price: number;
    image: string;
};

function Catalog() {
    const [cart, setCart] = useState(false);
    const [data, setData] = useState<productProps[]>([]);
    const [loading, setLoading] = useState(true);

    const { cartItems } = useContext(CartContext)!; // ← ключевая строка

    async function getAllTodos() {
        try {
            const todos = await ky
                .get('https://res.cloudinary.com/sivadass/raw/upload/v1535817394/json/products.json')
                .json<productProps[]>();
            setData(todos);
        } catch (err) {
            console.log(err);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        const timer = setTimeout(() => getAllTodos(), 0);
        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            <Header onCartClick={() => setCart(!cart)} />

            {cart && (cartItems.length === 0 ? <CartEmpty /> : <Cart />)}

            <h1>Catalog</h1>
            <Container className="catalogContainer" size={1280}>
                <SimpleGrid className="productGrid" cols={4}>
                    {loading
                        ? Array.from({ length: 8 }).map((_, i) => (
                            <CardItemSkeleton key={i} />
                        ))
                        : data.map((item) => (
                            <CardItem key={item.id} item={item} />
                        ))}
                </SimpleGrid>
            </Container>
        </>
    );
}

export default Catalog;
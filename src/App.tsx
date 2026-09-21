import { Container } from '@mantine/core';
import { SimpleGrid } from '@mantine/core';
import { useState, useEffect } from 'react';

import ky from 'ky';

import Header from './components/Header/Header'
import CardItem from './components/CardItem/CardItem'
import CardItemSkeleton from './components/CardItemSkeleton/CardItemSkeleton';
//import CartEmpty from './components/CartEmpty/CartEmpty';
import Cart from './components/Cart/Cart';


import './App.css'

type productProps = {
    id: number;
    name: string;
    price: number;
    image: string;
};

function App() {

    /* const [cartEmpty, setCartEmpty] = useState(false);*/
    const [cart, setCart] = useState(false);

    const [data, setData] = useState<productProps[]>([]);
    const [loading, setLoading] = useState(true);

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
        const timer = setTimeout(() => {
            getAllTodos();
        }, 0);

        return () => clearTimeout(timer);
    }, []);


    return (
        <>
            <Header onCartClick={() => setCart(!cart)} /> {/*{() => setCartEmpty(!cartEmpty)}*/}
            {/*{cartEmpty && <CartEmpty />}*/}
            {cart && <Cart />}
            <h1>Catalog</h1>
            <Container className="catalogContainer" size={1280}>
                <SimpleGrid className="productGrid" cols={4}>
                    {loading
                        ? Array.from({ length: 8 }).map((_, index) => (
                            <CardItemSkeleton key={index} />
                        ))
                        : data.map((item) => (
                            <CardItem
                                key={item.id}
                                item={item}
                            />
                        ))}
                </SimpleGrid>
            </Container>
        </>
    );

}


export default App
import { Card, Group, Image, Text, Button, NumberInput } from '@mantine/core';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import MinusIcon from '../icons/MinusIcon';
import PlusIcon from '../icons/PlusIcon';

import './Cart.css';

function Cart() {
    const cartContext = useContext(CartContext);
    const cartItems = cartContext?.cartItems ?? [];
    const total = cartItems.reduce((sum, i) => sum + i.price * i.quantity, 0);

    return (
        <Card className="cart" shadow="sm" padding="16px" withBorder>
            <Group className="cartContent">
                {cartItems.map((item) => (
                    <Group key={item.id} className="cartContentItem">
                        <Group className="cartLeft">
                            <Card.Section>
                                <Image src={item.image} h={64} alt={item.name} />
                            </Card.Section>
                            <Group className="productItem" gap={0}>
                                <Text fz="18px">{item.name}</Text>
                                <Text fz="20px" fw={700}>$ {item.price}</Text>
                            </Group>
                        </Group>
                        <Group className="cartRight" gap={0} wrap="nowrap">
                            <Button className='quantityControlButton'
                                onClick={() => cartContext?.updateQuantity(item.id, item.quantity - 1)}
                                h={30} w={30}
                            >
                                <MinusIcon />
                            </Button>
                            <NumberInput
                                className="quantityInput"
                                hideControls
                                h={30} w={30}
                                value={item.quantity}
                                onChange={(value) =>
                                    cartContext?.updateQuantity(item.id, Number(value))
                                }
                            />
                            <Button className='quantityControlButton'
                                onClick={() =>
                                    cartContext?.updateQuantity(item.id, item.quantity + 1)
                                }
                                h={30} w={30}
                            >
                                <PlusIcon />
                            </Button>
                        </Group>
                    </Group>
                ))}
                <Group className="cartContentBottom" justify="space-between">
                    <Text fz="16px" fw={700}>Total</Text>
                    <Text fz="16px" fw={700}>$ {total}</Text>
                </Group>
            </Group>
        </Card>
    );
}

export default Cart;
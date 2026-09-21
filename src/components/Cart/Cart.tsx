import { Card, Group, Image, Text, Button, NumberInput } from '@mantine/core';
import { useState } from 'react';

import './Cart.css'

function Cart() {
    const [quantity, setQuantity] = useState(1);

    return (
        <Card
            className="cart"
            shadow="sm"
            padding="16px"
            withBorder
        >
            <Group className='cartContent'>
                <Group className='cartContentItem'>
                    <Group className='cartLeft'>
                        <Card.Section>
                            <Image
                                src="https://res.cloudinary.com/sivadass/image/upload/v1493620046/dummy-products/broccoli.jpg"
                                h={64}

                            />
                        </Card.Section>

                        <Group className='productItem' gap={0}>
                            <Text fz="18px">Brocolli - 1 Kg</Text>
                            <Text fz="20px" fw={700}>$ 120</Text>
                        </Group>
                    </Group>
                    <Group className='cartRight' gap={0} wrap="nowrap">
                        <Button onClick={() => setQuantity(Math.max(1, quantity - 1))}
                            h={30} w={30} className='quantityControlButton'><svg width="12px" height="2px" viewBox="0 0 12 2" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
                                <rect y="2" width="2" height="12" transform="rotate(-90 0 2)" fill="#212529"></rect>
                            </svg>
                        </Button>
                        <NumberInput className='quantityInput'
                            hideControls
                            h={30} w={30}
                            value={quantity}
                            onChange={(value) => setQuantity(Number(value))}
                        />
                        <Button onClick={() => setQuantity(quantity + 1)}
                            className='quantityControlButton' h={30} w={30}><svg width="12px" height="12px" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
                                <g clip-path="url(#clip0_9075_1522)">
                                    <path d="M7 0H5V5H0V7H5V12H7V7H12V5H7V0Z" fill="#212529"></path>
                                </g>
                                <defs>
                                    <clipPath id="clip0_9075_1522">
                                        <rect width="12" height="12" fill="white"></rect>
                                    </clipPath>
                                </defs>
                            </svg>
                        </Button>

                    </Group>
                </Group>
                <Group className='cartContentBottom' justify="space-between">
                    <Text fz="16px" fw={700}>Total</Text>
                    <Text fz="16px" fw={700}>$ 120</Text>
                </Group>
            </Group>
        </Card>
    );
}

export default Cart
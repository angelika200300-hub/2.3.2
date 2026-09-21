import { Card, Skeleton, Group } from '@mantine/core';

function CardItemSkeleton() {
    return (
        <Card className="productCard">
            <Card.Section>
                <Skeleton
                    width="100%"
                    height={276}
                />
            </Card.Section>

            <Group mt="md" mb="xs" justify="space-between">
                <Skeleton height={20} width={120} />
                <Skeleton height={30} width={80} />
            </Group>

            <Group justify="space-between">
                <Skeleton height={24} width={60} />
                <Skeleton height={36} width={130} />
            </Group>
        </Card>
    );
}

export default CardItemSkeleton;

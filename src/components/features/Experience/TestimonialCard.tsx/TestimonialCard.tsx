import React from 'react';
import { Box, Card, CardBody, Text } from '@chakra-ui/react';
import { FiMessageSquare } from 'react-icons/fi';
import styles from './TestimonialCard.module.sass';
import { CustomAvatar } from '@/components/ui/CustomAvatar/CustomAvatar';
import { TestimonialData } from '@/types/experience';

interface TestimonialCardProps {
    testimonial: TestimonialData;
    index: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial, index }) => {
    return (
        <Card variant="glass" justifyContent={'space-between'} className={` ${styles[`testimonial-card--delay-${index}`]}`}>

                <FiMessageSquare className={styles['testimonial-card__quote-icon']} />

                <Text className={styles['testimonial-card__text']}>
                    "{testimonial.content}"
                </Text>

                <Box display={'flex'} gap={8} alignItems={'center'}>
                    <CustomAvatar size='md' profileImage={testimonial.image} />
                    <Box className={styles['testimonial-card__author']}>
                        <Text className={styles['testimonial-card__name']}>
                            {testimonial.name}
                        </Text>
                        <Text className={styles['testimonial-card__role']}>
                            {testimonial.role}
                        </Text>
                    </Box>
                </Box>
        </Card>
    );
};

export default TestimonialCard;

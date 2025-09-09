import React from 'react';
import { Box, Card, CardBody, Text } from '@chakra-ui/react';
import { FiMessageSquare } from 'react-icons/fi';
import styles from './TestimonialCard.module.sass';

export interface TestimonialData {
    name: string;
    role: string;
    content: string;
    rating: number;
}

interface TestimonialCardProps {
    testimonial: TestimonialData;
    index: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial, index }) => {
    return (
        <Card variant="glass" className={` ${styles[`testimonial-card--delay-${index}`]}`}>
            <CardBody>

                {/* Quote Icon */}
                <FiMessageSquare className={styles['testimonial-card__quote-icon']} />

                {/* Testimonial Text */}
                <Text className={styles['testimonial-card__text']}>
                    "{testimonial.content}"
                </Text>

                {/* Author */}
                <Box className={styles['testimonial-card__author']}>
                    <Text className={styles['testimonial-card__name']}>
                        {testimonial.name}
                    </Text>
                    <Text className={styles['testimonial-card__role']}>
                        {testimonial.role}
                    </Text>
                </Box>
            </CardBody>
        </Card>
    );
};

export default TestimonialCard;

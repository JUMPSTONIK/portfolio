import React from 'react';
import { Box, SimpleGrid } from '@chakra-ui/react';
import styles from './TestimonialsSection.module.sass';
import { SectionHeader } from '@/components/ui/SectionHeader/SectionHeader';
import { TestimonialData } from '@/types/experience';
import TestimonialCard from '../TestimonialCard.tsx/TestimonialCard';
import { FaUsers } from 'react-icons/fa';

interface TestimonialsSectionProps {
    testimonials: TestimonialData[];
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ testimonials }) => {
    return (
        <Box className={styles['testimonials-section']}>
            <SectionHeader
                title="Client Testimonials"
                subtitle="What colleagues and clients say about working with me"
                icon={<FaUsers />}
                delay={0.8}
            />

            <SimpleGrid
                columns={{ base: 1, md: 3 }}
                spacing={6}
                className={styles['testimonials-section__grid']}
            >
                {testimonials.map((testimonial, index) => (
                    <TestimonialCard
                        key={index}
                        testimonial={testimonial}
                        index={index}
                    />
                ))}
            </SimpleGrid>
        </Box>
    );
};
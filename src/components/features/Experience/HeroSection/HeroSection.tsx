import React from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';
import styles from './HeroSection.module.sass';
import { HeroContainer } from '@/components/common/HeroContainer';

interface HeroSectionProps {
    title?: string;
    subtitle?: string;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
    title = "Professional Experience",
    subtitle = "5+ years building scalable web applications across fintech, e-commerce, and enterprise software. Proven track record of delivering measurable results and leading high-performing teams."
}) => {
    return (
        <HeroContainer>
            <Box className={styles['hero-section__header']}>
                <Heading as="h1" className={styles['hero-section__header-title']}>
                    {title}
                </Heading>
                <Text className={styles['hero-section__header-subtitle']}>
                    {subtitle}
                </Text>
            </Box>
        </HeroContainer>
    );
};


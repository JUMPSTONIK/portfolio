import React from 'react';
import { Box, Heading, Text, Flex } from '@chakra-ui/react';
import styles from './SectionHeader.module.sass';

interface SectionHeaderProps {
    title: string;
    subtitle?: string;
    icon?: React.ReactNode;
    delay?: number;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
    title,
    subtitle,
    icon,
    delay = 0.8
}) => {
    return (
        <Box
            className={styles['section-header']}
        >
            <Heading as="h2" className={styles['section-header__title']}>
                {icon && (
                    <Flex className={styles['section-header__icon-wrapper']}>
                        {icon}
                    </Flex>
                )}
                {title}
            </Heading>
            {subtitle && (
                <Text className={styles['section-header__subtitle']}>
                    {subtitle}
                </Text>
            )}
        </Box>
    );
};
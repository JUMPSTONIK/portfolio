import { Avatar, Box } from '@chakra-ui/react'
import React from 'react'
import styles from './CustomAvatar.module.sass'
import { FC } from 'react';

type CustomAvatarProps = {
    profileImage: string;
    className?: string;
    size?: "full" | "sm" | "md" | "lg" | "xl" | "2xl" | "2xs" | "xs"
}
export const CustomAvatar: FC<CustomAvatarProps> = ({ profileImage, className, size = 'full' }) => {
    return (
        <Box className={`${styles.container} ${className}`}>
            <Avatar
                size={size}
                src={profileImage}
                border="4px solid #e5e7eb"
                boxShadow="0 10px 30px rgba(139, 92, 246, 0.3)"
            />
            <div className={`${styles.container__overlay}`}></div>
        </Box>
    )
}

import { Avatar, Box } from '@chakra-ui/react'
import React from 'react'
import styles from './CustomAvatar.module.sass'
import { FC } from 'react';

type CustomAvatarProps = {
    profileImage: string;
    className?: string
}
export const CustomAvatar: FC<CustomAvatarProps> = ({ profileImage, className }) => {
    return (
        <Box className={`${styles.avatar} ${className}`}>
            <Avatar
                src={profileImage}
                size="2xl"
                border="4px solid #e5e7eb"
                boxShadow="0 10px 30px rgba(139, 92, 246, 0.3)"
            />
            <div className={`${styles.avatar__overlay}`}></div>
        </Box>
    )
}

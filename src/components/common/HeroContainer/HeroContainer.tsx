
'use client'
import { useGSAPBubbles } from "@/hooks/useGSAPBubbles";
import { Box, VStack, Heading, HStack, Button, Text } from "@chakra-ui/react";
import { FC, ReactNode, useRef } from "react";
import styles from './HeroContainer.module.sass'
import { CustomAvatar } from "@/components/ui/CustomAvatar/CustomAvatar";

type HeroContainerProps = {
    children: ReactNode
}

export const HeroContainer:FC<HeroContainerProps> = ({children}) => {
    const containerRef = useRef<HTMLDivElement | null>(null);

    useGSAPBubbles(containerRef);

    return (
        <Box
            ref={containerRef}
            className={`${styles.hero}`}
            position="relative"
            minHeight="100vh"
            background="linear-gradient(135deg, #f3e8ff 0%, #e9d5ff 50%, #ddd6fe 100%)"
            display="flex"
            alignItems="center"
            justifyContent="center"
            overflow="hidden"
            px={4}
        >
            {children}
        </Box>
    );
};
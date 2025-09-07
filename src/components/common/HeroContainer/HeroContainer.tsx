
'use client'
import { useGSAPBubbles } from "@/hooks/useGSAPBubbles";
import { Box } from "@chakra-ui/react";
import { FC, ReactNode, useRef } from "react";
import styles from './HeroContainer.module.sass'

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
            px={4}
        >
            {children}
        </Box>
    );
};
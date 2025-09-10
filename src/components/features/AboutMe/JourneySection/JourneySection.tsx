'use client'

import styles from "./JourneySection.module.sass";
import { Box, Heading, Text, Flex } from "@chakra-ui/react";

import { JourneyCard } from "../JourneyCard/JourneyCard";
import { useState, useEffect } from "react";
import { journeyMilestones } from "@/constants/journeyMilestones";

export const JourneySection: React.FC = () => {
    const [isScrolling, setIsScrolling] = useState(false);

    useEffect(() => {
        let timeoutId: NodeJS.Timeout;
        
        const handleScroll = () => {
            setIsScrolling(true);
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => setIsScrolling(false), 150);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        
        return () => {
            window.removeEventListener('scroll', handleScroll);
            clearTimeout(timeoutId);
        };
    }, []);

    

    return (
        <Box as="section" className={styles["journey"]}>
            <Box className={styles["journey__container"]}>
                <Box className={styles["journey__header"]}>
                    <Heading as="h2" className={styles["journey__title"]}>
                        My Journey
                    </Heading>
                    <Text className={styles["journey__subtitle"]}>
                        Every milestone a lesson, every challenge an opportunity to grow
                    </Text>
                </Box>

                <Box className={styles["journey__timeline"]}>
                    <Box className={styles["journey__line"]} />

                    <Box className={styles["journey__content"]}>
                        {journeyMilestones.map((milestone, index) => (
                            <Flex
                                key={`${milestone.year}-${index}`}
                                className={`${styles["journey__item"]} ${
                                    index % 2 === 0 
                                        ? styles["journey__item--left"] 
                                        : styles["journey__item--right"]
                                }`}
                            >
                                <Box
                                    className={styles["journey__dot"]}
                                    data-color={milestone.color}
                                />

                                <Box className={styles["journey__spacer"]} />

                                <Box className={styles["journey__card"]}>
                                    <JourneyCard 
                                        milestone={milestone} 
                                        index={index}
                                        isScrolling={isScrolling}
                                    />
                                </Box>
                            </Flex>
                        ))}
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};
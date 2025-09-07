import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";
import styles from "./StoryCard.module.sass";
import { StoryCardType } from "@/types/aboutMe";

interface StoryCardProps {
    card: StoryCardType;
    index: number;
    isActive: boolean;
    onMouseEnter: () => void;
    onMouseLeave: () => void;
}

export const StoryCard: React.FC<StoryCardProps> = ({
    card,
    isActive,
    onMouseEnter,
    onMouseLeave,
}) => {
    return (
        <Box
            as="article"
            className={`${styles["story-card"]} ${isActive ? styles["story-card--active"] : ""
                }`}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >
            <Box className={styles["story-card__icon-wrapper"]}>{card.icon}</Box>

            <Heading as="h3" className={styles["story-card__title"]}>
                {card.title}
            </Heading>

            <Text className={styles["story-card__story"]}>{card.story}</Text>

            <Text as="div" className={styles["story-card__highlight"]}>
                "{card.highlight}"
            </Text>
        </Box>
    );
};

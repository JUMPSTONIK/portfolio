'use client'
import React from "react";
import { Box, Flex, Image, Text, Heading } from "@chakra-ui/react";
import { JourneyMilestone } from "@/types/aboutMe";
import styles from "./JourneyCard.module.sass";

interface JourneyCardProps {
    milestone: JourneyMilestone;
    index: number;
}

export const JourneyCard: React.FC<JourneyCardProps> = ({ milestone, index }) => {
    return (
        <Box
            className={styles.card}
            style={{
                ["--card-color" as any]: milestone.color,
                ["--card-shadow-default" as any]: `0 20px 40px rgba(${index % 2 === 0 ? "139, 92, 246" : "236, 72, 153"}, 0.1)`,
                ["--card-shadow-hover" as any]: `0 30px 60px rgba(${index % 2 === 0 ? "139, 92, 246" : "236, 72, 153"}, 0.2)`,
                ["--card-glow" as any]: `radial-gradient(circle at center, ${milestone.color}11 0%, transparent 70%)`
            }}
        >
            <Flex className={styles.card__layout}>
                {/* Imagen */}
                <Box className={styles.card__imageSection}>
                    <Image
                        src={milestone.image}
                        alt={milestone.phase}
                        className={styles.card__image}
                    />
                    <Box className={styles.card__imageOverlay} />
                    <Box
                        className={styles.card__iconBadge}
                        style={{
                            backgroundColor: milestone.color,
                            boxShadow: `0 4px 20px ${milestone.color}66`
                        }}
                    >
                        {milestone.icon}
                    </Box>
                </Box>

                {/* Contenido */}
                <Box className={styles.card__content}>
                    <Text className={styles.card__year} style={{ color: milestone.color }}>
                        {milestone.year}
                    </Text>
                    <Heading as="h3" className={styles.card__phase}>
                        {milestone.phase}
                    </Heading>
                    <Text className={styles.card__description}>{milestone.description}</Text>
                    <Text className={styles.card__details}>{milestone.details}</Text>
                    <Text
                        className={styles.card__focus}
                        style={{ color: `${milestone.color}99` }}
                    >
                        Focus: {milestone.focus}
                    </Text>
                </Box>
            </Flex>

            {/* Efecto glow */}
            <Box className={styles.card__glow} />
        </Box>
    );
};

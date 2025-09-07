'use client'
import React, { useState } from "react";
import { Box, Container, Heading, Text, SimpleGrid } from "@chakra-ui/react";
import {
    FiMap,
    FiBookOpen,
    FiUsers,
    FiPocket,
    FiCoffee,
    FiHeart,
} from "react-icons/fi";
import styles from "./StoryCardsSection.module.sass";
import { StoryCardType } from "@/types/aboutMe";
import { StoryCard } from "../StoryCard";

export const StoryCardsSection: React.FC = () => {
    const [activeStoryCard, setActiveStoryCard] = useState<number | null>(null);

    const storyCards: StoryCardType[] = [
        {
            icon: <FiMap className={styles["story-cards-section__icon"]} />,
            title: "From Guatemala with Code",
            story:
                "Born and raised in Guatemala, I discovered my passion for technology while studying Computer Science at Universidad del Valle. The vibrant culture of my homeland taught me to approach problems with creativity and persistence.",
            highlight: "Cultural diversity fuels innovation",
        },
        {
            icon: <FiBookOpen className={styles["story-cards-section__icon"]} />,
            title: "The Learning Machine",
            story:
                "With over 100 courses completed on Platzi and achieving Legend status, I'm proof that continuous learning isn't just a buzzword—it's a lifestyle. Every new framework is an adventure.",
            highlight: "Never stop growing",
        },
        {
            icon: <FiUsers className={styles["story-cards-section__icon"]} />,
            title: "Team Player & Mentor",
            story:
                "I believe the best code is written together. Whether I'm pair programming, code reviewing, or mentoring junior developers, collaboration brings out the best in everyone.",
            highlight: "Knowledge shared is knowledge multiplied",
        },
        {
            icon: <FiPocket className={styles["story-cards-section__icon"]} />,
            title: "Innovation Enthusiast",
            story:
                "From exploring AI tools to experimenting with the latest React features, I'm always pushing boundaries. Technology evolves fast, and I love being at the forefront of that evolution.",
            highlight: "The future is built today",
        },
        {
            icon: <FiCoffee className={styles["story-cards-section__icon"]} />,
            title: "Problem Solver at Heart",
            story:
                "Give me a complex bug or an architectural challenge, and I'm in my element. I see every problem as a puzzle waiting to be solved with elegant, scalable solutions.",
            highlight: "Complexity simplified through code",
        },
        {
            icon: <FiHeart className={styles["story-cards-section__icon"]} />,
            title: "Purpose-Driven Developer",
            story:
                "I don't just write code; I craft digital experiences that matter. Every component, every optimization, every user interaction is an opportunity to make someone's day a little better.",
            highlight: "Code with purpose, build with heart",
        },
    ];

    return (
        <Box as="section" className={styles["story-cards-section"]}>
            <Box className={styles["story-cards-section__container"]}>
                <Box className={styles["story-cards-section__header"]}>
                    <Heading as="h2" className={styles["story-cards-section__title"]}>
                        My Story
                    </Heading>
                    <Text className={styles["story-cards-section__subtitle"]}>
                        Every developer has a unique journey. Here's mine - the experiences,
                        values, and passions that shape how I approach every project.
                    </Text>
                </Box>

                <SimpleGrid
                    spacing="2rem"
                    className={styles["story-cards-section__grid"]}
                >
                    {storyCards.map((card, index) => (
                        <StoryCard
                            key={index}
                            card={card}
                            index={index}
                            isActive={activeStoryCard === index}
                            onMouseEnter={() => setActiveStoryCard(index)}
                            onMouseLeave={() => setActiveStoryCard(null)}
                        />
                    ))}
                </SimpleGrid>
            </Box>
        </Box>
    );
};

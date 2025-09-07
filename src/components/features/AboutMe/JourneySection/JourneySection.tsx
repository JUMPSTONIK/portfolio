import React from "react";
import { FaBookOpen, FaMicrochip, FaDatabase, FaStar } from "react-icons/fa";
import styles from "./JourneySection.module.sass";
import { Box, Container, Heading, Text, Flex } from "@chakra-ui/react";
import { JourneyMilestone } from "@/types/aboutMe";
import { JourneyCard } from "../JourneyCard/JourneyCard";

export const JourneySection: React.FC = () => {
    const journeyMilestones: JourneyMilestone[] = [
        {
            year: "2016-2021",
            phase: "Foundation",
            description: "Computer Science at Universidad del Valle",
            focus: "Building core programming skills",
            details:
                "Where it all began - diving deep into algorithms, data structures, and falling in love with clean code.",
            icon: <FaBookOpen className={styles["journey__milestone-icon"]} />,
            color: "#7c3aed",
            image:
                "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=400&h=300&fit=crop",
        },
        {
            year: "2022",
            phase: "Growth",
            description: "Diving into enterprise solutions",
            focus: "Angular, Ionic, and mobile development",
            details:
                "Scaling up from personal projects to enterprise applications, mastering the art of mobile-first development.",
            icon: <FaMicrochip className={styles["journey__milestone-icon"]} />,
            color: "#ec4899",
            image:
                "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
        },
        {
            year: "2023",
            phase: "Expansion",
            description: "Mastering React ecosystem",
            focus: "Next.js, Vue.js, and full-stack capabilities",
            details:
                "Embracing the React revolution while staying framework-agnostic. The year I became truly full-stack.",
            icon: <FaDatabase className={styles["journey__milestone-icon"]} />,
            color: "#3b82f6",
            image:
                "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=300&fit=crop",
        },
        {
            year: "2024",
            phase: "Leadership",
            description: "Mentoring and architecture",
            focus: "Team guidance and scalable solutions",
            details:
                "Leading by example, mentoring the next generation, and architecting systems that scale with business needs.",
            icon: <FaStar className={styles["journey__milestone-icon"]} />,
            color: "#10b981",
            image:
                "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=300&fit=crop",
        },
    ];

    return (
        <Box as="section" className={styles["journey"]}>
            <Box className={styles["journey__container"]}>
                {/* Header */}
                <Box className={styles["journey__header"]}>
                    <Heading as="h2" className={styles["journey__title"]}>
                        My Journey
                    </Heading>
                    <Text className={styles["journey__subtitle"]}>
                        Every milestone a lesson, every challenge an opportunity to grow
                    </Text>
                </Box>

                {/* Timeline */}
                <Box className={styles["journey__timeline"]}>
                    <Box className={styles["journey__line"]} />

                    <Box className={styles["journey__content"]}>
                        {journeyMilestones.map((milestone, index) => (
                            <Flex
                                key={index}
                                className={`${styles["journey__item"]} ${index % 2 === 0 ? styles["journey__item--left"] : styles["journey__item--right"]
                                    }`}
                            >
                                <Box
                                    className={styles["journey__dot"]}
                                    data-color={milestone.color}
                                />

                                <Box className={styles["journey__spacer"]} />

                                <Box className={styles["journey__card"]}>
                                    <JourneyCard milestone={milestone} index={index} />
                                </Box>
                            </Flex>
                        ))}
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

import React from "react";
import { Box, Container, Heading, Text, SimpleGrid, Flex, Card, CardBody } from "@chakra-ui/react";
import { FaBookOpen, FaAward } from "react-icons/fa";
import { FiTarget, FiGlobe, FiChevronDown } from "react-icons/fi";
import styles from "./HeroSection.module.sass";
import { HeroContainer } from "@/components/common/HeroContainer";

const stats = [
    { number: "100+", label: "Courses Completed", icon: <FaBookOpen /> },
    { number: "15+", label: "Projects Delivered", icon: <FiTarget /> },
    { number: "2", label: "Languages", icon: <FiGlobe /> },
    { number: "Legend", label: "Platzi Status", icon: <FaAward /> },
];

export const HeroSection: React.FC = () => {
    return (
        <HeroContainer>
            <Box className={styles["hero__container"]}>
                <Box className={styles["hero__content"]}>
                    <Heading as="h1" className={styles["hero__title"]}>
                        Hi, I'm <Text as={'span'} bgGradient="linear-gradient(135deg, hsl(262 83% 58%), hsl(292 84% 61%))"
                            bgClip="text"
                            lineHeight="shorter">Josue Lopez</Text>
                    </Heading>
                    <Heading as={'h2'} className={styles["hero__subtitle"]}>5+ Years of Frontend Excellence</Heading>
                    <Text className={styles["hero__description"]} >
                        A passionate Frontend Engineer who believes in crafting digital experiences that make a difference.
                        From Guatemala to the world, building scalable solutions one component at a time.
                    </Text>
                </Box>

                <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing="1.5rem" className={styles["hero__stats"]}>
                    {stats.map((stat, index) => (
                        <Card
                            key={index}
                            variant="glass"
                            style={{ "--delay": `${index * 250}ms` } as React.CSSProperties}
                        >
                            <CardBody>
                                <Flex className={styles["hero__stat-icon"]}>{stat.icon}</Flex>
                                <Text className={styles["hero__stat-number"]}>{stat.number}</Text>
                                <Text className={styles["hero__stat-label"]}>{stat.label}</Text>
                            </CardBody>
                        </Card>
                    ))}
                </SimpleGrid>
            </Box>
        </HeroContainer>
    );
};


import React from 'react';
import { Box, Heading, Text, Flex, Badge } from '@chakra-ui/react';
import { FiCalendar, FiMapPin, FiTrendingUp } from 'react-icons/fi'; // ✅ Usamos react-icons
import styles from './ExperienceCard.module.sass';

export interface ExperienceData {
    position: string;
    company: string;
    location: string;
    dates: string;
    type: string;
    achievements: string[];
    technologies: string[];
}

interface ExperienceCardProps {
    experience: ExperienceData;
    index: number;
}

export const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience, index }) => {
    return (
        <Box className={`${styles['experience-card']} ${styles[`experience-card--delay-${index}`]}`}>
            {/* Header */}
            <Box className={styles['experience-card__header']}>
                <Box className={styles['experience-card__title-section']}>
                    <Heading as="h3" className={styles['experience-card__position']}>
                        {experience.position}
                    </Heading>

                    <Flex className={styles['experience-card__meta']}>
                        <Text className={styles['experience-card__company']}>
                            {experience.company}
                        </Text>

                        <Flex className={styles['experience-card__location']}>
                            <FiMapPin className={styles['experience-card__icon']} />
                            <Text>{experience.location}</Text>
                        </Flex>

                        <Flex className={styles['experience-card__dates']}>
                            <FiCalendar className={styles['experience-card__icon']} />
                            <Text>{experience.dates}</Text>
                        </Flex>

                        <Badge variant="outline" size="sm">
                            {experience.type}
                        </Badge>
                    </Flex>
                </Box>
            </Box>

            {/* Content */}
            <Box className={styles['experience-card__content']}>
                <Flex className={styles['experience-card__grid']}>
                    {/* Achievements */}
                    <Box className={styles['experience-card__achievements']}>
                        <Heading as="h4" className={styles['experience-card__section-title']}>
                            <FiTrendingUp className={styles['experience-card__section-icon']} />
                            Key Achievements
                        </Heading>

                        <Box as="ul" className={styles['experience-card__achievements-list']}>
                            {experience.achievements.map((achievement, i) => (
                                <Box as="li" key={i} className={styles['experience-card__achievement-item']}>
                                    <Box className={styles['experience-card__bullet']} />
                                    <Text>{achievement}</Text>
                                </Box>
                            ))}
                        </Box>
                    </Box>

                    {/* Technologies */}
                    <Box className={styles['experience-card__technologies']}>
                        <Heading as="h4" className={styles['experience-card__section-title']}>
                            Technologies
                        </Heading>
                        <Flex className={styles['experience-card__tech-list']}>
                            {experience.technologies.map((tech, i) => (
                                <Badge key={i} variant="subtle" size="sm">
                                    {tech}
                                </Badge>
                            ))}
                        </Flex>
                    </Box>
                </Flex>
            </Box>
        </Box>
    );
};

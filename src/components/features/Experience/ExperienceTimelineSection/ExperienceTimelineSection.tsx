import React from 'react';
import { Box } from '@chakra-ui/react';
import styles from './ExperienceTimelineSection.module.sass';
import { ExperienceData } from '@/types/experience';
import { ExperienceCard } from '../ExperienceCard';

interface ExperienceTimelineSectionProps {
    experiences: ExperienceData[];
}

export const ExperienceTimelineSection: React.FC<ExperienceTimelineSectionProps> = ({ experiences }) => {
    return (
        <Box className={styles['experience-timeline']}>
            {experiences.map((exp, index) => (
                <ExperienceCard
                    key={index}
                    experience={exp}
                    index={index}
                />
            ))}
        </Box>
    );
};
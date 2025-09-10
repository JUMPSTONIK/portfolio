import { Box, Flex, Image, Text, Heading } from "@chakra-ui/react";
import { JourneyMilestone } from "@/types/aboutMe";
import styles from "./JourneyCard.module.sass";
import { memo, useMemo } from "react";

interface JourneyCardProps {
    milestone: JourneyMilestone;
    index: number;
    isScrolling?: boolean;
}
const hexToRgb = (hex: string): string => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    if (!result) return '139, 92, 246';
    
    return [
        parseInt(result[1], 16),
        parseInt(result[2], 16),
        parseInt(result[3], 16)
    ].join(', ');
};

export const JourneyCard: React.FC<JourneyCardProps> = memo(({ 
    milestone, 
    index, 
    isScrolling = false 
}) => {

    const cardStyles = useMemo(() => {
        const rgbColor = hexToRgb(milestone.color);
        const isEven = index % 2 === 0;
        const shadowRgb = isEven ? '139, 92, 246' : '236, 72, 153';
        
        return {
            ["--card-color" as any]: milestone.color,
            ["--card-shadow-default" as any]: `0 20px 40px rgba(${shadowRgb}, 0.1)`,
            ["--card-shadow-hover" as any]: `0 30px 60px rgba(${shadowRgb}, 0.2)`,
            ["--card-glow" as any]: `radial-gradient(circle at center, ${milestone.color}11 0%, transparent 70%)`,
            ["--card-icon-shadow" as any]: `0 4px 20px ${milestone.color}66`,
            ["--card-focus-color" as any]: `${milestone.color}99`
        };
    }, [milestone.color, index]);

    const iconBadgeStyles = useMemo(() => ({
        backgroundColor: milestone.color,
        boxShadow: `0 4px 20px ${milestone.color}66`
    }), [milestone.color]);

    const textStyles = useMemo(() => ({
        year: { color: milestone.color },
        focus: { color: `${milestone.color}99` }
    }), [milestone.color]);

    return (
        <Box
            className={`${styles.card} ${isScrolling ? styles.cardNoHover : ''}`}
            style={cardStyles}
        >
            <Flex className={styles.card__layout}>
                <Box className={styles.card__imageSection}>
                    <Image
                        src={milestone.image}
                        alt={milestone.phase}
                        className={styles.card__image}
                        loading="lazy"
                        decoding="async"
                    />
                    <Box className={styles.card__imageOverlay} />
                    <Box
                        className={styles.card__iconBadge}
                        style={iconBadgeStyles}
                    >
                        {milestone.icon}
                    </Box>
                </Box>

                <Box className={styles.card__content}>
                    <Text className={styles.card__year} style={textStyles.year}>
                        {milestone.year}
                    </Text>
                    <Heading as="h3" className={styles.card__phase}>
                        {milestone.phase}
                    </Heading>
                    <Text className={styles.card__description}>
                        {milestone.description}
                    </Text>
                    <Text className={styles.card__details}>
                        {milestone.details}
                    </Text>
                    <Text
                        className={styles.card__focus}
                        style={textStyles.focus}
                    >
                        Focus: {milestone.focus}
                    </Text>
                </Box>
            </Flex>

            <Box className={styles.card__glow} />
        </Box>
    );
});

JourneyCard.displayName = 'JourneyCard';
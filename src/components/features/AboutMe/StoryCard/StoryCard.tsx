'use client'
import React, { useRef, useEffect } from "react";
import { Box, Heading, Text } from "@chakra-ui/react";
import { gsap } from "gsap";
import styles from "./StoryCard.module.sass";
import { StoryCardType } from "@/types/aboutMe";

interface StoryCardProps {
    card: StoryCardType;
}

export const StoryCard: React.FC<StoryCardProps> = ({ card }) => {
    const cardRef = useRef<HTMLDivElement>(null);
    const iconRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const storyRef = useRef<HTMLDivElement>(null);
    const highlightRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const card = cardRef.current;
        const icon = iconRef.current;
        const title = titleRef.current;
        const story = storyRef.current;
        const highlight = highlightRef.current;

        if (!card || !icon || !title || !story || !highlight) return;

        // Enhanced hover animation with GSAP
        const handleMouseEnter = () => {
            const tl = gsap.timeline();
            
            tl.to(card, {
                scale: 1.05,
                backgroundColor: "#8b5cf6",
                borderColor: "#8b5cf6",
                boxShadow: "0 4px 20px rgba(139, 92, 246, 0.15)",
                duration: 0.2,
                ease: "power2.out"
            })
            .to(icon, {
                background: "rgba(255, 255, 255, 0.2)",
                duration: 0.2,
                ease: "power2.out"
            }, 0)
            .to(title, {
                color: "white",
                duration: 0.2,
                ease: "power2.out"
            }, 0)
            .to(story, {
                color: "rgba(255, 255, 255, 0.9)",
                duration: 0.2,
                ease: "power2.out"
            }, 0)
            .to(highlight, {
                color: "rgba(255, 255, 255, 0.8)",
                duration: 0.2,
                ease: "power2.out"
            }, 0);
        };

        const handleMouseLeave = () => {
            const tl = gsap.timeline();
            
            tl.to(card, {
                scale: 1,
                backgroundColor: "white",
                borderColor: "#f3f4f6",
                boxShadow: "0 2px 8px rgba(0, 0, 0, 0.08)",
                duration: 0.2,
                ease: "power2.out"
            })
            .to(icon, {
                background: "linear-gradient(135deg, #7c3aed, #ec4899)",
                duration: 0.2,
                ease: "power2.out"
            }, 0)
            .to(title, {
                color: "#374151",
                duration: 0.2,
                ease: "power2.out"
            }, 0)
            .to(story, {
                color: "#6b7280",
                duration: 0.2,
                ease: "power2.out"
            }, 0)
            .to(highlight, {
                color: "#8b5cf6",
                duration: 0.2,
                ease: "power2.out"
            }, 0);
        };

        card.addEventListener('mouseenter', handleMouseEnter);
        card.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            card.removeEventListener('mouseenter', handleMouseEnter);
            card.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, []);

    return (
        <Box
            as="article"
            className={styles["story-card"]}
            ref={cardRef}
        >
            <Box 
                className={styles["story-card__icon-wrapper"]}
                ref={iconRef}
            >
                {card.icon}
            </Box>

            <Heading 
                as="h3" 
                className={styles["story-card__title"]}
                ref={titleRef}
            >
                {card.title}
            </Heading>

            <Text 
                className={styles["story-card__story"]}
                ref={storyRef}
            >
                {card.story}
            </Text>

            <Text 
                as="div" 
                className={styles["story-card__highlight"]}
                ref={highlightRef}
            >
                "{card.highlight}"
            </Text>
        </Box>
    );
};
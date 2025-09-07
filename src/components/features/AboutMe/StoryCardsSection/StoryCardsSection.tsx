'use client'
import { Box, Heading, Text, SimpleGrid } from "@chakra-ui/react";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./StoryCardsSection.module.sass";
import { StoryCard } from "../StoryCard";
import { storyCards } from "@/constants/storyCards";

gsap.registerPlugin(ScrollTrigger);

export const StoryCardsSection: React.FC = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const cardsRef = useRef<HTMLDivElement[]>([]);

    useEffect(() => {
        const section = sectionRef.current;
        const cards = cardsRef.current;

        if (!section || cards.length === 0) return;

        const getStartingPositions = () => {
            const isMobile = window.innerWidth < 768;
            const isTablet = window.innerWidth < 1024;
            
            if (isMobile) {
                return [
                    { x: -150, y: -100, rotation: -25 },
                    { x: 150, y: -100, rotation: 25 },
                    { x: -150, y: 100, rotation: 25 },
                    { x: 150, y: 100, rotation: -25 }
                ];
            } else if (isTablet) {
                return [
                    { x: -200, y: -150, rotation: -35 },
                    { x: 200, y: -150, rotation: 35 },
                    { x: -200, y: 150, rotation: 35 },
                    { x: 200, y: 150, rotation: -35 }
                ];
            } else {
                return [
                    { x: -300, y: -200, rotation: -45 },
                    { x: 300, y: -200, rotation: 45 },
                    { x: -300, y: 200, rotation: 135 },
                    { x: 300, y: 200, rotation: -135 }
                ];
            }
        };

        const positions = getStartingPositions();

        cards.forEach((card, index) => {
            if (!card) return;
            
            const position = positions[index] || positions[index % 4];
            
            gsap.set(card, {
                x: position.x,
                y: position.y,
                rotation: position.rotation,
                scale: 0.5,
                opacity: 0,
            });

            ScrollTrigger.create({
                trigger: card,
                start: "top 85%", 
                end: "top 15%",
                once: true,
                onEnter: () => {
                    gsap.to(card, {
                        x: 0,
                        y: 0,
                        rotation: 0,
                        scale: 1,
                        opacity: 1,
                        duration: 1,
                        ease: "back.out(1.5)",
                        onStart: () => {
                            gsap.to(card, {
                                scale: 1.08,
                                duration: 0.15,
                                yoyo: true,
                                repeat: 1,
                                ease: "power2.inOut",
                                delay: 0.8
                            });
                        }
                    });
                },

            });
        });

        const handleResize = () => {
            const newPositions = getStartingPositions();
            
            cards.forEach((card, index) => {
                if (!card) return;
                
                const cardStyle = window.getComputedStyle(card);
                const opacity = parseFloat(cardStyle.opacity);
                
                if (opacity === 0) {
                    const position = newPositions[index] || newPositions[index % 4];
                    gsap.set(card, {
                        x: position.x,
                        y: position.y,
                        rotation: position.rotation,
                        position: "relative",
                        zIndex: 10,
                    });
                }
            });
        };

        window.addEventListener('resize', handleResize);

        // Cleanup function
        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const addToRefs = (el: HTMLDivElement | null, index: number) => {
        if (el) {
            cardsRef.current[index] = el;
        }
    };

    return (
        <Box 
            as="section" 
            className={styles["story-cards-section"]}
            ref={sectionRef}
        >
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
                        <Box
                            key={index}
                            width={'fit-content'}
                            ref={(el) => addToRefs(el, index)}
                        >
                            <StoryCard card={card} />
                        </Box>
                    ))}
                </SimpleGrid>
            </Box>
        </Box>
    );
};
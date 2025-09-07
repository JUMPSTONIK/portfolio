'use client'
import { Box, Heading, Text, SimpleGrid } from "@chakra-ui/react";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./StoryCardsSection.module.sass";
import { StoryCard } from "../StoryCard";
import { storyCards } from "@/constants/storyCards";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

export const StoryCardsSection: React.FC = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const cardsRef = useRef<HTMLDivElement[]>([]);

    useEffect(() => {
        const section = sectionRef.current;
        const cards = cardsRef.current;

        if (!section || cards.length === 0) return;

        // Set initial states for cards - scattered around from different corners
        cards.forEach((card, index) => {
            if (!card) return;
            
            // Define starting positions based on card index
            const positions = [
                { x: -300, y: -200, rotation: -45 },    // Top-left
                { x: 300, y: -200, rotation: 45 },      // Top-right
                { x: -300, y: 200, rotation: 135 },     // Bottom-left
                { x: 300, y: 200, rotation: -135 }      // Bottom-right
            ];
            
            const position = positions[index] || positions[index % 4];
            
            gsap.set(card, {
                x: position.x,
                y: position.y,
                rotation: position.rotation,
                scale: 0.5,
                opacity: 0,
            });
        });

        // Create the magnetic assembly animation
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: section,
                start: "center 90%", // Trigger when section center reaches 80% of viewport
                end: "center 10%",
                toggleActions: "play none none reverse",
                // markers: true, // Uncomment for debugging
            }
        });

        // Animate each card with staggered timing
        cards.forEach((card, index) => {
            if (!card) return;
            
            tl.to(card, {
                x: 0,
                y: 0,
                rotation: 0,
                scale: 1,
                opacity: 1,
                duration: 1.2,
                ease: "back.out(1.7)", // Elastic bounce effect
                onStart: () => {
                    // Add a subtle magnetic "pull" effect
                    gsap.to(card, {
                        scale: 1.05,
                        duration: 0.1,
                        yoyo: true,
                        repeat: 1,
                        ease: "power2.inOut"
                    });
                }
            }, index * 0.2); // Stagger by 0.2 seconds
        });

        // Cleanup function
        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    // Function to add card refs
    const addToRefs = (el: HTMLDivElement | null, index: number) => {
        if (el && !cardsRef.current.includes(el)) {
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

'use client'
import { useGSAPBubbles } from "@/hooks/useGSAPBubbles";
import { Box, VStack, Heading, HStack, Button, Text } from "@chakra-ui/react";
import { useRef } from "react";
import styles from './HeroSection.module.sass'
import { CustomAvatar } from "@/components/ui/CustomAvatar/CustomAvatar";

interface HeroSectionProps {
    profileImage?: string;
    name?: string;
    title?: string;
    description?: string;
    onViewProjects?: () => void;
    onContact?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
    profileImage = "https://media.licdn.com/dms/image/v2/D4E03AQHw5UjZStrVDQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1715630572476?e=1759968000&v=beta&t=npS6KIixhm7lrLIT3W3Rx-1B-3j7L3iobRrKIkOIf00",
    name = "Senior Frontend Engineer",
    title = "React & Angular Specialist",
    description = "Creando experiencias digitales excepcionales con React, TypeScript y las últimas tecnologías frontend. Apasionado por el código limpio y el diseño intuitivo.",
    onViewProjects = () => console.log('Ver Proyectos clicked'),
    onContact = () => console.log('Contacto clicked')
}) => {
    const containerRef = useRef<HTMLDivElement | null>(null);

    useGSAPBubbles(containerRef);

    return (
        <Box
            ref={containerRef}
            className={`${styles.hero}`}
            position="relative"
            minHeight="100vh"
            background="linear-gradient(135deg, #f3e8ff 0%, #e9d5ff 50%, #ddd6fe 100%)"
            display="flex"
            alignItems="center"
            justifyContent="center"
            overflow="hidden"
            px={4}
        >
            {/* Main Content */}
            <VStack
                className={`${styles.hero__content}`}
                spacing={6}
                textAlign="center"
                zIndex={10}
                position="relative"
                maxWidth="600px"
            >
                <CustomAvatar className={`${styles.hero__avatar}`} profileImage={profileImage}/>

                <VStack className={`${styles.hero__titles}`} spacing={2}>
                    <Heading
                        className={`${styles.hero__title} animate-fade-in animate-delay-0 duration-500 ease-in`}
                        as="h1"
                        size="2xl"
                        fontWeight="bold"
                        bgGradient="linear-gradient(135deg, hsl(262 83% 58%), hsl(292 84% 61%))"
                        bgClip="text"
                        lineHeight="shorter"
                    >
                        {name}
                    </Heading>

                    <Heading
                        as="h2"
                        className={`${styles.hero__subtitle}`}
                        fontSize="3xl"
                        color="#363d49cc"
                        fontWeight="600"
                    >
                        {title}
                    </Heading>
                </VStack>

                <Text
                    className={`${styles.hero__description}`}
                    fontSize="lg"
                    color="gray.700"
                    lineHeight="relaxed"
                    maxWidth="500px"
                >
                    {description}
                </Text>

                <Box className={`${styles.hero__actions}`} pt={4}>
                    <Button
                        className={`${styles.hero__actions__btn_left}`}
                        variant="primary"
                        onClick={onViewProjects}
                        rightIcon={<span>→</span>}
                    >
                        Ver Proyectos
                    </Button>

                    <Button
                        className={`${styles.hero__actions__btn_right}`}
                        variant="secondary"
                        onClick={onContact}
                        leftIcon={<span>💬</span>}
                    >
                        Contacto
                    </Button>
                </Box>
            </VStack>
        </Box>
    );
};

'use client'
import { Box, VStack, Heading, HStack, Button, Text } from "@chakra-ui/react";
import styles from './HeroSection.module.sass'
import { CustomAvatar } from "@/components/ui/CustomAvatar/CustomAvatar";
import { HeroContainer } from "@/components/common/HeroContainer";

export const HeroSection = () => {

    return (
        <HeroContainer>
            <VStack
                className={`${styles.hero__content}`}
                spacing={6}
                textAlign="center"
                zIndex={10}
                position="relative"
                maxWidth="600px"
            >
                <CustomAvatar className={`${styles.hero__avatar}`} profileImage={'https://media.licdn.com/dms/image/v2/D4E03AQHw5UjZStrVDQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1715630572476?e=1759968000&v=beta&t=npS6KIixhm7lrLIT3W3Rx-1B-3j7L3iobRrKIkOIf00'}/>

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
                        Josue David Lopez
                    </Heading>

                    <Heading
                        as="h2"
                        className={`${styles.hero__subtitle}`}
                        fontSize="3xl"
                        color="#363d49cc"
                        fontWeight="600"
                    >
                        Senior Frontend Engineer
                    </Heading>
                </VStack>

                <Text
                    className={`${styles.hero__description}`}
                    fontSize="lg"
                    color="gray.700"
                    lineHeight="relaxed"
                    maxWidth="500px"
                >
                    Creando experiencias digitales excepcionales con React, TypeScript y las últimas tecnologías frontend. Apasionado por el código limpio y el diseño intuitivo.
                </Text>

                <Box className={`${styles.hero__actions}`} pt={4}>
                    <Button
                        as={'a'}
                        href="/experience"
                        className={`${styles.hero__actions__btn_left}`}
                        variant="primary"
                        rightIcon={<span>→</span>}
                    >
                        Check my experience
                    </Button>

                    <Button
                        as={'a'}
                        href="mailto:josuedlflorian@gmail.com?subject=Interés%20en%20tu%20perfil%20como%20Frontend%20Developer&body=Hola%20Josue,%0D%0A%0D%0AHe%20revisado%20tu%20portafolio%20y%20me%20interesa%20ponernos%20en%20contacto.%20Quisiera%20hablar%20contigo%20sobre%20una%20oportunidad%20de%20colaboración%20como%20Frontend%20Developer.%0D%0A%0D%0AQuedo%20pendiente%20de%20tu%20respuesta.%0D%0A%0D%0ASaludos."
                        className={`${styles.hero__actions__btn_right}`}
                        variant="secondary"
                        leftIcon={<span>💬</span>}
                    >
                        Contact me
                    </Button>
                </Box>
            </VStack>
        </HeroContainer>
    );
};
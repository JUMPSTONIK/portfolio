"use client";

import { Box, Text, Link, Flex, Image, chakra, Link as ChakraLink } from "@chakra-ui/react";
import styles from "./Footer.module.sass";
import { techStack } from "@/constants/teckStack";
import { navLinks } from "@/constants/navLinks";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { TiSocialAtCircular, TiSocialGithub, TiSocialLinkedin } from "react-icons/ti";

export const Footer = () => {
    return (
        <Box as="footer" className={styles.footer}>
            <Box className={styles.footer__container}>

                <Text className={styles.footer__message}>
                    Viviendo, aprendiendo y creando soluciones digitales excepcionales,
                    un día a la vez. Siempre en busca de nuevos desafíos y oportunidades
                    para crecer.
                </Text>

                <Flex className={styles.footer__social}>
                    
                    <Link href="https://www.linkedin.com/in/josue-david-lopez-florian/" target="_blank" className={styles.socialLink} title="LinkedIn">
                        <TiSocialLinkedin />
                    </Link>
                    <Link href="https://github.com/JUMPSTONIK" target="_blank" className={styles.socialLink} title="GitHub">
                        <TiSocialGithub />
                    </Link>
                    <Link href="mailto:josuedlflorian@gmail.com?subject=Interés%20en%20tu%20perfil%20como%20Frontend%20Developer&body=Hola%20Josue,%0D%0A%0D%0AHe%20revisado%20tu%20portafolio%20y%20me%20interesa%20ponernos%20en%20contacto.%20Quisiera%20hablar%20contigo%20sobre%20una%20oportunidad%20de%20colaboración%20como%20Frontend%20Developer.%0D%0A%0D%0AQuedo%20pendiente%20de%20tu%20respuesta.%0D%0A%0D%0ASaludos." className={styles.socialLink} title="Email">
                        <TiSocialAtCircular />
                    </Link>
                </Flex>

                <nav className={styles.footer__nav}>
                    {navLinks.map((item) => (

                    <Link key={item.href} href={item.href} target={item.isExternal ? '_blank' : undefined} className={styles.footer__navLink} title="Twitter">
                        {item.label}
                        {item.isExternal && <ExternalLinkIcon className={styles['footer__nav-icon']}/>}
                    </Link>
                    ))}

                </nav>

                <Box className={styles.footer__tech}>
                    <Text className={styles.footer__techTitle}>Hecho con</Text>
                    <Flex className={styles.footer__techList}>
                        {techStack.map(
                            (tech) => (
                                <Text as={'span'} key={tech} className={styles.techItem}>
                                    {tech}
                                </Text>
                            )
                        )}
                    </Flex>
                </Box>

                <Text className={styles.footer__copyright}>
                    © 2025 Mi Portfolio. Diseñado y desarrollado con ❤️
                </Text>
            </Box>
        </Box>
    );
}

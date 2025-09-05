"use client";

import { Box, Text, Link, Flex, Image, chakra } from "@chakra-ui/react";
import styles from "./Footer.module.sass";

export const Footer = () => {
    return (
        <Box as="footer" className={styles.footer}>
            <Box className={styles.footer__container}>

                {/* Personal Message */}
                <Text className={styles.footer__message}>
                    Viviendo, aprendiendo y creando soluciones digitales excepcionales,
                    un día a la vez. Siempre en busca de nuevos desafíos y oportunidades
                    para crecer.
                </Text>

                {/* Social Links */}
                <Flex className={styles.footer__social}>
                    <Link href="#" className={styles.socialLink} title="Twitter">
                        𝕏
                    </Link>
                    <Link href="#" className={styles.socialLink} title="LinkedIn">
                        in
                    </Link>
                    <Link href="#" className={styles.socialLink} title="GitHub">
                        gh
                    </Link>
                    <Link href="#" className={styles.socialLink} title="Dribbble">
                        dr
                    </Link>
                    <Link href="#" className={styles.socialLink} title="Instagram">
                        ig
                    </Link>
                    <Link href="#" className={styles.socialLink} title="Email">
                        @
                    </Link>
                </Flex>

                {/* Navigation */}
                <nav className={styles.footer__nav}>
                    <Link href="#" className={styles.footer__navLink}>
                        Inicio
                    </Link>
                    <Link href="#" className={styles.footer__navLink}>
                        Sobre mí
                    </Link>
                    <Link href="#" className={styles.footer__navLink}>
                        Proyectos
                    </Link>
                    <Link href="#" className={styles.footer__navLink}>
                        Experiencia
                    </Link>
                    <Link href="#" className={styles.footer__navLink}>
                        Blog
                    </Link>
                    <Link href="#" className={styles.footer__navLink}>
                        Contacto
                    </Link>
                </nav>

                {/* Technologies */}
                <Box className={styles.footer__tech}>
                    <Text className={styles.footer__techTitle}>Hecho con</Text>
                    <Flex className={styles.footer__techList}>
                        {["HTML5", "CSS3", "Typescript", "React", "Next.js", "Tailwind CSS", "Vercel", "GSAP"].map(
                            (tech) => (
                                <chakra.span key={tech} className={styles.techItem}>
                                    {tech}
                                </chakra.span>
                            )
                        )}
                    </Flex>
                </Box>

                {/* Copyright */}
                <Text className={styles.footer__copyright}>
                    © 2025 Mi Portfolio. Diseñado y desarrollado con ❤️
                </Text>
            </Box>
        </Box>
    );
}

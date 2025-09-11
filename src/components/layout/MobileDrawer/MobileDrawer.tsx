'use client'

import React from 'react'
import {
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    VStack,
    Button,
    Text,
    Badge,
    Divider,
    Box,
    Link as ChakraLink
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import styles from './MobileDrawer.module.sass'

interface NavItem {
    href: string
    label: string
    badge?: string
    isExternal?: boolean
}

interface MobileDrawerProps {
    isOpen: boolean
    onClose: () => void
    navItems: NavItem[]
    ctaText: string
    onNavigation: (href: string, isExternal?: boolean) => void
    onCtaClick: () => void
}

export const MobileDrawer: React.FC<MobileDrawerProps> = ({
    isOpen,
    onClose,
    navItems,
    ctaText,
    onNavigation,
    onCtaClick
}) => {
    const handleNavClick = (href: string, isExternal?: boolean) => {
        onNavigation(href, isExternal)
    }

    const handleCtaClick = () => {
        onCtaClick()
        onClose()
    }

    return (
        <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="sm"  >
            <DrawerOverlay className={styles['drawer-overlay']} />
            <DrawerContent className={styles.drawer}>
                <DrawerHeader className={styles.drawer__header}>
                    <DrawerCloseButton className={styles.drawer__close} />
                    <Text className={styles.drawer__subtitle}>Explora mi trabajo y experiencia</Text>
                </DrawerHeader>

                <DrawerBody className={styles.drawer__body}>
                    <VStack as="nav" className={styles.drawer__nav}>
                        {navItems.map((item) => (
                            <ChakraLink
                                key={item.href}
                                className={styles.drawer__navLink}
                                onClick={() => handleNavClick(item.href, item.isExternal)}
                            >
                                <Box className={styles.drawer__navLabel}>
                                    {item.label}
                                    {item.isExternal && <ExternalLinkIcon className={styles['drawer__nav-icon']} />}
                                </Box>
                                {item.badge && <Badge className={styles['nav-badge']}>{item.badge}</Badge>}
                            </ChakraLink>
                        ))}
                    </VStack>

                    <Divider className={styles.drawer__divider} />

                    <Button as={'a'} href='mailto:josuedlflorian@gmail.com?subject=Interés%20en%20tu%20perfil%20como%20Frontend%20Developer&body=Hola%20Josue,%0D%0A%0D%0AHe%20revisado%20tu%20portafolio%20y%20me%20interesa%20ponernos%20en%20contacto.%20Quisiera%20hablar%20contigo%20sobre%20una%20oportunidad%20de%20colaboración%20como%20Frontend%20Developer.%0D%0A%0D%0AQuedo%20pendiente%20de%20tu%20respuesta.%0D%0A%0D%0ASaludos.' className={styles.drawer__cta} onClick={handleCtaClick}>
                        {ctaText}
                    </Button>

                    <Box className={styles.drawer__footer}>
                        <Text className={styles.drawer__footerTitle}>¿Tienes un proyecto en mente?</Text>
                        <Text className={styles.drawer__footerSubtitle}>Hablemos sobre cómo puedo ayudarte</Text>
                    </Box>
                </DrawerBody>
            </DrawerContent>
        </Drawer>
    )
}

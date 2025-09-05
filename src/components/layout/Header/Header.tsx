'use client'

import React, { useState, useEffect } from 'react'
import {
    Box,
    Flex,
    Button,
    IconButton,
    Link as ChakraLink,
    useDisclosure,
} from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon, ExternalLinkIcon } from '@chakra-ui/icons'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import styles from './Header.module.sass'
import { MobileDrawer } from '../MobileDrawer'

interface NavItem {
    href: string
    label: string
    badge?: string
    isExternal?: boolean
}

interface HeaderProps {
    navItems?: NavItem[]
    logoSrc?: string
    logoText?: string
    ctaText?: string
    onCtaClick?: () => void
}

const defaultNavItems: NavItem[] = [
    { href: '/', label: 'Inicio' },
    { href: '/about', label: 'Sobre mí' },
    { href: '/projects', label: 'Proyectos', badge: '5' },
    { href: '/experience', label: 'Experiencia' },
    // { href: '/blog', label: 'Blog', badge: 'New' },
    { href: '/resume', label: 'Resume', isExternal: true },
]

export const Header: React.FC<HeaderProps> = ({
    navItems = defaultNavItems,
    logoSrc,
    logoText = "Portfolio",
    ctaText = "Contacta me",
    onCtaClick
}) => {
    const [isScrolled, setIsScrolled] = useState(false)
    const { isOpen, onOpen, onClose } = useDisclosure()
    const router = useRouter()

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const handleNavigation = (href: string, isExternal?: boolean) => {
        if (isExternal) window.open(href, '_blank')
        else router.push(href)
        onClose()
    }

    const handleCta = () => onCtaClick ? onCtaClick() : router.push('/contact')

    return (
        <>
            <Box
                as="header"
                className={`${styles.header} ${isScrolled ? styles['header--scrolled'] : ''}`}
                display={isOpen? 'none' : ''}
            >
                <Box className={styles.header__container}>
                    {/* Logo */}
                    <Link href="/" passHref>
                        <Flex as="a" className={styles.header__logo}>
                            {logoSrc && <img src={logoSrc} alt={logoText} className={styles.header__logoImage} />}
                            <span className={styles.header__logoText}>{logoText}</span>
                        </Flex>
                    </Link>

                    {/* Desktop Navigation */}
                    <Box as="nav" className={styles.header__nav}>
                        {navItems.map((item) => (
                            <ChakraLink
                                key={item.href}
                                className={styles['nav-link']}
                                onClick={() => handleNavigation(item.href, item.isExternal)}
                            >
                                {item.label}
                                {item.badge && <span className={styles['nav-badge']}>{item.badge}</span>}
                                {item.isExternal && <ExternalLinkIcon className={styles['nav-link-icon']} />}
                            </ChakraLink>
                        ))}
                    </Box>

                    {/* CTA & Mobile Menu */}
                    <Box className={styles.header__actions}>
                        <Button className={styles.header__cta} onClick={handleCta}>
                            {ctaText}
                        </Button>

                        <IconButton
                            aria-label="Toggle mobile menu"
                            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                            className={styles.header__menuButton}
                            onClick={isOpen ? onClose : onOpen}
                        />
                    </Box>
                </Box>
            </Box>

            <MobileDrawer
                isOpen={isOpen}
                onClose={onClose}
                navItems={navItems}
                ctaText={ctaText}
                onNavigation={handleNavigation}
                onCtaClick={handleCta}
            />

            {/* Mobile Drawer */}
        </>
    )
}

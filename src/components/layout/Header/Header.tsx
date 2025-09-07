'use client'

import React, { useState, useEffect } from 'react'
import {
    Box,
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
import { navLinks } from '@/constants/navLinks'
interface HeaderProps {
    logoText?: string
    ctaText?: string
    onCtaClick?: () => void
}

export const Header: React.FC<HeaderProps> = ({
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
                display={isOpen ? 'none' : ''}
            >
                <Box className={styles.header__container}>
                    <Link className={styles.header__logo} href="/" passHref>
                        <span className={`${styles.header__logoText}`}>{logoText}</span>
                    </Link>

                    <Box as="nav" className={styles.header__nav}>
                        {navLinks.map((item) => (
                            <ChakraLink 
                                key={item.href} href={item.href} 
                                target={item.isExternal ? '_blank' : undefined}
                                className={`${styles['nav-link']} ${!isScrolled && '!text-brand-secondary'}`}
                            >
                                {item.label}
                                {/* {item.badge && <span className={styles['nav-badge']}>{item.badge}</span>} */}
                                {item.isExternal && <ExternalLinkIcon className={styles['nav-link-icon']} />}
                            </ChakraLink>
                        ))}
                    </Box>

                    <Box className={styles.header__actions}>
                        <ChakraLink href='/contact' className={styles.header__cta} >
                            {ctaText}
                        </ChakraLink>

                        <IconButton
                            size='lg'
                            aria-label="Toggle mobile menu"
                            icon={isOpen ? <CloseIcon width={50} height={50} /> : <HamburgerIcon color={isScrolled ? 'black' : '#7c3aed'} width={30} height={30}/>}
                            className={styles.header__menuButton}
                            onClick={isOpen ? onClose : onOpen}
                        />
                    </Box>
                </Box>
            </Box>

            <MobileDrawer
                isOpen={isOpen}
                onClose={onClose}
                navItems={navLinks}
                ctaText={ctaText}
                onNavigation={handleNavigation}
                onCtaClick={handleCta}
            />
        </>
    )
}

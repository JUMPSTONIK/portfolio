import { defineStyle, defineStyleConfig } from '@chakra-ui/react'

const baseStyle = defineStyle({
    fontWeight: '600',
    borderRadius: '8px',
    transition: 'all 0.3s ease',
    _focus: {
        boxShadow: 'none',
    },
})

const variants = {
    primary: defineStyle({
        color: 'white',
        px: '32px',
        py: '12px',
        height: 'auto',
        fontSize: '16px',
        bgGradient: 'linear(135deg, hsl(262 83% 58%), hsl(292 84% 61%))',
        _hover: {
            bgGradient: 'linear(135deg, hsl(262 83% 50%), hsl(292 84% 55%))',
            transform: 'translateY(-2px)',
            boxShadow: '0 10px 25px rgba(139, 92, 246, 0.3)',
        },
        _active: {
            transform: 'translateY(0)',
        },
    }),

    secondary: defineStyle({
        bg: 'transparent',
        color: 'gray.700',
        border: '2px solid',
        borderColor: 'hsl(262 83% 58%)',
        px: '32px',
        py: '12px',
        height: 'auto',
        fontSize: '16px',
        _hover: {
            borderColor: 'brand.500',
            color: 'brand.500',
            transform: 'translateY(-2px)',
            boxShadow: '0 10px 25px rgba(139, 92, 246, 0.15)',
        },
        _active: {
            transform: 'translateY(0)',
        },
    }),
}

export const Button = defineStyleConfig({
    baseStyle,
    variants,
    defaultProps: {
        variant: 'primary',
    },
})

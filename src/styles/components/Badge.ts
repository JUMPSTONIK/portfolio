export const Badge = {
    baseStyle: {
        textTransform: 'none',
        fontWeight: '500',
        borderRadius: '9999px',
        transition: 'all 0.2s ease',
    },
    sizes: {
        sm: {
            fontSize: '0.75rem',
            px: 3,
            py: 1,
            lineHeight: 1,
        },
        md: {
            fontSize: '0.875rem',
            px: 4,
            py: 1.5,
            lineHeight: 1.25,
        },
        lg: {
            fontSize: '1rem',
            px: 5,
            py: 2,
            lineHeight: 1.5,
        },
    },
    variants: {
        primary: {
            bg: 'brand.primary',
            color: 'white',
            _hover: {
                bg: 'brand.secondary',
            },
        },
        secondary: {
            bg: 'gray.100',
            color: 'gray.700',
            _hover: {
                bg: 'gray.200',
            },
        },
        outline: {
            bg: 'transparent',
            color: 'brand.primary',
            border: '1px solid',
            borderColor: 'brand.primaryAlpha',
            _hover: {
                bg: 'brand.primaryAlpha',
                borderColor: 'brand.primary',
            },
        },
        tech: {
            bg: 'transparent',
            color: 'brand.primary',
            border: '1px solid',
            borderColor: 'brand.primaryAlpha',
            fontSize: '0.75rem',
            _hover: {
                bg: 'brand.primaryAlpha',
                borderColor: 'brand.primary',
            },
        },
    },
    defaultProps: {
        size: 'md',
        variant: 'primary',
    },
};

import { cardAnatomy } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '@chakra-ui/react'

const { definePartsStyle, defineMultiStyleConfig } =
    createMultiStyleConfigHelpers(cardAnatomy.keys)

// Define the glass variant
const glass = definePartsStyle({
    container: {
        backdropFilter: 'blur(8px)',
        borderRadius: '1rem',
        padding: '1rem',
        border: '1px solid rgba(255, 255, 255, 0.2)',
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        boxShadow: '0 4px 20px rgba(139, 92, 246, 0.15)',
        transition: 'all 0.2s ease-in-out', // Added transition for smoother hover
        _hover: {
            transform: 'scale(1.05)',
        },
    },
    header: {
        padding: '0',
        marginBottom: '0.5rem',
    },
    body: {
        padding: '0',
    },
    footer: {
        padding: '0',
        marginTop: '0.5rem',
    },
})

// Export the card theme configuration
export const Card = defineMultiStyleConfig({
    variants: { glass },
})
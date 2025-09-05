export interface Element {
    id: number
    content: string        // mostrable (uso el mismo name para accesibilidad)
    delay: number
    name: string
    logo: string           // ruta al logo (ej. /public/logos/* en Next.js)
}

export interface AnimatedSectionData {
    id: number
    title: string
    elements: Element[]
}
export interface Element {
    id: number
    content: string 
    delay: number
    name: string
    logo: string          
}

export interface AnimatedSectionData {
    id: number
    title: string
    elements: Element[]
}
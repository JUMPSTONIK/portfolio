export interface ExperienceData {
    position: string;
    company: string;
    location: string;
    dates: string;
    type: string;
    achievements: string[];
    technologies: string[];
}

export interface TestimonialData {
    name: string;
    role: string;
    content: string;
    rating: number;
}

export interface StatItem {
    value: string;
    label: string;
}
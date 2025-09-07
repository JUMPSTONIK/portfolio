import { ReactNode } from 'react';

export interface JourneyMilestone {
    year: string;
    phase: string;
    description: string;
    focus: string;
    details: string;
    icon: ReactNode;
    color: string;
    image: string;
}

export interface StoryCardType {
    icon: ReactNode;
    title: string;
    story: string;
    highlight: string;
}

export interface CoreValue {
    icon: ReactNode;
    title: string;
    description: string;
}

export interface PersonalityTrait {
    trait: string;
    level: number;
    description: string;
}
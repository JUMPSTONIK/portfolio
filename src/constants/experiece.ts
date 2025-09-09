import { ExperienceData, TestimonialData, StatItem } from '../types/experience';

export const experiencesData: ExperienceData[] = [
    {
        position: "Frontend Developer / Tech Lead",
        company: "OrchardTek",
        location: "USA",
        dates: "July 2024 - Present",
        type: "Full-time",
        achievements: [
            "Integrated SalesAI services into HubSpot Marketplace application",
            "Mentored Little Big Engine team in Webflow adoption and UI design systems",
            "Delivered 90% of Travel More platform with advanced dashboard and authentication",
            "Led Maxx Property development enabling 50+ website replications",
            "Developed Hoppy App Admin Panel with 2FA security and statistical reports"
        ],
        technologies: ["Next.js", "Chakra UI", "Tailwind", "Zustand", "TypeScript", "Webflow"]
    },
    {
        position: "Senior Frontend Software Engineer",
        company: "Applaudo",
        location: "El Salvador",
        dates: "August 2024 - January 2025",
        type: "Full-time",
        achievements: [
            "Delivered Google Aduanas enterprise application MVP in 5 months",
            "Achieved 90% test coverage using Karma and Jasmine",
            "Maintained 85+ Lighthouse performance scores consistently",
            "Enhanced accessibility and responsive design implementation"
        ],
        technologies: ["Angular 18", "NgRX", "PrimeNG", "Karma", "Jasmine"]
    },
    {
        position: "Senior Frontend Engineer",
        company: "Yalutec [Migo]",
        location: "Panama",
        dates: "October 2023 - October 2024",
        type: "Full-time",
        achievements: [
            "Added 5 payment processors and 2 wallets, enhancing options by 50%",
            "Optimized codebase reducing page load times by 40%",
            "Built UI component library with 40+ additions and 80% updates",
            "Reduced bug frequency by 35% in enterprise dashboard",
            "Supported integration achieving 100,000+ daily transactions"
        ],
        technologies: ["React.js", "Payment APIs", "UI Components", "Performance Optimization"]
    },
    {
        position: "Frontend Vue Developer",
        company: "Golance",
        location: "USA",
        dates: "July 2023 - October 2023",
        type: "Contract",
        achievements: [
            "Migrated 40% of legacy AngularJS systems to Vue.js 3",
            "Improved application performance by 25%",
            "Optimized 40% of component architecture",
            "Created 5 SEO-friendly marketing pages with enhanced metrics"
        ],
        technologies: ["Vue.js 3", "AngularJS Migration", "SEO Optimization"]
    },
    {
        position: "Frontend React Developer",
        company: "Webtrack",
        location: "Guatemala/Panama",
        dates: "April 2023 - August 2023",
        type: "Contract",
        achievements: [
            "Integrated live video streaming into GPS tracking systems",
            "Built custom video player with advanced controls",
            "Ensured cross-device compatibility through responsive design"
        ],
        technologies: ["React.js", "Video Streaming", "GPS Integration", "Responsive Design"]
    },
    {
        position: "Frontend Engineer",
        company: "Allied Global Technology Services",
        location: "Guatemala",
        dates: "June 2022 - June 2023",
        type: "Full-time",
        achievements: [
            "Implemented Apple Pay in G&T Bank app with 100% certification score",
            "Created 50% of reusable components for card tokenization system",
            "Increased automated test coverage to 35%"
        ],
        technologies: ["Ionic", "Angular", "Apple Pay Integration", "Banking Systems"]
    }
];

export const testimonialsData: TestimonialData[] = [
    {
        name: "Sarah Chen",
        role: "Product Manager at OrchardTek",
        content: "Josue's ability to deliver complex integrations on time while maintaining code quality is exceptional. His leadership in mentoring the team has been invaluable.",
        rating: 5
    },
    {
        name: "Miguel Rodriguez",
        role: "Tech Director at Yalutec",
        content: "The performance improvements Josue delivered were game-changing. His 40% optimization of page load times directly impacted our user engagement metrics.",
        rating: 5
    },
    {
        name: "Anna Thompson",
        role: "Senior Developer at Applaudo",
        content: "Working with Josue on the Google Aduanas project was incredible. His attention to testing and accessibility set a new standard for our team.",
        rating: 5
    }
];

export const statsData: StatItem[] = [
    { value: "5+", label: "Years Experience" },
    { value: "75+", label: "Projects Delivered" },
    { value: "6", label: "Companies" },
    { value: "100k+", label: "Daily Transactions Supported" }
];
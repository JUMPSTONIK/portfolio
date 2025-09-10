import { FaBookOpen, FaMicrochip, FaDatabase, FaStar } from "react-icons/fa";
import { JourneyMilestone } from "@/types/aboutMe";
import { useMemo } from "react";

export const journeyMilestones: JourneyMilestone[] = [
        {
            year: "2016-2021",
            phase: "Foundation",
            description: "Computer Science at Universidad del Valle",
            focus: "Building core programming skills",
            details:
                "Where it all began - diving deep into algorithms, data structures, and falling in love with clean code.",
            icon: <FaBookOpen className={'w-5 h-5'} />,
            color: "#7c3aed",
            image:
                "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=400&h=300&fit=crop",
        },
        {
            year: "2022",
            phase: "Growth",
            description: "Diving into enterprise solutions",
            focus: "Angular, Ionic, and mobile development",
            details:
                "Scaling up from personal projects to enterprise applications, mastering the art of mobile-first development.",
            icon: <FaMicrochip className={'w-5 h-5'} />,
            color: "#ec4899",
            image:
                "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
        },
        {
            year: "2023",
            phase: "Expansion",
            description: "Mastering React ecosystem",
            focus: "Next.js, Vue.js, and full-stack capabilities",
            details:
                "Embracing the React revolution while staying framework-agnostic. The year I became truly full-stack.",
            icon: <FaDatabase className={'w-5 h-5'} />,
            color: "#3b82f6",
            image:
                "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=300&fit=crop",
        },
        {
            year: "2024",
            phase: "Leadership",
            description: "Mentoring and architecture",
            focus: "Team guidance and scalable solutions",
            details:
                "Leading by example, mentoring the next generation, and architecting systems that scale with business needs.",
            icon: <FaStar className={'w-5 h-5'} />,
            color: "#10b981",
            image:
                "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=300&fit=crop",
        },
    ];
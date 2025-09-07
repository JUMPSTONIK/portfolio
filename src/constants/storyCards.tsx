import { StoryCardType } from "@/types/aboutMe"
import { FiBookOpen, FiCoffee, FiHeart, FiMap, FiPocket, FiUsers } from "react-icons/fi";

export const storyCards: StoryCardType[] = [
        {
            icon: <FiMap className='w-6 h-6' />,
            title: "From Guatemala with Code",
            story:
                "Born and raised in Guatemala, I discovered my passion for technology while studying Computer Science at Universidad del Valle. The vibrant culture of my homeland taught me to approach problems with creativity and persistence.",
            highlight: "Cultural diversity fuels innovation",
        },
        {
            icon: <FiBookOpen className='w-6 h-6' />,
            title: "The Learning Machine",
            story:
                "With over 100 courses completed on Platzi and achieving Legend status, I'm proof that continuous learning isn't just a buzzword—it's a lifestyle. Every new framework is an adventure.",
            highlight: "Never stop growing",
        },
        {
            icon: <FiUsers className='w-6 h-6' />,
            title: "Team Player & Mentor",
            story:
                "I believe the best code is written together. Whether I'm pair programming, code reviewing, or mentoring junior developers, collaboration brings out the best in everyone.",
            highlight: "Knowledge shared is knowledge multiplied",
        },
        {
            icon: <FiPocket className='w-6 h-6' />,
            title: "Innovation Enthusiast",
            story:
                "From exploring AI tools to experimenting with the latest React features, I'm always pushing boundaries. Technology evolves fast, and I love being at the forefront of that evolution.",
            highlight: "The future is built today",
        },
        {
            icon: <FiCoffee className='w-6 h-6' />,
            title: "Problem Solver at Heart",
            story:
                "Give me a complex bug or an architectural challenge, and I'm in my element. I see every problem as a puzzle waiting to be solved with elegant, scalable solutions.",
            highlight: "Complexity simplified through code",
        },
        {
            icon: <FiHeart className='w-6 h-6' />,
            title: "Purpose-Driven Developer",
            story:
                "I don't just write code; I craft digital experiences that matter. Every component, every optimization, every user interaction is an opportunity to make someone's day a little better.",
            highlight: "Code with purpose, build with heart",
        },
    ];
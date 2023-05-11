import {
    git,
    figma,
    javascript,
    typescript,
    html,
    css,
    react,
    redux,
    tailwind,
    threejs,
    nodejs,
    bookabed,
    musiclab,
    brain,
} from "../assets";

export const NavLinks = [
    {
        id: "home",
        title: "Home",
    },
    {
        id: "about",
        title: "About",
    },
    {
        id: "project",
        title: "Project",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const service = [
    {
        title: "Front-End Engineer",
        icon: react,
        description: "I am passionate about being a frontend engineer with 7 months of experience in development using HTML, JavaScript, CSS, React, and TypeScript."
    },
]

const technologies = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "TypeScript",
        icon: typescript,
    },
    {
        name: "React",
        icon: react,
    },
    {
        name: "Redux Toolkit",
        icon: redux,
    },
    {
        name: "NodeJS",
        icon: nodejs,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "Figma",
        icon: figma,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Three JS",
        icon: threejs,
    }
];

const project = [
    {
        name: "Music-Lab",
        image: musiclab,
        tags: [
            {
                name: "react",
            },
            {
                name: "tailwind",
            },
        ],
        description: "MUSICLAB is an online web-app that is used by users to find music teachers. There are many genres and instruments available in this web-app. Users (students) can book a music class based on their choice, and mentors can create their own music classes after filling out the necessary details.",
        source_code_link: "https://github.com/group3-musiclab"
    },
    {
        name: "BookaBed",
        image: bookabed,
        tags: [
            {
                name: "react",
            },
            {
                name: "tailwind",
            },
        ],
        description: "BookaBed is a network of peer-to-peer online marketplaces and home lodgings that allow users to list or rent properties for short-term use. The rental price is set by the property owner. BookaBed receives a portion of the booking fee from guests and hosts.",
        source_code_link: "https://github.com/Alta-group-project-3-group-4"
    },
    {
        name: "Brain.Academy",
        image: brain,
        tags: [
            {
                name: "react",
            },
            {
                name: "tailwind",
            },
        ],
        description: "Brain.Academy is a website thhat monitors and trackks the activity of mentee, it offers a personalized dashboard with metrics and analytics, allowing mentees to track their progress and identify areas for improvement. Brain.Academy empowers mentees to take control of their learning journey and achivee their development goals.",
        source_code_link: "https://github.com/ALTA-PROJECT2-GROUP4"
    },
]

export { service, technologies, project };
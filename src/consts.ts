import type { Site, Metadata, Link } from "@types"

export const SITE: Site = {
    title: "Wesley Bertipaglia",
    description: "Software engineer from Brazil, focused on web development.",
    author: "Wesley Bertipaglia",
    keywords: "Software, Engineer, Architect, Developer, Programmer, Coder, Founder"
}

export const HOME: Metadata = {
    title: "Home",
    description: "Software engineer from Brazil, focused on web development.",
}

export const BLOG: Metadata = {
    title: "Blog",
    description: "A collection of articles on topics I am passionate about.",
}

export const EXPERIENCE: Metadata = {
    title: "Experience",
    description: "Where I have worked and what I have done.",
}

export const PROJECTS: Metadata = {
    title: "Projects",
    description: "A collection of my projects, with links to repositories and demos.",
}

export const SOCIALS: Link[] = [
    {
        title: "github",
        url: "https://github.com/wesleybertipaglia",
        icon: "github",
        main: true,
    },
    {
        title: "linkedin",
        url: "https://www.linkedin.com/in/wesleybertipaglia",
        icon: "linkedin",
        main: true,
    },
    {
        title: "threads",
        url: "https://www.threads.net/@wesleyberti_",
        icon: "threads",
        main: false,
    },
];

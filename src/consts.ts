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

export const WORK: Metadata = {
    title: "Experience",
    description: "Where I have worked and what I have done.",
}

export const PROJECTS: Metadata = {
    title: "Projects",
    description: "A collection of my projects, with links to repositories and demos.",
}

export const SOCIALS: Link[] = [
    {
        title: "Instagram",
        url: "https://www.instagram.com/wesleyberti_/",
        icon: "instagram",
        main: false,
    },
    {
        title: "X",
        url: "https://x.com/wesleyberti_",
        icon: "x",
        main: false,
    },
    {
        title: "GitHub",
        url: "https://github.com/wesleybertipaglia",
        icon: "github",
        main: true,
    },
    {
        title: "LinkedIn",
        url: "https://www.linkedin.com/in/wesley-bertipaglia/",
        icon: "linkedin",
        main: true,
    },
    {
        title: "E-mail",
        url: "mailto:wesleybertipaglia@gmail.com",
        icon: "email",
        main: true,
    }
];

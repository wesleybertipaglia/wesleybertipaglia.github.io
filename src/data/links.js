const work = [
    {
        name: 'LinkedIn',
        icon: 'devicon-linkedin-plain',
        customIcon: false,
        category: 'social',
        url: 'https://linkedin.com/in/wesley-bertipaglia'
    },
    {
        name: 'GitHub',
        icon: 'devicon-github-plain',
        customIcon: false,
        category: 'social',
        url: 'https://github.com/wesleybertipaglia'
    },
]

const social = [
    {
        name: 'Twitter',
        icon: 'devicon-twitter-plain',
        customIcon: false,
        category: 'social',
        url: 'https://twitter.com/wesleyberti_'
    },
    {
        name: 'Instagram',
        icon: 'instagram',
        customIcon: true,
        category: 'social',
        url: 'https://instagram.com/wesleyberti_'
    }
]

const links = [
    ...work,
    ...social
]

export default links
export { work, social }
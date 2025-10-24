import type { Site, Metadata, Link } from '@types';

export const SITE: Site = {
  title: 'Wesley Bertipaglia',
  description: 'Software engineer from Brazil, focused on web development.',
  author: 'Wesley Bertipaglia',
  keywords:
    'Software, Engineer, Architect, Developer, Programmer, Coder, Founder',
  twitter: '@wesleyberti_',
};

export const HOME: Metadata = {
  title: 'Home',
  description: 'Software engineer from Brazil, focused on web development.',
};

export const BLOG: Metadata = {
  title: 'Blog',
  description: 'A collection of articles on topics I am passionate about.',
};

export const WORK: Metadata = {
  title: 'Experience',
  description: 'Where I have worked and what I have done.',
};

export const PROJECTS: Metadata = {
  title: 'Projects',
  description:
    'A collection of my projects, with links to repositories and demos.',
};

export const SERIES: Metadata = {
  title: 'Series',
  description: 'A collection of blog post series on various topics.',
};

export const SOCIALS: Link[] = [
  {
    title: 'Instagram',
    url: 'https://www.instagram.com/wesleyberti_/',
    icon: 'instagram',
    main: false,
  },
  {
    title: 'LinkedIn',
    url: 'https://www.linkedin.com/in/wesley-bertipaglia/',
    icon: 'linkedin',
    main: true,
  },
  {
    title: 'GitHub',
    url: 'https://github.com/wesleybertipaglia',
    icon: 'github',
    main: true,
  },
];

export const SHARE_LINKS = {
  x: 'https://x.com/intent/tweet?url={url}&text={text}',
  facebook: 'https://www.facebook.com/sharer/sharer.php?u={url}&text={text}',
  linkedin:
    'https://www.linkedin.com/sharing/share-offsite/?url={url}&text={text}',
  whatsapp: 'https://api.whatsapp.com/send?text={text}',
  telegram: 'https://t.me/share/url?url={url}&text={text}',
  email: 'mailto:?subject={title}&body={text}',
};

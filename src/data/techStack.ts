// src/data/techStack.ts

export type Tech = {
  name: string
  icon: string        // ← agora é uma URL
  level: 'Beginner' | 'Intermediate' | 'Advanced'
  pct: number
  context: string
}

const devicon = (name: string, variant = 'original') =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${name}/${name}-${variant}.svg`

export const techStack: Tech[] = [
  {
    name: 'React',
    icon: devicon('react'),
    level: 'Advanced',
    pct: 80,
    context: 'Built Synapse Connect frontend with componentised architecture.',
  },
  {
    name: 'JavaScript',
    icon: devicon('javascript'),
    level: 'Advanced',
    pct: 90,
    context: 'Core language across all projects — from UI logic to backend route handlers.',
  },
  {
    name: 'TypeScript',
    icon: devicon('typescript'),
    level: 'Intermediate',
    pct: 74,
    context: 'Primary language in Synapse Connect (93.9% of codebase), enforcing type safety throughout.',
  },
  {
    name: 'Java',
    icon: devicon('java'),
    level: 'Intermediate',
    pct: 57,
    context: 'Developed Coração Pet, a desktop application built as a university project.',
  },
  {
    name: 'HTML5',
    icon: devicon('html5'),
    level: 'Advanced',
    pct: 93,
    context: 'The basic understanding of HTML made way for the interactions and optimizations that were created for all projects',
  },
  {
    name: 'CSS3',
    icon: devicon('css3'),
    level: 'Advanced',
    pct: 90,
    context: 'Styled all projects with custom layouts, animations and responsive design.',
  },
  {
    name: 'Node.js',
    icon: devicon('nodejs', 'plain'),
    level: 'Intermediate',
    pct: 70,
    context: 'Powered Synapse Connect backend with Express.js — REST API and MySQL integration.',
  },
  {
    name: 'Git',
    icon: devicon('git'),
    level: 'Advanced',
    pct: 86,
    context: '56 commits on Synapse Connect. Clean branching and collaborative workflow across all repos.',
  },
  {
    name: 'JWT',
    icon: 'https://jwt.io/img/pic_logo.svg',
    level: 'Intermediate',
    pct: 76,
    context: 'Token-based authentication in Synapse Connect for secure, stateless session management.',
  },
  {
    name: 'OAuth 2.0',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg',
    level: 'Intermediate',
    pct: 72,
    context: 'Google and GitHub OAuth login flows in Synapse Connect following the official spec.',
  },
]
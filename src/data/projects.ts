export interface Project {
  name: string
  metric: string
  team: boolean
  description: string
  stack: string[]
  githubUrl: string
  liveUrl?: string
}

export const projects: Project[] = [
  {
    name: 'Synapse Connect',
    metric: 'Auth handled for 3 login providers',
    team: true,
    description:
      'Educational platform with a React + TypeScript frontend, Express.js backend, MySQL, JWT and OAuth 2.0 (Google & GitHub login).',
    stack: ['React', 'TypeScript', 'Express', 'MySQL'],
    githubUrl: 'https://github.com/AlanRB7162/Synapse-Connect',
  },
  {
    name: 'Coração Pet',
    metric: 'Built in a 4-month deadline',
    team: true,
    description:
      'Desktop application for pet adoption management, with role-based access and personalized experiences for users and admins. Led SQL data modeling for the team.',
    stack: ['Java', 'SQL'],
    githubUrl: 'https://github.com/Gabriel-A-Lopes/Coracao_Pet',
  },
  {
    name: 'Kehtorta v2',
    metric: 'Live in production',
    team: false,
    description:
      'Landing page for an artisanal cake studio, built solo with a focus on load speed, motion, and clarity.',
    stack: ['React', 'Vite', 'Tailwind CSS', 'Framer Motion'],
    githubUrl: 'https://github.com/Gabriel-A-Lopes/Kehtorta-v2',
    liveUrl: 'https://kehtorta-v2.vercel.app/',
  },
]

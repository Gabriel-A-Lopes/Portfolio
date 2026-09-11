export interface StackItem {
  name: string
  /** slug on skillicons.dev — omitted when no official logo exists (protocols/specs) */
  icon?: string
}

export interface StackCategory {
  label: string
  items: StackItem[]
}

export const stackCategories: StackCategory[] = [
  {
    label: 'Languages',
    items: [
      { name: 'JavaScript', icon: 'js' },
      { name: 'TypeScript', icon: 'ts' },
      { name: 'Java', icon: 'java' },
      { name: 'CSS', icon: 'css' },
    ],
  },
  {
    label: 'Frontend',
    items: [
      { name: 'React', icon: 'react' },
      { name: 'Vite', icon: 'vite' },
      { name: 'Tailwind CSS', icon: 'tailwind' },
      { name: 'Framer Motion' },
    ],
  },
  {
    label: 'Backend & data',
    items: [
      { name: 'Node.js', icon: 'nodejs' },
      { name: 'Express', icon: 'express' },
      { name: 'SQL' },
      { name: 'PostgreSQL', icon: 'postgres' },
    ],
  },
  {
    label: 'Auth',
    items: [{ name: 'JWT' }, { name: 'OAuth 2.0' }],
  },
  {
    label: 'Tools',
    items: [
      { name: 'Git', icon: 'git' },
      { name: 'GitHub', icon: 'github' },
      { name: 'VS Code', icon: 'vscode' },
    ],
  },
]

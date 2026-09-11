export type TechLevel = 'Beginner' | 'Intermediate' | 'Advanced'

export interface Tech {
  name: string
  icon: string
  context: string
  level: TechLevel
  pct: number
}

// src/sections/Stack.tsx

import { Box, SimpleGrid, Text, Heading } from '@chakra-ui/react'
import TechCard from '../components/TechCard'
import { techStack } from '../data/techStack'

const stackStyles = {
  section: {
    as: 'section' as const,
    bg: 'beige',
    py: '7rem',
    px: '2rem',
    id: 'stack',
  },
  inner: {
    maxW: '1120px',
    mx: 'auto',
  },
  label: {
    fontFamily: 'mono',
    fontSize: '0.7rem',
    letterSpacing: '0.22em',
    textTransform: 'uppercase' as const,
    color: 'gray.400',
    mb: '0.7rem',
  },
  title: {
    fontFamily: 'heading',
    fontSize: { base: '2rem', md: '3rem' },
    fontWeight: 600,
    color: 'navy',
    mb: '0.9rem',
  },
  divider: {
    w: '44px',
    h: '2px',
    bgGradient: 'linear(to-r, navy, beigeM)',
    mb: '1rem',
  },
  intro: {
    fontSize: '0.92rem',
    color: 'gray.500',
    maxW: '540px',
    lineHeight: 1.7,
    mb: '3rem',
  },
}

const Stack = () => {
  return (
    <Box {...stackStyles.section}>
      <Box {...stackStyles.inner}>

        <Text {...stackStyles.label}>Tools & Technologies</Text>
        <Heading {...stackStyles.title}>Tech Stack</Heading>
        <Box {...stackStyles.divider} />
        <Text {...stackStyles.intro}>
          Technologies I've applied across real projects — each card shows where and how I've used them.
        </Text>

        <SimpleGrid
          columns={{ base: 1, sm: 2, md: 3, lg: 4 }}
          spacing="1.1rem"
        >
          {techStack.map((tech) => (
            <TechCard key={tech.name} tech={tech} />
          ))}
        </SimpleGrid>

      </Box>
    </Box>
  )
}

export default Stack
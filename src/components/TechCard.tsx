// src/components/TechCard.tsx
import { Box, Text, Badge, Progress, Image } from '@chakra-ui/react'
import type { Tech } from '../data/techStack'

// Cor do badge por nível
const badgeColors: Record<Tech['level'], string> = {
  Beginner:     'gray',
  Intermediate: 'blue',
  Advanced:     'green',
}

const cardStyles = {
  wrapper: {
    bg: 'white',
    border: '1px solid',
    borderColor: 'rgba(27,42,74,0.10)',
    borderRadius: '6px',
    p: '1.5rem',
    position: 'relative' as const,
    overflow: 'hidden',
    transition: 'all 0.35s ease',
    _hover: {
      transform: 'translateY(-6px)',
      boxShadow: '0 20px 50px rgba(27,42,74,0.12)',
      borderColor: 'rgba(27,42,74,0.25)',
    },
  },
  topRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    mb: '0.9rem',
  },
  name: {
    fontWeight: 500,
    fontSize: '0.95rem',
    color: 'navy',
    mb: '0.3rem',
  },
  context: {
    fontSize: '0.78rem',
    color: 'gray.500',
    lineHeight: 1.6,
    fontStyle: 'italic',
    mb: '1rem',
  },
  pct: {
    fontFamily: 'mono',
    fontSize: '0.65rem',
    color: 'gray.400',
    textAlign: 'right' as const,
    mt: '0.3rem',
  },
} as const

type Props = {
  tech: Tech
}

const TechCard = ({ tech }: Props) => {
  return (
    <Box {...cardStyles.wrapper}>

      {/* Ícone + Badge de nível */}
      <Box {...cardStyles.topRow}>
        <Image
          src={tech.icon}
          alt={tech.name}
          boxSize="2rem"
          objectFit="contain"
          fallbackSrc="https://via.placeholder.com/32"
        />
        <Badge
          colorScheme={badgeColors[tech.level]}
          fontSize="0.6rem"
          letterSpacing="0.1em"
          textTransform="uppercase"
          borderRadius="2px"
          px="0.5rem"
        >
          {tech.level}
        </Badge>
      </Box>

      <Text {...cardStyles.name}>{tech.name}</Text>

      <Text {...cardStyles.context}>{tech.context}</Text>

      <Progress
        value={tech.pct}
        size="xs"
        colorScheme="blue"
        bg="gray.100"
        borderRadius="99px"
      />

      <Text {...cardStyles.pct}>{tech.pct}%</Text>

    </Box>
  )
}

export default TechCard
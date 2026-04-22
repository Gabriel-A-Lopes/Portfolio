// sections/Hero.tsx
import { Box, VStack, Text, Heading, Button } from '@chakra-ui/react'

const heroStyles = {
  wrapper: {
    as: 'section' as const,
    minH: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative' as const,
    overflow: 'hidden',
    px: '2rem',
    pt: '9rem',
    pb: '5rem',
  },
  videoWrapper: {
    position: 'absolute' as const,
    top: 0, left: 0, right: 0, bottom: 0,
    zIndex: 0,
    overflow: 'hidden',
  },
  eyebrow: {
    fontFamily: 'mono',
    fontSize: '0.75rem',
    letterSpacing: '0.2em',
    textTransform: 'uppercase' as const,
    color: 'gray.500',
  },
  heading: {
    as: 'h1' as const,
    fontFamily: 'heading',
    fontSize: { base: '3rem', md: '5rem', lg: '7rem' },
    fontWeight: 700,
    lineHeight: 1.03,
    letterSpacing: '-0.025em',
    bgGradient: 'linear(140deg, navy, navyA, beigeM)',
    bgClip: 'text',
  },
  tagline: {
    fontSize: '1.1rem',
    fontWeight: 300,
    fontStyle: 'italic',
    color: 'gray.500',
    lineHeight: 1.75,
    maxW: '500px',
  },
  button: {
    bg: 'navy',
    color: 'offWhite',
    px: '2.4rem',
    py: '1.6rem',
    fontSize: '0.88rem',
    fontWeight: 500,
    letterSpacing: '0.05em',
    borderRadius: '3px',
    _hover: {
      transform: 'translateY(-3px)',
      boxShadow: '0 14px 44px rgba(27,42,74,0.28)',
      bg: 'navyA',
    },
    transition: 'all 0.3s ease',
  },
} as const

const Hero = () => {
  const scrollToStack = () => {
    document.getElementById('stack')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <Box {...heroStyles.wrapper}>

      {/* Vídeo de fundo */}
      <Box {...heroStyles.videoWrapper}>
        <video
          autoPlay loop muted playsInline
          style={{
            position: 'absolute',
            top: 0, left: 0,
            width: '100%', height: '100%',
            objectFit: 'cover',
            opacity: 0.15,
          }}
        >
          <source src="./videos/hero-bg.mp4" type="video/mp4" />
        </video>
      </Box>

      {/* Conteúdo central */}
      <VStack
        position="relative"
        zIndex={1}
        textAlign="center"
        maxW="740px"
        spacing={6}
      >
        <Text {...heroStyles.eyebrow}>
          Full Stack Developer · São Paulo, Brazil
        </Text>

        <Heading {...heroStyles.heading}>
          Gabriel Lopes
        </Heading>

        <Text {...heroStyles.tagline}>
          Building purposeful interfaces and reliable systems —
          from pixel-perfect UI to secure backend logic.
        </Text>

        <Button onClick={scrollToStack} {...heroStyles.button}>
          Explore My Stack ↓
        </Button>
      </VStack>

    </Box>
  )
}

export default Hero
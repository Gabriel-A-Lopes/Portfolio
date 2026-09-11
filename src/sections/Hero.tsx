import { Box, Button, HStack, Text } from '@chakra-ui/react'
import { motion } from 'framer-motion'

const MotionBox = motion(Box)
const MotionHStack = motion(HStack)

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
}

const item = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function Hero() {
  return (
    <MotionBox
      as="section"
      maxW="1040px"
      mx="auto"
      px={8}
      pt={{ base: '80px', md: '120px' }}
      pb={{ base: '60px', md: '100px' }}
      variants={container}
      initial="hidden"
      animate="show"
    >
      <MotionBox
        variants={item}
        fontFamily="mono"
        fontSize="12px"
        color="royal"
        mb={6}
        display="flex"
        alignItems="center"
        gap={2}
      >
        <Box as="span" w="6px" h="6px" borderRadius="full" bg="royal" />
        available for new work
      </MotionBox>

      <MotionBox
        variants={item}
        as="h1"
        fontSize={{ base: '32px', md: '48px' }}
        fontWeight={700}
        letterSpacing="-0.02em"
        lineHeight={1.1}
        maxW="640px"
        fontStyle="italic"
      >
        <Text as="span" color="royal" fontStyle="normal">
          “
        </Text>
        Sic Parvis Magna
        <Text as="span" color="royal" fontStyle="normal">
          ”
        </Text>
      </MotionBox>

      <MotionBox variants={item} fontSize="18px" fontStyle="italic" color="muted" maxW="480px" mt={5}>
        Greatness from small beginnings
        <Text as="cite" display="block" fontStyle="normal" fontSize="13px" color="mutedDark" mt={2}>
          — Sir Francis Drake
        </Text>
      </MotionBox>

      <MotionBox variants={item} fontFamily="mono" fontSize="12px" color="mutedDark" mt={4}>
        Zc 4.10
      </MotionBox>

      <MotionBox variants={item} fontSize="14px" color="muted" mt={6} maxW="440px" lineHeight={1.6}>
        Engagement Manager at Adobe by day, building his way into tech in the hours after — one
        project at a time.
      </MotionBox>

      <MotionBox variants={item} fontSize="15px" color="mist" mt={2} fontWeight={500}>
        Gabriel Amaro Lopes · São Paulo, Brazil
      </MotionBox>

      <MotionHStack variants={item} mt={9} spacing={4} flexWrap="wrap" rowGap={3}>
        <Button
          as="a"
          href="#projects"
          bg="royal"
          color="mist"
          borderRadius="8px"
          _hover={{ opacity: 0.9, transform: 'translateY(-1px)' }}
        >
          View projects
        </Button>
        <Button
          as="a"
          href="#"
          variant="outline"
          borderColor="border"
          color="mist"
          borderRadius="8px"
          _hover={{ transform: 'translateY(-1px)' }}
        >
          Resume
        </Button>
      </MotionHStack>
    </MotionBox>
  )
}

import { Box, Grid, Heading, Text } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import ProjectCard from '../components/ProjectCard'
import { projects } from '../data/projects'

const MotionBox = motion(Box)

export default function Projects() {
  return (
    <Box as="section" id="projects" borderTop="1px solid" borderColor="border" py={20}>
      <MotionBox
        maxW="1040px"
        mx="auto"
        px={8}
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <Text fontSize="12px" textTransform="uppercase" letterSpacing="0.08em" color="mutedDark" mb={4}>
          Selected work
        </Text>
        <Heading as="h2" fontSize="26px" fontWeight={600} letterSpacing="-0.02em" mb={12} maxW="520px">
          Featured projects
        </Heading>

        <Grid templateColumns={{ base: '1fr', md: 'repeat(auto-fit, minmax(260px, 1fr))' }} gap={5}>
          {projects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </Grid>
      </MotionBox>
    </Box>
  )
}

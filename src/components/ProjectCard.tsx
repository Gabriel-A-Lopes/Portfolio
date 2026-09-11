import { Box, HStack, Link, Text } from '@chakra-ui/react'
import type { Project } from '../data/projects'

interface ProjectCardProps {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Box
      bg="navySoft"
      border="1px solid"
      borderColor="border"
      borderRadius="14px"
      p={7}
      transition="border-color 0.2s ease-out, transform 0.2s ease-out"
      _hover={{ borderColor: 'royal', transform: 'translateY(-3px)' }}
    >
      <Text fontSize="18px" fontWeight={600} mb={2}>
        {project.name}
      </Text>

      <HStack mb={4} flexWrap="wrap" spacing={2}>
        <Text
          fontFamily="mono"
          fontSize="12px"
          color="royal"
          bg="rgba(37, 99, 235, 0.1)"
          px={2.5}
          py={1}
          borderRadius="6px"
        >
          {project.metric}
        </Text>
        {project.team && (
          <Text
            fontFamily="mono"
            fontSize="12px"
            color="mutedDark"
            border="1px solid"
            borderColor="border"
            px={2.5}
            py={1}
            borderRadius="6px"
          >
            Team project
          </Text>
        )}
      </HStack>

      <Text fontSize="14px" color="muted" mb={4} lineHeight={1.6}>
        {project.description}
      </Text>

      <Text fontFamily="mono" fontSize="12px" color="mutedDark" mb={4}>
        {project.stack.join(' · ')}
      </Text>

      <HStack fontSize="13px" spacing={4}>
        <Link href={project.githubUrl} isExternal borderBottom="1px solid" borderColor="border">
          GitHub ↗
        </Link>
        {project.liveUrl && (
          <Link href={project.liveUrl} isExternal borderBottom="1px solid" borderColor="border">
            Live ↗
          </Link>
        )}
      </HStack>
    </Box>
  )
}

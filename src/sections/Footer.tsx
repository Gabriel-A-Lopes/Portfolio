import { Box, Link, Stack, Text } from '@chakra-ui/react'

export default function Footer() {
  return (
    <Box as="footer" borderTop="1px solid" borderColor="border" py={8}>
      <Stack
        direction={{ base: 'column', md: 'row' }}
        maxW="1040px"
        mx="auto"
        px={8}
        justify="space-between"
        align="center"
        fontSize="13px"
        color="mutedDark"
        spacing={{ base: 4, md: 0 }}
      >
        <Stack direction="row" align="center" spacing={2}>
          <Box as="span" w="6px" h="6px" borderRadius="full" bg="success" flexShrink={0} />
          <Text>Available for work</Text>
        </Stack>

        <Stack direction="row" spacing={5} flexWrap="wrap" justify="center">
          <Link href="https://github.com/Gabriel-A-Lopes" color="muted" isExternal>
            GitHub
          </Link>
          <Link href="https://www.linkedin.com/in/gabriel-amaro-lopes-541a9519b/" color="muted" isExternal>
            LinkedIn
          </Link>
          <Link href="mailto:gabriel.amaro@outlook.com" color="muted">
            Email
          </Link>
        </Stack>

        <Text>© 2026 Gabriel Amaro Lopes</Text>
      </Stack>
    </Box>
  )
}

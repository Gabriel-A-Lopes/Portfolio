import { Box, Flex, HStack, Link, Text } from '@chakra-ui/react'

const navLinks = [
  { label: 'Projects', href: '#projects' },
  { label: 'Stack', href: '#stack' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export default function Nav() {
  return (
    <Box
      as="header"
      position="sticky"
      top={0}
      zIndex={50}
      bg="rgba(15, 23, 42, 0.85)"
      backdropFilter="blur(8px)"
      borderBottom="1px solid"
      borderColor="border"
    >
      <Flex as="nav" maxW="1040px" mx="auto" px={8} py={5} align="center" justify="space-between">
        <Text fontWeight={600} fontSize="16px" letterSpacing="-0.02em">
          GL
          <Text as="span" color="royal">
            .
          </Text>
        </Text>

        <HStack as="ul" spacing={8} listStyleType="none" fontSize="14px" color="muted" display={{ base: 'none', md: 'flex' }}>
          {navLinks.map((link) => (
            <Box as="li" key={link.href}>
              <Link
                href={link.href}
                position="relative"
                _hover={{ color: 'mist', textDecoration: 'none' }}
                sx={{
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    left: 0,
                    bottom: '-4px',
                    width: 0,
                    height: '1px',
                    background: 'var(--chakra-colors-royal)',
                    transition: 'width 0.2s ease-out',
                  },
                  '&:hover::after': { width: '100%' },
                }}
              >
                {link.label}
              </Link>
            </Box>
          ))}
        </HStack>
      </Flex>
    </Box>
  )
}

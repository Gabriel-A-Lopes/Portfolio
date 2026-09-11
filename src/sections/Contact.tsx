import { Box, Button, Stack, Text } from '@chakra-ui/react'
import { motion } from 'framer-motion'

const MotionBox = motion(Box)

export default function Contact() {
  return (
    <Box as="section" id="contact" borderTop="1px solid" borderColor="border" py={{ base: 16, md: 24 }} textAlign="center">
      <MotionBox
        maxW="1040px"
        mx="auto"
        px={8}
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <Text fontSize="32px" fontWeight={600} letterSpacing="-0.02em" mb={4}>
          Let's build something.
        </Text>
        <Text fontSize="15px" color="muted" maxW="420px" mx="auto" mb={9}>
          Open to front-end roles and freelance projects. Reach out and I'll get back to you
          within a day or two.
        </Text>
        <Stack direction={{ base: 'column', sm: 'row' }} justify="center" align="center" spacing={4}>
          <Button
            as="a"
            href="mailto:gabriel.amaro@outlook.com"
            bg="royal"
            color="mist"
            borderRadius="8px"
            w={{ base: '100%', sm: 'auto' }}
            _hover={{ opacity: 0.9, transform: 'translateY(-1px)' }}
          >
            Send an email
          </Button>
          <Button
            as="a"
            href="https://www.linkedin.com/in/gabriel-amaro-lopes-541a9519b/"
            target="_blank"
            rel="noopener noreferrer"
            variant="outline"
            borderColor="border"
            color="mist"
            borderRadius="8px"
            w={{ base: '100%', sm: 'auto' }}
            _hover={{ transform: 'translateY(-1px)' }}
          >
            LinkedIn
          </Button>
        </Stack>
      </MotionBox>
    </Box>
  )
}

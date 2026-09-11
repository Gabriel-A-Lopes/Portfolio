import { Box, Grid, Heading, Text, Wrap, WrapItem } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import StackBadge from '../components/StackBadge'
import { stackCategories } from '../data/stack'

const MotionBox = motion(Box)

export default function Stack() {
  return (
    <Box as="section" id="stack" borderTop="1px solid" borderColor="border" py={20}>
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
          Toolbox
        </Text>
        <Heading as="h2" fontSize="26px" fontWeight={600} letterSpacing="-0.02em" mb={12}>
          Tech stack
        </Heading>

        <Grid templateColumns={{ base: '1fr', md: 'repeat(auto-fit, minmax(220px, 1fr))' }} gap={5}>
          {stackCategories.map((category) => (
            <Box key={category.label} bg="navySoft" border="1px solid" borderColor="border" borderRadius="12px" p={6}>
              <Text fontSize="12px" textTransform="uppercase" letterSpacing="0.06em" color="mutedDark" mb={4}>
                {category.label}
              </Text>
              <Wrap spacing={2}>
                {category.items.map((item) => (
                  <WrapItem key={item.name}>
                    <StackBadge item={item} />
                  </WrapItem>
                ))}
              </Wrap>
            </Box>
          ))}
        </Grid>
      </MotionBox>
    </Box>
  )
}

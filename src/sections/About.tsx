import { Box, Grid, Heading, HStack, Tag, Text } from '@chakra-ui/react'
import { motion } from 'framer-motion'

const MotionBox = motion(Box)
const MotionHStack = motion(HStack)

const chips = ['React', 'TypeScript', 'Vite', 'UI/UX', 'Localization']

export default function About() {
  return (
    <Box as="section" id="about" borderTop="1px solid" borderColor="border" py={20}>
      <Box maxW="1040px" mx="auto" px={8}>
        <Text fontSize="12px" textTransform="uppercase" letterSpacing="0.08em" color="mutedDark" mb={4}>
          Who I am
        </Text>
        <Heading as="h2" fontSize="26px" fontWeight={600} letterSpacing="-0.02em" mb={12}>
          About
        </Heading>

        <Grid templateColumns={{ base: '1fr', md: '1fr 1fr' }} gap={12}>
          <Box>
            <MotionBox
              fontSize="15px"
              color="muted"
              lineHeight={1.75}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: 0 }}
            >
              <Text>
                <Text as="strong" color="mist" fontWeight={500}>
                  Engagement Manager at Adobe
                </Text>{' '}
                for over 5 years, leading digital transformation projects across government,
                healthcare, financial services, energy, insurance, and education. That's still my
                main role.
              </Text>
              <Text mt={4}>
                Alongside it, I've spent the last{' '}
                <Text as="strong" color="mist" fontWeight={500}>
                  2 years building as a developer
                </Text>{' '}
                — a few academic projects built with fellow students, plus Kehtorta, which I
                designed and built on my own. I'm not claiming to be a full-time engineer; I'm
                someone actively working his way into the tech world, one project built in
                whatever hours are left in the day.
              </Text>
            </MotionBox>

            <MotionHStack
              spacing={2}
              mt={6}
              flexWrap="wrap"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: 0.3 }}
            >
              {chips.map((chip) => (
                <Tag
                  key={chip}
                  size="sm"
                  fontSize="12px"
                  px={3}
                  py={1.5}
                  borderRadius="20px"
                  border="1px solid"
                  borderColor="border"
                  bg="transparent"
                  color="muted"
                >
                  {chip}
                </Tag>
              ))}
            </MotionHStack>
          </Box>

          <MotionBox
            fontSize="15px"
            color="muted"
            lineHeight={1.75}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: 'easeOut', delay: 0.15 }}
          >
            <Text>
              Five years managing complex, multi-country projects means I already know how to
              break down a problem, work with a team, and ship something that has to hold up in
              the real world. I'm bringing that same discipline to code — reading, building, and
              shipping consistently until the gap between "engagement manager who codes" and
              "developer" closes.
            </Text>
          </MotionBox>
        </Grid>
      </Box>
    </Box>
  )
}

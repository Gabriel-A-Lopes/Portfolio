import { Image, Text } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import type { StackItem } from '../data/stack'

const MotionFlex = motion.div

interface StackBadgeProps {
  item: StackItem
}

export default function StackBadge({ item }: StackBadgeProps) {
  return (
    <MotionFlex
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '6px',
        borderWidth: '1px',
        borderStyle: 'solid',
        borderColor: '#243044',
        borderRadius: '6px',
        padding: '6px 10px 6px 6px',
        background: 'rgba(37, 99, 235, 0.08)',
      }}
      whileHover={{
        scale: 1.06,
        borderColor: '#2563EB',
        boxShadow:
          '0 0 0 1px rgba(37, 99, 235, 0.4), 0 0 16px rgba(37, 99, 235, 0.35)',
      }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
    >
      {item.icon && (
        <Image src={`https://skillicons.dev/icons?i=${item.icon}`} alt="" boxSize="16px" />
      )}
      <Text fontFamily="mono" fontSize="12px" color="mist">
        {item.name}
      </Text>
    </MotionFlex>
  )
}

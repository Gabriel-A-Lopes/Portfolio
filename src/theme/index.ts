import { extendTheme, type ThemeConfig } from '@chakra-ui/react'

const colors = {
  navy: '#0F172A',
  navySoft: '#1A2540',
  royal: '#2563EB',
  graphite: '#334155',
  mist: '#F8FAFC',
  muted: '#94A3B8',
  mutedDark: '#64748B',
  border: '#243044',
  success: '#639922',
}

const fonts = {
  heading: `'Plus Jakarta Sans', sans-serif`,
  body: `'Plus Jakarta Sans', sans-serif`,
  mono: `'JetBrains Mono', monospace`,
}

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
}

const theme = extendTheme({
  config,
  colors,
  fonts,
  styles: {
    global: {
      'html, body': {
        bg: 'navy',
        color: 'mist',
        scrollBehavior: 'smooth',
        overflowX: 'hidden',
      },
      '::selection': {
        background: 'royal',
        color: 'mist',
      },
    },
  },
})

export default theme

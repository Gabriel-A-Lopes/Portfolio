import { Box } from '@chakra-ui/react'
import Nav from './components/Nav'
import Hero from './sections/Hero'
import Projects from './sections/Projects'
import Stack from './sections/Stack'
import About from './sections/About'
import Contact from './sections/Contact'
import Footer from './sections/Footer'

function App() {
  return (
    <Box>
      <Nav />
      <Hero />
      <Projects />
      <Stack />
      <About />
      <Contact />
      <Footer />
    </Box>
  )
}

export default App

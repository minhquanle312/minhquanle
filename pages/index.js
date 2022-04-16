import About from '../components/About'
import Header from '../components/Header'
import Projects from '../components/Projects'
import Skills from '../components/Skills'

export default function Home() {
  return (
    <div className='overflow-x-hidden'>
      <Header />
      <About />
      <Skills />
      <Projects />
    </div>
  )
}

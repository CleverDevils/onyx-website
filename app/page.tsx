import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Services from '@/components/sections/Services'
import Projects from '@/components/sections/Projects'
import Contact from '@/components/sections/Contact'
import { getAllProjects } from '@/lib/projects'

export default async function Home() {
  const projects = await getAllProjects()

  return (
    <>
      <Hero />
      <About />
      <Services />
      <Projects projects={projects} />
      <Contact />
    </>
  )
}

import Hero from '@/components/sections/Hero'
import Philosophy from '@/components/sections/Philosophy'
import Capabilities from '@/components/sections/Capabilities'
import SelectedWork from '@/components/sections/SelectedWork'
import Contact from '@/components/sections/Contact'
import { getAllProjects } from '@/lib/projects'

export default async function Home() {
  const projects = await getAllProjects()

  return (
    <>
      <Hero />
      <Philosophy />
      <Capabilities />
      <SelectedWork projects={projects} />
      <Contact />
    </>
  )
}

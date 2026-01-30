import Hero from '@/components/sections/Hero'
import Philosophy from '@/components/sections/Philosophy'
import Capabilities from '@/components/sections/Capabilities'
import SelectedWork from '@/components/sections/SelectedWork'
import Contact from '@/components/sections/Contact'
import SectionDivider from '@/components/ui/SectionDivider'
import { getAllProjects } from '@/lib/projects'

export default async function Home() {
  const projects = await getAllProjects()

  return (
    <>
      <Hero projects={projects} />
      <SectionDivider />
      <Philosophy />
      <SectionDivider />
      <Capabilities />
      <SectionDivider />
      <SelectedWork projects={projects} />
      <SectionDivider />
      <Contact />
    </>
  )
}

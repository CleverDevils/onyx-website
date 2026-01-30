import Container from '@/components/ui/Container'
import ProjectCard from '@/components/ui/ProjectCard'
import type { ProjectMeta } from '@/lib/types'

interface SelectedWorkProps {
  projects: ProjectMeta[]
}

export default function SelectedWork({ projects }: SelectedWorkProps) {
  const displayProjects = projects.slice(0, 4)
  const [first, second, third, fourth] = displayProjects

  return (
    <section id="work" className="relative section-padding border-t border-neutral-800/50 overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-brand-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent-500/5 rounded-full blur-3xl" />

      <Container className="relative">
        <div className="mb-16 flex items-end justify-between">
          <p className="text-sm text-brand-400 tracking-wide">
            Selected Work
          </p>
          <p className="text-sm text-neutral-500">
            {projects.length} Projects
          </p>
        </div>

        {displayProjects.length > 0 ? (
          <div className="space-y-12">
            {/* Top Row: Large (7 cols) + 2 Stacked Medium (5 cols) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Large Featured */}
              {first && (
                <div className="lg:col-span-7">
                  <ProjectCard project={first} index={0} size="large" />
                </div>
              )}

              {/* Stacked Medium */}
              <div className="lg:col-span-5 space-y-8">
                {second && (
                  <ProjectCard project={second} index={1} size="medium" />
                )}
                {third && (
                  <ProjectCard project={third} index={2} size="medium" />
                )}
              </div>
            </div>

            {/* Full Width Project */}
            {fourth && (
              <div>
                <ProjectCard project={fourth} index={3} size="full" />
              </div>
            )}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-neutral-500">Projects coming soon.</p>
          </div>
        )}

        {/* View All Link */}
        {projects.length > 4 && (
          <div className="mt-16 text-center">
            <a
              href="/projects"
              className="inline-flex items-center text-neutral-300 hover:text-brand-400 transition-colors group"
            >
              <span className="text-sm tracking-wide">View all projects</span>
              <svg
                className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </div>
        )}
      </Container>
    </section>
  )
}

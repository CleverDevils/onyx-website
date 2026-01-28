'use client'

import { useState } from 'react'
import Link from 'next/link'
import Container from '@/components/ui/Container'
import Card from '@/components/ui/Card'
import type { ProjectMeta } from '@/lib/types'

interface ProjectsProps {
  projects: ProjectMeta[]
}

const categories = ['All', 'Commercial', 'Residential', 'Corporate']

export default function Projects({ projects }: ProjectsProps) {
  const [activeCategory, setActiveCategory] = useState('All')

  const filteredProjects =
    activeCategory === 'All'
      ? projects
      : projects.filter((project) => project.category === activeCategory)

  return (
    <section id="projects" className="section-padding bg-dark-950/50">
      <Container>
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-primary-400 font-semibold tracking-wider uppercase text-sm">
            Our Work
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-4 mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-dark-300 text-lg">
            Explore our portfolio of successful AV installations across commercial,
            residential, and corporate environments.
          </p>
        </div>

        {/* Category filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/25'
                  : 'bg-dark-800 text-dark-300 hover:text-white hover:bg-dark-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <Link
                key={project.slug}
                href={`/projects/${project.slug}`}
                className="group"
              >
                <Card className="overflow-hidden h-full">
                  {/* Image */}
                  <div className="relative aspect-video overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-600/30 via-secondary-600/30 to-accent-600/30 group-hover:opacity-70 transition-opacity" />

                    {/* Placeholder pattern when no image */}
                    <div
                      className="absolute inset-0 opacity-20"
                      style={{
                        backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(255 255 255 / 0.2)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e")`,
                      }}
                    />

                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-primary-500/0 group-hover:bg-primary-500/20 transition-all duration-300 flex items-center justify-center">
                      <span className="opacity-0 group-hover:opacity-100 transition-opacity text-white font-semibold flex items-center gap-2">
                        View Project
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                          />
                        </svg>
                      </span>
                    </div>

                    {/* Category badge */}
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full text-xs font-medium bg-dark-900/80 backdrop-blur-sm text-primary-300 border border-primary-500/20">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-primary-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-dark-400 text-sm mb-3">{project.client}</p>
                    {project.excerpt && (
                      <p className="text-dark-500 text-sm line-clamp-2">
                        {project.excerpt}
                      </p>
                    )}
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="w-16 h-16 rounded-full bg-dark-800 flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8 text-dark-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                />
              </svg>
            </div>
            <h3 className="text-white font-semibold mb-2">No projects yet</h3>
            <p className="text-dark-400 text-sm">
              Projects will appear here once added.
            </p>
          </div>
        )}
      </Container>
    </section>
  )
}

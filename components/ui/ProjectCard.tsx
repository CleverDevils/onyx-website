import type { ProjectMeta } from '@/lib/types'

interface ProjectCardProps {
  project: ProjectMeta
  index: number
  size?: 'large' | 'medium' | 'full'
}

export default function ProjectCard({ project, index, size = 'medium' }: ProjectCardProps) {
  const aspectRatio = size === 'full' ? 'aspect-[21/9]' : size === 'large' ? 'aspect-[4/3]' : 'aspect-[3/2]'

  return (
    <a href={`/projects/${project.slug}`} className="block group">
      <div className={`relative ${aspectRatio} overflow-hidden bg-neutral-800`}>
        {project.thumbnail ? (
          <img
            src={project.thumbnail}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-neutral-800 to-neutral-850" />
        )}
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/80 via-neutral-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <div className="mt-4 flex items-center gap-4 text-sm">
        <span className="text-brand-400 font-medium">
          {String(index + 1).padStart(2, '0')}
        </span>
        <span className="text-white group-hover:text-brand-400 transition-colors">
          {project.title}
        </span>
        <span className="text-neutral-500">{project.category}</span>
      </div>
    </a>
  )
}

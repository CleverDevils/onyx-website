import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'
import type { Project, ProjectMeta } from './types'

const projectsDirectory = path.join(process.cwd(), 'content/projects')

export function getProjectSlugs(): string[] {
  if (!fs.existsSync(projectsDirectory)) {
    return []
  }
  const fileNames = fs.readdirSync(projectsDirectory)
  return fileNames
    .filter((name) => name.endsWith('.md'))
    .map((name) => name.replace(/\.md$/, ''))
}

export async function getProjectBySlug(slug: string): Promise<Project | null> {
  const fullPath = path.join(projectsDirectory, `${slug}.md`)

  if (!fs.existsSync(fullPath)) {
    return null
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  const processedContent = await remark().use(html).process(content)
  const contentHtml = processedContent.toString()

  return {
    slug,
    title: data.title || '',
    client: data.client || '',
    category: data.category || 'Commercial',
    date: data.date || '',
    featured: data.featured || false,
    thumbnail: data.thumbnail || '',
    images: data.images || [],
    video: data.video || undefined,
    content: contentHtml,
    excerpt: data.excerpt || content.slice(0, 150) + '...',
  }
}

export async function getAllProjects(): Promise<ProjectMeta[]> {
  const slugs = getProjectSlugs()
  const projects: ProjectMeta[] = []

  for (const slug of slugs) {
    const project = await getProjectBySlug(slug)
    if (project) {
      projects.push({
        slug: project.slug,
        title: project.title,
        client: project.client,
        category: project.category,
        date: project.date,
        featured: project.featured,
        thumbnail: project.thumbnail,
        excerpt: project.excerpt,
      })
    }
  }

  // Sort by date, newest first
  return projects.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export async function getFeaturedProjects(): Promise<ProjectMeta[]> {
  const projects = await getAllProjects()
  return projects.filter((project) => project.featured)
}

export async function getProjectsByCategory(category: string): Promise<ProjectMeta[]> {
  const projects = await getAllProjects()
  return projects.filter((project) => project.category === category)
}

import { notFound } from 'next/navigation'
import Link from 'next/link'
import Container from '@/components/ui/Container'
import Button from '@/components/ui/Button'
import { getProjectBySlug, getProjectSlugs } from '@/lib/projects'

interface ProjectPageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const slugs = getProjectSlugs()
  return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: ProjectPageProps) {
  const { slug } = await params
  const project = await getProjectBySlug(slug)

  if (!project) {
    return {
      title: 'Project Not Found | Onyx Integrations',
    }
  }

  return {
    title: `${project.title} | Onyx Integrations`,
    description: project.excerpt,
  }
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params
  const project = await getProjectBySlug(slug)

  if (!project) {
    notFound()
  }

  return (
    <div className="pt-20">
      {/* Hero section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-dark-900 via-dark-900 to-primary-950/30">
        <Container>
          <Link
            href="/#projects"
            className="inline-flex items-center text-dark-400 hover:text-white transition-colors mb-8"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to Projects
          </Link>

          <div className="max-w-4xl">
            <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-primary-500/10 text-primary-300 border border-primary-500/20 mb-4">
              {project.category}
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              {project.title}
            </h1>
            <p className="text-xl text-dark-300 mb-6">{project.client}</p>
            <div className="flex items-center text-dark-400 text-sm">
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              {new Date(project.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
              })}
            </div>
          </div>
        </Container>
      </section>

      {/* Main content */}
      <section className="py-16">
        <Container>
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Project description */}
            <div className="lg:col-span-2">
              <div
                className="prose prose-lg prose-invert max-w-none
                  prose-headings:text-white prose-headings:font-bold
                  prose-p:text-dark-300
                  prose-a:text-primary-400 prose-a:no-underline hover:prose-a:underline
                  prose-strong:text-white
                  prose-ul:text-dark-300 prose-ol:text-dark-300
                  prose-li:marker:text-primary-500"
                dangerouslySetInnerHTML={{ __html: project.content }}
              />

              {/* Video embed */}
              {project.video && (
                <div className="mt-12">
                  <h2 className="text-2xl font-bold text-white mb-6">Project Video</h2>
                  <div className="relative aspect-video rounded-xl overflow-hidden bg-dark-800">
                    <iframe
                      src={project.video}
                      title={`${project.title} video`}
                      className="absolute inset-0 w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Project images gallery */}
              {project.images.length > 0 && (
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-white mb-4">Gallery</h3>
                  <div className="space-y-4">
                    {project.images.map((image, index) => (
                      <div
                        key={index}
                        className="relative aspect-video rounded-lg overflow-hidden bg-dark-800"
                      >
                        {/* Placeholder - replace with next/image when images are added */}
                        <div className="absolute inset-0 bg-gradient-to-br from-primary-600/20 via-secondary-600/20 to-accent-600/20" />
                        <div
                          className="absolute inset-0 opacity-20"
                          style={{
                            backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(255 255 255 / 0.2)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e")`,
                          }}
                        />
                        <div className="absolute bottom-2 right-2 text-xs text-dark-400">
                          {image}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* CTA */}
              <div className="p-6 rounded-xl bg-gradient-to-br from-primary-500/10 to-secondary-500/10 border border-primary-500/20">
                <h3 className="text-lg font-semibold text-white mb-2">
                  Interested in a similar project?
                </h3>
                <p className="text-dark-400 text-sm mb-4">
                  Let&apos;s discuss how we can create something amazing for your space.
                </p>
                <Button href="/#contact" className="w-full">
                  Get in Touch
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  )
}

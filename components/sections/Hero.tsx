import Container from '@/components/ui/Container'
import { getFeaturedProjects } from '@/lib/projects'

export default async function Hero() {
  const featuredProjects = await getFeaturedProjects()
  const featuredProject = featuredProjects[0]

  return (
    <section className="min-h-screen flex items-center pt-20 pb-16">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column - Text */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <p className="text-sm text-neutral-500 tracking-wide mb-6">
              Selected Works
            </p>

            <h1 className="font-display font-normal text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-8">
              We craft immersive audiovisual experiences.
            </h1>

            <a
              href="#work"
              className="inline-flex items-center text-neutral-400 hover:text-white transition-colors group"
            >
              <span className="text-sm tracking-wide">View all work</span>
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

          {/* Right Column - Featured Project */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            {featuredProject ? (
              <a href={`/projects/${featuredProject.slug}`} className="block group">
                <div className="relative aspect-[4/3] overflow-hidden bg-neutral-900">
                  {featuredProject.thumbnail ? (
                    <img
                      src={featuredProject.thumbnail}
                      alt={featuredProject.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="w-full h-full bg-neutral-800" />
                  )}
                </div>
                <div className="mt-4 flex items-center gap-4 text-sm">
                  <span className="text-neutral-500">01</span>
                  <span className="text-white group-hover:text-brand-400 transition-colors">
                    {featuredProject.title}
                  </span>
                  <span className="text-neutral-600">{featuredProject.category}</span>
                </div>
              </a>
            ) : (
              <div className="relative aspect-[4/3] bg-neutral-900">
                <div className="absolute inset-0 flex items-center justify-center text-neutral-600">
                  Featured Project
                </div>
              </div>
            )}
          </div>
        </div>
      </Container>
    </section>
  )
}

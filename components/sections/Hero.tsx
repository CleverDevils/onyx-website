import Container from '@/components/ui/Container'
import Button from '@/components/ui/Button'

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-900 via-dark-900 to-primary-950/30" />

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-secondary-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(255 255 255 / 0.1)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e")`,
        }}
      />

      <Container className="relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-500/10 border border-primary-500/20 mb-8">
            <span className="w-2 h-2 rounded-full bg-accent-500 mr-2 animate-pulse" />
            <span className="text-sm text-primary-300">Professional AV Integration</span>
          </div>

          {/* Main headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Transform Your Space with{' '}
            <span className="gradient-text">Cutting-Edge AV Solutions</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-dark-300 mb-10 max-w-2xl mx-auto">
            From immersive home theaters to state-of-the-art conference rooms, we design
            and install audiovisual systems that elevate your experience.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href="#contact" size="lg">
              Get Started
              <svg
                className="ml-2 w-5 h-5"
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
            </Button>
            <Button href="#projects" variant="outline" size="lg">
              View Our Work
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 pt-16 border-t border-dark-800">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">100+</div>
              <div className="text-dark-400">Projects Completed</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">10+</div>
              <div className="text-dark-400">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">98%</div>
              <div className="text-dark-400">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </Container>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <a
          href="#about"
          className="flex flex-col items-center text-dark-400 hover:text-white transition-colors"
        >
          <span className="text-sm mb-2">Scroll</span>
          <svg
            className="w-6 h-6 animate-bounce"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </a>
      </div>
    </section>
  )
}

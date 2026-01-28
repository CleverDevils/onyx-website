import Container from '@/components/ui/Container'

const features = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
    title: 'Certified Experts',
    description: 'Our team holds certifications from leading AV manufacturers and industry organizations.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
    title: 'Cutting-Edge Technology',
    description: 'We stay ahead of industry trends to bring you the latest in AV innovation.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    ),
    title: 'Dedicated Support',
    description: 'From consultation to installation and beyond, we provide ongoing support for all systems.',
  },
]

export default function About() {
  return (
    <section id="about" className="section-padding bg-dark-950/50">
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div>
            <span className="text-primary-400 font-semibold tracking-wider uppercase text-sm">
              About Us
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-4 mb-6">
              Building the Future of{' '}
              <span className="gradient-text">Audiovisual Excellence</span>
            </h2>
            <p className="text-dark-300 text-lg mb-6">
              Onyx Integrations is a premier audiovisual integration company dedicated to
              transforming spaces through innovative technology solutions. With over a decade
              of experience, we specialize in designing, installing, and maintaining
              cutting-edge AV systems for commercial, residential, and corporate clients.
            </p>
            <p className="text-dark-400 mb-8">
              Our team of certified professionals combines technical expertise with creative
              vision to deliver solutions that exceed expectations. Whether you need a
              state-of-the-art conference room, an immersive home theater, or a complex
              commercial installation, we have the skills and experience to bring your
              vision to life.
            </p>

            {/* Features */}
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary-500/10 flex items-center justify-center text-primary-400">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">{feature.title}</h3>
                    <p className="text-dark-400 text-sm">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image/Visual */}
          <div className="relative">
            <div className="relative aspect-square rounded-2xl overflow-hidden">
              {/* Placeholder gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-600/20 via-secondary-600/20 to-accent-600/20" />

              {/* Grid pattern */}
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(255 255 255 / 0.2)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e")`,
                }}
              />

              {/* Decorative elements */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full border-2 border-primary-500/30 animate-pulse" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full border border-secondary-500/20" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full border border-accent-500/10" />

              {/* Center icon */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-2xl bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center shadow-2xl shadow-primary-500/30">
                <svg
                  className="w-12 h-12 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                  />
                </svg>
              </div>
            </div>

            {/* Floating badges */}
            <div className="absolute -top-4 -right-4 px-4 py-2 rounded-lg bg-dark-800 border border-dark-700 shadow-xl">
              <div className="text-2xl font-bold text-white">10+</div>
              <div className="text-xs text-dark-400">Years Experience</div>
            </div>
            <div className="absolute -bottom-4 -left-4 px-4 py-2 rounded-lg bg-dark-800 border border-dark-700 shadow-xl">
              <div className="text-2xl font-bold text-accent-400">500+</div>
              <div className="text-xs text-dark-400">Happy Clients</div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

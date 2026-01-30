import Container from '@/components/ui/Container'

export default function Philosophy() {
  return (
    <section id="about" className="relative py-32 lg:py-40 overflow-hidden">
      {/* Subtle accent gradient */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-accent-500/5 to-transparent" />

      <Container className="relative">
        <div className="max-w-3xl">
          <p className="text-sm text-accent-400 tracking-wide mb-8">
            Our Philosophy
          </p>

          <p className="font-display font-normal text-2xl md:text-3xl lg:text-4xl text-white leading-relaxed mb-8">
            We believe technology should enhance your space, not complicate it.
          </p>

          <p className="text-lg text-neutral-300 leading-relaxed">
            Every project begins with listening—understanding how you work, collaborate, and engage with your environment. We design systems that disappear into the architecture, so you can focus on your audience, not the technology.
          </p>
        </div>
      </Container>
    </section>
  )
}

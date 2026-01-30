import Container from '@/components/ui/Container'

export default function Contact() {
  return (
    <section id="contact" className="relative section-padding border-t border-neutral-800/50 overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-neutral-900 via-neutral-850 to-neutral-900" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-brand-500/5 rounded-full blur-3xl" />

      <Container className="relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Left Column - Invitation */}
          <div className="lg:col-span-5">
            <p className="text-sm text-accent-400 tracking-wide mb-8">
              Get in Touch
            </p>

            <h2 className="font-display font-normal text-3xl md:text-4xl text-white leading-tight mb-6">
              Have a project in mind?
            </h2>

            <p className="text-neutral-400 leading-relaxed">
              We&apos;d love to hear about it. Reach out and let&apos;s discuss how we can bring your vision to life.
            </p>
          </div>

          {/* Right Column - Contact Links */}
          <div className="lg:col-span-7 lg:flex lg:justify-end">
            <div className="space-y-8">
              <a
                href="mailto:info@onyxintegrations.com"
                className="block group"
              >
                <p className="text-sm text-neutral-500 mb-2">Email</p>
                <p className="text-2xl md:text-3xl text-white group-hover:text-brand-400 transition-colors">
                  info@onyxintegrations.com
                </p>
              </a>


            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

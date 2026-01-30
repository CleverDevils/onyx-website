import Container from '@/components/ui/Container'

export default function Contact() {
  return (
    <section id="contact" className="section-padding border-t border-neutral-800/50">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Left Column - Invitation */}
          <div className="lg:col-span-5">
            <p className="text-sm text-neutral-500 tracking-wide mb-8">
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

              <a
                href="tel:+15551234567"
                className="block group"
              >
                <p className="text-sm text-neutral-500 mb-2">Phone</p>
                <p className="text-2xl md:text-3xl text-white group-hover:text-brand-400 transition-colors">
                  (555) 123-4567
                </p>
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

import Container from '@/components/ui/Container'

const capabilities = [
  {
    title: 'Corporate Installations',
    description: 'Conference rooms, boardrooms, and training centers—technology that enhances collaboration without distraction.',
    accent: 'brand',
  },
  {
    title: 'Live Events',
    description: 'Concerts, conferences, and corporate gatherings with professional-grade audio, video, and lighting.',
    accent: 'accent',
  },
  {
    title: 'Consulting & Design',
    description: 'System architecture and specification for architects, designers, and builders who demand precision.',
    accent: 'accent',
  },
  {
    title: 'Ongoing Support',
    description: 'Maintenance, upgrades, and 24/7 support. Your investment protected for the long term.',
    accent: 'brand',
  },
]

export default function Capabilities() {
  return (
    <section className="relative py-24 lg:py-32 border-t border-neutral-800/50">
      {/* Subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neutral-850/50 to-transparent" />

      <Container className="relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Label */}
          <div className="lg:col-span-3">
            <p className="text-sm text-brand-400 tracking-wide">
              Capabilities
            </p>
          </div>

          {/* Capabilities Grid */}
          <div className="lg:col-span-9">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12 md:gap-y-16">
              {capabilities.map((capability, index) => (
                <div
                  key={capability.title}
                  className={`group ${
                    index < 2 ? 'md:pb-16 md:border-b md:border-neutral-800/50' : ''
                  }`}
                >
                  <div className={`w-8 h-px mb-6 ${
                    capability.accent === 'brand' ? 'bg-brand-400' : 'bg-accent-400'
                  }`} />
                  <h3 className="text-lg text-white mb-3 group-hover:text-brand-300 transition-colors">
                    {capability.title}
                  </h3>
                  <p className="text-neutral-400 leading-relaxed">
                    {capability.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

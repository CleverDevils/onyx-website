import Container from '@/components/ui/Container'

const capabilities = [
  {
    title: 'Commercial Spaces',
    description: 'Conference rooms, retail environments, hospitality venues—technology that enhances business without distraction.',
  },
  {
    title: 'Private Residences',
    description: 'Home theaters, whole-home audio, and integrated living spaces designed around how you actually live.',
  },
  {
    title: 'Consulting & Design',
    description: 'System architecture and specification for architects, designers, and builders who demand precision.',
  },
  {
    title: 'Ongoing Support',
    description: 'Maintenance, upgrades, and 24/7 support. Your investment protected for the long term.',
  },
]

export default function Capabilities() {
  return (
    <section className="py-24 lg:py-32 border-t border-neutral-800/50">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Label */}
          <div className="lg:col-span-3">
            <p className="text-sm text-neutral-500 tracking-wide">
              Capabilities
            </p>
          </div>

          {/* Capabilities Grid */}
          <div className="lg:col-span-9">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12 md:gap-y-16">
              {capabilities.map((capability, index) => (
                <div
                  key={capability.title}
                  className={`${
                    index < 2 ? 'md:pb-16 md:border-b md:border-neutral-800/50' : ''
                  }`}
                >
                  <h3 className="text-lg text-white mb-3">
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

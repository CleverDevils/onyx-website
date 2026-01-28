import Container from '@/components/ui/Container'
import Card, { CardContent } from '@/components/ui/Card'

const services = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
        />
      </svg>
    ),
    title: 'Commercial AV',
    description:
      'Complete audiovisual solutions for businesses, including conference rooms, digital signage, and presentation systems.',
    features: ['Conference Room Systems', 'Digital Signage', 'Presentation Systems', 'Video Walls'],
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
        />
      </svg>
    ),
    title: 'Residential AV',
    description:
      'Transform your home with custom home theaters, whole-house audio, and smart home integration.',
    features: ['Home Theaters', 'Multi-Room Audio', 'Media Rooms', 'Outdoor Entertainment'],
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
        />
      </svg>
    ),
    title: 'Corporate Solutions',
    description:
      'Enterprise-level AV systems for large organizations, including boardrooms, training facilities, and auditoriums.',
    features: ['Boardroom Systems', 'Training Centers', 'Town Hall Systems', 'Video Conferencing'],
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
        />
      </svg>
    ),
    title: 'Smart Automation',
    description:
      'Intelligent control systems that seamlessly integrate lighting, climate, security, and AV into one unified experience.',
    features: ['Lighting Control', 'Climate Integration', 'Security Systems', 'Voice Control'],
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
        />
      </svg>
    ),
    title: 'Design & Consulting',
    description:
      'Expert consultation and system design to ensure your AV investment meets your needs and budget.',
    features: ['Needs Assessment', 'System Design', 'Budget Planning', 'Technology Selection'],
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
        />
      </svg>
    ),
    title: 'Support & Maintenance',
    description:
      'Comprehensive support services to keep your AV systems running at peak performance.',
    features: ['24/7 Support', 'Preventive Maintenance', 'System Updates', 'Remote Monitoring'],
  },
]

export default function Services() {
  return (
    <section id="services" className="section-padding">
      <Container>
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary-400 font-semibold tracking-wider uppercase text-sm">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-4 mb-6">
            Comprehensive AV Solutions for{' '}
            <span className="gradient-text">Every Need</span>
          </h2>
          <p className="text-dark-300 text-lg">
            From initial consultation to ongoing support, we provide end-to-end audiovisual
            services tailored to your specific requirements.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group">
              <CardContent className="p-8">
                {/* Icon */}
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary-500/20 to-secondary-500/20 flex items-center justify-center text-primary-400 mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary-400 transition-colors">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-dark-400 mb-6">{service.description}</p>

                {/* Features */}
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center text-sm text-dark-300"
                    >
                      <svg
                        className="w-4 h-4 text-accent-500 mr-2 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  )
}

import Container from '@/components/ui/Container'

export default function Philosophy() {
  return (
    <section id="about" className="py-32 lg:py-40">
      <Container>
        <div className="max-w-3xl">
          <p className="text-sm text-neutral-500 tracking-wide mb-8">
            Our Philosophy
          </p>

          <p className="font-display font-normal text-2xl md:text-3xl lg:text-4xl text-white leading-relaxed">
            We believe great spaces deserve great sound and vision. Every project begins with listening—understanding how you live, work, and experience your environment. Then we design systems that disappear into the architecture while transforming how you engage with your world.
          </p>
        </div>
      </Container>
    </section>
  )
}

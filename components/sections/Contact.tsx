'use client'

import { useState, FormEvent } from 'react'
import Container from '@/components/ui/Container'
import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'

export default function Contact() {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setFormStatus('submitting')

    const form = e.currentTarget
    const formData = new FormData(form)

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData as unknown as Record<string, string>).toString(),
      })

      if (response.ok) {
        setFormStatus('success')
        form.reset()
      } else {
        setFormStatus('error')
      }
    } catch {
      setFormStatus('error')
    }
  }

  return (
    <section id="contact" className="section-padding">
      <Container>
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary-400 font-semibold tracking-wider uppercase text-sm">
            Get in Touch
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-4 mb-6">
            Let&apos;s Start Your{' '}
            <span className="gradient-text">Project</span>
          </h2>
          <p className="text-dark-300 text-lg">
            Ready to transform your space? Contact us today for a free consultation and
            discover how we can bring your vision to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact form */}
          <div className="lg:col-span-3">
            <Card className="p-8">
              <form
                name="contact"
                method="POST"
                data-netlify="true"
                netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
              >
                <input type="hidden" name="form-name" value="contact" />
                <p className="hidden">
                  <label>
                    Don&apos;t fill this out: <input name="bot-field" />
                  </label>
                </p>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-dark-300 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 rounded-lg bg-dark-800 border border-dark-700 text-white placeholder-dark-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-dark-300 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 rounded-lg bg-dark-800 border border-dark-700 text-white placeholder-dark-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-dark-300 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-4 py-3 rounded-lg bg-dark-800 border border-dark-700 text-white placeholder-dark-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-dark-300 mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      className="w-full px-4 py-3 rounded-lg bg-dark-800 border border-dark-700 text-white placeholder-dark-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                      placeholder="Your Company"
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label htmlFor="service" className="block text-sm font-medium text-dark-300 mb-2">
                    Service Interested In
                  </label>
                  <select
                    id="service"
                    name="service"
                    className="w-full px-4 py-3 rounded-lg bg-dark-800 border border-dark-700 text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                  >
                    <option value="">Select a service</option>
                    <option value="commercial">Commercial AV</option>
                    <option value="residential">Residential AV</option>
                    <option value="corporate">Corporate Solutions</option>
                    <option value="automation">Smart Automation</option>
                    <option value="consulting">Design & Consulting</option>
                    <option value="support">Support & Maintenance</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-dark-300 mb-2">
                    Project Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg bg-dark-800 border border-dark-700 text-white placeholder-dark-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full"
                  disabled={formStatus === 'submitting'}
                >
                  {formStatus === 'submitting' ? (
                    <>
                      <svg
                        className="animate-spin -ml-1 mr-3 h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    'Send Message'
                  )}
                </Button>

                {formStatus === 'success' && (
                  <div className="mt-4 p-4 rounded-lg bg-accent-500/10 border border-accent-500/20 text-accent-400">
                    Thank you for your message! We&apos;ll get back to you soon.
                  </div>
                )}

                {formStatus === 'error' && (
                  <div className="mt-4 p-4 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400">
                    Something went wrong. Please try again or contact us directly.
                  </div>
                )}
              </form>
            </Card>
          </div>

          {/* Contact info */}
          <div className="lg:col-span-2 space-y-6">
            {/* Email */}
            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary-500/10 flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-primary-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">Email</h3>
                  <a
                    href="mailto:info@onyxintegrations.com"
                    className="text-dark-400 hover:text-primary-400 transition-colors"
                  >
                    info@onyxintegrations.com
                  </a>
                </div>
              </div>
            </Card>

            {/* Phone */}
            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-secondary-500/10 flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-secondary-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">Phone</h3>
                  <a
                    href="tel:+15551234567"
                    className="text-dark-400 hover:text-secondary-400 transition-colors"
                  >
                    (555) 123-4567
                  </a>
                </div>
              </div>
            </Card>

            {/* Address */}
            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-accent-500/10 flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-accent-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">Address</h3>
                  <p className="text-dark-400">
                    123 Tech Plaza, Suite 400
                    <br />
                    City, State 12345
                  </p>
                </div>
              </div>
            </Card>

            {/* Hours */}
            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary-500/10 flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-primary-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">Business Hours</h3>
                  <p className="text-dark-400">
                    Monday - Friday: 8am - 6pm
                    <br />
                    Saturday: By appointment
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </Container>
    </section>
  )
}

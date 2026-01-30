'use client'

import { useState, FormEvent } from 'react'
import Container from '@/components/ui/Container'

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('submitting')

    const form = e.currentTarget
    const formData = new FormData(form)

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData as unknown as Record<string, string>).toString(),
      })

      if (response.ok) {
        setStatus('success')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

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
              We&apos;d love to hear about it. Reach out and let&apos;s discuss how we can help you bring your vision to life.
            </p>
          </div>

          {/* Right Column - Contact Form */}
          <div className="lg:col-span-7">
            {status === 'success' ? (
              <div className="flex items-center justify-center h-full">
                <div className="text-center">
                  <p className="text-2xl text-white mb-2">Message sent.</p>
                  <p className="text-neutral-400">We&apos;ll be in touch soon.</p>
                  <button
                    type="button"
                    onClick={() => setStatus('idle')}
                    className="mt-6 text-sm text-brand-400 hover:text-brand-300 transition-colors cursor-pointer"
                  >
                    Send another message
                  </button>
                </div>
              </div>
            ) : (
              <form
                name="contact"
                method="POST"
                data-netlify="true"
                netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                <input type="hidden" name="form-name" value="contact" />
                <p className="hidden">
                  <label>
                    Don&apos;t fill this out: <input name="bot-field" />
                  </label>
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm text-neutral-500 mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full bg-neutral-800 border border-neutral-700 text-white px-4 py-3 focus:outline-none focus:border-brand-400 focus:ring-1 focus:ring-brand-400 transition-colors"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm text-neutral-500 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full bg-neutral-800 border border-neutral-700 text-white px-4 py-3 focus:outline-none focus:border-brand-400 focus:ring-1 focus:ring-brand-400 transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="organization" className="block text-sm text-neutral-500 mb-2">
                      Organization
                    </label>
                    <input
                      type="text"
                      id="organization"
                      name="organization"
                      className="w-full bg-neutral-800 border border-neutral-700 text-white px-4 py-3 focus:outline-none focus:border-brand-400 focus:ring-1 focus:ring-brand-400 transition-colors"
                      placeholder="Company name"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm text-neutral-500 mb-2">
                      Phone
                    </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full bg-neutral-800 border border-neutral-700 text-white px-4 py-3 focus:outline-none focus:border-brand-400 focus:ring-1 focus:ring-brand-400 transition-colors"
                    placeholder="(555) 123-4567"
                  />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm text-neutral-500 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className="w-full bg-neutral-800 border border-neutral-700 text-white px-4 py-3 focus:outline-none focus:border-brand-400 focus:ring-1 focus:ring-brand-400 transition-colors resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                {status === 'error' && (
                  <p className="text-red-400 text-sm">
                    Something went wrong. Please try again or email us directly at info@onyxintegrations.com.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full sm:w-auto px-8 py-3 bg-brand-500 text-white text-sm tracking-wide hover:bg-brand-400 transition-colors disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                >
                  {status === 'submitting' ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </div>
        </div>
      </Container>
    </section>
  )
}

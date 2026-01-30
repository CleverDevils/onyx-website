'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import Container from '@/components/ui/Container'

interface Project {
  slug: string
  title: string
  category: string
  thumbnail: string
}

interface HeroProps {
  projects: Project[]
}

export default function Hero({ projects }: HeroProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [prevIndex, setPrevIndex] = useState(0)
  const [direction, setDirection] = useState<'left' | 'right'>('right')
  const [phase, setPhase] = useState<'idle' | 'prepare' | 'animate'>('idle')

  // Use up to 5 projects
  const galleryProjects = projects.slice(0, 5)
  const totalSlides = galleryProjects.length || 1

  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const changeSlide = useCallback((nextOrFn: number | ((prev: number) => number)) => {
    setCurrentIndex((prev) => {
      const next = typeof nextOrFn === 'function' ? nextOrFn(prev) : nextOrFn
      if (next === prev) return prev
      setPrevIndex(prev)
      setDirection(next > prev ? 'right' : 'left')
      setPhase('prepare')
      return next
    })
  }, [])

  // Two-phase animation: prepare positions the incoming slide off-screen without transition,
  // then animate triggers the transition on the next frame
  useEffect(() => {
    if (phase === 'prepare') {
      const frame = requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setPhase('animate')
          setTimeout(() => setPhase('idle'), 700)
        })
      })
      return () => cancelAnimationFrame(frame)
    }
  }, [phase])

  const resetTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current)
    if (totalSlides <= 1) return
    timerRef.current = setInterval(() => {
      changeSlide((prev: number) => (prev + 1) % totalSlides)
    }, 5000)
  }, [totalSlides, changeSlide])

  // Auto-advance every 5 seconds
  useEffect(() => {
    resetTimer()
    return () => { if (timerRef.current) clearInterval(timerRef.current) }
  }, [resetTimer])

  const goToSlide = (index: number) => {
    changeSlide(index)
    resetTimer()
  }

  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-neutral-900 via-neutral-900 to-neutral-850" />

      {/* Ambient glow effects */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-brand-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-accent-500/10 rounded-full blur-3xl" />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column - Text */}
          <div className="lg:col-span-4 order-1">
            <p className="text-sm text-brand-400 tracking-wide mb-6">
              Selected Works
            </p>

            <h1 className="font-display font-normal text-4xl md:text-5xl lg:text-5xl text-white leading-tight mb-8">
              We craft immersive audiovisual experiences.
            </h1>

            <a
              href="#work"
              className="inline-flex items-center text-neutral-300 hover:text-brand-400 transition-colors group"
            >
              <span className="text-sm tracking-wide">View all work</span>
              <svg
                className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </div>

          {/* Right Column - Gallery */}
          <div className="lg:col-span-8 order-2">
            {galleryProjects.length > 0 ? (
              <div className="relative">
                {/* Sliding carousel */}
                <div className="relative aspect-[16/10] overflow-hidden bg-neutral-800 glow-brand">
                  {galleryProjects.map((project, index) => {
                    const isActive = index === currentIndex
                    const isPrev = index === prevIndex && phase !== 'idle'

                    let transform = ''
                    let shouldTransition = false

                    if (isActive) {
                      if (phase === 'prepare') {
                        // Position incoming slide off-screen instantly
                        transform = direction === 'right' ? 'translateX(100%)' : 'translateX(-100%)'
                      } else {
                        // Slide into view (animate phase or idle)
                        transform = 'translateX(0%)'
                        shouldTransition = phase === 'animate'
                      }
                    } else if (isPrev) {
                      if (phase === 'prepare') {
                        // Previous slide still in place
                        transform = 'translateX(0%)'
                      } else {
                        // Slide out
                        transform = direction === 'right' ? 'translateX(-100%)' : 'translateX(100%)'
                        shouldTransition = phase === 'animate'
                      }
                    } else {
                      // Hidden off-screen
                      transform = 'translateX(100%)'
                    }

                    return (
                    <a
                      key={project.slug}
                      href={`/projects/${project.slug}`}
                      className={`absolute inset-0 group ${
                        isActive || isPrev ? 'z-10' : 'z-0'
                      }`}
                      style={{
                        transform,
                        transition: shouldTransition ? 'transform 700ms ease-in-out' : 'none',
                      }}
                    >
                      {project.thumbnail ? (
                        <img
                          src={project.thumbnail}
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-neutral-800 to-neutral-850" />
                      )}

                      {/* Gradient overlay for text readability */}
                      <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-neutral-950/30 to-transparent" />

                      {/* Inset text */}
                      <div className="absolute bottom-0 left-0 right-0 p-8">
                        <div className="flex items-center gap-4 text-sm mb-3">
                          <span className="text-brand-400 font-medium">
                            {String(index + 1).padStart(2, '0')}
                          </span>
                          <span className="text-neutral-400">{project.category}</span>
                        </div>
                        <h2 className="text-2xl md:text-3xl text-white font-display group-hover:text-brand-400 transition-colors">
                          {project.title}
                        </h2>
                      </div>
                    </a>
                    )
                  })}
                </div>

                {/* Navigation dots */}
                {totalSlides > 1 && (
                  <div className="relative z-10 flex items-center gap-3 mt-6">
                    {galleryProjects.map((_, index) => (
                      <button
                        type="button"
                        key={index}
                        onClick={() => goToSlide(index)}
                        className="p-2 cursor-pointer"
                        aria-label={`Go to slide ${index + 1}`}
                      >
                        <span className={`block h-2 rounded-full transition-all duration-300 ${
                          index === currentIndex
                            ? 'w-10 bg-brand-400'
                            : 'w-5 bg-neutral-700 hover:bg-neutral-600'
                        }`} />
                      </button>
                    ))}

                    {/* Slide counter */}
                    <span className="ml-auto text-sm text-neutral-500">
                      {String(currentIndex + 1).padStart(2, '0')} / {String(totalSlides).padStart(2, '0')}
                    </span>
                  </div>
                )}
              </div>
            ) : (
              <div className="relative aspect-[16/10] bg-neutral-800">
                <div className="absolute inset-0 flex items-center justify-center text-neutral-600">
                  Featured Projects
                </div>
              </div>
            )}
          </div>
        </div>
      </Container>
      {/* Scroll indicator */}
      <button
        type="button"
        onClick={() => {
          const el = document.getElementById('about')
          if (!el) return
          const start = window.pageYOffset
          const end = el.getBoundingClientRect().top + start
          const distance = end - start
          const duration = 700
          let startTime: number | null = null

          function step(timestamp: number) {
            if (!startTime) startTime = timestamp
            const elapsed = timestamp - startTime
            const progress = Math.min(elapsed / duration, 1)
            // ease-in-out cubic
            const ease = progress < 0.5
              ? 4 * progress * progress * progress
              : 1 - Math.pow(-2 * progress + 2, 3) / 2
            window.scrollTo(0, start + distance * ease)
            if (progress < 1) requestAnimationFrame(step)
          }

          requestAnimationFrame(step)
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-neutral-500 hover:text-white transition-colors cursor-pointer"
        aria-label="Scroll to next section"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <svg className="w-4 h-4 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
    </section>
  )
}

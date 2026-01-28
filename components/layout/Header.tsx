'use client'

import { useState, useEffect } from 'react'
import Container from '@/components/ui/Container'
import Button from '@/components/ui/Button'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-dark-900/95 backdrop-blur-md shadow-lg shadow-dark-950/50'
          : 'bg-transparent'
      }`}
    >
      <Container>
        <nav className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center">
              <span className="text-white font-bold text-xl">O</span>
            </div>
            <span className="text-xl font-bold text-white group-hover:text-primary-400 transition-colors">
              Onyx<span className="text-primary-400">.</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="nav-link">
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button href="#contact" size="sm">
              Get a Quote
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-dark-300 hover:text-white transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-20 left-0 right-0 bg-dark-900/95 backdrop-blur-md border-t border-dark-800 animate-slide-down">
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block py-2 text-dark-300 hover:text-white transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <Button href="#contact" className="w-full mt-4">
                Get a Quote
              </Button>
            </div>
          </div>
        )}
      </Container>
    </header>
  )
}

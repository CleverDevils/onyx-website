import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Warmer neutral palette with slight brown undertones
        neutral: {
          50: '#faf9f7',
          100: '#f5f3f0',
          200: '#e8e4df',
          300: '#d4cfc7',
          400: '#a39e94',
          500: '#737069',
          600: '#524f49',
          700: '#3d3a36',
          800: '#2a2825',
          850: '#1f1d1b',
          900: '#171614',
          950: '#0d0c0b',
        },
        // Warm gold accent
        brand: {
          300: '#d4b896',
          400: '#c4a67a',
          500: '#9c8060',
          600: '#7a6349',
        },
        // Deep teal secondary accent
        accent: {
          300: '#5eadb8',
          400: '#3d9aa8',
          500: '#2a7d8a',
          600: '#1f5f6a',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-playfair)', 'Georgia', 'serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-subtle': 'linear-gradient(135deg, var(--tw-gradient-stops))',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}

export default config

export interface Project {
  slug: string
  title: string
  client: string
  category: 'Corporate' | 'Live Events'
  date: string
  featured: boolean
  thumbnail: string
  images: string[]
  video?: string
  content: string
  excerpt?: string
}

export interface ProjectMeta {
  slug: string
  title: string
  client: string
  category: 'Corporate' | 'Live Events'
  date: string
  featured: boolean
  thumbnail: string
  excerpt?: string
}

export interface Service {
  title: string
  description: string
  icon: string
  features: string[]
}

export interface NavLink {
  label: string
  href: string
}

export interface ContactInfo {
  email: string
  phone: string
  address: string
}

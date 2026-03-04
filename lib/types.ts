// Base node type
export interface DrupalNode {
  id: string
  title: string
  path: string
  created: {
    timestamp: number
  }
  changed: {
    timestamp: number
  }
}

// Paragraph types
export interface DrupalStatItem {
  id: string
  number: string
  label: string
}

// Homepage
export interface DrupalHomepage extends DrupalNode {
  heroTitle?: string
  heroSubtitle?: string
  heroDescription?: {
    processed: string
  }
  statsItems?: DrupalStatItem[]
  featuredServicesTitle?: string
  ctaTitle?: string
  ctaDescription?: {
    processed: string
  }
  ctaPrimary?: string
  ctaSecondary?: string
}

export interface HomepageData {
  nodeHomepages: {
    nodes: DrupalHomepage[]
  }
}

// Embassy Service
export interface DrupalService extends DrupalNode {
  body?: {
    processed: string
    summary?: string
  }
  serviceCategory?: DrupalTerm[]
  processingTime?: string
  fee?: string
  requiredDocuments?: {
    processed: string
  }
  onlineUrl?: string
  image?: DrupalImage
}

export interface ServicesData {
  nodeServices: {
    nodes: DrupalService[]
  }
}

// Embassy Official
export interface DrupalOfficial extends DrupalNode {
  body?: {
    processed: string
  }
  position?: string
  email?: string
  phone?: string
  photo?: DrupalImage
}

export interface OfficialsData {
  nodeOfficials: {
    nodes: DrupalOfficial[]
  }
}

// Travel Advisory
export interface DrupalTravelAdvisory extends DrupalNode {
  body?: {
    processed: string
    summary?: string
  }
  advisoryLevel?: DrupalTerm[]
  effectiveDate?: {
    timestamp: number
  }
  country?: string
  lastUpdated?: {
    timestamp: number
  }
  image?: DrupalImage
}

export interface TravelAdvisoriesData {
  nodeTravelAdvisories: {
    nodes: DrupalTravelAdvisory[]
  }
}

// News Article
export interface DrupalNews extends DrupalNode {
  body?: {
    processed: string
    summary?: string
  }
  image?: DrupalImage
  category?: DrupalTerm[]
  featured?: boolean
}

export interface NewsData {
  nodeNewsItems: {
    nodes: DrupalNews[]
  }
}

// Basic Page
export interface DrupalPage extends DrupalNode {
  body?: {
    processed: string
  }
}

// Shared types
export interface DrupalImage {
  url: string
  alt?: string
  width?: number
  height?: number
  variations?: Array<{
    name: string
    url: string
    width: number
    height: number
  }>
}

export interface DrupalTerm {
  id: string
  name: string
  path?: string
}

// Feature color type
export type FeatureColor = 'blue' | 'green' | 'purple' | 'yellow' | 'red' | 'indigo'

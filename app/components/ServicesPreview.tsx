'use client'

import Link from 'next/link'
import { useQuery, gql } from '@apollo/client'
import { DrupalHomepage, DrupalService } from '@/lib/types'
import { Clock, DollarSign, ArrowRight } from 'lucide-react'
import ResponsiveImage from './ResponsiveImage'

interface ServicesPreviewProps {
  homepageContent?: DrupalHomepage | null
}

const GET_FEATURED_SERVICES = gql`
  query GetFeaturedServices {
    nodeServices(first: 3, sortKey: TITLE) {
      nodes {
        id
        title
        path
        ... on NodeService {
          serviceCategory {
            ... on TermServiceCategory {
              id
              name
            }
          }
          processingTime
          fee
          image {
            url
            alt
            variations(styles: [MEDIUM]) {
              name
              url
              width
              height
            }
          }
        }
      }
    }
  }
`

interface FeaturedServicesData {
  nodeServices: {
    nodes: DrupalService[]
  }
}

export default function ServicesPreview({ homepageContent }: ServicesPreviewProps) {
  const { data, loading, error } = useQuery<FeaturedServicesData>(GET_FEATURED_SERVICES)

  const services = data?.nodeServices?.nodes || []
  const sectionTitle = homepageContent?.featuredServicesTitle || 'Consular Services'

  if (loading) {
    return (
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{sectionTitle}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white rounded-xl shadow-sm animate-pulse">
                <div className="h-48 bg-gray-200 rounded-t-xl" />
                <div className="p-6">
                  <div className="h-4 bg-gray-200 rounded w-1/4 mb-3" />
                  <div className="h-6 bg-gray-200 rounded w-3/4 mb-3" />
                  <div className="h-4 bg-gray-200 rounded w-full" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }

  if (error || services.length === 0) {
    return null
  }

  return (
    <section className="py-16 md:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{sectionTitle}</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Access the full range of consular services available at the U.S. Embassy Berlin.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Link
              key={service.id}
              href={service.path || `/services/${service.id}`}
              className="group bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden"
            >
              <div className="relative h-48 bg-gradient-to-br from-blue-800 to-blue-900">
                {service.image?.url ? (
                  <ResponsiveImage
                    src={service.image.url}
                    alt={service.image.alt || service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    variations={service.image.variations}
                    targetWidth={400}
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-white/50 text-6xl font-bold">{service.title.charAt(0)}</div>
                  </div>
                )}
                {service.serviceCategory && service.serviceCategory.length > 0 && (
                  <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {service.serviceCategory[0].name}
                  </div>
                )}
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-800 transition-colors">
                  {service.title}
                </h3>

                <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                  {service.processingTime && (
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{service.processingTime}</span>
                    </div>
                  )}
                  {service.fee && (
                    <div className="flex items-center gap-1">
                      <DollarSign className="w-4 h-4" />
                      <span>{service.fee}</span>
                    </div>
                  )}
                </div>

                <div className="flex items-center text-blue-800 font-medium group-hover:gap-2 transition-all">
                  Learn more
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/services"
            className="inline-flex items-center px-8 py-4 bg-blue-900 text-white rounded-lg hover:bg-blue-800 transition-colors font-semibold"
          >
            View All Services
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  )
}

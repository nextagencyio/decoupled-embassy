'use client'

import Link from 'next/link'
import { useQuery } from '@apollo/client'
import { GET_RECENT_ADVISORIES } from '@/lib/queries'
import { DrupalTravelAdvisory } from '@/lib/types'
import { AlertTriangle, ArrowRight, Calendar } from 'lucide-react'

interface RecentAdvisoriesData {
  nodeTravelAdvisories: {
    nodes: DrupalTravelAdvisory[]
  }
}

function getAdvisoryBadgeColor(levelName?: string): string {
  if (!levelName) return 'bg-gray-500'
  if (levelName.includes('Level 1')) return 'bg-blue-500'
  if (levelName.includes('Level 2')) return 'bg-yellow-500'
  if (levelName.includes('Level 3')) return 'bg-orange-500'
  if (levelName.includes('Level 4')) return 'bg-red-600'
  return 'bg-gray-500'
}

function formatDate(timestamp: number): string {
  return new Date(timestamp * 1000).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  })
}

export default function AdvisoriesPreview() {
  const { data, loading, error } = useQuery<RecentAdvisoriesData>(GET_RECENT_ADVISORIES)

  const advisories = data?.nodeTravelAdvisories?.nodes || []

  if (loading) {
    return (
      <section className="py-16 md:py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Travel Advisories</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white/10 rounded-xl p-6 animate-pulse">
                <div className="h-12 w-12 bg-white/20 rounded mb-4" />
                <div className="h-6 bg-white/20 rounded w-3/4 mb-2" />
                <div className="h-4 bg-white/20 rounded w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }

  if (error || advisories.length === 0) {
    return null
  }

  return (
    <section className="py-16 md:py-20 bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Travel Advisories</h2>
            <p className="text-lg text-blue-200 max-w-2xl">
              Stay informed about travel conditions and safety information for countries in our region.
            </p>
          </div>
          <Link
            href="/travel-advisories"
            className="hidden md:flex items-center text-red-400 hover:text-red-300 font-medium"
          >
            All Advisories
            <ArrowRight className="w-4 h-4 ml-1" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {advisories.map((advisory) => {
            const levelName = advisory.advisoryLevel?.[0]?.name
            const badgeColor = getAdvisoryBadgeColor(levelName)

            return (
              <Link
                key={advisory.id}
                href={advisory.path || `/travel-advisories/${advisory.id}`}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300"
              >
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className={`${badgeColor} text-white rounded-lg p-3`}>
                      <AlertTriangle className="w-6 h-6" />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    {levelName && (
                      <span className="inline-block text-red-400 text-sm font-medium mb-1">
                        {levelName}
                      </span>
                    )}
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-red-400 transition-colors line-clamp-2">
                      {advisory.title}
                    </h3>
                    {advisory.country && (
                      <p className="text-blue-200 text-sm mb-2">{advisory.country}</p>
                    )}
                    {advisory.lastUpdated && (
                      <span className="flex items-center gap-1 text-sm text-blue-300">
                        <Calendar className="w-4 h-4" />
                        Updated {formatDate(advisory.lastUpdated.timestamp)}
                      </span>
                    )}
                  </div>
                </div>
              </Link>
            )
          })}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/travel-advisories"
            className="inline-flex items-center px-8 py-4 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-bold"
          >
            View All Advisories
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  )
}

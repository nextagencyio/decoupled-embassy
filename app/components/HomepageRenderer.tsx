'use client'

import Header from './Header'
import HeroSection from './HeroSection'
import StatsSection from './StatsSection'
import CTASection from './CTASection'
import ErrorBoundary from './ErrorBoundary'
import { DrupalHomepage } from '@/lib/types'
import { Globe, FileText, Users, Shield, Plane, Phone, ArrowRight, Mail, MapPin } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

interface HomepageRendererProps { homepageContent: DrupalHomepage | null | undefined }

const commitmentItems = [
  { icon: Globe, title: 'Diplomatic Relations', description: 'Fostering strong bilateral ties and promoting mutual interests between our nations.' },
  { icon: FileText, title: 'Visa & Documentation', description: 'Efficient processing of visas, passports, and official documentation for all applicants.' },
  { icon: Users, title: 'Citizen Services', description: 'Comprehensive support for Aldorian nationals residing or traveling abroad.' },
  { icon: Shield, title: 'Consular Protection', description: '24/7 assistance and protection for citizens in emergencies worldwide.' },
  { icon: Plane, title: 'Travel Guidance', description: 'Up-to-date travel advisories and safety information for all destinations.' },
  { icon: Phone, title: 'Direct Assistance', description: 'Accessible communication channels ensuring prompt responses to all inquiries.' },
]

const galleryImages = [
  { src: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=600&q=80&fit=crop', alt: 'Diplomatic building' },
  { src: 'https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=600&q=80&fit=crop', alt: 'International meeting' },
  { src: 'https://images.unsplash.com/photo-1577495508048-b635879837f1?w=600&q=80&fit=crop', alt: 'Cultural exchange' },
  { src: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&q=80&fit=crop', alt: 'Global connections' },
]

export default function HomepageRenderer({ homepageContent }: HomepageRendererProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <ErrorBoundary><HeroSection homepageContent={homepageContent} /></ErrorBoundary>
      <ErrorBoundary><StatsSection homepageContent={homepageContent} /></ErrorBoundary>

      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-primary-950 mb-4 font-display">Our Mission</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">The Embassy provides essential services and represents the interests of the Republic of Aldoria.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {commitmentItems.map((item) => (
              <div key={item.title} className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0"><item.icon className="w-6 h-6 text-primary-700" /></div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-primary-950 mb-4 font-display">Diplomacy in Action</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">See our commitment to fostering international cooperation and cultural exchange.</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {galleryImages.map((img) => (
              <div key={img.alt} className="relative aspect-[4/3] rounded-xl overflow-hidden group">
                <Image src={img.src} alt={img.alt} fill className="object-cover group-hover:scale-105 transition-transform duration-500" unoptimized />
                <div className="absolute inset-0 bg-primary-900/0 group-hover:bg-primary-900/20 transition-colors duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <ErrorBoundary><CTASection homepageContent={homepageContent} /></ErrorBoundary>

      <footer className="bg-primary-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-12">
            <div className="col-span-2 md:col-span-3 lg:col-span-1">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center border border-white/20"><Globe className="w-5 h-5 text-accent-400" /></div>
                <span className="text-lg font-bold text-white font-display">Embassy of Aldoria</span>
              </div>
              <p className="text-primary-300 text-sm mb-4 leading-relaxed">Representing the Republic of Aldoria and serving our citizens since 1962.</p>
              <div className="space-y-2 text-sm text-primary-300">
                <div className="flex items-center gap-2"><MapPin className="w-4 h-4 flex-shrink-0" /><span>2200 Embassy Row<br />Washington, DC 20008</span></div>
                <div className="flex items-center gap-2"><Phone className="w-4 h-4 flex-shrink-0" /><span>(555) 345-6789</span></div>
              </div>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">Services</h4>
              <ul className="space-y-2 text-sm text-primary-300">
                <li><Link href="/services" className="hover:text-white transition-colors">All Services</Link></li>
                <li><Link href="/services" className="hover:text-white transition-colors">Visa Applications</Link></li>
                <li><Link href="/services" className="hover:text-white transition-colors">Passport Services</Link></li>
                <li><Link href="/services" className="hover:text-white transition-colors">Notarization</Link></li>
                <li><Link href="/services" className="hover:text-white transition-colors">Trade Support</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">Information</h4>
              <ul className="space-y-2 text-sm text-primary-300">
                <li><Link href="/travel-advisories" className="hover:text-white transition-colors">Travel Advisories</Link></li>
                <li><Link href="/news" className="hover:text-white transition-colors">News & Updates</Link></li>
                <li><Link href="/officials" className="hover:text-white transition-colors">Officials</Link></li>
                <li><Link href="/about" className="hover:text-white transition-colors">About Aldoria</Link></li>
                <li><Link href="/about" className="hover:text-white transition-colors">Cultural Events</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">Citizens</h4>
              <ul className="space-y-2 text-sm text-primary-300">
                <li><Link href="/contact" className="hover:text-white transition-colors">Emergency Contacts</Link></li>
                <li><Link href="/contact" className="hover:text-white transition-colors">Registration</Link></li>
                <li><Link href="/contact" className="hover:text-white transition-colors">Legal Assistance</Link></li>
                <li><Link href="/about" className="hover:text-white transition-colors">Voting Abroad</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">Contact</h4>
              <ul className="space-y-2 text-sm text-primary-300">
                <li><Link href="/contact" className="hover:text-white transition-colors">Contact Embassy</Link></li>
                <li><Link href="/contact" className="hover:text-white transition-colors">Schedule Visit</Link></li>
                <li><Link href="/about" className="hover:text-white transition-colors">Consulate Locator</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 mb-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div><h4 className="text-white font-bold mb-1">Embassy Updates</h4><p className="text-primary-300 text-sm">Receive travel advisories, consular news, and event announcements from the Embassy.</p></div>
              <NewsletterForm />
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-primary-400">
            <p>&copy; {new Date().getFullYear()} Embassy of the Republic of Aldoria. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="/about" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="/about" className="hover:text-white transition-colors">Terms of Use</a>
              <a href="/about" className="hover:text-white transition-colors">Accessibility</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

function NewsletterForm() {
  const [email, setEmail] = useState('')
  return (
    <form onSubmit={(e) => e.preventDefault()} className="flex w-full md:w-auto">
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" className="px-4 py-2.5 rounded-l-lg bg-white/10 border border-white/20 text-white placeholder-primary-400 text-sm focus:outline-none focus:ring-2 focus:ring-primary-400 w-full md:w-64" />
      <button type="submit" className="px-6 py-2.5 bg-primary-600 text-white rounded-r-lg hover:bg-primary-500 transition-colors font-bold text-sm whitespace-nowrap">Subscribe</button>
    </form>
  )
}

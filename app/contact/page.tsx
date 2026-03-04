import Header from '../components/Header'
import { Mail, Phone, MapPin, Clock } from 'lucide-react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us | U.S. Embassy Berlin',
  description: 'Contact the U.S. Embassy in Berlin for consular services, appointments, and general inquiries.',
  keywords: ['U.S. Embassy Berlin', 'Contact', 'Consular Services', 'Appointments'],
}

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Contact the Embassy</h1>
            <p className="text-base md:text-lg text-gray-600">
              Reach out to the U.S. Embassy in Berlin for consular services, appointments, and general inquiries.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            {/* Contact Information */}
            <div className="bg-white rounded-lg shadow-sm p-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Embassy Information</h2>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <Mail className="w-6 h-6 text-blue-800" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">Email</h3>
                    <p className="text-gray-600">BerlinACS@state.gov</p>
                    <p className="text-gray-600">BerlinPressOffice@state.gov</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <Phone className="w-6 h-6 text-blue-800" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">Phone</h3>
                    <p className="text-gray-600">+49 (30) 8305-0</p>
                    <p className="text-sm text-gray-500">24/7 for emergencies</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <MapPin className="w-6 h-6 text-blue-800" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">Address</h3>
                    <p className="text-gray-600">
                      Pariser Platz 2<br />
                      10117 Berlin<br />
                      Germany
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <Clock className="w-6 h-6 text-blue-800" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">Office Hours</h3>
                    <p className="text-gray-600">
                      Monday - Friday: 8:00 AM - 5:00 PM CET<br />
                      Saturday - Sunday: Closed<br />
                      Consular Section: By appointment only
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-lg shadow-sm p-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Send a Message</h2>

              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="How can we help you?"
                    required
                  />
                </div>

                <div>
                  <button
                    type="submit"
                    className="w-full bg-blue-900 text-white py-3 px-4 rounded-md hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200 font-medium"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Emergency Banner */}
          <div className="mt-8 md:mt-12 bg-red-50 border border-red-200 rounded-lg p-6 md:p-8">
            <div className="text-center">
              <h2 className="text-xl md:text-2xl font-semibold text-red-900 mb-4">Emergency Assistance</h2>
              <p className="text-sm md:text-base text-red-700 mb-6">
                If you are a U.S. citizen experiencing an emergency, call the embassy immediately at +49 (30) 8305-0. Emergency services are available 24/7.
              </p>
              <a
                href="/emergency"
                className="inline-flex items-center justify-center px-6 py-3 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors duration-200 font-medium"
              >
                Emergency Information
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

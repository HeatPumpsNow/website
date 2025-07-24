import type { Metadata } from 'next'
import Link from 'next/link'
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/outline'
import { Button } from '@/components/ui/Button'
import HeroSection from '@/components/ui/HeroSection'
import { COMPANY_INFO } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with Heat Pumps Now for expert HVAC consultation, free quotes, and transparent service. Call (626) 622-2009 or schedule online.',
}

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <HeroSection
        title="Ready to Partner With Us?"
        subtitle="Whether you're ready for a complete system upgrade or just want to learn more about optimizing your home's performance, we're here to share our expertise."
        primaryCta={{ text: 'Schedule Consultation', href: '#contact-form' }}
        secondaryCta={{ text: `Call ${COMPANY_INFO.phone}`, href: `tel:${COMPANY_INFO.phone}` }}
      />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold text-secondary-900 mb-6">Get Started</h2>
              
              <div className="space-y-6 mb-8">
                <div className="bg-secondary-50 rounded-lg p-4">
                  <h3 className="font-semibold text-secondary-900 mb-2">Quick Questions?</h3>
                  <p className="text-secondary-600 text-sm">
                    Browse our <Link href="/knowledge" className="text-primary-600 hover:text-primary-700">Knowledge Base</Link> or <Link href="/faq" className="text-primary-600 hover:text-primary-700">FAQ</Link> for immediate answers
                  </p>
                </div>

                <div className="bg-secondary-50 rounded-lg p-4">
                  <h3 className="font-semibold text-secondary-900 mb-2">Ready for a Quote?</h3>
                  <p className="text-secondary-600 text-sm">
                    See our <Link href="/transparency/pricing" className="text-primary-600 hover:text-primary-700">transparent pricing</Link> first, then reach out
                  </p>
                </div>

                <div className="bg-secondary-50 rounded-lg p-4">
                  <h3 className="font-semibold text-secondary-900 mb-2">Want to Learn More?</h3>
                  <p className="text-secondary-600 text-sm">
                    Start with our <Link href="/knowledge/why-heat-pumps" className="text-primary-600 hover:text-primary-700">heat pump guide</Link> or explore our <Link href="/transparency/portfolio" className="text-primary-600 hover:text-primary-700">project portfolio</Link>
                  </p>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                <h3 className="text-xl font-semibold text-secondary-900">Direct Contact</h3>
                
                <div className="flex items-center space-x-3">
                  <PhoneIcon className="w-6 h-6 text-primary-600" />
                  <div>
                    <div className="font-medium text-secondary-900">Phone</div>
                    <a href={`tel:${COMPANY_INFO.phone}`} className="text-primary-600 hover:text-primary-700">
                      {COMPANY_INFO.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <EnvelopeIcon className="w-6 h-6 text-primary-600" />
                  <div>
                    <div className="font-medium text-secondary-900">Email</div>
                    <a href={`mailto:${COMPANY_INFO.email}`} className="text-primary-600 hover:text-primary-700">
                      {COMPANY_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <MapPinIcon className="w-6 h-6 text-primary-600 mt-1" />
                  <div>
                    <div className="font-medium text-secondary-900">Address</div>
                    <div className="text-secondary-600">
                      {COMPANY_INFO.address.full}
                    </div>
                  </div>
                </div>

                <div className="bg-primary-50 rounded-lg p-4">
                  <div className="font-medium text-secondary-900 mb-1">Service Areas</div>
                  <div className="text-secondary-600 text-sm">
                    {COMPANY_INFO.serviceAreas.join(', ')} and surrounding areas
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div id="contact-form">
              <div className="bg-secondary-50 rounded-xl p-6 lg:p-8">
                <h2 className="text-2xl font-bold text-secondary-900 mb-6">Send Us a Message</h2>
                
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-secondary-700 mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-secondary-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                      placeholder="Enter your email address"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-secondary-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                      placeholder="Enter your phone number"
                    />
                  </div>

                  <div>
                    <label htmlFor="interest" className="block text-sm font-medium text-secondary-700 mb-2">
                      Your Interest *
                    </label>
                    <select
                      id="interest"
                      name="interest"
                      required
                      className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                    >
                      <option value="">Select Your Interest</option>
                      <option value="new-installation">New Heat Pump Installation</option>
                      <option value="replacement">System Replacement</option>
                      <option value="maintenance">Maintenance Service</option>
                      <option value="repair">Repair Service</option>
                      <option value="consultation">Educational Consultation</option>
                      <option value="system-analysis">Home Performance Analysis</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-secondary-700 mb-2">
                      Tell us about your project (optional)
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                      placeholder="Share any details about your project, home, or specific questions..."
                    />
                  </div>

                  <Button type="submit" className="w-full" size="lg">
                    Send Message
                  </Button>
                </form>

                <div className="mt-6 pt-6 border-t border-secondary-200">
                  <p className="text-sm text-secondary-600 text-center">
                    We typically respond within 2-4 hours during business hours
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Image Placeholder */}
      <section className="py-8 bg-secondary-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-primary-500 to-primary-600 rounded-xl h-64 flex items-center justify-center text-white font-semibold text-lg">
            Contact Image Placeholder
          </div>
        </div>
      </section>
    </div>
  )
}
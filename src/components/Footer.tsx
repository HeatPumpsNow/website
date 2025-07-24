import Link from 'next/link'
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/outline'
import { COMPANY_INFO, NAVIGATION_ITEMS } from '@/lib/constants'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const servicesLinks = NAVIGATION_ITEMS.find(item => item.name === 'Services')?.children || []
  const transparencyLinks = NAVIGATION_ITEMS.find(item => item.name === 'Transparency')?.children || []

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="text-2xl">🌡️</div>
              <div className="font-bold text-xl">Heat Pumps Now</div>
            </div>
            <p className="text-secondary-300 mb-6 text-sm leading-relaxed">
              California&apos;s most transparent HVAC company. We empower homeowners through radical transparency, technical expertise, and superior comfort solutions.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <a
                href={`tel:${COMPANY_INFO.phone}`}
                className="flex items-center space-x-3 text-secondary-300 hover:text-white transition-colors group"
              >
                <PhoneIcon className="w-5 h-5 text-primary-400 group-hover:text-primary-300" />
                <span className="text-sm">{COMPANY_INFO.phone}</span>
              </a>
              <a
                href={`mailto:${COMPANY_INFO.email}`}
                className="flex items-center space-x-3 text-secondary-300 hover:text-white transition-colors group"
              >
                <EnvelopeIcon className="w-5 h-5 text-primary-400 group-hover:text-primary-300" />
                <span className="text-sm">{COMPANY_INFO.email}</span>
              </a>
              <div className="flex items-start space-x-3 text-secondary-300">
                <MapPinIcon className="w-5 h-5 text-primary-400 mt-0.5 flex-shrink-0" />
                <span className="text-sm">{COMPANY_INFO.address.full}</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-white mb-4">Services</h3>
            <ul className="space-y-2">
              {servicesLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-secondary-300 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Transparency */}
          <div>
            <h3 className="font-semibold text-white mb-4">Transparency</h3>
            <ul className="space-y-2">
              {transparencyLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-secondary-300 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/knowledge"
                  className="text-secondary-300 hover:text-white transition-colors text-sm"
                >
                  Knowledge Base
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-secondary-300 hover:text-white transition-colors text-sm"
                >
                  Our Mission
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-secondary-300 hover:text-white transition-colors text-sm"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="text-secondary-300 hover:text-white transition-colors text-sm"
                >
                  Careers
                </Link>
              </li>
            </ul>

            {/* Service Areas */}
            <div className="mt-6">
              <h4 className="font-medium text-white mb-2 text-sm">Service Areas</h4>
              <p className="text-secondary-300 text-sm">
                {COMPANY_INFO.serviceAreas.join(' • ')}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-secondary-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-secondary-400 text-sm">
              © {currentYear} Heat Pumps Now. All rights reserved.
            </div>
            <div className="flex items-center space-x-6">
              <Link
                href="/privacy"
                className="text-secondary-400 hover:text-secondary-300 transition-colors text-sm"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-secondary-400 hover:text-secondary-300 transition-colors text-sm"
              >
                Terms of Service
              </Link>
              <div className="text-secondary-500 text-sm">
                CA License #123456
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
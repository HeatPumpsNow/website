import Link from 'next/link'
import { PhoneIcon, StarIcon } from '@heroicons/react/24/outline'
import { Button } from '@/components/ui/Button'
import ServiceCard from '@/components/ServiceCard'
import TestimonialCard from '@/components/ui/TestimonialCard'
import { COMPANY_INFO, CORE_SERVICES } from '@/lib/constants'

export default function Home() {
  const additionalServices = [
    {
      id: 'air-sealing',
      name: 'Air Sealing & Optimization',
      icon: '💨',
      description: 'The foundation of efficiency - properly sealed and balanced airflow that most contractors ignore.',
    },
    {
      id: 'whole-home-water-filtration',
      name: 'Whole Home Water Filtration',
      icon: '💧',
      description: 'Pure water throughout your home - because healthy homes need clean water as much as clean air.',
    },
    {
      id: 'healthy-home-solutions',
      name: 'Healthy Home Solutions',
      icon: '🏠',
      description: 'Comprehensive IAQ solutions including ventilation, humidity control, and air purification.',
    }
  ]

  const testimonials = [
    {
      quote: "They didn't just install a heat pump - they taught me how my entire home system works. Now I understand my energy usage and can optimize it myself. This is what every contractor should be like.",
      author: "Sarah M.",
      location: "La Verne, CA",
      service: "Inverter Heat Pump + Air Sealing"
    },
    {
      quote: "Finally, an HVAC company that shows their work! The detailed load calculations, the transparent pricing, the educational approach - it's refreshing to work with people who treat you as an intelligent partner.",
      author: "Mike D.",
      location: "Pomona, CA", 
      service: "Complete System Upgrade"
    },
    {
      quote: "The knowledge base on their website taught me more about HVAC in a week than I learned in 20 years of homeownership. When they installed our system, I could actually follow along and understand the decisions being made.",
      author: "Jennifer L.",
      location: "Claremont, CA",
      service: "Heat Pump + Water Heater"
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 via-white to-secondary-50 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-secondary-900 mb-6 leading-tight">
              California&apos;s Most{' '}
              <span className="text-primary-600">Transparent</span>{' '}
              HVAC Company
            </h1>
            <p className="text-lg md:text-xl text-secondary-700 mb-8 leading-relaxed">
              We share our technical expertise openly, empower homeowners with knowledge, 
              and deliver unparalleled inverter heat pump installations. No markup mysteries. 
              No sales pressure. Just radical transparency and superior comfort.
            </p>
            
            {/* Hero Image Placeholder */}
            <div className="my-8 bg-gray-200 rounded-lg flex items-center justify-center h-64 md:h-96 text-gray-600">
              <span className="text-xl">Hero Image</span>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Button size="lg" className="w-full sm:w-auto">
                Get Your Free Quote
              </Button>
              <a
                href={`tel:${COMPANY_INFO.phone}`}
                className="flex items-center space-x-2 text-secondary-700 hover:text-primary-600 transition-colors"
              >
                <PhoneIcon className="w-5 h-5" />
                <span className="font-medium">{COMPANY_INFO.phone}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Revolutionary Approach */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
              A Revolutionary Approach to HVAC
            </h2>
            <p className="text-lg text-secondary-700 max-w-3xl mx-auto">
              We&apos;re not just another HVAC company. We&apos;re a living laboratory for the future 
              of home comfort, built on three pillars that set us apart.
            </p>
          </div>
          
          {/* Revolutionary Approach Image Placeholder */}
          <div className="mb-12 bg-gray-200 rounded-lg flex items-center justify-center h-48 md:h-64 text-gray-600 max-w-4xl mx-auto">
            <span className="text-lg">Technical Innovation Showcase</span>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-16 h-16 mx-auto mb-4 bg-primary-100 rounded-full flex items-center justify-center group-hover:bg-primary-200 transition-colors">
                <div className="text-2xl">🔬</div>
              </div>
              <h3 className="text-xl font-semibold text-secondary-900 mb-3">
                Technical Mastery
              </h3>
              <p className="text-secondary-700">
                We don&apos;t just install equipment—we optimize entire building systems. 
                Our engineers share real performance data from every installation.
              </p>
            </div>
            
            <div className="text-center group">
              <div className="w-16 h-16 mx-auto mb-4 bg-primary-100 rounded-full flex items-center justify-center group-hover:bg-primary-200 transition-colors">
                <div className="text-2xl">💡</div>
              </div>
              <h3 className="text-xl font-semibold text-secondary-900 mb-3">
                Customer Empowerment
              </h3>
              <p className="text-secondary-700">
                We educate homeowners about building science, share our knowledge openly, 
                and never use technical jargon to create artificial scarcity.
              </p>
            </div>
            
            <div className="text-center group">
              <div className="w-16 h-16 mx-auto mb-4 bg-primary-100 rounded-full flex items-center justify-center group-hover:bg-primary-200 transition-colors">
                <div className="text-2xl">🌱</div>
              </div>
              <h3 className="text-xl font-semibold text-secondary-900 mb-3">
                Radical Transparency
              </h3>
              <p className="text-secondary-700">
                Open pricing, direct importing, performance guarantees. 
                We publish everything—even our mistakes and how we fix them.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Service */}
      <section className="py-16 lg:py-20 bg-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
              Our Flagship Service
            </h2>
            <p className="text-lg text-secondary-700">
              The future of home comfort is here, and it&apos;s more efficient than you imagined.
            </p>
          </div>
          
          {/* Featured Service Image Placeholder */}
          <div className="mb-8 bg-gray-200 rounded-lg flex items-center justify-center h-40 md:h-56 text-gray-600 max-w-3xl mx-auto">
            <span className="text-lg">Heat Pump Installation Image</span>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <ServiceCard 
              service={CORE_SERVICES[0]} 
              variant="featured" 
            />
          </div>
        </div>
      </section>

      {/* All Services */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
              Building Science Applied
            </h2>
            <p className="text-lg text-secondary-700">
              Each service works together as part of an integrated ecosystem for maximum 
              efficiency and comfort.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {CORE_SERVICES.slice(1).map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
          
          <div className="text-center">
            <Link href="/services">
              <Button variant="outline" size="lg">
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="py-16 lg:py-20 bg-secondary-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Homeowners Choose Us
            </h2>
            <p className="text-lg text-secondary-300">
              Real results from real customers across Southern California.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-accent-400 mb-2">25+ SEER</div>
              <div className="text-secondary-300">Peak Efficiency Achieved</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent-400 mb-2">90%+</div>
              <div className="text-secondary-300">Customer Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent-400 mb-2">$2,000+</div>
              <div className="text-secondary-300">Average Annual Savings</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent-400 mb-2">100%</div>
              <div className="text-secondary-300">Transparency Promise</div>
            </div>
          </div>
          
          <div className="bg-secondary-800 rounded-xl p-6 lg:p-8">
            <div className="flex items-center mb-4">
              <div className="flex space-x-1 mr-4">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} className="w-5 h-5 text-accent-400 fill-current" />
                ))}
              </div>
              <div className="text-secondary-300 text-sm">Real customer review</div>
            </div>
            <blockquote className="text-lg italic mb-4">
              &quot;Finally, an HVAC company that explains everything clearly and delivers 
              exactly what they promise. Our new heat pump is incredibly quiet and our 
              energy bills dropped by 60%. The transparency was refreshing.&quot;
            </blockquote>
            <div className="text-secondary-300">
              — Sarah M., La Verne homeowner
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-20 bg-primary-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Experience the Future of Home Comfort?
          </h2>
          <p className="text-lg text-primary-100 mb-8">
            Join hundreds of Southern California homeowners who&apos;ve discovered 
            what transparent, expert HVAC service really means.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button 
              size="lg" 
              variant="secondary"
              className="w-full sm:w-auto bg-white text-primary-600 hover:bg-primary-50"
            >
              Schedule Free Consultation
            </Button>
            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className="flex items-center space-x-2 text-primary-100 hover:text-white transition-colors"
            >
              <PhoneIcon className="w-5 h-5" />
              <span className="font-medium">{COMPANY_INFO.phone}</span>
            </a>
          </div>
          
          <div className="mt-6 text-primary-200 text-sm">
            Serving {COMPANY_INFO.serviceAreas.join(', ')} and surrounding areas
          </div>
        </div>
      </section>

      {/* Knowledge Revolution Section */}
      <section className="py-16 lg:py-20 bg-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
              We Share What Others Keep Secret
            </h2>
            <p className="text-lg text-secondary-700 max-w-3xl mx-auto">
              Most HVAC companies hoard technical knowledge to maintain control. We believe empowered homeowners make better decisions and get better results.
            </p>
          </div>
          
          {/* Knowledge Sharing Image Placeholder */}
          <div className="mb-12 bg-gray-200 rounded-lg flex items-center justify-center h-48 md:h-64 text-gray-600 max-w-4xl mx-auto">
            <span className="text-lg">Knowledge Sharing & Education</span>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">📚</div>
              <h3 className="text-xl font-semibold text-secondary-900 mb-3">Technical Deep Dives</h3>
              <p className="text-secondary-600 mb-6">From heat load calculations to airflow principles - we teach the engineering behind comfort.</p>
              <Link href="/knowledge">
                <Button variant="secondary" size="sm">Explore Knowledge Base</Button>
              </Link>
            </div>

            <div className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-xl font-semibold text-secondary-900 mb-3">Transparent Pricing</h3>
              <p className="text-secondary-600 mb-6">No hidden fees, no markup mysteries. See exactly how we price every component and hour of labor.</p>
              <Link href="/transparency/pricing">
                <Button variant="secondary" size="sm">See Our Pricing Model</Button>
              </Link>
            </div>

            <div className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold text-secondary-900 mb-3">Process Documentation</h3>
              <p className="text-secondary-600 mb-6">Watch how we work. Our installation templates and project processes are completely open.</p>
              <Link href="/transparency/project-template">
                <Button variant="secondary" size="sm">See Our Process</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
              Complete Home Optimization
            </h2>
            <p className="text-lg text-secondary-700">
              Supporting services that work together for maximum efficiency and comfort.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {additionalServices.map((service) => (
              <div key={service.id} className="bg-white border border-secondary-200 rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
                <div className="text-3xl mb-3">{service.icon}</div>
                <h3 className="font-semibold text-secondary-900 mb-2">{service.name}</h3>
                <p className="text-sm text-secondary-600 mb-4">{service.description}</p>
                <Link href={`/services/${service.id}`} className="text-primary-600 hover:text-primary-700 text-sm font-medium">
                  Learn More →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Testimonials Section */}
      <section className="py-16 lg:py-20 bg-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
              Partners in Home Optimization
            </h2>
            <p className="text-lg text-secondary-700 max-w-3xl mx-auto">
              Our customers become partners in the journey toward better home performance. Here&apos;s what they say about working with us:
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                quote={testimonial.quote}
                author={testimonial.author}
                location={testimonial.location}
                service={testimonial.service}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary-900 text-white py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center mb-4">
                <div className="text-2xl font-bold text-primary-400">
                  Heat Pumps Now
                </div>
              </div>
              <p className="text-secondary-300 mb-6 max-w-md">
                California's trusted heat pump installation experts. Licensed, insured, and committed to your comfort.
              </p>
              <div className="flex flex-col space-y-2">
                <a
                  href={`tel:${COMPANY_INFO.phone}`}
                  className="flex items-center space-x-2 text-secondary-300 hover:text-white transition-colors"
                >
                  <PhoneIcon className="w-5 h-5" />
                  <span>{COMPANY_INFO.phone}</span>
                </a>
                <div className="text-secondary-300">
                  Serving {COMPANY_INFO.serviceAreas.join(', ')} and surrounding areas
                </div>
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="font-semibold text-white mb-4">Services</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/services/inverter-heat-pumps" className="text-secondary-300 hover:text-white transition-colors">
                    Inverter Heat Pumps
                  </Link>
                </li>
                <li>
                  <Link href="/services/water-heaters" className="text-secondary-300 hover:text-white transition-colors">
                    Heat Pump Water Heaters
                  </Link>
                </li>
                <li>
                  <Link href="/services/air-sealing" className="text-secondary-300 hover:text-white transition-colors">
                    Air Sealing & Optimization
                  </Link>
                </li>
                <li>
                  <Link href="/services/whole-home-water-filtration" className="text-secondary-300 hover:text-white transition-colors">
                    Water Filtration
                  </Link>
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="font-semibold text-white mb-4">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/knowledge" className="text-secondary-300 hover:text-white transition-colors">
                    Knowledge Base
                  </Link>
                </li>
                <li>
                  <Link href="/transparency/pricing" className="text-secondary-300 hover:text-white transition-colors">
                    Transparent Pricing
                  </Link>
                </li>
                <li>
                  <Link href="/transparency/project-template" className="text-secondary-300 hover:text-white transition-colors">
                    Project Process
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-secondary-300 hover:text-white transition-colors">
                    About Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-secondary-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="text-secondary-300 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} Heat Pumps Now. All rights reserved.
            </div>
            <div className="flex space-x-6">
              <Link href="/privacy" className="text-secondary-300 hover:text-white text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-secondary-300 hover:text-white text-sm transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

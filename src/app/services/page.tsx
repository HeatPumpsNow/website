import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRightIcon, BeakerIcon, HomeModernIcon, ShieldCheckIcon } from '@heroicons/react/24/outline'
import { Button } from '@/components/ui/Button'
import ServiceCard from '@/components/ServiceCard'
import { CORE_SERVICES } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Building Science Applied - Complete Home Performance Services',
  description: 'We\'re not just HVAC contractors - we\'re home performance experts who understand the interconnected systems that create healthy, efficient, comfortable homes.',
}

export default function ServicesPage() {
  const buildingPerformanceServices = [
    {
      id: 'heat-load-calculation',
      name: 'Professional Heat Load Calculations',
      icon: '📐',
      description: 'Right-sizing systems for optimal efficiency and comfort. Room-by-room analysis prevents costly oversizing that plagues the industry.',
      technicalHighlight: 'Industry-Leading Software: Manual J calculations with real building science',
      link: '/services/heat-load-calculations'
    },
    {
      id: 'air-sealing',
      name: 'Air Sealing & Building Envelope',
      icon: '🌬️',
      description: 'Critical for system performance but often ignored. Blower door testing identifies leaks for targeted, high-impact sealing.',
      technicalHighlight: 'Integrated Design: Works with HVAC for whole-home efficiency',
      link: '/services/air-sealing'
    },
    {
      id: 'duct-design',
      name: 'Custom Duct Design & Installation',
      icon: '🔀',
      description: 'Proper sizing using ACCA Manual D standards. Sealed and insulated to prevent energy loss, with retrofit solutions for existing homes.',
      technicalHighlight: 'Optimal Airflow: Custom-designed for maximum efficiency',
      link: '/services/duct-design'
    }
  ]

  const healthyHomeServices = [
    {
      id: 'healthy-home-solutions',
      name: 'Comprehensive Healthy Home Assessments',
      icon: '🏡',
      description: 'Holistic evaluation of all factors affecting home health. Testing, monitoring, and custom solutions that integrate HVAC, filtration, and building envelope.',
      features: [
        'Complete Testing: Air leakage, humidity, ventilation, air quality',
        'Custom Solutions: Every home is unique - no one-size-fits-all',
        'Ongoing Support: Follow-up monitoring for sustained benefits'
      ],
      link: '/services/healthy-home-solutions'
    },
    {
      id: 'indoor-air-quality',
      name: 'Indoor Air Quality Solutions',
      icon: '💨',
      description: 'Advanced HEPA filtration, humidity control, fresh air ventilation, and UV purification with ongoing monitoring.',
      link: '/services/indoor-air-quality'
    },
    {
      id: 'whole-home-water-filtration',
      name: 'Whole Home Water Filtration',
      icon: '💧',
      description: 'Complements your whole-home health approach. Integrates with heat pump water heaters for system efficiency and longevity.',
      link: '/services/whole-home-water-filtration'
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-700 text-white py-24 lg:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-6">
              <nav className="text-primary-200 text-sm">
                <Link href="/" className="hover:text-white">Home</Link>
                <span className="mx-2">/</span>
                <span className="text-white font-medium">Services</span>
              </nav>
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Building Science Applied
            </h1>
            
            <p className="text-xl text-primary-100 leading-relaxed mb-8">
              We're not just HVAC contractors - we're home performance experts who understand the interconnected systems that create truly healthy, efficient, comfortable homes.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-primary-700/50 rounded-lg p-4">
                <div className="font-semibold text-primary-100 mb-2">🏠 Systems Integration:</div>
                <div className="text-primary-200 text-sm">Every component works together for optimal performance</div>
              </div>
              <div className="bg-primary-700/50 rounded-lg p-4">
                <div className="font-semibold text-primary-100 mb-2">📊 Measurable Results:</div>
                <div className="text-primary-200 text-sm">Air quality metrics, energy savings, comfort improvements</div>
              </div>
              <div className="bg-primary-700/50 rounded-lg p-4">
                <div className="font-semibold text-primary-100 mb-2">🔮 Future-Forward:</div>
                <div className="text-primary-200 text-sm">Building the homes of tomorrow, today</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-secondary-900 mb-4">
              Core Services: Your Foundation for Excellence
            </h2>
            <p className="text-lg text-secondary-700 max-w-3xl mx-auto">
              These are our primary offerings - the advanced technologies that form the backbone of every high-performance home.
            </p>
          </div>
          
          {/* Flagship Service */}
          <div className="mb-16">
            <div className="bg-primary-50 rounded-xl p-8 lg:p-12 border border-primary-200 relative">
              <div className="absolute top-4 right-4 bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                Flagship Service
              </div>
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="text-4xl mb-4">🌡️</div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-secondary-900 mb-4">
                    Inverter Heat Pump HVAC Installation
                  </h3>
                  <p className="text-lg text-secondary-700 mb-6 leading-relaxed">
                    The future of home comfort. Variable-speed technology delivers 30-40% better efficiency than traditional systems with consistent, whisper-quiet operation.
                  </p>
                  <div className="space-y-3 mb-8">
                    <div className="flex items-start space-x-3">
                      <div className="font-semibold text-secondary-900">Superior Efficiency:</div>
                      <div className="text-secondary-700">25+ SEER ratings with real-world performance data</div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="font-semibold text-secondary-900">Transparent Pricing:</div>
                      <div className="text-secondary-700">Direct importing eliminates markup mysteries</div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="font-semibold text-secondary-900">Technical Excellence:</div>
                      <div className="text-secondary-700">Proper load calculations and system optimization</div>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link href="/services/inverter-heat-pumps">
                      <Button size="lg">Learn More</Button>
                    </Link>
                    <Link href="/knowledge/why-heat-pumps" className="text-primary-600 hover:text-primary-700 font-medium flex items-center">
                      Why This Technology Matters →
                    </Link>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-center bg-white rounded-lg p-4 shadow-sm">
                      <div className="text-2xl font-bold text-primary-600">25+ SEER</div>
                      <div className="text-sm text-secondary-600">Peak Efficiency</div>
                    </div>
                    <div className="text-center bg-white rounded-lg p-4 shadow-sm">
                      <div className="text-2xl font-bold text-primary-600">90%</div>
                      <div className="text-sm text-secondary-600">Modulation Range</div>
                    </div>
                    <div className="text-center bg-white rounded-lg p-4 shadow-sm">
                      <div className="text-2xl font-bold text-primary-600">±1°F</div>
                      <div className="text-sm text-secondary-600">Temperature Control</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Supporting Core Services */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-secondary-50 rounded-xl p-6 lg:p-8">
              <div className="text-3xl mb-4">💧</div>
              <h3 className="text-xl lg:text-2xl font-bold text-secondary-900 mb-4">
                Heat Pump Water Heater Installation
              </h3>
              <p className="text-secondary-700 mb-6 leading-relaxed">
                Complete whole-home electrification. 3-4x more efficient than traditional water heaters, perfectly integrated with your HVAC system.
              </p>
              <div className="space-y-2 mb-6">
                <div className="flex items-center space-x-2 text-sm">
                  <span className="bg-primary-100 text-primary-600 px-2 py-1 rounded">🔗 Integrates with HVAC for maximum efficiency</span>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <span className="bg-primary-100 text-primary-600 px-2 py-1 rounded">💰 Rebate optimization expertise included</span>
                </div>
              </div>
              <Link href="/services/heat-pump-water-heaters">
                <Button variant="outline">Explore Details</Button>
              </Link>
            </div>
            
            <div className="bg-secondary-50 rounded-xl p-6 lg:p-8">
              <div className="text-3xl mb-4">🔧</div>
              <h3 className="text-xl lg:text-2xl font-bold text-secondary-900 mb-4">
                Comprehensive HVAC Servicing & Repair
              </h3>
              <p className="text-secondary-700 mb-6 leading-relaxed">
                Specialized expertise in inverter and variable-speed systems. Performance optimization, not just fixing breakdowns.
              </p>
              <div className="space-y-2 mb-6">
                <div className="flex items-center space-x-2 text-sm">
                  <span className="bg-primary-100 text-primary-600 px-2 py-1 rounded">🎓 Transparent diagnostic process with education</span>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <span className="bg-primary-100 text-primary-600 px-2 py-1 rounded">⚡ Preventive maintenance for sustained efficiency</span>
                </div>
              </div>
              <Link href="/services/hvac-repair-service">
                <Button variant="outline">Service Details</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Building Performance Services */}
      <section className="py-20 bg-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-secondary-900 mb-4">
              Building Performance Services: Our Differentiators
            </h2>
            <p className="text-lg text-secondary-700 max-w-3xl mx-auto">
              These technical services showcase our building science expertise - the foundation that ensures your systems perform at their peak.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {buildingPerformanceServices.map((service, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow">
                <div className="text-3xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-secondary-900 mb-4">
                  {service.name}
                </h3>
                <p className="text-secondary-700 mb-4 leading-relaxed">
                  {service.description}
                </p>
                <div className="bg-primary-50 p-3 rounded-lg mb-4">
                  <div className="text-sm font-medium text-primary-900">
                    {service.technicalHighlight}
                  </div>
                </div>
                <Link href={service.link} className="text-primary-600 hover:text-primary-700 font-medium text-sm">
                  See Our Process →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Healthy Home Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-secondary-900 mb-4">
              Healthy Home Services: Integrated Wellness
            </h2>
            <p className="text-lg text-secondary-700 max-w-3xl mx-auto">
              Your home's health affects your family's health. These services create environments that support both comfort and wellbeing.
            </p>
          </div>
          
          {/* Comprehensive Assessment */}
          <div className="mb-12">
            <div className="bg-primary-50 rounded-xl p-8 lg:p-12 border border-primary-100">
              <div className="grid lg:grid-cols-2 gap-8">
                <div>
                  <div className="text-4xl mb-4">🏡</div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-secondary-900 mb-4">
                    Comprehensive Healthy Home Assessments
                  </h3>
                  <p className="text-lg text-secondary-700 mb-6 leading-relaxed">
                    Holistic evaluation of all factors affecting home health. Testing, monitoring, and custom solutions that integrate HVAC, filtration, and building envelope.
                  </p>
                  <Link href="/services/healthy-home-solutions">
                    <Button size="lg">Schedule Assessment</Button>
                  </Link>
                </div>
                <div className="space-y-4">
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="font-semibold text-secondary-900 mb-2">Complete Testing:</div>
                    <div className="text-secondary-700 text-sm">Air leakage, humidity, ventilation, air quality</div>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="font-semibold text-secondary-900 mb-2">Custom Solutions:</div>
                    <div className="text-secondary-700 text-sm">Every home is unique - no one-size-fits-all</div>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="font-semibold text-secondary-900 mb-2">Ongoing Support:</div>
                    <div className="text-secondary-700 text-sm">Follow-up monitoring for sustained benefits</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Supporting Wellness Services */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-secondary-50 rounded-xl p-6">
              <div className="text-3xl mb-4">💨</div>
              <h3 className="text-xl font-bold text-secondary-900 mb-4">
                Indoor Air Quality Solutions
              </h3>
              <p className="text-secondary-700 mb-4 leading-relaxed">
                Advanced HEPA filtration, humidity control, fresh air ventilation, and UV purification with ongoing monitoring.
              </p>
              <Link href="/services/healthy-home-solutions" className="text-primary-600 hover:text-primary-700 font-medium text-sm">
                Air Quality Details →
              </Link>
            </div>
            
            <div className="bg-secondary-50 rounded-xl p-6">
              <div className="text-3xl mb-4">💧</div>
              <h3 className="text-xl font-bold text-secondary-900 mb-4">
                Whole Home Water Filtration
              </h3>
              <p className="text-secondary-700 mb-4 leading-relaxed">
                Complements your whole-home health approach. Integrates with heat pump water heaters for system efficiency and longevity.
              </p>
              <Link href="/services/whole-home-water-filtration" className="text-primary-600 hover:text-primary-700 font-medium text-sm">
                Water Solutions →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20 bg-secondary-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-secondary-900 mb-8">
              Our Unique Approach: Systems Thinking
            </h2>
            
            <div className="text-lg text-secondary-700 leading-relaxed space-y-4">
              <p>
                We don't just install equipment - we optimize entire home ecosystems. Every service we offer connects to create comprehensive solutions that exceed the sum of their parts.
              </p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-6">
              <h4 className="font-bold text-lg text-secondary-900 mb-3 flex items-center">
                🔬 Building Science Applied
              </h4>
              <p className="text-secondary-700 text-sm leading-relaxed">
                We understand the physics of how homes actually work, not just how equipment operates.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6">
              <h4 className="font-bold text-lg text-secondary-900 mb-3 flex items-center">
                📈 Measurable Improvements
              </h4>
              <p className="text-secondary-700 text-sm leading-relaxed">
                Every project includes before/after testing and ongoing performance monitoring.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6">
              <h4 className="font-bold text-lg text-secondary-900 mb-3 flex items-center">
                🎓 Education First
              </h4>
              <p className="text-secondary-700 text-sm leading-relaxed">
                We empower you to understand your home's systems so you can make informed decisions.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6">
              <h4 className="font-bold text-lg text-secondary-900 mb-3 flex items-center">
                🚀 Future-Ready Design
              </h4>
              <p className="text-secondary-700 text-sm leading-relaxed">
                Our solutions anticipate tomorrow's technology while optimizing today's performance.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Integration Examples */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-secondary-900 mb-4">
              See How Our Services Work Together
            </h2>
          </div>
          
          <div className="space-y-8">
            <div className="bg-secondary-50 rounded-xl p-8">
              <h3 className="text-xl font-bold text-secondary-900 mb-6 flex items-center">
                🏠 Complete Home Optimization
              </h3>
              <div className="flex flex-wrap items-center justify-center gap-4 mb-6">
                <div className="flex items-center space-x-2 bg-white rounded-lg px-4 py-2">
                  <span className="bg-primary-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">1</span>
                  <span className="text-sm font-medium text-secondary-700">Healthy Home Assessment identifies opportunities</span>
                </div>
                <div className="text-secondary-400">→</div>
                <div className="flex items-center space-x-2 bg-white rounded-lg px-4 py-2">
                  <span className="bg-primary-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">2</span>
                  <span className="text-sm font-medium text-secondary-700">Heat Load Calculations size systems perfectly</span>
                </div>
                <div className="text-secondary-400">→</div>
                <div className="flex items-center space-x-2 bg-white rounded-lg px-4 py-2">
                  <span className="bg-primary-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">3</span>
                  <span className="text-sm font-medium text-secondary-700">Air Sealing + Inverter Heat Pump installation</span>
                </div>
                <div className="text-secondary-400">→</div>
                <div className="flex items-center space-x-2 bg-white rounded-lg px-4 py-2">
                  <span className="bg-primary-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">4</span>
                  <span className="text-sm font-medium text-secondary-700">Air Quality + Water Filtration complete the ecosystem</span>
                </div>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center space-x-2 bg-primary-100 text-primary-800 px-4 py-2 rounded-lg">
                  <span className="font-semibold">Result:</span>
                  <span>60%+ energy savings, perfect comfort, healthy indoor environment</span>
                </div>
              </div>
            </div>
            
            <div className="bg-secondary-50 rounded-xl p-8">
              <h3 className="text-xl font-bold text-secondary-900 mb-6 flex items-center">
                ⚡ Electrification Package
              </h3>
              <div className="flex flex-wrap items-center justify-center gap-4 mb-6">
                <div className="flex items-center space-x-2 bg-white rounded-lg px-4 py-2">
                  <span className="bg-primary-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">1</span>
                  <span className="text-sm font-medium text-secondary-700">Inverter Heat Pump replaces gas furnace</span>
                </div>
                <div className="text-secondary-400">→</div>
                <div className="flex items-center space-x-2 bg-white rounded-lg px-4 py-2">
                  <span className="bg-primary-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">2</span>
                  <span className="text-sm font-medium text-secondary-700">Heat Pump Water Heater replaces gas unit</span>
                </div>
                <div className="text-secondary-400">→</div>
                <div className="flex items-center space-x-2 bg-white rounded-lg px-4 py-2">
                  <span className="bg-primary-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">3</span>
                  <span className="text-sm font-medium text-secondary-700">Systems optimized to work together</span>
                </div>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center space-x-2 bg-primary-100 text-primary-800 px-4 py-2 rounded-lg">
                  <span className="font-semibold">Result:</span>
                  <span>Zero gas usage, maximum rebates, future-ready home</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="py-20 bg-primary-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Ready to Transform Your Home?
          </h2>
          <p className="text-lg text-primary-100 mb-8">
            Every home is unique. Let's design the perfect combination of services for your specific needs and goals.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link href="/contact">
              <Button 
                size="lg" 
                variant="secondary"
                className="w-full sm:w-auto bg-white text-primary-600 hover:bg-primary-50"
              >
                Schedule Consultation
              </Button>
            </Link>
            <Link href="/services/healthy-home-solutions">
              <Button 
                variant="ghost" 
                size="lg"
                className="w-full sm:w-auto text-primary-100 hover:text-white hover:bg-primary-700"
              >
                Start with Assessment
              </Button>
            </Link>
            <Link href="/transparency/pricing">
              <Button 
                variant="ghost" 
                size="lg"
                className="w-full sm:w-auto text-primary-100 hover:text-white hover:bg-primary-700"
              >
                See Our Pricing
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
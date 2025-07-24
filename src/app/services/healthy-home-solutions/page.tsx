import type { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import CTASection from '@/components/ui/CTASection'

export const metadata: Metadata = {
  title: 'Comprehensive Healthy Home Solutions',
  description: 'Holistic evaluation of all factors affecting home health. Testing, monitoring, and custom solutions that integrate HVAC, filtration, and building envelope.',
}

export default function HealthyHomeSolutionsPage() {
  const healthFactors = [
    {
      icon: '💨',
      title: 'Indoor Air Quality',
      description: 'Advanced HEPA filtration, humidity control, fresh air ventilation, and UV purification',
      metrics: ['PM2.5 levels', 'VOC concentrations', 'CO2 monitoring']
    },
    {
      icon: '🌡️',
      title: 'Temperature & Humidity',
      description: 'Optimal comfort conditions that prevent mold growth and promote health',
      metrics: ['Temperature stability', 'Relative humidity', 'Dewpoint control']
    },
    {
      icon: '🏠',
      title: 'Building Envelope',
      description: 'Proper air sealing and insulation to control what enters your home',
      metrics: ['Air changes per hour', 'Thermal bridging', 'Moisture intrusion']
    },
    {
      icon: '💧',
      title: 'Water Quality',
      description: 'Whole-home filtration systems that remove contaminants and improve taste',
      metrics: ['TDS levels', 'Chlorine removal', 'Heavy metals']
    },
    {
      icon: '🔊',
      title: 'Acoustic Comfort',
      description: 'Noise control for better sleep and reduced stress from HVAC and external sources',
      metrics: ['Sound levels', 'Frequency analysis', 'Noise transmission']
    },
    {
      icon: '💡',
      title: 'Lighting Quality',
      description: 'Natural and artificial lighting optimization for circadian rhythm support',
      metrics: ['Light levels', 'Color temperature', 'Glare reduction']
    }
  ]

  const assessmentProcess = [
    {
      phase: 'Initial Consultation',
      duration: '1-2 hours',
      activities: [
        'Health and comfort questionnaire',
        'Existing system evaluation',
        'Occupant sensitivity assessment',
        'Goal setting and prioritization'
      ]
    },
    {
      phase: 'Comprehensive Testing',
      duration: '2-4 hours',
      activities: [
        'Air quality measurements (PM2.5, VOCs, CO2)',
        'Blower door and thermal imaging',
        'Humidity and temperature mapping',
        'Water quality analysis',
        'Noise level assessment'
      ]
    },
    {
      phase: 'Analysis & Design',
      duration: '3-5 days',
      activities: [
        'Test result analysis and interpretation',
        'Custom solution design',
        'Integration planning with existing systems',
        'Cost-benefit analysis and prioritization'
      ]
    },
    {
      phase: 'Implementation',
      duration: 'Varies',
      activities: [
        'Professional installation of solutions',
        'System integration and commissioning',
        'Performance verification testing',
        'Homeowner education and training'
      ]
    }
  ]

  const solutionCategories = [
    {
      category: 'Air Quality Solutions',
      solutions: [
        {
          name: 'Whole-Home HEPA Filtration',
          description: 'Hospital-grade filtration integrated with HVAC system',
          benefits: ['99.97% particle removal', 'Allergen reduction', 'Pathogen control']
        },
        {
          name: 'UV-C Air Purification',
          description: 'Germicidal UV lights that neutralize viruses and bacteria',
          benefits: ['Pathogen elimination', 'Mold prevention', 'Odor control']
        },
        {
          name: 'Fresh Air Ventilation',
          description: 'Controlled outdoor air introduction with energy recovery',
          benefits: ['CO2 dilution', 'Pollutant removal', 'Energy efficiency']
        }
      ]
    },
    {
      category: 'Humidity & Comfort',
      solutions: [
        {
          name: 'Whole-Home Dehumidification',
          description: 'Independent humidity control for optimal comfort and health',
          benefits: ['Mold prevention', 'Dust mite control', 'Comfort enhancement']
        },
        {
          name: 'Smart Humidity Monitoring',
          description: 'Continuous monitoring with automatic adjustments',
          benefits: ['Optimal levels', 'Health alerts', 'Energy optimization']
        }
      ]
    },
    {
      category: 'Water Quality',
      solutions: [
        {
          name: 'Multi-Stage Filtration',
          description: 'Comprehensive water treatment for the entire home',
          benefits: ['Contaminant removal', 'Taste improvement', 'Health protection']
        },
        {
          name: 'UV Water Sterilization',
          description: 'Chemical-free pathogen elimination',
          benefits: ['Bacterial control', 'Virus elimination', 'No chemicals']
        }
      ]
    }
  ]

  const monitoringTechnology = [
    {
      device: 'Smart Air Quality Monitors',
      parameters: ['PM2.5', 'PM10', 'VOCs', 'CO2', 'Temperature', 'Humidity'],
      features: ['Real-time alerts', 'Historical tracking', 'Mobile app control']
    },
    {
      device: 'Water Quality Sensors',
      parameters: ['TDS', 'pH', 'Chlorine', 'Temperature', 'Flow rate'],
      features: ['Filter life tracking', 'Leak detection', 'Usage monitoring']
    },
    {
      device: 'Environmental Sensors',
      parameters: ['Light levels', 'Noise', 'EMF', 'Radon', 'Allergens'],
      features: ['Multi-zone monitoring', 'Trend analysis', 'Health recommendations']
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-700 text-white py-24 lg:py-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-6">
              <nav className="text-primary-200 text-sm">
                <Link href="/" className="hover:text-white">Home</Link>
                <span className="mx-2">/</span>
                <Link href="/services" className="hover:text-white">Services</Link>
                <span className="mx-2">/</span>
                <span className="text-white font-medium">Healthy Home Solutions</span>
              </nav>
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Comprehensive Healthy Home Solutions
            </h1>
            
            <p className="text-xl text-primary-100 leading-relaxed mb-8 max-w-3xl mx-auto">
              Holistic evaluation of all factors affecting home health. Testing, monitoring, and custom solutions that integrate HVAC, filtration, and building envelope.
            </p>
            
            {/* Key Features */}
            <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto mb-8">
              <div className="bg-primary-700/50 rounded-lg p-4">
                <div className="text-lg font-semibold text-white mb-1">Complete Testing</div>
                <div className="text-primary-200 text-sm">Air leakage, humidity, ventilation, air quality</div>
              </div>
              <div className="bg-primary-700/50 rounded-lg p-4">
                <div className="text-lg font-semibold text-white mb-1">Custom Solutions</div>
                <div className="text-primary-200 text-sm">Every home is unique - no one-size-fits-all</div>
              </div>
              <div className="bg-primary-700/50 rounded-lg p-4">
                <div className="text-lg font-semibold text-white mb-1">Ongoing Support</div>
                <div className="text-primary-200 text-sm">Follow-up monitoring for sustained benefits</div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link href="/contact">
                <Button size="lg" variant="secondary" className="bg-white text-primary-600 hover:bg-primary-50">
                  Schedule Assessment
                </Button>
              </Link>
              <Link href="/knowledge/rules-for-airflow">
                <Button size="lg" variant="ghost" className="text-primary-100 hover:text-white hover:bg-primary-700">
                  Learn About Indoor Air
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Health Factors */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-secondary-900 mb-4">
              Six Critical Factors for Home Health
            </h2>
            <p className="text-lg text-secondary-700 max-w-3xl mx-auto">
              Your home's health affects your family's health. We evaluate and optimize all interconnected systems that create a healthy living environment.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {healthFactors.map((factor, index) => (
              <div key={index} className="bg-secondary-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="text-3xl mb-4">{factor.icon}</div>
                <h3 className="text-xl font-bold text-secondary-900 mb-3">
                  {factor.title}
                </h3>
                <p className="text-secondary-700 mb-4 leading-relaxed">
                  {factor.description}
                </p>
                <div className="space-y-1">
                  <div className="text-sm font-medium text-secondary-900 mb-2">We Monitor:</div>
                  {factor.metrics.map((metric, idx) => (
                    <div key={idx} className="text-sm text-secondary-600 flex items-center">
                      <span className="w-1.5 h-1.5 bg-primary-600 rounded-full mr-2"></span>
                      {metric}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Assessment Process */}
      <section className="py-20 bg-secondary-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-secondary-900 mb-4">
              Our Comprehensive Assessment Process
            </h2>
            <p className="text-lg text-secondary-700">
              A systematic approach to understanding your home's current health status and designing optimal solutions.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {assessmentProcess.map((phase, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
                <div className="w-12 h-12 mx-auto mb-4 bg-primary-100 rounded-full flex items-center justify-center">
                  <span className="text-lg font-bold text-primary-600">{index + 1}</span>
                </div>
                <h3 className="text-lg font-semibold text-secondary-900 mb-2 text-center">
                  {phase.phase}
                </h3>
                <div className="text-sm text-secondary-600 text-center mb-4">
                  Duration: {phase.duration}
                </div>
                <ul className="space-y-2">
                  {phase.activities.map((activity, idx) => (
                    <li key={idx} className="text-sm text-secondary-700 flex items-start">
                      <span className="w-1.5 h-1.5 bg-primary-600 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                      {activity}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Categories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-secondary-900 mb-4">
              Integrated Solution Categories
            </h2>
            <p className="text-lg text-secondary-700">
              Based on your assessment results, we design custom combinations of these proven technologies.
            </p>
          </div>
          
          <div className="space-y-12">
            {solutionCategories.map((category, index) => (
              <div key={index} className="border-l-4 border-primary-600 pl-6">
                <h3 className="text-2xl font-bold text-secondary-900 mb-6">
                  {category.category}
                </h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.solutions.map((solution, idx) => (
                    <div key={idx} className="bg-secondary-50 rounded-lg p-6">
                      <h4 className="text-lg font-semibold text-secondary-900 mb-3">
                        {solution.name}
                      </h4>
                      <p className="text-secondary-700 text-sm mb-4 leading-relaxed">
                        {solution.description}
                      </p>
                      <div className="space-y-1">
                        {solution.benefits.map((benefit, bidx) => (
                          <div key={bidx} className="text-xs text-primary-700 flex items-center">
                            <span className="w-1 h-1 bg-primary-600 rounded-full mr-2"></span>
                            {benefit}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Monitoring Technology */}
      <section className="py-20 bg-primary-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-secondary-900 mb-4">
              Continuous Monitoring Technology
            </h2>
            <p className="text-lg text-secondary-700">
              Advanced sensors and smart controls provide real-time feedback and automatic optimization.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {monitoringTechnology.map((tech, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-secondary-900 mb-4">
                  {tech.device}
                </h3>
                
                <div className="mb-4">
                  <div className="text-sm font-medium text-secondary-900 mb-2">Parameters Monitored:</div>
                  <div className="grid grid-cols-2 gap-1">
                    {tech.parameters.map((param, idx) => (
                      <div key={idx} className="text-xs bg-secondary-50 rounded px-2 py-1">
                        {param}
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <div className="text-sm font-medium text-secondary-900 mb-2">Features:</div>
                  <ul className="space-y-1">
                    {tech.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-secondary-700 flex items-center">
                        <span className="w-1.5 h-1.5 bg-primary-600 rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 bg-white rounded-xl p-8 text-center">
            <h3 className="text-2xl font-bold text-secondary-900 mb-4">
              Smart Home Integration
            </h3>
            <p className="text-lg text-secondary-700 mb-6">
              All monitoring systems integrate with your smartphone and smart home platform for seamless control and alerts.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="bg-secondary-100 text-secondary-800 px-4 py-2 rounded-full text-sm">📱 Mobile App</span>
              <span className="bg-secondary-100 text-secondary-800 px-4 py-2 rounded-full text-sm">🏠 Home Assistant</span>
              <span className="bg-secondary-100 text-secondary-800 px-4 py-2 rounded-full text-sm">📊 Real-time Dashboards</span>
              <span className="bg-secondary-100 text-secondary-800 px-4 py-2 rounded-full text-sm">🔔 Health Alerts</span>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits & ROI */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-secondary-900 mb-4">
              Investment in Your Family's Health
            </h2>
            <p className="text-lg text-secondary-700">
              The benefits of a healthy home extend far beyond energy savings—they're an investment in your family's wellbeing.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-secondary-50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-secondary-900 mb-4">
                🏥 Health Benefits
              </h3>
              <ul className="space-y-3 text-secondary-700">
                <li className="flex items-start">
                  <span className="text-primary-600 mt-1 mr-3">•</span>
                  <span>Reduced allergies and respiratory issues</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mt-1 mr-3">•</span>
                  <span>Better sleep quality and circadian rhythm</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mt-1 mr-3">•</span>
                  <span>Improved cognitive function and productivity</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mt-1 mr-3">•</span>
                  <span>Reduced illness from airborne pathogens</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-secondary-50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-secondary-900 mb-4">
                💰 Financial Benefits
              </h3>
              <ul className="space-y-3 text-secondary-700">
                <li className="flex items-start">
                  <span className="text-primary-600 mt-1 mr-3">•</span>
                  <span>20-30% reduction in energy costs</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mt-1 mr-3">•</span>
                  <span>Reduced healthcare expenses</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mt-1 mr-3">•</span>
                  <span>Increased home value and marketability</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mt-1 mr-3">•</span>
                  <span>Extended HVAC system lifespan</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mt-12 bg-primary-50 rounded-xl p-8 text-center">
            <h3 className="text-2xl font-bold text-secondary-900 mb-4">
              Typical Investment Range: $3,000 - $15,000
            </h3>
            <p className="text-lg text-secondary-700 mb-6">
              Solutions are prioritized based on impact and budget. Many improvements qualify for rebates and tax incentives.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link href="/contact">
                <Button size="lg">Schedule Free Assessment</Button>
              </Link>
              <Link href="/transparency/pricing">
                <Button variant="outline" size="lg">View Pricing Guide</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready for a Healthier Home?"
        description="Start with a comprehensive assessment to understand your home's current health status and identify the most impactful improvements."
        variant="gradient"
      />
    </div>
  )
}
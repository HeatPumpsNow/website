import type { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import CTASection from '@/components/ui/CTASection'

export const metadata: Metadata = {
  title: 'Professional Air Sealing - Building Envelope Optimization',
  description: 'Critical for system performance but often ignored. Blower door testing identifies leaks for targeted, high-impact sealing that increases HVAC efficiency by 20-30%.',
}

export default function AirSealingPage() {
  const airSealingBenefits = [
    {
      icon: '⚡',
      title: '20-30% Efficiency Improvement',
      description: 'Proper air sealing can improve HVAC system efficiency by 20-30%, reducing energy bills significantly'
    },
    {
      icon: '🌡️',
      title: 'Enhanced Comfort',
      description: 'Eliminates drafts, hot/cold spots, and temperature variations throughout your home'
    },
    {
      icon: '💨',
      title: 'Better Air Quality',
      description: 'Prevents unfiltered outdoor air, allergens, and pollutants from entering your home'
    },
    {
      icon: '🔇',
      title: 'Noise Reduction',
      description: 'Sealing air leaks also reduces outside noise infiltration for a quieter home'
    },
    {
      icon: '🦟',
      title: 'Pest Prevention',
      description: 'Sealed air gaps prevent insects and small pests from entering your home'
    },
    {
      icon: '💧',
      title: 'Moisture Control',
      description: 'Proper sealing helps control humidity and prevents moisture-related issues'
    }
  ]

  const diagnosticProcess = [
    {
      step: '1',
      title: 'Blower Door Testing',
      description: 'Quantify air leakage with precise measurements (ACH50) to establish baseline performance'
    },
    {
      step: '2',
      title: 'Thermal Imaging',
      description: 'Infrared cameras identify exact leak locations and thermal bridges for targeted sealing'
    },
    {
      step: '3',
      title: 'Pressure Mapping',
      description: 'Identify pressure imbalances and airflow patterns to optimize sealing strategy'
    },
    {
      step: '4',
      title: 'Targeted Sealing',
      description: 'Professional-grade materials applied to high-impact areas for maximum efficiency gain'
    }
  ]

  const commonLeakAreas = [
    {
      area: 'Attic Access & Penetrations',
      impact: 'High',
      description: 'Ceiling-mounted fixtures, ductwork penetrations, and attic hatches'
    },
    {
      area: 'Basement & Foundation',
      impact: 'High', 
      description: 'Rim joists, foundation cracks, utility penetrations'
    },
    {
      area: 'Windows & Doors',
      impact: 'Medium',
      description: 'Frame gaps, weatherstripping failures, threshold seals'
    },
    {
      area: 'Electrical & Plumbing',
      impact: 'Medium',
      description: 'Outlet boxes, pipe penetrations, service entrances'
    },
    {
      area: 'HVAC Components',
      impact: 'High',
      description: 'Ductwork connections, equipment penetrations, return air leaks'
    }
  ]

  const beforeAfterStats = [
    {
      metric: 'Air Changes per Hour (ACH50)',
      before: '8-12 ACH50',
      after: '3-5 ACH50',
      improvement: '40-60% reduction'
    },
    {
      metric: 'Energy Bills',
      before: '$200-300/month',
      after: '$140-210/month',
      improvement: '20-30% savings'
    },
    {
      metric: 'HVAC Runtime',
      before: '8-10 hours/day',
      after: '5-7 hours/day',
      improvement: '30-40% reduction'
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
                <span className="text-white font-medium">Air Sealing</span>
              </nav>
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Professional Air Sealing: Building Envelope Optimization
            </h1>
            
            <p className="text-xl text-primary-100 leading-relaxed mb-8 max-w-3xl mx-auto">
              Critical for system performance but often ignored. Blower door testing identifies leaks for targeted, high-impact sealing that increases HVAC efficiency by 20-30%.
            </p>
            
            {/* Key Stats */}
            <div className="grid md:grid-cols-3 gap-6 max-w-2xl mx-auto mb-8">
              <div className="bg-primary-700/50 rounded-lg p-4">
                <div className="text-2xl font-bold text-white mb-1">20-30%</div>
                <div className="text-primary-200 text-sm">Efficiency Increase</div>
              </div>
              <div className="bg-primary-700/50 rounded-lg p-4">
                <div className="text-2xl font-bold text-white mb-1">50%+</div>
                <div className="text-primary-200 text-sm">Air Leak Reduction</div>
              </div>
              <div className="bg-primary-700/50 rounded-lg p-4">
                <div className="text-2xl font-bold text-white mb-1">$500+</div>
                <div className="text-primary-200 text-sm">Annual Savings</div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link href="/contact">
                <Button size="lg" variant="secondary" className="bg-white text-primary-600 hover:bg-primary-50">
                  Schedule Assessment
                </Button>
              </Link>
              <Link href="/knowledge/how-we-install">
                <Button size="lg" variant="ghost" className="text-primary-100 hover:text-white hover:bg-primary-700">
                  See Our Process
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Air Sealing Matters */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-secondary-900 mb-4">
              Why Air Sealing is Critical for System Performance
            </h2>
            <p className="text-lg text-secondary-700 max-w-3xl mx-auto">
              Even the most efficient HVAC system can't overcome a leaky building envelope. Air sealing is the foundation that makes everything else work properly.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {airSealingBenefits.map((benefit, index) => (
              <div key={index} className="bg-secondary-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="text-3xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-secondary-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-secondary-700 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Diagnostic Process */}
      <section className="py-20 bg-secondary-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-secondary-900 mb-4">
              Our Scientific Diagnostic Approach
            </h2>
            <p className="text-lg text-secondary-700">
              We don't guess where air leaks are—we measure and identify them with precision diagnostic equipment.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {diagnosticProcess.map((step, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary-600">{step.step}</span>
                </div>
                <h3 className="text-lg font-semibold text-secondary-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-sm text-secondary-700 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
          
          <div className="mt-12 bg-primary-50 rounded-xl p-8 text-center">
            <h3 className="text-2xl font-bold text-secondary-900 mb-4">
              Integrated Design Approach
            </h3>
            <p className="text-lg text-secondary-700 max-w-3xl mx-auto">
              Air sealing works with your HVAC system for whole-home efficiency. When done properly, it allows us to right-size equipment and optimize performance.
            </p>
          </div>
        </div>
      </section>

      {/* Common Leak Areas */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-secondary-900 mb-4">
              Common Air Leak Locations
            </h2>
            <p className="text-lg text-secondary-700">
              Our experience shows these areas typically have the highest impact on energy efficiency and comfort.
            </p>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-sm">
              <thead>
                <tr className="border-b border-secondary-200">
                  <th className="text-left py-4 px-6 font-semibold text-secondary-900">Leak Area</th>
                  <th className="text-left py-4 px-6 font-semibold text-secondary-900">Impact Level</th>
                  <th className="text-left py-4 px-6 font-semibold text-secondary-900">Common Sources</th>
                </tr>
              </thead>
              <tbody>
                {commonLeakAreas.map((area, index) => (
                  <tr key={index} className="border-b border-secondary-100">
                    <td className="py-4 px-6 font-medium text-secondary-900">{area.area}</td>
                    <td className="py-4 px-6">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        area.impact === 'High' 
                          ? 'bg-red-100 text-red-800' 
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {area.impact}
                      </span>
                    </td>
                    <td className="py-4 px-6 text-secondary-700">{area.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 text-center">
            <div className="inline-flex items-center space-x-4 bg-secondary-50 rounded-lg p-4">
              <div className="text-secondary-900 font-medium">💡 Pro Tip:</div>
              <div className="text-secondary-700">
                High-impact areas often provide 80% of the benefit with 20% of the effort when properly identified and sealed.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Before & After Results */}
      <section className="py-20 bg-secondary-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-secondary-900 mb-4">
              Measurable Results You Can Count On
            </h2>
            <p className="text-lg text-secondary-700">
              We provide before and after testing so you can see exactly how much your home's performance improved.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {beforeAfterStats.map((stat, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm text-center">
                <h3 className="text-lg font-semibold text-secondary-900 mb-6">
                  {stat.metric}
                </h3>
                <div className="space-y-4">
                  <div>
                    <div className="text-sm text-secondary-600 mb-1">Before</div>
                    <div className="text-xl font-bold text-red-600">{stat.before}</div>
                  </div>
                  <div className="text-2xl text-secondary-400">↓</div>
                  <div>
                    <div className="text-sm text-secondary-600 mb-1">After</div>
                    <div className="text-xl font-bold text-primary-600">{stat.after}</div>
                  </div>
                  <div className="bg-primary-50 rounded-lg p-3">
                    <div className="text-sm font-medium text-primary-800">
                      {stat.improvement}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration with HVAC */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-secondary-900 mb-4">
              Perfect Complement to Heat Pump Systems
            </h2>
            <p className="text-lg text-secondary-700">
              Air sealing and heat pump installation work together to create the most efficient, comfortable home possible.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-secondary-50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-secondary-900 mb-4">
                🎯 Right-Sizing Benefits
              </h3>
              <p className="text-secondary-700 leading-relaxed">
                Proper air sealing allows us to install smaller, more efficient heat pump systems that cycle less and provide better comfort.
              </p>
            </div>
            
            <div className="bg-secondary-50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-secondary-900 mb-4">
                ⚡ Maximum Efficiency
              </h3>
              <p className="text-secondary-700 leading-relaxed">
                When combined with inverter heat pumps, sealed homes can achieve 30-40% better efficiency than typical installations.
              </p>
            </div>
            
            <div className="bg-secondary-50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-secondary-900 mb-4">
                🌡️ Enhanced Comfort
              </h3>
              <p className="text-secondary-700 leading-relaxed">
                Sealed homes maintain consistent temperatures and humidity levels, allowing heat pumps to operate in their optimal range.
              </p>
            </div>
            
            <div className="bg-secondary-50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-secondary-900 mb-4">
                💰 Combined Savings
              </h3>
              <p className="text-secondary-700 leading-relaxed">
                Air sealing + heat pump installations often qualify for additional rebates and provide faster payback periods.
              </p>
            </div>
          </div>
          
          <div className="mt-12 bg-primary-50 rounded-xl p-8 text-center">
            <h3 className="text-2xl font-bold text-secondary-900 mb-4">
              Complete Building Performance Package
            </h3>
            <p className="text-lg text-secondary-700 mb-6">
              Air Sealing + Inverter Heat Pump + Load Calculations = Optimal efficiency, comfort, and savings.
            </p>
            <Link href="/services/inverter-heat-pumps">
              <Button size="lg">
                Explore Complete Solutions
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Stop Wasting Energy?"
        description="Professional air sealing is the foundation of an efficient, comfortable home. Let's identify and fix your biggest energy leaks."
        variant="gradient"
      />
    </div>
  )
}
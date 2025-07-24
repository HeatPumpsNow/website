import type { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import CTASection from '@/components/ui/CTASection'

export const metadata: Metadata = {
  title: 'Heat Pump Water Heaters - 3x More Efficient',
  description: 'Complete whole-home electrification with heat pump water heaters. 3-4x more efficient than traditional units, perfectly integrated with your HVAC system.',
}

export default function HeatPumpWaterHeatersPage() {
  const efficiencyBenefits = [
    {
      icon: '⚡',
      title: '3-4x More Efficient',
      description: 'Heat pump water heaters move heat instead of creating it, achieving 300-400% efficiency compared to traditional electric units'
    },
    {
      icon: '💰',
      title: 'Significant Cost Savings',
      description: 'Typical households save $300-600+ annually on water heating costs with faster payback periods'
    },
    {
      icon: '🌱',
      title: 'Zero Emissions',
      description: 'Complete elimination of gas usage when paired with inverter heat pumps for total home electrification'
    },
    {
      icon: '🔗',
      title: 'System Integration',
      description: 'Perfectly complements inverter heat pump HVAC systems for optimized whole-home performance'
    },
    {
      icon: '💧',
      title: 'Consistent Hot Water',
      description: 'Advanced controls ensure reliable hot water delivery while maximizing efficiency'
    },
    {
      icon: '🏆',
      title: 'Rebate Eligible',
      description: 'Significant utility rebates and tax incentives available for qualifying installations'
    }
  ]

  const integrationBenefits = [
    {
      title: 'Coordinated Operation',
      description: 'When integrated with your HVAC system, both units can optimize their operation for maximum overall efficiency.'
    },
    {
      title: 'Load Management',
      description: 'Smart controls can sequence operation to avoid peak demand charges and optimize for time-of-use rates.'
    },
    {
      title: 'Shared Infrastructure',
      description: 'Electrical upgrades, permits, and installation can be coordinated for cost savings and convenience.'
    },
    {
      title: 'Maximum Rebates',
      description: 'Whole-home electrification packages often qualify for additional incentives beyond individual equipment rebates.'
    }
  ]

  const installationProcess = [
    {
      step: '1',
      title: 'Usage Assessment',
      description: 'Analyze current water heating patterns, existing infrastructure, and integration opportunities with HVAC'
    },
    {
      step: '2',
      title: 'System Selection',
      description: 'Right-size unit based on household needs, space constraints, and integration with existing systems'
    },
    {
      step: '3',
      title: 'Professional Installation',
      description: 'Complete installation including electrical upgrades, plumbing connections, and system integration'
    },
    {
      step: '4',
      title: 'Optimization & Training',
      description: 'System commissioning, control setup, and homeowner education for maximum efficiency'
    }
  ]

  const comparisonData = [
    {
      type: 'Traditional Electric',
      efficiency: '95% (0.95 UEF)',
      annualCost: '$600-800',
      emissions: 'Medium (grid-dependent)',
      integration: 'None',
      rebates: 'Limited'
    },
    {
      type: 'Gas Water Heater',
      efficiency: '80% (0.80 UEF)',
      annualCost: '$300-500',
      emissions: 'High (direct combustion)',
      integration: 'None',
      rebates: 'None'
    },
    {
      type: 'Heat Pump Water Heater',
      efficiency: '300%+ (3.0+ UEF)',
      annualCost: '$200-300',
      emissions: 'Low (all-electric)',
      integration: 'Full HVAC integration',
      rebates: 'Up to $1,750+'
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
                <span className="text-white font-medium">Heat Pump Water Heaters</span>
              </nav>
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Heat Pump Water Heaters: Complete Electrification
            </h1>
            
            <p className="text-xl text-primary-100 leading-relaxed mb-8 max-w-3xl mx-auto">
              3-4x more efficient than traditional water heaters. The perfect complement to your inverter heat pump HVAC system for complete whole-home electrification.
            </p>
            
            {/* Performance Stats */}
            <div className="grid md:grid-cols-3 gap-6 max-w-2xl mx-auto mb-8">
              <div className="bg-primary-700/50 rounded-lg p-4">
                <div className="text-2xl font-bold text-white mb-1">3.5x</div>
                <div className="text-primary-200 text-sm">More Efficient</div>
              </div>
              <div className="bg-primary-700/50 rounded-lg p-4">
                <div className="text-2xl font-bold text-white mb-1">$500+</div>
                <div className="text-primary-200 text-sm">Annual Savings</div>
              </div>
              <div className="bg-primary-700/50 rounded-lg p-4">
                <div className="text-2xl font-bold text-white mb-1">Zero</div>
                <div className="text-primary-200 text-sm">Gas Usage</div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link href="/contact">
                <Button size="lg" variant="secondary" className="bg-white text-primary-600 hover:bg-primary-50">
                  Calculate Savings
                </Button>
              </Link>
              <Link href="/transparency/rebates">
                <Button size="lg" variant="ghost" className="text-primary-100 hover:text-white hover:bg-primary-700">
                  View Rebates
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Efficiency Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-secondary-900 mb-4">
              Revolutionary Efficiency Technology
            </h2>
            <p className="text-lg text-secondary-700 max-w-3xl mx-auto">
              Heat pump water heaters don't create heat—they move it. This fundamental difference makes them 3-4x more efficient than any other water heating technology.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {efficiencyBenefits.map((benefit, index) => (
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

      {/* Technology Comparison */}
      <section className="py-20 bg-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-secondary-900 mb-4">
              Heat Pump vs. Traditional Water Heaters
            </h2>
            <p className="text-lg text-secondary-700">
              See how heat pump water heaters outperform traditional options in every category.
            </p>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-sm">
              <thead>
                <tr className="border-b border-secondary-200">
                  <th className="text-left py-4 px-6 font-semibold text-secondary-900">Type</th>
                  <th className="text-left py-4 px-6 font-semibold text-secondary-900">Efficiency</th>
                  <th className="text-left py-4 px-6 font-semibold text-secondary-900">Annual Cost</th>
                  <th className="text-left py-4 px-6 font-semibold text-secondary-900">Emissions</th>
                  <th className="text-left py-4 px-6 font-semibold text-secondary-900">Integration</th>
                  <th className="text-left py-4 px-6 font-semibold text-secondary-900">Rebates</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, index) => (
                  <tr key={index} className={`border-b border-secondary-100 ${index === 2 ? 'bg-primary-50' : ''}`}>
                    <td className="py-4 px-6 font-medium text-secondary-900">{row.type}</td>
                    <td className="py-4 px-6 text-secondary-700">{row.efficiency}</td>
                    <td className="py-4 px-6 text-secondary-700">{row.annualCost}</td>
                    <td className="py-4 px-6 text-secondary-700">{row.emissions}</td>
                    <td className="py-4 px-6 text-secondary-700">{row.integration}</td>
                    <td className="py-4 px-6 text-secondary-700">{row.rebates}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* System Integration */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-secondary-900 mb-4">
              Perfect Integration with Your HVAC System
            </h2>
            <p className="text-lg text-secondary-700 max-w-3xl mx-auto">
              When combined with an inverter heat pump HVAC system, you achieve complete home electrification with optimized performance and maximum rebates.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {integrationBenefits.map((benefit, index) => (
              <div key={index} className="bg-primary-50 rounded-xl p-6 border border-primary-100">
                <h3 className="text-xl font-bold text-secondary-900 mb-4">
                  {benefit.title}
                </h3>
                <p className="text-secondary-700 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
          
          <div className="mt-12 bg-secondary-50 rounded-xl p-8 text-center">
            <h3 className="text-2xl font-bold text-secondary-900 mb-4">
              Complete Electrification Package
            </h3>
            <p className="text-lg text-secondary-700 mb-6">
              Inverter Heat Pump + Heat Pump Water Heater = Zero gas usage, maximum efficiency, and up to $3,000+ in combined rebates.
            </p>
            <Link href="/contact">
              <Button size="lg">
                Calculate Your Electrification Savings
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Installation Process */}
      <section className="py-20 bg-secondary-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-secondary-900 mb-4">
              Our Installation Process
            </h2>
            <p className="text-lg text-secondary-700">
              Every heat pump water heater installation is optimized for maximum efficiency and integration with your home's systems.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {installationProcess.map((step, index) => (
              <div key={index} className="text-center">
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
        </div>
      </section>

      {/* Rebates & Incentives */}
      <section className="py-20 bg-primary-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-secondary-900 mb-4">
              Maximize Your Rebates & Incentives
            </h2>
            <p className="text-lg text-secondary-700">
              Heat pump water heaters qualify for significant rebates that can dramatically reduce your upfront investment.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-bold text-secondary-900 mb-4">
                Available Incentives
              </h3>
              <ul className="space-y-3 text-secondary-700">
                <li className="flex items-start space-x-2">
                  <span className="text-primary-600 mt-1">•</span>
                  <span>Federal Tax Credit: 30% of total project cost</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-primary-600 mt-1">•</span>
                  <span>Utility Rebates: Up to $1,750 from SoCal Gas/Edison</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-primary-600 mt-1">•</span>
                  <span>State Incentives: Additional TECH Clean California rebates</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-primary-600 mt-1">•</span>
                  <span>Local Programs: City and county specific incentives</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-bold text-secondary-900 mb-4">
                Example Savings
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-secondary-100">
                  <span className="text-secondary-700">System Cost:</span>
                  <span className="font-semibold text-secondary-900">$4,500</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-secondary-100">
                  <span className="text-secondary-700">Federal Tax Credit (30%):</span>
                  <span className="font-semibold text-primary-600">-$1,350</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-secondary-100">
                  <span className="text-secondary-700">Utility Rebate:</span>
                  <span className="font-semibold text-primary-600">-$1,000</span>
                </div>
                <div className="flex justify-between items-center py-2 border-t-2 border-secondary-200">
                  <span className="text-lg font-semibold text-secondary-900">Net Cost:</span>
                  <span className="text-lg font-bold text-primary-600">$2,150</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <Link href="/transparency/rebates">
              <Button variant="outline" size="lg">
                View Complete Rebate Guide →
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Eliminate Your Gas Water Heater?"
        description="Join thousands of homeowners who've made the switch to efficient, clean heat pump water heating."
        variant="gradient"
      />
    </div>
  )
}
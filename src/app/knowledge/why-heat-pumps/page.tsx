import type { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import CTASection from '@/components/ui/CTASection'

export const metadata: Metadata = {
  title: 'Why Heat Pumps - The Future of Home Comfort',
  description: 'Understanding why heat pumps are 3-4x more efficient than traditional systems, their environmental benefits, and why they\'re the future of home heating and cooling.',
}

export default function WhyHeatPumpsPage() {
  const efficiencyAdvantages = [
    {
      icon: '⚡',
      title: '300-400% Efficiency',
      traditional: 'Gas furnaces: 80-95% efficiency',
      heatPump: 'Heat pumps: 300-400% efficiency',
      explanation: 'Heat pumps move heat instead of creating it, achieving coefficients of performance (COP) of 3-4.'
    },
    {
      icon: '🔄',
      title: 'Dual Functionality',
      traditional: 'Separate heating and cooling systems',
      heatPump: 'One system handles both efficiently',
      explanation: 'Heat pumps can reverse their operation, providing both heating and cooling with the same equipment.'
    },
    {
      icon: '🌡️',
      title: 'Consistent Comfort',
      traditional: 'Temperature swings of 3-5°F',
      heatPump: 'Maintains ±1°F temperature control',
      explanation: 'Variable-speed operation allows precise temperature control without the cycling of traditional systems.'
    }
  ]

  const environmentalImpact = [
    {
      metric: 'Carbon Emissions',
      gas: '12,000 lbs CO2/year',
      heatPump: '4,000 lbs CO2/year',
      reduction: '67% reduction',
      note: 'Even with current grid mix'
    },
    {
      metric: 'Local Air Quality',
      gas: 'NOx and combustion byproducts',
      heatPump: 'Zero local emissions',
      reduction: '100% elimination',
      note: 'No combustion in your home'
    },
    {
      metric: 'Future-Proofing',
      gas: 'Always burns fossil fuels',
      heatPump: 'Gets cleaner as grid does',
      reduction: 'Improving yearly',
      note: 'Renewable energy integration'
    }
  ]

  const techEvolution = [
    {
      generation: 'Traditional Heat Pumps',
      era: '1980s-2000s',
      limitations: [
        'Poor cold weather performance',
        'High backup electric heat usage',
        'Single-speed operation',
        'Limited modulation'
      ],
      efficiency: '12-16 SEER'
    },
    {
      generation: 'Variable-Speed Heat Pumps',
      era: '2000s-2010s',
      limitations: [
        'Better but still limited cold performance',
        'Some backup heat needed',
        'Multiple speed stages',
        'Improved but not optimal modulation'
      ],
      efficiency: '16-20 SEER'
    },
    {
      generation: 'Inverter Heat Pumps',
      era: '2010s-Present',
      limitations: [
        'Excellent cold weather performance',
        'Minimal backup heat needed',
        'Infinite modulation capability',
        'Optimized refrigerant management'
      ],
      efficiency: '20-30+ SEER'
    }
  ]

  const costAnalysis = [
    {
      system: 'Gas Furnace + AC',
      upfront: '$8,000-12,000',
      annual: '$1,200-1,800',
      lifespan: '15-20 years',
      maintenance: 'High (2 systems)',
      rebates: 'Limited'
    },
    {
      system: 'Heat Pump System',
      upfront: '$12,000-18,000',
      annual: '$800-1,200',
      lifespan: '20-25 years',
      maintenance: 'Low (1 system)',
      rebates: 'Up to $10,000+'
    }
  ]

  const mythsBusted = [
    {
      myth: 'Heat pumps don\'t work in cold weather',
      reality: 'Modern inverter heat pumps work efficiently down to -15°F and below',
      explanation: 'Advanced refrigerants and variable-speed compressors maintain efficiency even in extreme cold.'
    },
    {
      myth: 'Heat pumps are more expensive to operate',
      reality: 'Heat pumps typically cost 30-50% less to operate than gas systems',
      explanation: 'Higher efficiency more than compensates for electricity costs in most areas.'
    },
    {
      myth: 'Electric heating is always less efficient',
      reality: 'Heat pumps don\'t generate heat - they move it, achieving 300-400% efficiency',
      explanation: 'This is fundamentally different from electric resistance heating at 100% efficiency.'
    },
    {
      myth: 'Heat pumps require constant repairs',
      reality: 'Modern heat pumps are more reliable than traditional systems',
      explanation: 'Fewer moving parts and less thermal stress result in longer equipment life.'
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
                <Link href="/knowledge" className="hover:text-white">Knowledge Base</Link>
                <span className="mx-2">/</span>
                <span className="text-white font-medium">Why Heat Pumps</span>
              </nav>
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Why Heat Pumps: The Future of Home Comfort
            </h1>
            
            <p className="text-xl text-primary-100 leading-relaxed mb-8 max-w-3xl mx-auto">
              Understanding why heat pumps are 3-4x more efficient than traditional systems, their environmental benefits, and why they're the inevitable future of home heating and cooling.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link href="/services/inverter-heat-pumps">
                <Button size="lg" variant="secondary" className="bg-white text-primary-600 hover:bg-primary-50">
                  Explore Our Heat Pumps
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="ghost" className="text-primary-100 hover:text-white hover:bg-primary-700">
                  Schedule Consultation
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* The Physics of Efficiency */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-secondary-900 mb-4">
              The Physics of Superior Efficiency
            </h2>
            <p className="text-lg text-secondary-700 max-w-3xl mx-auto">
              Heat pumps don't create heat—they move it. This fundamental difference is why they can achieve 300-400% efficiency while the best gas furnaces top out at 95%.
            </p>
          </div>
          
          <div className="space-y-12">
            {efficiencyAdvantages.map((advantage, index) => (
              <div key={index} className="bg-secondary-50 rounded-xl p-8">
                <div className="grid lg:grid-cols-3 gap-8 items-center">
                  <div className="text-center">
                    <div className="text-4xl mb-4">{advantage.icon}</div>
                    <h3 className="text-2xl font-bold text-secondary-900 mb-2">
                      {advantage.title}
                    </h3>
                  </div>
                  
                  <div className="lg:col-span-2 space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                        <div className="font-semibold text-red-800 mb-2">Traditional Systems</div>
                        <div className="text-red-700 text-sm">{advantage.traditional}</div>
                      </div>
                      <div className="bg-primary-50 border border-primary-200 rounded-lg p-4">
                        <div className="font-semibold text-primary-800 mb-2">Heat Pump Systems</div>
                        <div className="text-primary-700 text-sm">{advantage.heatPump}</div>
                      </div>
                    </div>
                    <p className="text-secondary-700 leading-relaxed">
                      {advantage.explanation}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Environmental Impact */}
      <section className="py-20 bg-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-secondary-900 mb-4">
              Environmental Impact: The Numbers Don't Lie
            </h2>
            <p className="text-lg text-secondary-700">
              Even with today's electrical grid, heat pumps dramatically reduce environmental impact. As renewable energy grows, they get even cleaner.
            </p>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-sm">
              <thead>
                <tr className="border-b border-secondary-200">
                  <th className="text-left py-4 px-6 font-semibold text-secondary-900">Environmental Metric</th>
                  <th className="text-left py-4 px-6 font-semibold text-red-600">Gas Systems</th>
                  <th className="text-left py-4 px-6 font-semibold text-primary-600">Heat Pumps</th>
                  <th className="text-left py-4 px-6 font-semibold text-secondary-900">Improvement</th>
                  <th className="text-left py-4 px-6 font-semibold text-secondary-900">Notes</th>
                </tr>
              </thead>
              <tbody>
                {environmentalImpact.map((impact, index) => (
                  <tr key={index} className="border-b border-secondary-100">
                    <td className="py-4 px-6 font-medium text-secondary-900">{impact.metric}</td>
                    <td className="py-4 px-6 text-red-700">{impact.gas}</td>
                    <td className="py-4 px-6 text-primary-700">{impact.heatPump}</td>
                    <td className="py-4 px-6 font-semibold text-green-600">{impact.reduction}</td>
                    <td className="py-4 px-6 text-secondary-600 text-sm">{impact.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="mt-8 bg-primary-50 rounded-xl p-6 text-center">
            <h3 className="text-xl font-bold text-secondary-900 mb-3">
              🌱 The Grid Gets Cleaner Every Year
            </h3>
            <p className="text-secondary-700">
              As renewable energy increases and the electrical grid decarbonizes, heat pumps automatically become even more environmentally friendly—while gas systems remain the same forever.
            </p>
          </div>
        </div>
      </section>

      {/* Technology Evolution */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-secondary-900 mb-4">
              The Evolution: Why Now Is Different
            </h2>
            <p className="text-lg text-secondary-700">
              Heat pump technology has advanced dramatically. Today's inverter heat pumps solve all the limitations of earlier generations.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {techEvolution.map((generation, index) => (
              <div key={index} className={`rounded-xl p-6 ${
                index === 2 ? 'bg-primary-50 border-2 border-primary-200' : 'bg-secondary-50'
              }`}>
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-secondary-900 mb-2">
                    {generation.generation}
                  </h3>
                  <div className="text-sm text-secondary-600 mb-4">{generation.era}</div>
                  <div className={`text-lg font-semibold ${
                    index === 2 ? 'text-primary-600' : 'text-secondary-600'
                  }`}>
                    {generation.efficiency}
                  </div>
                </div>
                
                <ul className="space-y-2">
                  {generation.limitations.map((limitation, idx) => (
                    <li key={idx} className="text-sm text-secondary-700 flex items-start">
                      <span className={`mt-1.5 mr-2 w-1.5 h-1.5 rounded-full ${
                        index === 2 ? 'bg-primary-600' : 'bg-secondary-400'
                      }`}></span>
                      {limitation}
                    </li>
                  ))}
                </ul>
                
                {index === 2 && (
                  <div className="mt-4 text-center">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary-100 text-primary-800">
                      ⭐ Current Generation
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cost Analysis */}
      <section className="py-20 bg-secondary-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-secondary-900 mb-4">
              Total Cost of Ownership Analysis
            </h2>
            <p className="text-lg text-secondary-700">
              When you factor in operating costs, rebates, and system lifespan, heat pumps provide superior value.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {costAnalysis.map((system, index) => (
              <div key={index} className={`rounded-xl p-8 ${
                index === 1 ? 'bg-primary-50 border-2 border-primary-200' : 'bg-white border border-secondary-200'
              }`}>
                <h3 className="text-2xl font-bold text-secondary-900 mb-6 text-center">
                  {system.system}
                </h3>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b border-secondary-200">
                    <span className="font-medium text-secondary-900">Upfront Cost:</span>
                    <span className="text-secondary-700">{system.upfront}</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-secondary-200">
                    <span className="font-medium text-secondary-900">Annual Operating:</span>
                    <span className="text-secondary-700">{system.annual}</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-secondary-200">
                    <span className="font-medium text-secondary-900">Expected Lifespan:</span>
                    <span className="text-secondary-700">{system.lifespan}</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-secondary-200">
                    <span className="font-medium text-secondary-900">Maintenance:</span>
                    <span className="text-secondary-700">{system.maintenance}</span>
                  </div>
                  <div className="flex justify-between items-center py-3">
                    <span className="font-medium text-secondary-900">Available Rebates:</span>
                    <span className={`font-semibold ${
                      index === 1 ? 'text-primary-600' : 'text-secondary-700'
                    }`}>
                      {system.rebates}
                    </span>
                  </div>
                </div>
                
                {index === 1 && (
                  <div className="mt-6 text-center">
                    <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-primary-100 text-primary-800">
                      💰 Better Long-term Value
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
          
          <div className="mt-12 bg-white rounded-xl p-8 text-center">
            <h3 className="text-2xl font-bold text-secondary-900 mb-4">
              20-Year Total Cost Comparison
            </h3>
            <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
              <div>
                <div className="text-sm text-secondary-600 mb-2">Gas Furnace + AC</div>
                <div className="text-3xl font-bold text-red-600">$48,000</div>
                <div className="text-xs text-secondary-500 mt-1">Including replacement</div>
              </div>
              <div>
                <div className="text-sm text-secondary-600 mb-2">Heat Pump System</div>
                <div className="text-3xl font-bold text-primary-600">$38,000</div>
                <div className="text-xs text-secondary-500 mt-1">After rebates</div>
              </div>
            </div>
            <div className="mt-6">
              <span className="inline-flex items-center px-4 py-2 rounded-full text-lg font-semibold bg-green-100 text-green-800">
                $10,000+ Savings Over 20 Years
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Myths Busted */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-secondary-900 mb-4">
              Common Myths About Heat Pumps: Busted
            </h2>
            <p className="text-lg text-secondary-700">
              Let's address the misconceptions that prevent people from enjoying the benefits of modern heat pump technology.
            </p>
          </div>
          
          <div className="space-y-8">
            {mythsBusted.map((item, index) => (
              <div key={index} className="bg-secondary-50 rounded-xl p-8">
                <div className="grid lg:grid-cols-2 gap-8">
                  <div>
                    <div className="flex items-start space-x-3 mb-4">
                      <div className="bg-red-100 text-red-600 rounded-full p-2 flex-shrink-0">
                        ❌
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-red-700 mb-2">Myth:</h3>
                        <p className="text-red-600 italic">"{item.myth}"</p>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex items-start space-x-3 mb-4">
                      <div className="bg-green-100 text-green-600 rounded-full p-2 flex-shrink-0">
                        ✅
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-green-700 mb-2">Reality:</h3>
                        <p className="text-green-600 font-medium">"{item.reality}"</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 pt-6 border-t border-secondary-200">
                  <p className="text-secondary-700 leading-relaxed">
                    <strong>Explanation:</strong> {item.explanation}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Future is Electric */}
      <section className="py-20 bg-gradient-to-br from-primary-600 to-primary-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            The Future is Electric—And It's Here Now
          </h2>
          <p className="text-xl text-primary-100 mb-8 leading-relaxed">
            Heat pumps aren't just better technology—they're the inevitable future. California is already moving toward all-electric new construction, and other states are following. Get ahead of the curve with proven, mature technology that works today.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-primary-700/50 rounded-lg p-4">
              <div className="text-2xl font-bold mb-2">🏗️</div>
              <div className="font-semibold mb-1">New Construction</div>
              <div className="text-primary-200 text-sm">Many cities require all-electric</div>
            </div>
            <div className="bg-primary-700/50 rounded-lg p-4">
              <div className="text-2xl font-bold mb-2">💰</div>
              <div className="font-semibold mb-1">Incentives Peak</div>
              <div className="text-primary-200 text-sm">Record rebates available now</div>
            </div>
            <div className="bg-primary-700/50 rounded-lg p-4">
              <div className="text-2xl font-bold mb-2">🌟</div>
              <div className="font-semibold mb-1">Technology Mature</div>
              <div className="text-primary-200 text-sm">Proven performance and reliability</div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link href="/services/inverter-heat-pumps">
              <Button size="lg" variant="secondary" className="bg-white text-primary-600 hover:bg-primary-50">
                Explore Our Heat Pumps
              </Button>
            </Link>
            <Link href="/transparency/rebates">
              <Button size="lg" variant="ghost" className="text-primary-100 hover:text-white hover:bg-primary-700">
                View Current Rebates
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Make the Switch to Superior Technology?"
        description="Join thousands of homeowners who've discovered the efficiency, comfort, and environmental benefits of modern heat pump technology."
        variant="gradient"
      />
    </div>
  )
}
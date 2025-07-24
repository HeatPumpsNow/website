import type { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import CTASection from '@/components/ui/CTASection'

export const metadata: Metadata = {
  title: 'Inverter Heat Pumps - Variable Speed Efficiency',
  description: 'California\'s most advanced inverter heat pump installations. Variable-speed technology that adapts to your exact needs. Transparent pricing, expert installation, complete education.',
}

export default function InverterHeatPumpsPage() {
  const technicalBenefits = [
    {
      icon: '⚡',
      title: 'Variable-Speed Operation',
      description: 'Modulates from 10% to 110% capacity to match your exact heating and cooling needs'
    },
    {
      icon: '🎯',
      title: 'Precise Temperature Control',
      description: '±1°F temperature stability eliminates hot/cold spots and temperature swings'
    },
    {
      icon: '🔇',
      title: 'Whisper-Quiet Operation',
      description: 'Advanced compressor technology and variable speeds result in nearly silent operation'
    },
    {
      icon: '💧',
      title: 'Superior Humidity Control',
      description: 'Continuous operation at lower speeds provides excellent dehumidification'
    },
    {
      icon: '⚙️',
      title: 'Extended Equipment Life',
      description: 'Gentle starts and variable operation reduce wear compared to on/off cycling'
    },
    {
      icon: '📊',
      title: 'Real-Time Optimization',
      description: 'Smart controls continuously adjust operation based on conditions and usage patterns'
    }
  ]

  const efficiencyComparison = [
    {
      category: 'Traditional Systems',
      operation: 'Binary operation (100% or 0%)',
      efficiency: '14-16 SEER typical',
      comfort: 'Temperature swings ±3-5°F',
      noise: 'Loud startup/shutdown cycles',
      humidity: 'Poor humidity control',
      wear: 'High wear from cycling'
    },
    {
      category: 'Inverter Heat Pumps',
      operation: 'Variable 10-110% modulation',
      efficiency: '20-30+ SEER achievable',
      comfort: 'Precise ±1°F control',
      noise: 'Whisper-quiet operation',
      humidity: 'Excellent dehumidification',
      wear: 'Minimal wear, longer life'
    }
  ]

  const installationProcess = [
    {
      step: '1',
      title: 'Comprehensive Assessment',
      description: 'Detailed Manual J load calculation, duct analysis, electrical assessment, and site survey'
    },
    {
      step: '2',
      title: 'Custom System Design',
      description: 'Right-sizing based on actual loads, duct optimization, and integration with existing systems'
    },
    {
      step: '3',
      title: 'Professional Installation',
      description: 'Certified technicians follow manufacturer specs with quality checks at every step'
    },
    {
      step: '4',
      title: 'System Commissioning',
      description: 'Performance testing, refrigerant optimization, and control programming for peak efficiency'
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
                <span className="text-white font-medium">Inverter Heat Pumps</span>
              </nav>
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Inverter Heat Pumps: The Future of Home Comfort
            </h1>
            
            <p className="text-xl text-primary-100 leading-relaxed mb-8 max-w-3xl mx-auto">
              Variable-speed technology that adapts to your exact needs, delivering unmatched efficiency and precision comfort control.
            </p>
            
            {/* Performance Stats */}
            <div className="grid md:grid-cols-3 gap-6 max-w-2xl mx-auto mb-8">
              <div className="bg-primary-700/50 rounded-lg p-4">
                <div className="text-2xl font-bold text-white mb-1">25+ SEER</div>
                <div className="text-primary-200 text-sm">Peak Efficiency</div>
              </div>
              <div className="bg-primary-700/50 rounded-lg p-4">
                <div className="text-2xl font-bold text-white mb-1">90%</div>
                <div className="text-primary-200 text-sm">Modulation Range</div>
              </div>
              <div className="bg-primary-700/50 rounded-lg p-4">
                <div className="text-2xl font-bold text-white mb-1">±1°F</div>
                <div className="text-primary-200 text-sm">Temperature Control</div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link href="/contact">
                <Button size="lg" variant="secondary" className="bg-white text-primary-600 hover:bg-primary-50">
                  Calculate Your System
                </Button>
              </Link>
              <Link href="/transparency/pricing">
                <Button size="lg" variant="ghost" className="text-primary-100 hover:text-white hover:bg-primary-700">
                  See Transparent Pricing
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Excellence */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-secondary-900 mb-4">
              Why Inverter Technology Revolutionizes Comfort
            </h2>
            <p className="text-lg text-secondary-700 max-w-3xl mx-auto">
              Traditional HVAC systems are like light switches - on or off. Inverter heat pumps are like dimmer switches - infinitely variable to match your exact needs.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technicalBenefits.map((benefit, index) => (
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
              Traditional vs. Inverter Technology
            </h2>
            <p className="text-lg text-secondary-700">
              See the dramatic difference inverter technology makes in every aspect of operation.
            </p>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-sm">
              <thead>
                <tr className="border-b border-secondary-200">
                  <th className="text-left py-4 px-6 font-semibold text-secondary-900">Aspect</th>
                  <th className="text-left py-4 px-6 font-semibold text-red-600">Traditional Systems</th>
                  <th className="text-left py-4 px-6 font-semibold text-primary-600">Inverter Heat Pumps</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-secondary-100">
                  <td className="py-4 px-6 font-medium text-secondary-900">Operation</td>
                  <td className="py-4 px-6 text-secondary-700">Binary operation (100% or 0%)</td>
                  <td className="py-4 px-6 text-secondary-700">Variable 10-110% modulation</td>
                </tr>
                <tr className="border-b border-secondary-100">
                  <td className="py-4 px-6 font-medium text-secondary-900">Efficiency</td>
                  <td className="py-4 px-6 text-secondary-700">14-16 SEER typical</td>
                  <td className="py-4 px-6 text-secondary-700">20-30+ SEER achievable</td>
                </tr>
                <tr className="border-b border-secondary-100">
                  <td className="py-4 px-6 font-medium text-secondary-900">Comfort</td>
                  <td className="py-4 px-6 text-secondary-700">Temperature swings ±3-5°F</td>
                  <td className="py-4 px-6 text-secondary-700">Precise ±1°F control</td>
                </tr>
                <tr className="border-b border-secondary-100">
                  <td className="py-4 px-6 font-medium text-secondary-900">Noise</td>
                  <td className="py-4 px-6 text-secondary-700">Loud startup/shutdown cycles</td>
                  <td className="py-4 px-6 text-secondary-700">Whisper-quiet operation</td>
                </tr>
                <tr className="border-b border-secondary-100">
                  <td className="py-4 px-6 font-medium text-secondary-900">Humidity</td>
                  <td className="py-4 px-6 text-secondary-700">Poor humidity control</td>
                  <td className="py-4 px-6 text-secondary-700">Excellent dehumidification</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-medium text-secondary-900">Equipment Life</td>
                  <td className="py-4 px-6 text-secondary-700">High wear from cycling</td>
                  <td className="py-4 px-6 text-secondary-700">Minimal wear, longer life</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Installation Process */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-secondary-900 mb-4">
              Our Installation Process
            </h2>
            <p className="text-lg text-secondary-700">
              Every inverter heat pump installation follows our proven methodology for optimal performance.
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
          
          <div className="text-center mt-12">
            <Link href="/transparency/project-template">
              <Button variant="outline" size="lg">
                View Detailed Process →
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-primary-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-secondary-900 mb-4">
              Why Choose Heat Pumps Now for Your Inverter System?
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-bold text-secondary-900 mb-4 flex items-center">
                🎓 Complete Transparency & Education
              </h3>
              <p className="text-secondary-700 leading-relaxed">
                We share our load calculations, equipment costs, and installation methods. You'll understand exactly what you're getting and why every decision was made.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-bold text-secondary-900 mb-4 flex items-center">
                🔬 Technical Excellence
              </h3>
              <p className="text-secondary-700 leading-relaxed">
                Proper load calculations, optimal equipment selection, and precise installation ensure your system performs exactly as designed for maximum efficiency.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-bold text-secondary-900 mb-4 flex items-center">
                💰 Direct Import Pricing
              </h3>
              <p className="text-secondary-700 leading-relaxed">
                We import directly from manufacturers, eliminating distributor markups. You get premium equipment at fair prices with complete cost transparency.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-bold text-secondary-900 mb-4 flex items-center">
                📊 Performance Verification
              </h3>
              <p className="text-secondary-700 leading-relaxed">
                Every installation includes comprehensive testing and commissioning to ensure your system delivers the promised efficiency and comfort levels.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready for the Future of Home Comfort?"
        description="Experience the precision, efficiency, and quiet operation that only inverter heat pump technology can deliver."
        variant="gradient"
      />
    </div>
  )
}
import type { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import CTASection from '@/components/ui/CTASection'

export const metadata: Metadata = {
  title: 'Building the Future of HVAC',
  description: 'Empowering homeowners through transparent expertise and innovative HVAC technology. We\'re transforming an industry built on information gaps into one built on shared success.',
}

export default function AboutPage() {
  const dailyCommitments = [
    {
      icon: '🔍',
      title: 'Demystify Complex Systems',
      description: 'Through clear education and radical transparency, we make complex home systems understandable and accessible to every homeowner.'
    },
    {
      icon: '⚡',
      title: 'Deliver Cutting-Edge Technology',
      description: 'We install the most advanced heat pump technology with uncompromising technical excellence and precision.'
    },
    {
      icon: '🤝',
      title: 'Empower Everyone',
      description: 'Both our customers and our team deserve the tools, knowledge, and trust they need to succeed.'
    },
    {
      icon: '🚀',
      title: 'Transform the Industry',
      description: 'We\'re changing an industry built on information gaps into one built on shared success and mutual respect.'
    }
  ]

  const missionPillars = [
    {
      title: 'Your Comfort',
      description: 'We optimize entire home systems, not just individual components'
    },
    {
      title: 'Your Understanding',
      description: 'We teach you how your systems work so you can make informed decisions'
    },
    {
      title: 'Your Trust',
      description: 'We earn it through consistent transparency and demonstrated expertise'
    }
  ]

  const valuesInAction = [
    {
      title: '🎓 Education First',
      description: 'We create detailed guides, technical explanations, and educational content that competitors would never share. Our Knowledge Base contains installation guides, maintenance tutorials, and building science principles.',
      link: '/knowledge'
    },
    {
      title: '💰 Radical Transparency',
      description: 'No hidden fees, no markup mysteries. Our pricing page shows exactly how we calculate costs. Our project templates reveal our entire process.',
      link: '/transparency/pricing'
    },
    {
      title: '🔬 Technical Excellence',
      description: 'We don\'t just meet industry standards - we exceed them. Every installation includes detailed load calculations, performance testing, and system optimization that goes beyond basic requirements.',
      link: '/transparency/portfolio'
    },
    {
      title: '🌱 Future Vision',
      description: 'This is just the beginning. We\'re building toward custom equipment manufacturing, a distributed network of like-minded professionals, and a complete transformation of industry practices.',
      link: '/contact'
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-700 text-white py-24 lg:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-6">
            <nav className="text-primary-200 text-sm">
              <Link href="/" className="hover:text-white">Home</Link>
              <span className="mx-2">/</span>
              <span className="text-white font-medium">Our Mission</span>
            </nav>
          </div>
          
          <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            Building the Future of HVAC
          </h1>
          
          <p className="text-xl text-primary-100 leading-relaxed max-w-3xl mx-auto">
            We\'re not just another HVAC company. We\'re pioneers building a new standard for how this industry should work - through radical transparency, technical excellence, and genuine empowerment.
          </p>
        </div>
      </section>

      {/* Core Mission */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-secondary-900 mb-8">
              Our Core Mission
            </h2>
            
            <div className="bg-secondary-50 rounded-xl p-6 lg:p-8 border-l-4 border-primary-600 mb-8">
              <p className="text-xl font-semibold text-secondary-900 leading-relaxed">
                To empower homeowners with superior comfort and energy efficiency through transparent expertise, innovative HVAC technology, and an unwavering commitment to quality.
              </p>
            </div>
            
            <p className="text-lg text-secondary-700 leading-relaxed">
              We believe the relationship between you and your home\'s systems shouldn\'t be a mystery. That\'s why we\'re building something different – a company that treats knowledge as something to share, not hoard.
            </p>
          </div>
        </div>
      </section>

      {/* Daily Commitments */}
      <section className="py-20 bg-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-secondary-900 mb-4">
              Every Day, We Work To:
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {dailyCommitments.map((commitment, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow">
                <div className="text-3xl mb-4">{commitment.icon}</div>
                <h3 className="text-xl font-semibold text-secondary-900 mb-3">
                  {commitment.title}
                </h3>
                <p className="text-secondary-700 leading-relaxed">
                  {commitment.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why We're Different */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-secondary-900 mb-8">
              Why We\'re Different
            </h2>
            
            <div className="space-y-6 text-lg text-secondary-700 leading-relaxed">
              <p>
                Whether you\'re a homeowner seeking honest expertise or a skilled professional looking for a company that values your craft and contribution, you\'ll find something different here.
              </p>
              <p>
                <strong className="text-secondary-900">We\'re not just installing equipment – we\'re building a new standard for how this industry should work.</strong>
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {missionPillars.map((pillar, index) => (
              <div key={index} className="bg-secondary-50 rounded-lg p-6 border-l-4 border-primary-600">
                <h3 className="font-bold text-lg text-secondary-900 mb-3">
                  {pillar.title}
                </h3>
                <p className="text-secondary-700 text-sm leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values in Action */}
      <section className="py-20 bg-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-secondary-900 mb-4">
              Values in Action
            </h2>
            <p className="text-lg text-secondary-700 max-w-3xl mx-auto">
              These aren\'t just words—they\'re concrete practices you can see and experience when working with us.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {valuesInAction.map((value, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all">
                <h3 className="text-xl font-semibold text-secondary-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-secondary-700 mb-4 leading-relaxed">
                  {value.description}
                </p>
                <Link 
                  href={value.link} 
                  className="text-primary-600 hover:text-primary-700 font-medium text-sm"
                >
                  Learn More →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Mission */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-secondary-900 mb-4">
              Join Our Mission
            </h2>
            <p className="text-lg text-secondary-700 max-w-3xl mx-auto">
              Whether you\'re a homeowner ready for better HVAC service or a professional looking to change the industry, 
              there\'s a place for you in this movement.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-secondary-50 rounded-xl p-6 lg:p-8 text-center">
              <h3 className="text-2xl font-semibold text-secondary-900 mb-4">
                For Homeowners
              </h3>
              <p className="text-secondary-700 mb-6 leading-relaxed">
                Experience what HVAC service should be: transparent, educational, and focused on your long-term comfort and savings.
              </p>
              <div className="space-y-3">
                <Link href="/contact">
                  <Button className="w-full">Schedule Consultation</Button>
                </Link>
                <Link href="/knowledge">
                  <Button variant="outline" className="w-full">Explore Knowledge Base</Button>
                </Link>
              </div>
            </div>

            <div className="bg-secondary-50 rounded-xl p-6 lg:p-8 text-center">
              <h3 className="text-2xl font-semibold text-secondary-900 mb-4">
                For Professionals
              </h3>
              <p className="text-secondary-700 mb-6 leading-relaxed">
                Join a growing network of contractors committed to transparency, education, and raising industry standards.
              </p>
              <div className="space-y-3">
                <Link href="/contact">
                  <Button className="w-full">Get in Touch</Button>
                </Link>
                <Link href="/transparency">
                  <Button variant="outline" className="w-full">See Our Methods</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Experience the Difference?"
        description="Join hundreds of Southern California homeowners who\'ve discovered what transparent, expert HVAC service really means."
        variant="gradient"
      />
    </div>
  )
}
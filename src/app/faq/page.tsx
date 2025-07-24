import type { Metadata } from 'next'
import Link from 'next/link'
import { ChevronDownIcon } from '@heroicons/react/24/outline'
import HeroSection from '@/components/ui/HeroSection'
import CTASection from '@/components/ui/CTASection'

export const metadata: Metadata = {
  title: 'Frequently Asked Questions',
  description: 'Get answers to common questions about heat pump installation, pricing, maintenance, and our transparent HVAC services in Southern California.',
}

export default function FAQPage() {
  const faqCategories = [
    {
      title: 'Heat Pump Installation',
      faqs: [
        {
          question: 'How long does a heat pump installation take?',
          answer: 'Most residential heat pump installations take 1-3 days, depending on the complexity of your system and any necessary upgrades to electrical or ductwork. We provide a detailed timeline during your consultation and keep you informed throughout the process.'
        },
        {
          question: 'Will a heat pump work in cold weather?',
          answer: 'Modern inverter heat pumps work efficiently down to very low temperatures. Our recommended units maintain full capacity down to 5°F and continue operating down to -13°F. In Southern California\'s mild climate, they perform exceptionally well year-round.'
        },
        {
          question: 'How much can I save on energy bills?',
          answer: 'Most customers see 30-60% reduction in heating and cooling costs. Actual savings depend on your current system, home efficiency, and usage patterns. We provide detailed energy modeling during your consultation to estimate your specific savings.'
        },
        {
          question: 'Do I need to upgrade my electrical panel?',
          answer: 'Many heat pump installations require electrical upgrades. We assess your current electrical system during our initial consultation and include any necessary upgrades in your project quote. This ensures safe, code-compliant installation.'
        }
      ]
    },
    {
      title: 'Pricing & Transparency',
      faqs: [
        {
          question: 'Why is your pricing transparent?',
          answer: 'We believe informed customers make better decisions. Our transparent pricing shows exactly what you\'re paying for - equipment costs, labor, permits, and markup. This builds trust and helps you understand the value you\'re receiving.'
        },
        {
          question: 'Do you offer financing options?',
          answer: 'Yes, we partner with multiple financing providers to offer competitive rates and terms. We also help you navigate available rebates and incentives, which can significantly reduce your total investment.'
        },
        {
          question: 'What\'s included in your installation price?',
          answer: 'Our comprehensive pricing includes equipment, labor, permits, startup/commissioning, basic electrical work, and a detailed walkthrough of your new system. Any additional work is discussed and approved before proceeding.'
        },
        {
          question: 'How do rebates work?',
          answer: 'We handle all rebate paperwork and applications for you. California offers substantial rebates for heat pump installations - often $3,000-8,000 or more. We ensure you receive all available incentives.'
        }
      ]
    },
    {
      title: 'Maintenance & Service',
      faqs: [
        {
          question: 'How often does my heat pump need maintenance?',
          answer: 'We recommend annual professional maintenance for optimal performance and warranty compliance. Our maintenance includes filter changes, system diagnostics, refrigerant level checks, and performance optimization.'
        },
        {
          question: 'What warranty do you provide?',
          answer: 'Equipment comes with manufacturer warranties (typically 10-12 years on compressor, 5-7 years on parts). We provide 2-year warranty on our installation workmanship and ongoing support for the life of your system.'
        },
        {
          question: 'Can you service heat pumps installed by other companies?',
          answer: 'Absolutely. We service all major heat pump brands and models. Our technicians are trained on the latest inverter technology and can optimize systems regardless of who installed them.'
        },
        {
          question: 'What if my heat pump stops working?',
          answer: 'We offer 24/7 emergency service for our customers. Most issues can be diagnosed and resolved quickly. Our transparent approach means we explain exactly what\'s wrong and provide clear repair options.'
        }
      ]
    },
    {
      title: 'Technical Questions',
      faqs: [
        {
          question: 'What makes inverter heat pumps better?',
          answer: 'Inverter heat pumps use variable-speed technology to modulate capacity based on demand. This provides more precise temperature control, higher efficiency, quieter operation, and longer equipment life compared to traditional on/off systems.'
        },
        {
          question: 'How do you size a heat pump system?',
          answer: 'We perform detailed Manual J load calculations considering your home\'s size, insulation, windows, orientation, and local climate. Proper sizing is critical for efficiency and comfort - we never guess or use rules of thumb.'
        },
        {
          question: 'Should I get a backup heating system?',
          answer: 'In Southern California\'s mild climate, backup heating is rarely necessary with modern heat pumps. However, we can install auxiliary electric heat if you prefer the peace of mind, especially for larger homes.'
        },
        {
          question: 'Can I install a heat pump water heater too?',
          answer: 'Yes! Heat pump water heaters are 3-4x more efficient than traditional electric water heaters. We often install them alongside HVAC heat pumps for complete home electrification and maximum savings.'
        }
      ]
    }
  ]

  return (
    <div className="min-h-screen">
      <HeroSection
        title="Frequently Asked Questions"
        subtitle="Get transparent answers to common questions about heat pump installation, our services, and what makes us different."
        primaryCta={{ text: 'Ask a Question', href: '/contact' }}
        secondaryCta={{ text: 'Browse Knowledge Base', href: '/knowledge' }}
      />

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {faqCategories.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <h2 className="text-2xl font-bold text-secondary-900 mb-6 pb-2 border-b border-secondary-200">
                  {category.title}
                </h2>
                
                <div className="space-y-4">
                  {category.faqs.map((faq, faqIndex) => (
                    <details key={faqIndex} className="group bg-secondary-50 rounded-lg">
                      <summary className="flex items-center justify-between p-4 cursor-pointer hover:bg-secondary-100 transition-colors rounded-lg">
                        <h3 className="font-medium text-secondary-900 pr-4">
                          {faq.question}
                        </h3>
                        <ChevronDownIcon className="w-5 h-5 text-secondary-500 group-open:rotate-180 transition-transform flex-shrink-0" />
                      </summary>
                      <div className="px-4 pb-4">
                        <p className="text-secondary-700 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </details>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Additional Resources */}
          <div className="mt-16 bg-primary-50 rounded-xl p-6 lg:p-8">
            <h2 className="text-2xl font-bold text-secondary-900 mb-4">
              Still Have Questions?
            </h2>
            <p className="text-secondary-700 mb-6">
              We believe in radical transparency and education. If you don\'t see your question answered here, 
              we have additional resources to help you make informed decisions.
            </p>
            
            <div className="grid md:grid-cols-3 gap-4">
              <Link 
                href="/knowledge" 
                className="bg-white rounded-lg p-4 text-center hover:shadow-md transition-shadow"
              >
                <div className="text-2xl mb-2">📚</div>
                <div className="font-medium text-secondary-900 mb-1">Knowledge Base</div>
                <div className="text-sm text-secondary-600">In-depth technical guides</div>
              </Link>
              
              <Link 
                href="/transparency/pricing" 
                className="bg-white rounded-lg p-4 text-center hover:shadow-md transition-shadow"
              >
                <div className="text-2xl mb-2">💰</div>
                <div className="font-medium text-secondary-900 mb-1">Transparent Pricing</div>
                <div className="text-sm text-secondary-600">See how we price our work</div>
              </Link>
              
              <Link 
                href="/contact" 
                className="bg-white rounded-lg p-4 text-center hover:shadow-md transition-shadow"
              >
                <div className="text-2xl mb-2">💬</div>
                <div className="font-medium text-secondary-900 mb-1">Ask an Expert</div>
                <div className="text-sm text-secondary-600">Get personalized answers</div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Learn More?"
        description="Browse our comprehensive knowledge base or schedule a consultation to get personalized answers to your questions."
        variant="gradient"
      />
    </div>
  )
}
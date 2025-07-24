import Link from 'next/link'
import { Button } from './Button'
import { COMPANY_INFO } from '@/lib/constants'
import { PhoneIcon } from '@heroicons/react/24/outline'

interface HeroSectionProps {
  title: string
  subtitle: string
  description?: string
  stats?: Array<{
    value: string
    label: string
  }>
  mission?: Array<{
    icon: string
    title: string
    description: string
  }>
  primaryCta?: {
    text: string
    href: string
  }
  secondaryCta?: {
    text: string
    href: string
  }
  variant?: 'home' | 'page'
}

export default function HeroSection({
  title,
  subtitle,
  description,
  stats = [],
  mission = [],
  primaryCta = { text: 'Get Free Quote', href: '/contact' },
  secondaryCta = { text: `Call ${COMPANY_INFO.phone}`, href: `tel:${COMPANY_INFO.phone}` },
  variant = 'page'
}: HeroSectionProps) {
  if (variant === 'home') {
    return (
      <section className="bg-gradient-to-br from-secondary-50 to-white pt-24 pb-16 lg:pt-32 lg:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            {/* Hero Image Placeholder */}
            <div className="bg-gradient-to-r from-primary-500 to-primary-600 rounded-xl h-64 lg:h-80 flex items-center justify-center text-white font-semibold text-lg mb-8">
              Hero Image
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-secondary-900 mb-6 leading-tight">
              {title}
            </h1>
            
            <p className="text-xl text-secondary-600 mb-8 leading-relaxed max-w-3xl mx-auto">
              {subtitle}
            </p>
            
            {/* Mission Points */}
            {mission.length > 0 && (
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                {mission.map((item, index) => (
                  <div key={index} className="text-left">
                    <div className="flex items-start space-x-3">
                      <span className="text-2xl">{item.icon}</span>
                      <div>
                        <h3 className="font-semibold text-secondary-900 mb-1">
                          {item.title}
                        </h3>
                        <p className="text-secondary-600 text-sm">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
            
            {/* Stats */}
            {stats.length > 0 && (
              <div className="flex justify-center gap-12 mb-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl lg:text-4xl font-bold text-primary-600 mb-1">
                      {stat.value}
                    </div>
                    <div className="text-secondary-600 text-sm">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            )}
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href={primaryCta.href}>
                <Button size="lg" className="w-full sm:w-auto">
                  {primaryCta.text}
                </Button>
              </Link>
              <Link href={secondaryCta.href}>
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                  <PhoneIcon className="w-5 h-5 mr-2" />
                  {secondaryCta.text}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    )
  }
  
  return (
    <section className="bg-gradient-to-br from-secondary-50 to-white pt-24 pb-16 lg:pt-32 lg:pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl lg:text-5xl font-bold text-secondary-900 mb-6 leading-tight">
          {title}
        </h1>
        
        <p className="text-xl text-secondary-600 mb-8 leading-relaxed">
          {subtitle}
        </p>
        
        {description && (
          <p className="text-lg text-secondary-700 mb-8 max-w-2xl mx-auto">
            {description}
          </p>
        )}
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href={primaryCta.href}>
            <Button size="lg" className="w-full sm:w-auto">
              {primaryCta.text}
            </Button>
          </Link>
          <Link href={secondaryCta.href}>
            <Button size="lg" variant="outline" className="w-full sm:w-auto">
              <PhoneIcon className="w-5 h-5 mr-2" />
              {secondaryCta.text}
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}